import test from 'node:test';
import assert from 'node:assert/strict';
import { lessons, searchLessons, findLesson, scenarios, scenarioTopics } from '../src/content.ts';
import { contrastRatio } from '../src/storage.ts';
import { guides } from '../src/guides.ts';

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
test('every topic has a visual activity and two examples',()=>{
 assert.equal(lessons.filter(l=>l.activity).length,lessons.length);
 for(const l of lessons){assert.ok(l.examples?.length>=2,l.name);}
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
