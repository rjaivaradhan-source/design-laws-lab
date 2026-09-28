import test from 'node:test';
import assert from 'node:assert/strict';
import { lessons, searchLessons, findLesson, scenarios, scenarioTopics } from '../src/content.ts';
import { contrastRatio } from '../src/storage.ts';
import { guides } from '../src/guides.ts';
import { componentExperiments } from '../src/componentExperiments.ts';
import { lawExperiments } from '../src/lawExperiments.ts';
import { transform } from 'esbuild';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

test('every UI and UX lesson has a principle-specific implementation',async()=>{
 const existing=new Set(['proximity','hierarchy','contrast','status','fitts','hick','jakob','recall','delay']);
 const principles=lessons.filter(l=>l.area==='ui'||l.area==='ux');
 for(const lesson of principles)assert.ok(lawExperiments[lesson.id]||existing.has(lesson.activity),`Generic or missing activity: ${lesson.id}`);
 assert.equal(Object.keys(lawExperiments).length,24);
 assert.equal(searchLessons('law of parsimony')[0].id,'occams-razor');
 const source=(await readFile(new URL('../src/LawActivities.tsx',import.meta.url),'utf8')).replace("import './components-lab.css';",'').replace("from './lawExperiments'","from '../src/lawExperiments.ts'");
 const {code}=await transform(source,{loader:'tsx',format:'esm',jsx:'automatic'});
 await mkdir(new URL('../.vite/',import.meta.url),{recursive:true});
 await writeFile(new URL('../.vite/law-render-audit.mjs',import.meta.url),code);
 const {LawActivity}=await import('../.vite/law-render-audit.mjs');
 for(const id of Object.keys(lawExperiments)){
  const lesson=findLesson(id);assert.ok(lesson,id);
  const html=renderToStaticMarkup(createElement(LawActivity,{lesson}));
  assert.ok(!html.includes('No experiment is registered'),id);
  assert.ok(!html.includes('topic-mock'),id);
  const stage=html.split('law-stage')[1]?.split('class="feedback"')[0]||'';
  assert.match(stage,/<(input|button|select|textarea)[\s>]/,id);
  assert.ok(html.includes(lawExperiments[id].contexts[0]),id);
  assert.ok(renderToStaticMarkup(createElement(LawActivity,{lesson,completed:true})).includes('Lesson completed'),id);
 }
});

test('catalog IDs are canonical and every cross-reference resolves',()=>{
 const ids=lessons.map(l=>l.id);
 assert.equal(new Set(ids).size,ids.length);
 for(const lesson of lessons){assert.ok(lesson.summary,lesson.id);assert.ok(lesson.detail,lesson.id);for(const id of lesson.related)assert.ok(findLesson(id),`${lesson.id} -> ${id}`);}
 assert.ok(findLesson('fitts-law'));
 assert.deepEqual(findLesson('fitts-law').alsoIn,['ux']);
});
test('beginner questions rank the intended learning topics first',()=>{
 const queries=[['What is the difference between a checkbox and a switch?',['checkbox','switch']],['How do I reduce choices in a checkout?',['hicks-law','select']],['What should I use for a critical error?',['alert','error-recovery']],['Why does this AI recommendation need an explanation?',['recommendation-explanation','ai-recommendation-card']],['What helps users notice the primary button?',['visual-hierarchy','button']],['When should I use a modal?',['modal-dialog']],['small message that disappears',['toast']],['choose one from several options',['radio-group','select','segmented-control']],['ask before deleting',['confirmation-dialog']]];
 for(const [q,expected] of queries){const top=searchLessons(q).slice(0,expected.length).map(l=>l.id);assert.deepEqual(new Set(top),new Set(expected),q);}
});
test('contrast ratios match known WCAG reference pairs without rounding thresholds',()=>{
 assert.equal(contrastRatio('#000000','#ffffff'),21);
 assert.equal(contrastRatio('#ffffff','#ffffff'),1);
 assert.ok(contrastRatio('#777777','#ffffff')<4.5);
 assert.ok(contrastRatio('#767676','#ffffff')>4.5);
 assert.equal(contrastRatio('#2454e8','#ffffff'),contrastRatio('#ffffff','#2454e8'));
});
test('all seven scenario paths resolve to working activities',()=>{
 assert.equal(scenarios.length,7);
 for(const scenario of scenarios)for(const id of scenarioTopics[scenario])assert.ok(findLesson(id)?.activity,`${scenario} -> ${id}`);
});
test('all topics have activity identifiers and components have two named examples',()=>{
 assert.equal(lessons.filter(l=>l.activity).length,lessons.length);
 for(const l of lessons.filter(l=>l.area==='components')){assert.ok(l.examples?.length>=2,l.name);}
});
test('featured components have component-specific anatomy and alternatives',()=>{
 for(const l of lessons.filter(l=>l.area==='components'&&guides[l.activity])){const g=guides[l.activity];assert.ok(g?.definition,l.name);assert.ok(Object.keys(g.parts).length>=3,l.name);assert.ok(g.accessibility,l.name);for(const id of g.alternatives)assert.ok(findLesson(id),id);}
});
test('alternative component names resolve without duplicate records',()=>{
 assert.equal(searchLessons('command palette')[0]?.id,'command-menu');
 assert.equal(searchLessons('snackbar')[0]?.id,'toast');
 assert.equal(searchLessons('progress bar')[0]?.id,'progress-indicator');
 assert.equal(lessons.filter(l=>l.name==='Command palette').length,0);
});

