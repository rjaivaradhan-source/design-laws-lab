import { useState } from 'react';

const weights = [[400,'Regular'],[500,'Medium'],[600,'Semibold'],[700,'Bold'],[800,'Extra bold']] as const;

export function TypographyExperiment({example,report}:{example:number;report:(message:string)=>void}) {
 const [size,setSize]=useState(16),[bodyWeight,setBodyWeight]=useState(400),[headingWeight,setHeadingWeight]=useState(600),[bodyLeading,setBodyLeading]=useState(1.6),[headingLeading,setHeadingLeading]=useState(1.2);
 const describeBody=(s:number,l:number)=>`At ${s}px text size, ${l.toFixed(2)}× line height gives each line ${(s*l).toFixed(1)}px of vertical space. ${l<1.3?'Lines sit close together; compare how easily you can find the next line.':l>1.85?'Lines are widely separated; notice whether the paragraph still feels connected.':'Compare this spacing with a tighter and a looser setting while reading the full paragraph.'}`;
 const weightControl=(label:string,value:number,change:(value:number)=>void)=><label className="component-field">{label}<select value={value} onChange={e=>change(+e.target.value)}>{weights.map(([n,name])=><option key={n} value={n}>{name} · {n}</option>)}</select></label>;
 const leadingControl=(label:string,value:number,change:(value:number)=>void)=><label className="component-field">{label}: {value.toFixed(2)}×<input type="range" min="1" max="2.2" step="0.05" value={value} onChange={e=>change(+e.target.value)}/></label>;
 return <>
  <div className="component-inline" role="group" aria-label="Compare typography starting points">
   <button onClick={()=>{setSize(16);setBodyWeight(400);setHeadingWeight(600);setBodyLeading(1.6);setHeadingLeading(1.2);report('Reading starting point: regular body text, a semibold heading, and more space between body lines. These are starting values to compare, not universal rules.')}}>Reading starting point</button>
   <button onClick={()=>{setBodyLeading(1);setHeadingLeading(1);report('Both line heights are now 1×. Read several lines: does the compact spacing make it harder to track from the end of one line to the next?')}}>Try tight spacing</button>
   <button onClick={()=>{setBodyWeight(800);setHeadingWeight(800);report('Both heading and paragraph now use extra bold. Notice how equal emphasis makes the heading less distinctive and creates a denser paragraph.')}}>Try all-heavy text</button>
  </div>
  <div className="typography-control-grid">
   <label className="component-field">Body text size: {size}px<input type="range" min="14" max="26" value={size} onChange={e=>{setSize(+e.target.value);report(describeBody(+e.target.value,bodyLeading))}}/></label>
   {weightControl('Body font weight',bodyWeight,n=>{setBodyWeight(n);report(`Body weight is ${n} (${weights.find(w=>w[0]===n)?.[1]}). Weight changes stroke thickness, not font size. Compare the paragraph’s texture and its contrast with the heading.`)})}
   {leadingControl('Body line height',bodyLeading,n=>{setBodyLeading(n);report(describeBody(size,n))})}
   {weightControl('Heading font weight',headingWeight,n=>{setHeadingWeight(n);report(`The heading is ${n}, while the body is ${bodyWeight}. ${n>bodyWeight?'The heavier heading adds emphasis without changing its size.':'Similar or lighter heading weight reduces weight contrast; size still provides a hierarchy cue.'}`)})}
   {leadingControl('Heading line height',headingLeading,n=>{setHeadingLeading(n);report(`Heading line height is ${n.toFixed(2)}×. Compare the distance between its two lines. A title can often use tighter spacing than a paragraph, but its letters should remain distinct.`)})}
  </div>
  <article className="component-paper typography-reading-sample">
   <h3 style={{fontSize:size*1.7,fontWeight:headingWeight,lineHeight:headingLeading}}>{example?<>Learning to see<br/>design differently</>:<>A weekend worth<br/>slowing down for</>}</h3>
   <p style={{fontSize:size,fontWeight:bodyWeight,lineHeight:bodyLeading}}>{example?'Start by noticing the relationships between words, lines, and headings. Change one setting, read the passage again, and describe what became easier or harder. A useful typographic choice supports the way someone needs to read.':'Start with a clear plan. Leave enough room to explore, compare alternatives, and notice what matters. Good decisions become easier when information is comfortable to read. Take your time and follow each line before moving to the next.'}</p>
   <p style={{fontSize:size,fontWeight:bodyWeight,lineHeight:bodyLeading}}>{example?'Use the heading to find your place, then read the details at your own pace. Try a heavier paragraph and a tighter line height before returning to a setting that feels comfortable.':'Choose one place to begin, keep the essential details nearby, and leave space for a change of plan. Compare this paragraph at different weights and line heights before choosing your own starting point.'}</p>
  </article>
  <div className="typography-values" aria-live="polite"><strong>What you are seeing</strong><p>Body: {size}px · weight {bodyWeight} · {bodyLeading.toFixed(2)}× = {(size*bodyLeading).toFixed(1)}px line height.<br/>Heading: {(size*1.7).toFixed(1)}px · weight {headingWeight} · {headingLeading.toFixed(2)}× line height.</p></div>
  <details className="component-accordion"><summary>Why line height and weight work differently</summary><p><strong>Line height</strong> controls the vertical space allocated to each line, including the text itself. A value of 1.6 means 160% of the font size; it is not 1.6 pixels of empty space.</p><p><strong>Font weight</strong> controls stroke thickness. Regular and bold text can have the same font size. If everything is heavy, important words have fewer ways to stand out.</p><p>Adjust one property at a time. Read several lines, compare heading and body, and check at different screen widths. The useful values depend on the font, content, line length, and reader.</p></details>
 </>;
}