test('all 134 components have a dedicated brief and render an actionable visual lesson',async()=>{
 const components=lessons.filter(l=>l.area==='components');
 assert.equal(components.length,134);
 assert.deepEqual(new Set(Object.keys(componentExperiments)),new Set(components.map(l=>l.id)));
 const source=(await readFile(new URL('../src/ComponentActivities.tsx',import.meta.url),'utf8')).replace("import './components-lab.css';",'').replace("from './componentExperiments'","from '../src/componentExperiments.ts'").replace("from './TypographyExperiment'","from './typography-render-audit.mjs'");
 const {code}=await transform(source.replace("from './IconographyExperiment'","from './iconography-render-audit.mjs'"),{loader:'tsx',format:'esm',jsx:'automatic'});
 await mkdir(new URL('../.vite/',import.meta.url),{recursive:true});
 const typography=await transform(await readFile(new URL('../src/TypographyExperiment.tsx',import.meta.url),'utf8'),{loader:'tsx',format:'esm',jsx:'automatic'});
 await writeFile(new URL('../.vite/typography-render-audit.mjs',import.meta.url),typography.code);
 const iconography=await transform(await readFile(new URL('../src/IconographyExperiment.tsx',import.meta.url),'utf8'),{loader:'tsx',format:'esm',jsx:'automatic'});
 await writeFile(new URL('../.vite/iconography-render-audit.mjs',import.meta.url),iconography.code);
 await writeFile(new URL('../.vite/component-render-audit.mjs',import.meta.url),code);
 const {ComponentActivity}=await import('../.vite/component-render-audit.mjs');
 for(const lesson of components){
  const brief=componentExperiments[lesson.id];
  assert.notEqual(brief.contexts[0],brief.contexts[1],lesson.id);
  const html=renderToStaticMarkup(createElement(ComponentActivity,{lesson}));
  assert.ok(html.includes('component-stage'),lesson.id);
  assert.ok(/<(input|button|select|textarea|summary|a)[\s>]/.test(html.split('class="component-stage"')[1]?.split('class="component-coach"')[0]||''),`${lesson.id} needs a real control`);
  assert.ok(!html.includes('topic-mock'),`${lesson.id} must not use the generic topic demonstration`);
  assert.ok(html.includes('Complete lesson'),lesson.id);
  const completedHtml=renderToStaticMarkup(createElement(ComponentActivity,{lesson,completed:true}));
  assert.ok(completedHtml.includes('Lesson completed'),`${lesson.id} must restore its completed state`);
 }
});
