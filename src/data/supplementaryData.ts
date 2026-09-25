import { CommonMistakeItem, ComparisonTableItem, VivaQuestionItem } from '../types';

export const commonMistakesList: CommonMistakeItem[] = [
  {
    id: 1,
    topic: 'Document Skeleton',
    title: 'Missing <!DOCTYPE html>',
    wrongCode: `<html>
  <head><title>MRDU</title></head>
  <body>...</body>
</html>`,
    correctCode: `<!DOCTYPE html>
<html lang="en">
  <head><title>MRDU</title></head>
  <body>...</body>
</html>`,
    why: 'Omitting <!DOCTYPE html> throws modern browsers into legacy "Quirks Mode", causing layout bugs, unexpected font sizing, and broken CSS box-sizing.'
  },
  {
    id: 2,
    topic: 'Mobile Viewport',
    title: 'Missing Viewport Meta Tag',
    wrongCode: `<head>
  <title>MRDU Portal</title>
</head>`,
    correctCode: `<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MRDU Portal</title>
</head>`,
    why: 'Without the viewport meta tag, smartphones assume the page is for desktops and render it at 980px width, resulting in tiny, unreadable text.'
  },
  {
    id: 3,
    topic: 'File Paths',
    title: 'Hardcoded Local File Paths',
    wrongCode: `<img src="C:\\Users\\Student\\Desktop\\logo.png">`,
    correctCode: `<img src="images/logo.png" alt="MRDU Logo">`,
    why: 'C:\\ drive paths exist only on your individual computer. When pushed to GitHub, shared with professors, or deployed to a server, the image breaks completely.'
  },
  {
    id: 4,
    topic: 'Accessibility',
    title: 'Omitting alt Attribute on Images',
    wrongCode: `<img src="campus.jpg">`,
    correctCode: `<img src="campus.jpg" alt="MRDU Main Academic Building">`,
    why: 'Omitting alt violates accessibility laws. Screen readers cannot describe the image to visually impaired users, and search engines cannot index the visual content.'
  },
  {
    id: 5,
    topic: 'HTML Semantics',
    title: 'Skipping Heading Levels',
    wrongCode: `<h1>MRDU College</h1>
<h4>Our Departments</h4> <!-- Skipped h2 and h3! -->`,
    correctCode: `<h1>MRDU College</h1>
<h2>Our Departments</h2>
<h3>Computer Science</h3>`,
    why: 'Assistive screen readers allow users to navigate page outlines via heading levels. Skipping levels breaks logical document hierarchy.'
  },
  {
    id: 6,
    topic: 'HTML Attributes',
    title: 'Duplicate IDs on the Same Page',
    wrongCode: `<button id="submit-btn">Apply</button>
<button id="submit-btn">Register</button>`,
    correctCode: `<button class="submit-btn">Apply</button>
<button class="submit-btn">Register</button>`,
    why: 'An ID must be globally unique per document. Duplicating IDs breaks CSS specificity, DOM queries, and JavaScript functionality.'
  },
  {
    id: 7,
    topic: 'HTML Lists',
    title: 'Direct Content Inside <ul> Without <li>',
    wrongCode: `<ul>
  <h3>Semester 1</h3>
  <li>Maths</li>
</ul>`,
    correctCode: `<h3>Semester 1</h3>
<ul>
  <li>Maths</li>
</ul>`,
    why: 'The HTML specification dictates that the ONLY direct valid children of <ul> and <ol> are <li> elements.'
  },
  {
    id: 8,
    topic: 'CSS Syntax',
    title: 'Missing Semicolon Between Declarations',
    wrongCode: `p {
  color: red
  font-size: 16px;
}`,
    correctCode: `p {
  color: red;
  font-size: 16px;
}`,
    why: 'The CSS parser cannot separate property-value pairs without semicolons. It treats "red font-size: 16px" as an invalid value and ignores both rules.'
  },
  {
    id: 9,
    topic: 'CSS Selectors',
    title: 'Omitting the Class Dot in CSS',
    wrongCode: `card {
  background: white;
}`,
    correctCode: `.card {
  background: white;
}`,
    why: 'Writing "card" without a leading dot causes CSS to look for a non-existent HTML tag named <card>.'
  },
  {
    id: 10,
    topic: 'CSS Selectors',
    title: 'Using # for Classes or . for IDs',
    wrongCode: `#highlight { /* In HTML: class="highlight" */
  color: yellow;
}`,
    correctCode: `.highlight {
  color: yellow;
}`,
    why: 'Dot (.) is reserved strictly for classes; Hash (#) is reserved strictly for IDs.'
  },
  {
    id: 11,
    topic: 'HTML Void Elements',
    title: 'Closing Void Elements with End Tags',
    wrongCode: `<img src="pic.jpg"></img>
<input type="text"></input>`,
    correctCode: `<img src="pic.jpg" alt="Photo">
<input type="text">`,
    why: 'Void elements cannot contain child elements or text nodes. Closing tags like </img> are invalid in HTML5.'
  },
  {
    id: 12,
    topic: 'HTML Forms',
    title: 'Mismatched Radio Group Names',
    wrongCode: `<input type="radio" name="opt1" value="CSE"> CSE
<input type="radio" name="opt2" value="ECE"> ECE`,
    correctCode: `<input type="radio" name="branch" value="CSE"> CSE
<input type="radio" name="branch" value="ECE"> ECE`,
    why: 'To make radio buttons mutually exclusive (selecting one deselects others), they MUST share the exact same name attribute.'
  },
  {
    id: 13,
    topic: 'HTML Forms',
    title: 'Unlinked Labels and Inputs',
    wrongCode: `<label>Student Name</label>
<input type="text">`,
    correctCode: `<label for="sname">Student Name</label>
<input type="text" id="sname">`,
    why: 'Matching label "for" with input "id" allows users to click the text label to focus the input box, which is vital on touchscreens.'
  },
  {
    id: 14,
    topic: 'CSS Box Model',
    title: 'Using Default content-box for Multi-Column Layouts',
    wrongCode: `.col {
  width: 50%;
  padding: 20px; /* Expands width beyond 50%! */
}`,
    correctCode: `* {
  box-sizing: border-box;
}
.col {
  width: 50%;
  padding: 20px; /* Absorbed inside 50% */
}`,
    why: 'Under default content-box, padding and borders add to declared width, pushing side-by-side columns onto separate lines.'
  },
  {
    id: 15,
    topic: 'CSS Spacing',
    title: 'Using Margin Instead of Padding for Button Targets',
    wrongCode: `button {
  margin: 15px; /* Box stays tiny, pushes elements away */
}`,
    correctCode: `button {
  padding: 12px 24px; /* Expands clickable surface */
}`,
    why: 'Margin adds dead, transparent space outside the border. Padding expands the active, clickable, colored surface of the button.'
  },
  {
    id: 16,
    topic: 'CSS Transforms',
    title: 'Expecting transform: translate() to Move Neighbors',
    wrongCode: `.box {
  transform: translateY(-20px); /* Surrounding text does NOT move */
}`,
    correctCode: `.box {
  margin-bottom: 20px; /* Physically pushes neighbors */
}`,
    why: 'Transforms run on the GPU layer without altering DOM document flow. Adjacent elements will not shift.'
  },
  {
    id: 17,
    topic: 'CSS Transitions',
    title: 'Placing Transition inside :hover Instead of Base Selector',
    wrongCode: `.card:hover {
  transition: 0.3s;
  transform: scale(1.1);
}`,
    correctCode: `.card {
  transition: transform 0.3s ease;
}
.card:hover {
  transform: scale(1.1);
}`,
    why: 'Placing transition only in :hover animates when hovering in, but snaps back abruptly when the mouse leaves.'
  },
  {
    id: 18,
    topic: 'CSS Units',
    title: 'Missing Unit on Numeric Values',
    wrongCode: `p {
  font-size: 16; /* Missing px, rem, or em */
  margin: 20;
}`,
    correctCode: `p {
  font-size: 16px;
  margin: 20px;
}`,
    why: 'In CSS, lengths must have explicit units (except for 0 and unitless line-height). Browser engines ignore unitless numbers.'
  },
  {
    id: 19,
    topic: 'CSS Flexbox',
    title: 'Assuming justify-content is Always Horizontal',
    wrongCode: `.col-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers VERTICALLY, not horizontally! */
}`,
    correctCode: `.col-wrap {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers HORIZONTALLY in column mode */
}`,
    why: 'justify-content controls the MAIN AXIS. When flex-direction is column, the main axis runs vertically.'
  },
  {
    id: 20,
    topic: 'CSS Positioning',
    title: 'Using position: absolute Without a Relative Parent',
    wrongCode: `.badge {
  position: absolute;
  top: 0; right: 0;
  /* Parent has no position */
}`,
    correctCode: `.card {
  position: relative; /* Coordinate anchor */
}
.badge {
  position: absolute;
  top: 0; right: 0;
}`,
    why: 'An absolutely positioned child looks for its closest non-static ancestor. Without one, it escapes to the top corner of the entire <body>.'
  },
  {
    id: 21,
    topic: 'CSS Stacking',
    title: 'Using z-index on position: static',
    wrongCode: `.modal {
  z-index: 9999; /* Static by default: z-index ignored! */
}`,
    correctCode: `.modal {
  position: relative; /* or absolute/fixed */
  z-index: 9999;
}`,
    why: 'z-index has zero effect on default position: static elements.'
  },
  {
    id: 22,
    topic: 'CSS Media Queries',
    title: 'Inverting min-width and max-width Logic',
    wrongCode: `/* Trying to write mobile first */
@media (max-width: 768px) {
  .nav { flex-direction: row; }
}`,
    correctCode: `/* Mobile base first */
.nav { flex-direction: column; }
@media (min-width: 768px) {
  .nav { flex-direction: row; }
}`,
    why: 'Mobile-first requires base styles for phones, progressively adding min-width queries for tablets and desktops.'
  },
  {
    id: 23,
    topic: 'CSS Colors',
    title: 'Missing Hash Symbol in Hex Color Codes',
    wrongCode: `h1 {
  color: 0284c7;
}`,
    correctCode: `h1 {
  color: #0284c7;
}`,
    why: 'Hexadecimal color values require the prefix hash (#); otherwise, they are treated as unrecognized keywords.'
  },
  {
    id: 24,
    topic: 'HTML Tables',
    title: 'Using HTML Tables for Whole Page Layouts',
    wrongCode: `<table>
  <tr><td>Sidebar</td><td>Main Body</td></tr>
</table>`,
    correctCode: `<div class="layout-container">
  <aside>Sidebar</aside>
  <main>Main Body</main>
</div>`,
    why: 'Tables create rigid, non-responsive layouts that fail accessibility tests and break completely on mobile phones.'
  },
  {
    id: 25,
    topic: 'CSS Animations',
    title: 'Case-Sensitive Mismatch in Keyframes',
    wrongCode: `.box { animation: myMove 2s; }
@keyframes mymove { ... }`,
    correctCode: `.box { animation: myMove 2s; }
@keyframes myMove { ... }`,
    why: 'Animation names in CSS are strictly case-sensitive. "myMove" will not trigger "@keyframes mymove".'
  },
  {
    id: 26,
    topic: 'CSS Grid',
    title: 'Confusing Grid Tracks with Grid Lines',
    wrongCode: `.item {
  grid-column: 1 / 2; /* Expecting 2 columns */
}`,
    correctCode: `.item {
  grid-column: 1 / 3; /* Spans across 2 columns (lines 1 to 3) */
}`,
    why: 'Grid coordinates reference line numbers, not cell indices. Line 1 to Line 3 spans 2 columns.'
  },
  {
    id: 27,
    topic: 'HTML Links',
    title: 'Missing Protocol in External Links',
    wrongCode: `<a href="www.google.com">Google</a>`,
    correctCode: `<a href="https://www.google.com">Google</a>`,
    why: 'Without "https://", the browser treats the href as a local file path (e.g., localhost/www.google.com).'
  },
  {
    id: 28,
    topic: 'HTML Links',
    title: 'Missing # in Anchor Jump Links',
    wrongCode: `<a href="contact-section">Contact</a>`,
    correctCode: `<a href="#contact-section">Contact</a>`,
    why: 'Without the hash (#), the browser searches for a file named "contact-section" instead of jumping to the ID on the page.'
  },
  {
    id: 29,
    topic: 'CSS Typography',
    title: 'Confusing letter-spacing with word-spacing',
    wrongCode: `p {
  letter-spacing: 12px; /* Unreadable scattered letters! */
}`,
    correctCode: `p {
  letter-spacing: 0.5px;
  word-spacing: 6px;
}`,
    why: 'letter-spacing adds space between EVERY individual character, while word-spacing separates words.'
  },
  {
    id: 30,
    topic: 'HTML5 Multimedia',
    title: 'Omitting controls on <video> or <audio>',
    wrongCode: `<video src="tour.mp4"></video>`,
    correctCode: `<video src="tour.mp4" controls></video>`,
    why: 'Without the boolean controls attribute, the video player renders as a static frozen image with no play button.'
  },
  {
    id: 31,
    topic: 'CSS Outline',
    title: 'Using Border Instead of Outline for Keyboard Focus',
    wrongCode: `button:focus {
  border: 3px solid blue; /* Jerks layout! */
}`,
    correctCode: `button:focus {
  outline: 3px solid blue; /* Zero layout shift */
  outline-offset: 2px;
}`,
    why: 'Adding a border on focus increases element size, causing surrounding page elements to jump visibly.'
  },
  {
    id: 32,
    topic: 'CSS Specificity',
    title: 'Trying to Override an ID Selector with a Class',
    wrongCode: `#main-header { color: red; }
.blue-text { color: blue; } /* Fails to override! */`,
    correctCode: `/* Remove ID styling or use another ID selector */
#main-header.blue-text { color: blue; }`,
    why: 'ID selectors carry a specificity score of 100, which always defeats class selectors (score of 10).'
  }
];

export const comparisonTablesList: ComparisonTableItem[] = [
  {
    id: 'html-vs-css',
    title: 'HTML vs. CSS',
    itemA: 'HTML',
    itemB: 'CSS',
    rows: [
      { feature: 'Full Form', valA: 'HyperText Markup Language', valB: 'Cascading Style Sheets' },
      { feature: 'Primary Purpose', valA: 'Structure, content, and semantics', valB: 'Design, visual styling, and layouts' },
      { feature: 'Analogy', valA: 'Skeleton and concrete walls', valB: 'Paint, clothing, and interior aesthetics' },
      { feature: 'Syntax Markers', valA: 'Angle brackets (<tagname>)', valB: 'Curly braces and selectors (p { })' },
      { feature: 'File Extension', valA: '.html', valB: '.css' }
    ]
  },
  {
    id: 'tag-vs-element',
    title: 'HTML Tag vs. HTML Element',
    itemA: 'HTML Tag',
    itemB: 'HTML Element',
    rows: [
      { feature: 'Definition', valA: 'The bracketed markers (<p> or </p>)', valB: 'The entire unit: opening tag + content + closing tag' },
      { feature: 'Example', valA: '<h1> (Opening tag) or </h1> (Closing tag)', valB: '<h1>MRDU College</h1> (Complete element)' },
      { feature: 'Role', valA: 'Marks the boundary where an element begins or ends', valB: 'Represents a DOM node rendered in the browser' }
    ]
  },
  {
    id: 'attribute-vs-property',
    title: 'HTML Attribute vs. CSS Property',
    itemA: 'HTML Attribute',
    itemB: 'CSS Property',
    rows: [
      { feature: 'Location', valA: 'Inside HTML opening tags', valB: 'Inside CSS declaration blocks' },
      { feature: 'Syntax', valA: 'name="value" (e.g. href="index.html")', valB: 'name: value; (e.g. color: blue;)' },
      { feature: 'Separators', valA: 'Equals sign (=) and quotation marks (" ")', valB: 'Colon (:) and semicolon (;)' }
    ]
  },
  {
    id: 'b-vs-strong',
    title: '<b> vs. <strong>',
    itemA: '<b> (Bold)',
    itemB: '<strong> (Strong Importance)',
    rows: [
      { feature: 'Type', valA: 'Presentational (visual only)', valB: 'Semantic (meaning-based)' },
      { feature: 'Visual Output', valA: 'Thickened bold font', valB: 'Thickened bold font' },
      { feature: 'Screen Readers', valA: 'Read in standard flat tone', valB: 'Announced with vocal urgency/emphasis' },
      { feature: 'SEO Meaning', valA: 'Zero SEO weight', valB: 'Signals high topical importance to Googlebot' }
    ]
  },
  {
    id: 'i-vs-em',
    title: '<i> vs. <em>',
    itemA: '<i> (Italic)',
    itemB: '<em> (Emphasis)',
    rows: [
      { feature: 'Type', valA: 'Presentational', valB: 'Semantic' },
      { feature: 'Visual Output', valA: 'Slanted italic characters', valB: 'Slanted italic characters' },
      { feature: 'Screen Readers', valA: 'Standard tone', valB: 'Alters verbal stress and pitch' },
      { feature: 'Typical Use', valA: 'Technical terms, ship names, foreign words', valB: 'Stressed words that change sentence meaning' }
    ]
  },
  {
    id: 'lists-comparison',
    title: '<ul> vs. <ol> vs. <dl>',
    itemA: '<ul> / <ol>',
    itemB: '<dl>',
    rows: [
      { feature: 'Structure', valA: 'List containers holding <li> list items', valB: 'Definition list holding <dt> and <dd> pairs' },
      { feature: 'Markers', valA: 'ul uses bullets; ol uses numbers/letters', valB: 'No markers; uses term and indented definition' },
      { feature: 'Best Used For', valA: 'Navbars, steps, feature checklists', valB: 'Glossaries, dictionaries, metadata key-values' }
    ]
  },
  {
    id: 'url-comparison',
    title: 'Absolute URL vs. Relative URL',
    itemA: 'Absolute URL',
    itemB: 'Relative URL',
    rows: [
      { feature: 'Structure', valA: 'Full URL with protocol (https://site.com/p)', valB: 'Local file path (about.html or /images/logo.png)' },
      { feature: 'Portability', valA: 'Independent of current site location', valB: 'Moves seamlessly when project folder moves' },
      { feature: 'Target', valA: 'External servers or third-party platforms', valB: 'Internal sibling or subfolder pages' }
    ]
  },
  {
    id: 'display-modes',
    title: 'Inline vs. Block vs. Inline-Block',
    itemA: 'Inline (<span>)',
    itemB: 'Block (<div>) / Inline-Block',
    rows: [
      { feature: 'Starts on New Line?', valA: 'No (flows inside sentence)', valB: 'Block: Yes; Inline-Block: No' },
      { feature: 'Width Consumed', valA: 'Only as wide as its text content', valB: 'Block: 100% of parent width; Inline-block: Content width' },
      { feature: 'Custom Width & Height', valA: 'Ignored completely', valB: 'Fully respected and configurable' },
      { feature: 'Vertical Margins/Padding', valA: 'Does not push neighboring lines away', valB: 'Pushes neighboring lines cleanly' }
    ]
  },
  {
    id: 'class-vs-id',
    title: 'Class (.) vs. ID (#)',
    itemA: 'Class (.)',
    itemB: 'ID (#)',
    rows: [
      { feature: 'Prefix Symbol', valA: 'Dot / Period (.btn)', valB: 'Hash / Pound (#header)' },
      { feature: 'Reusability', valA: 'Reusable across multiple elements', valB: 'Strictly UNIQUE (one element per page)' },
      { feature: 'Specificity Score', valA: '10 points', valB: '100 points (Overrides classes)' },
      { feature: 'Anchor Links', valA: 'Cannot be used as anchor jump targets', valB: 'Can be targeted via href="#id"' }
    ]
  },
  {
    id: 'margin-vs-padding',
    title: 'Margin vs. Padding',
    itemA: 'Padding',
    itemB: 'Margin',
    rows: [
      { feature: 'Location', valA: 'INSIDE the border perimeter', valB: 'OUTSIDE the border perimeter' },
      { feature: 'Background Fill', valA: 'Adopts the element background color', valB: 'Always transparent' },
      { feature: 'Clickable Target', valA: 'Expands the clickable area', valB: 'Unclickable clearance space' }
    ]
  },
  {
    id: 'border-vs-outline',
    title: 'Border vs. Outline',
    itemA: 'Border',
    itemB: 'Outline',
    rows: [
      { feature: 'Box Model Impact', valA: 'Adds to total physical dimensions', valB: 'Takes ZERO space in layout' },
      { feature: 'Perimeter Sides', valA: 'Can style individual edges (border-bottom)', valB: 'Always wraps all 4 sides uniformly' },
      { feature: 'Primary Use', valA: 'Frames, cards, tables', valB: 'Accessible keyboard :focus rings' }
    ]
  },
  {
    id: 'flex-vs-grid',
    title: 'Flexbox vs. CSS Grid',
    itemA: 'CSS Flexbox',
    itemB: 'CSS Grid',
    rows: [
      { feature: 'Dimensions', valA: '1-Dimensional (Row OR Column)', valB: '2-Dimensional (Rows AND Columns)' },
      { feature: 'Approach', valA: 'Content-driven flow', valB: 'Structure-driven blueprint' },
      { feature: 'Best Used For', valA: 'Navbars, buttons, simple card stacks', valB: 'Full application dashboards, photo grids' }
    ]
  },
  {
    id: 'justify-vs-align',
    title: 'justify-content vs. align-items',
    itemA: 'justify-content',
    itemB: 'align-items',
    rows: [
      { feature: 'Controlled Axis', valA: 'Always the MAIN AXIS', valB: 'Always the CROSS AXIS' },
      { feature: 'In row mode', valA: 'Controls horizontal alignment', valB: 'Controls vertical alignment' },
      { feature: 'In column mode', valA: 'Controls vertical alignment', valB: 'Controls horizontal alignment' }
    ]
  },
  {
    id: 'autofit-vs-autofill',
    title: 'auto-fit vs. auto-fill (Grid)',
    itemA: 'auto-fit',
    itemB: 'auto-fill',
    rows: [
      { feature: 'Empty Track Behavior', valA: 'Collapses empty tracks to 0px', valB: 'Keeps empty ghost tracks open in row' },
      { feature: 'Item Expansion', valA: 'Items stretch to fill remaining room', valB: 'Items stay at their min size' },
      { feature: 'Use Case', valA: 'Responsive cards that fill screen neatly', valB: 'Strict grid slots where empty spots stay empty' }
    ]
  },
  {
    id: 'minwidth-vs-maxwidth',
    title: 'min-width vs. max-width',
    itemA: 'min-width (Mobile-First)',
    itemB: 'max-width (Desktop-First)',
    rows: [
      { feature: 'Direction', valA: 'From this pixel width and WIDER (>=)', valB: 'Up to this pixel width and NARROWER (<=)' },
      { feature: 'Philosophy', valA: 'Mobile-first (base styles for phones)', valB: 'Desktop-first (base styles for computers)' },
      { feature: 'Performance', valA: 'Faster mobile load times (industry standard)', valB: 'Heavier mobile style overrides' }
    ]
  }
];

export const vivaQuestionsList: VivaQuestionItem[] = [
  // Day 1
  { id: 1, day: 1, module: 'HTML', question: 'What does HTML stand for?', answer: 'HyperText Markup Language.', explanation: 'It is the standard markup language used to structure web pages.' },
  { id: 2, day: 1, module: 'HTML', question: 'What is the primary role of a web browser?', answer: 'To fetch, parse, and render HTML, CSS, and JavaScript into visual pixels.', explanation: 'Browsers translate raw code files into interactive web pages.' },
  { id: 3, day: 1, module: 'HTML', question: 'Why is the home page named index.html?', answer: 'Web servers default to serving index.html as the directory root.', explanation: 'It allows visitors to load the site without typing a specific filename.' },
  { id: 4, day: 1, module: 'HTML', question: 'What is the difference between a Client and a Server?', answer: 'The client requests and views resources; the server stores and delivers them.', explanation: 'Clients consume web content; servers host and transmit it over HTTP.' },
  { id: 5, day: 1, module: 'HTML', question: 'Is HTML a programming language?', answer: 'No, HTML is a declarative markup language.', explanation: 'It lacks programmatic logic, loops, conditional branching, and variable math.' },

  // Day 2
  { id: 6, day: 2, module: 'HTML', question: 'What does <!DOCTYPE html> do?', answer: 'Instructs the browser to render the page in modern HTML5 standards mode.', explanation: 'Prevents browsers from falling back into legacy quirks mode.' },
  { id: 7, day: 2, module: 'HTML', question: 'What is the purpose of <meta charset="UTF-8">?', answer: 'Specifies Unicode character encoding to support all global languages and symbols.', explanation: 'Prevents character scrambling errors across international text.' },
  { id: 8, day: 2, module: 'HTML', question: 'Why is the viewport meta tag necessary?', answer: 'It sets the layout width to the device screen width, ensuring mobile responsiveness.', explanation: 'Prevents mobile phones from rendering at a 980px desktop zoom mode.' },
  { id: 9, day: 2, module: 'HTML', question: 'Where is visible user content placed in an HTML document?', answer: 'Inside the <body> element.', explanation: 'The <body> represents the visual stage for all rendered elements.' },
  { id: 10, day: 2, module: 'HTML', question: 'Where does the <title> tag display its text?', answer: 'On the browser tab bar and search engine result headings.', explanation: 'It defines the window title rather than appearing on the page canvas.' },

  // Day 3
  { id: 11, day: 3, module: 'HTML', question: 'How many heading levels exist in HTML?', answer: 'Six levels: <h1> through <h6>.', explanation: '<h1> represents highest importance; <h6> represents the lowest.' },
  { id: 12, day: 3, module: 'HTML', question: 'Why should a webpage have only one <h1>?', answer: 'To maintain clean semantic hierarchy and clarify the primary topic for SEO.', explanation: 'Search engines rely on a single h1 to index document subject matter.' },
  { id: 13, day: 3, module: 'HTML', question: 'Do <p> tags collapse consecutive white spaces?', answer: 'Yes, browsers collapse multiple spaces into a single space.', explanation: 'Whitespace collapsing is standard browser parsing behavior.' },
  { id: 14, day: 3, module: 'HTML', question: 'Can an <h2> tag be placed inside a <p> tag?', answer: 'No, block-level headings cannot be nested inside paragraphs.', explanation: 'Browsers will automatically close the paragraph early if they encounter a heading.' },
  { id: 15, day: 3, module: 'HTML', question: 'Which heading tag is smallest by default?', answer: '<h6>.', explanation: 'It is the lowest-ranking heading in the HTML hierarchy.' },

  // Day 4
  { id: 16, day: 4, module: 'HTML', question: 'What is the difference between <b> and <strong>?', answer: '<b> is visual bold; <strong> conveys semantic importance to screen readers.', explanation: '<strong> affects accessibility vocal stress; <b> is purely stylistic.' },
  { id: 17, day: 4, module: 'HTML', question: 'What is the difference between <i> and <em>?', answer: '<i> is visual italics; <em> adds semantic vocal emphasis.', explanation: '<em> signals verbal stress for assistive screen readers.' },
  { id: 18, day: 4, module: 'HTML', question: 'Which tag is used for chemical formulas like H2O?', answer: '<sub> (Subscript).', explanation: 'It drops text below the baseline with reduced font size.' },
  { id: 19, day: 4, module: 'HTML', question: 'Which tag is used for algebraic powers like X²?', answer: '<sup> (Superscript).', explanation: 'It raises text above the baseline with reduced font size.' },
  { id: 20, day: 4, module: 'HTML', question: 'Why should <u> (underline) be avoided in normal text?', answer: 'Users mistake underlined text for clickable hyperlinks.', explanation: 'Underlines are a universal visual cue for links on the web.' },

  // Day 5
  { id: 21, day: 5, module: 'HTML', question: 'What tag creates an unordered, bulleted list?', answer: '<ul>.', explanation: 'Stands for Unordered List.' },
  { id: 22, day: 5, module: 'HTML', question: 'What tag creates a numbered, sequential list?', answer: '<ol>.', explanation: 'Stands for Ordered List.' },
  { id: 23, day: 5, module: 'HTML', question: 'What are the only valid direct child tags inside <ul> and <ol>?', answer: '<li> (List Item) elements.', explanation: 'Non-<li> elements must be placed inside an <li>.' },
  { id: 24, day: 5, module: 'HTML', question: 'What tags form a Description List?', answer: '<dl> (Container), <dt> (Term), and <dd> (Definition).', explanation: 'Used for key-value dictionary and glossary listings.' },
  { id: 25, day: 5, module: 'HTML', question: 'How do you create a nested list?', answer: 'Place a complete <ul> or <ol> inside an <li> of the parent list.', explanation: 'Nesting requires the sub-list to be a child of a list item.' },

  // Day 6
  { id: 26, day: 6, module: 'HTML', question: 'What HTML tag creates a hyperlink?', answer: '<a> (Anchor tag).', explanation: 'Connects pages, external sites, and internal page sections.' },
  { id: 27, day: 6, module: 'HTML', question: 'What does the href attribute specify?', answer: 'The destination URL or file path of the link.', explanation: 'Stands for Hypertext Reference.' },
  { id: 28, day: 6, module: 'HTML', question: 'How do you open a link in a new browser tab?', answer: 'Using target="_blank".', explanation: 'Instructs the browser to spawn a fresh window/tab.' },
  { id: 29, day: 6, module: 'HTML', question: 'What is an anchor jump link?', answer: 'A link with href="#id" that scrolls directly to that section.', explanation: 'Jumps the viewport to the element with matching ID.' },
  { id: 30, day: 6, module: 'HTML', question: 'What happens if an external link omits "https://"?', answer: 'The browser treats it as a local relative file path on the server.', explanation: 'Browsers need the protocol to recognize external domains.' },

  // Day 7
  { id: 31, day: 7, module: 'HTML', question: 'Why is <img> called a Void Element?', answer: 'It cannot contain inner content and has no closing tag.', explanation: 'Void elements stand alone without an end tag.' },
  { id: 32, day: 7, module: 'HTML', question: 'What is the purpose of the alt attribute on <img>?', answer: 'Provides fallback text if the image fails and is read by screen readers.', explanation: 'Critical for accessibility and image search indexing.' },
  { id: 33, day: 7, module: 'HTML', question: 'When should SVG be chosen over PNG or JPG?', answer: 'For logos and icons that must scale infinitely without pixelation.', explanation: 'SVGs are resolution-independent vector graphics.' },
  { id: 34, day: 7, module: 'HTML', question: 'Why specify width and height attributes on <img>?', answer: 'To reserve aspect-ratio space and prevent Cumulative Layout Shift (CLS).', explanation: 'Stabilizes page layout while the image file downloads.' },
  { id: 35, day: 7, module: 'HTML', question: 'What does the <picture> element achieve?', answer: 'Responsive art direction by serving different image sources based on screen size.', explanation: 'Swaps images dynamically using media queries.' },

  // Day 8
  { id: 36, day: 8, module: 'HTML', question: 'What is the semantic difference between <th> and <td>?', answer: '<th> is a bold, centered header cell; <td> contains normal data.', explanation: '<th> describes column or row subjects; <td> holds cell values.' },
  { id: 37, day: 8, module: 'HTML', question: 'What does colspan do in a table?', answer: 'Merges a cell horizontally across multiple columns.', explanation: 'Expands a cell sideways.' },
  { id: 38, day: 8, module: 'HTML', question: 'What does rowspan do in a table?', answer: 'Merges a cell vertically across multiple rows.', explanation: 'Stretches a cell downwards.' },
  { id: 39, day: 8, module: 'HTML', question: 'What semantic tags divide table sections?', answer: '<thead>, <tbody>, and <tfoot>.', explanation: 'Organizes header, data body, and summary footer rows.' },
  { id: 40, day: 8, module: 'HTML', question: 'Should tables be used for overall page layout?', answer: 'No, tables are strictly for tabular data; use Flexbox or Grid for layout.', explanation: 'Table-based page layouts are non-responsive and fail accessibility.' },

  // Day 9
  { id: 41, day: 9, module: 'HTML', question: 'What is the difference between GET and POST form methods?', answer: 'GET exposes data in the URL query string; POST sends data in the request body.', explanation: 'POST is secure for passwords; GET is bookmarkable for searches.' },
  { id: 42, day: 9, module: 'HTML', question: 'How do you link a <label> to an <input>?', answer: 'By matching the label "for" attribute with the input "id" attribute.', explanation: 'Allows clicking label text to focus the input field.' },
  { id: 43, day: 9, module: 'HTML', question: 'How do you ensure only one radio button can be selected in a group?', answer: 'Give all related radio buttons the exact same name attribute.', explanation: 'Shared names create mutually exclusive option sets.' },
  { id: 44, day: 9, module: 'HTML', question: 'What does the required attribute do on an input?', answer: 'Prevents form submission if the field is left blank.', explanation: 'Triggers native client-side validation.' },
  { id: 45, day: 9, module: 'HTML', question: 'What input type masks characters with dots or asterisks?', answer: 'type="password".', explanation: 'Protects sensitive credentials from shoulder-surfing.' },

  // Day 10
  { id: 46, day: 10, module: 'HTML', question: 'What happens if you omit the controls attribute on <video>?', answer: 'The video appears as a frozen static image with no play button.', explanation: 'Without controls, the browser hides its native playback UI.' },
  { id: 47, day: 10, module: 'HTML', question: 'What is the semantic difference between <header> and <head>?', answer: '<head> holds invisible metadata; <header> is a visible top banner container.', explanation: '<head> is document data; <header> is visible page layout.' },
  { id: 48, day: 10, module: 'HTML', question: 'What does the <aside> tag represent?', answer: 'Sidebar content indirectly related to the main content.', explanation: 'Used for notice boards, related links, and callout boxes.' },
  { id: 49, day: 10, module: 'HTML', question: 'How many <main> tags should a document contain?', answer: 'Exactly one per webpage.', explanation: 'Wraps the primary, unique content of that specific document.' },
  { id: 50, day: 10, module: 'HTML', question: 'What is the HTML5 <canvas> element used for?', answer: 'A scriptable surface used to draw 2D graphics and animations via JavaScript.', explanation: 'Provides a hardware-accelerated drawing surface.' },

  // Day 11
  { id: 51, day: 11, module: 'CSS', question: 'What does CSS stand for?', answer: 'Cascading Style Sheets.', explanation: 'Describes the presentation and layout of HTML documents.' },
  { id: 52, day: 11, module: 'CSS', question: 'What symbol denotes a class selector in CSS?', answer: 'A dot / period (.).', explanation: 'Targets elements with matching class attribute (e.g. .btn).' },
  { id: 53, day: 11, module: 'CSS', question: 'What symbol denotes an ID selector in CSS?', answer: 'A hash / pound sign (#).', explanation: 'Targets the single element with matching id attribute.' },
  { id: 54, day: 11, module: 'CSS', question: 'Which CSS method is recommended for large websites?', answer: 'External CSS via a separate .css file linked in <head>.', explanation: 'Enables centralized caching and styling across all pages.' },
  { id: 55, day: 11, module: 'CSS', question: 'Which selector has higher specificity: .btn or #btn?', answer: '#btn (ID selector has specificity 100 vs Class 10).', explanation: 'IDs always override classes in the cascade.' },

  // Day 12
  { id: 56, day: 12, module: 'CSS', question: 'What does the "A" in RGBA stand for?', answer: 'Alpha (transparency channel).', explanation: 'Accepts a float between 0.0 (transparent) and 1.0 (opaque).' },
  { id: 57, day: 12, module: 'CSS', question: 'What color is represented by #000000?', answer: 'Pure Black.', explanation: 'All three color channels (Red, Green, Blue) are set to zero intensity.' },
  { id: 58, day: 12, module: 'CSS', question: 'What color is represented by #FFFFFF?', answer: 'Pure White.', explanation: 'All three color channels are at maximum intensity (FF = 255).' },
  { id: 59, day: 12, module: 'CSS', question: 'What property changes the background color of an element?', answer: 'background-color.', explanation: 'Fills the box with a solid color.' },
  { id: 60, day: 12, module: 'CSS', question: 'Why provide fallback fonts in font-family?', answer: 'To ensure a clean font renders if the primary custom font fails to load.', explanation: 'Browsers fall back down the list until finding an installed font.' },

  // Day 13
  { id: 61, day: 13, module: 'CSS', question: 'Name the four concentric layers of the CSS Box Model.', answer: 'Content, Padding, Border, and Margin.', explanation: 'From the innermost content area out to the outer spacing.' },
  { id: 62, day: 13, module: 'CSS', question: 'What is the effect of box-sizing: border-box?', answer: 'Padding and borders are absorbed inside the declared width and height.', explanation: 'Prevents elements from growing larger when padding is added.' },
  { id: 63, day: 13, module: 'CSS', question: 'Is margin included inside the element background color?', answer: 'No, margins are always transparent space outside the border.', explanation: 'Only content and padding adopt the background color.' },
  { id: 64, day: 13, module: 'CSS', question: 'How do you center a block element horizontally?', answer: 'margin: 0 auto; (with an explicit width or max-width).', explanation: 'Distributes remaining margin equally on left and right.' },
  { id: 65, day: 13, module: 'CSS', question: 'How do you create a perfect circle using border-radius?', answer: 'Set width and height equal, then apply border-radius: 50%.', explanation: 'Rounds all four corners to half of the box dimension.' },

  // Day 14
  { id: 66, day: 14, module: 'CSS', question: 'What is the default display value for <div> and <p>?', answer: 'display: block.', explanation: 'They start on a new line and expand to fill 100% of parent width.' },
  { id: 67, day: 14, module: 'CSS', question: 'How does inline-block differ from inline?', answer: 'inline-block respects custom width, height, and vertical padding/margins.', explanation: 'Combines inline flow with block box sizing.' },
  { id: 68, day: 14, module: 'CSS', question: 'What reference point does position: absolute use?', answer: 'The closest ancestor element with a position other than static.', explanation: 'If no ancestor is positioned, it defaults to the <body>.' },
  { id: 69, day: 14, module: 'CSS', question: 'What is the difference between fixed and sticky position?', answer: 'Fixed is permanently pinned to viewport; Sticky flows until a scroll threshold.', explanation: 'Sticky behaves like relative until reaching the scroll limit.' },
  { id: 70, day: 14, module: 'CSS', question: 'What does z-index control?', answer: 'The vertical stacking order (depth) of positioned elements.', explanation: 'Higher values render in front of lower values.' },

  // Day 15
  { id: 71, day: 15, module: 'CSS', question: 'Is Flexbox a one-dimensional or two-dimensional layout model?', answer: 'One-dimensional (operates along a row OR a column).', explanation: 'Distributes space along a single axis at a time.' },
  { id: 72, day: 15, module: 'CSS', question: 'Which property aligns flex items along the Main Axis?', answer: 'justify-content.', explanation: 'Controls alignment along the primary flow axis.' },
  { id: 73, day: 15, module: 'CSS', question: 'Which property aligns flex items along the Cross Axis?', answer: 'align-items.', explanation: 'Controls alignment perpendicular to the main axis.' },
  { id: 74, day: 15, module: 'CSS', question: 'What does justify-content: space-between do?', answer: 'Pushes the first item to start, last to end, and spaces others evenly.', explanation: 'Maximizes the spread of items inside the container.' },
  { id: 75, day: 15, module: 'CSS', question: 'How do you vertically and horizontally center a child using Flexbox?', answer: 'display: flex; justify-content: center; align-items: center;.', explanation: 'Centers along both the main and cross axes simultaneously.' },

  // Day 16
  { id: 76, day: 16, module: 'CSS', question: 'Is CSS Grid one-dimensional or two-dimensional?', answer: 'Two-dimensional (controls rows AND columns simultaneously).', explanation: 'Allows designing complete matrix layouts.' },
  { id: 77, day: 16, module: 'CSS', question: 'What does "1fr" mean in CSS Grid?', answer: 'One Fraction of the available free container space.', explanation: 'Proportionally shares remaining track space.' },
  { id: 78, day: 16, module: 'CSS', question: 'What does grid-column: 1 / 3 do?', answer: 'Makes the grid item span across two columns from grid line 1 to line 3.', explanation: 'References grid line markers, spanning two track cells.' },
  { id: 79, day: 16, module: 'CSS', question: 'What is the purpose of repeat(3, 1fr)?', answer: 'A shorthand to create 3 equal flexible columns (1fr 1fr 1fr).', explanation: 'Eliminates repetitive track declarations.' },
  { id: 80, day: 16, module: 'CSS', question: 'What is the difference between auto-fit and auto-fill in Grid?', answer: 'auto-fit collapses empty tracks so items stretch; auto-fill preserves empty tracks.', explanation: 'auto-fit is best for responsive card grids.' },

  // Day 17
  { id: 81, day: 17, module: 'CSS', question: 'Where should transition be declared for smooth hover in AND out?', answer: 'On the base class selector, NOT inside :hover.', explanation: 'Ensures the reverse animation plays when the cursor leaves.' },
  { id: 82, day: 17, module: 'CSS', question: 'Which transform function rotates an element?', answer: 'transform: rotate(deg);.', explanation: 'Spins the element clockwise around its center point.' },
  { id: 83, day: 17, module: 'CSS', question: 'Which transform function enlarges an element?', answer: 'transform: scale(factor);.', explanation: 'Multiplies visual width and height proportionally.' },
  { id: 84, day: 17, module: 'CSS', question: 'Do CSS transforms cause surrounding elements to reflow?', answer: 'No, transforms operate on the GPU layer without shifting neighboring layout.', explanation: 'Prevents expensive browser layout recalculations.' },
  { id: 85, day: 17, module: 'CSS', question: 'What does transition-timing-function control?', answer: 'The acceleration and pacing curve of the transition (e.g. ease, linear).', explanation: 'Governs how speed changes throughout the animation.' },

  // Day 18
  { id: 86, day: 18, module: 'CSS', question: 'Which at-rule defines keyframe animation checkpoints?', answer: '@keyframes.', explanation: 'Sets up the timeline steps from 0% to 100%.' },
  { id: 87, day: 18, module: 'CSS', question: 'How do you make an animation repeat forever?', answer: 'animation-iteration-count: infinite;.', explanation: 'Keeps the animation looping indefinitely.' },
  { id: 88, day: 18, module: 'CSS', question: 'What does animation-direction: alternate do?', answer: 'Plays the animation forward, then backward on alternating cycles.', explanation: 'Creates a natural bouncing or oscillating motion.' },
  { id: 89, day: 18, module: 'CSS', question: 'What is the difference between a transition and an animation?', answer: 'Transitions require a state trigger; Animations run autonomously with keyframes.', explanation: 'Animations can loop and hit multiple checkpoints automatically.' },
  { id: 90, day: 18, module: 'CSS', question: 'What is the default duration of a CSS animation?', answer: '0 seconds (The animation will not execute).', explanation: 'Duration must be explicitly specified to see motion.' },

  // Day 19
  { id: 91, day: 19, module: 'CSS', question: 'What is Responsive Web Design?', answer: 'An engineering approach ensuring websites adapt cleanly to all screen sizes.', explanation: 'Provides an optimal reading and interaction experience on any device.' },
  { id: 92, day: 19, module: 'CSS', question: 'What is a CSS Breakpoint?', answer: 'A viewport width threshold where layout styles shift via media queries.', explanation: 'Common breakpoints target phones, tablets, and desktop monitors.' },
  { id: 93, day: 19, module: 'CSS', question: 'What does @media (min-width: 768px) target?', answer: 'Screens with a width of 768px or wider (Tablets and Desktops).', explanation: 'Establishes a lower boundary for mobile-first styling.' },
  { id: 94, day: 19, module: 'CSS', question: 'Why is mobile-first design considered best practice?', answer: 'It delivers lighter base code for phones and scales up progressively.', explanation: 'Optimizes mobile performance and simplifies layout expansion.' },
  { id: 95, day: 19, module: 'CSS', question: 'Are Media Queries the only way to build responsive layouts?', answer: 'No, fluid percentages, Flexbox wrapping, and Grid auto-fit also provide responsiveness.', explanation: 'Media queries are one of several responsive design techniques.' },

  // Day 20
  { id: 96, day: 20, module: 'CSS', question: 'How does outline differ from border?', answer: 'Outline does not take up layout space; Border is part of the Box Model.', explanation: 'Outlines wrap around borders without shifting surrounding elements.' },
  { id: 97, day: 20, module: 'CSS', question: 'What does overflow: auto do?', answer: 'Displays scrollbars only when inner content exceeds container bounds.', explanation: 'Hides scrollbars when content fits cleanly.' },
  { id: 98, day: 20, module: 'CSS', question: 'What does clear: both do in CSS float layouts?', answer: 'Prevents following elements from wrapping around preceding floated items.', explanation: 'Forces elements down below any left or right floats.' },
  { id: 99, day: 20, module: 'CSS', question: 'What is the difference between letter-spacing and word-spacing?', answer: 'letter-spacing adjusts space between characters; word-spacing adjusts space between words.', explanation: 'letter-spacing alters tracking; word-spacing alters word gaps.' },
  { id: 100, day: 20, module: 'CSS', question: 'Why is outline preferred over border for keyboard :focus styles?', answer: 'Outline prevents jarring layout shifts when elements receive focus.', explanation: 'Maintains accessibility standards without visual jumping.' }
];

export const examRevisionPoints = [
  'HTML provides structural skeleton; CSS provides styling, layout, and visual presentation.',
  'Always write <!DOCTYPE html> at line 1 to prevent Quirks Mode.',
  'The <meta name="viewport"> tag is mandatory for mobile responsiveness.',
  'Use exactly ONE <h1> per page; step down hierarchically through <h2> and <h3>.',
  'b and i are purely visual; strong and em carry semantic meaning for screen readers and SEO.',
  'The only valid direct children of <ul> and <ol> are <li> elements.',
  'Absolute URLs have https:// and domain; Relative URLs point to local project files.',
  'Images are void elements (no </img>); always provide an alt attribute.',
  'Tables are strictly for tabular data (marksheets, timetables), NEVER for page layouts.',
  'All related radio buttons must share the exact same name attribute for single-selection.',
  'Class (.) is reusable; ID (#) is strictly unique per page.',
  'Universal box-sizing: border-box absorbs padding and borders inside declared widths.',
  'Margin pushes outside the border; Padding expands inside the border.',
  'position: absolute requires a relative parent, or it floats to the <body>.',
  'Flexbox justify-content aligns the Main Axis; align-items aligns the Cross Axis.',
  'Flex-direction: column rotates the Main Axis vertically.',
  'CSS Grid is 2D (rows and columns simultaneously); repeat(auto-fit, minmax()) builds responsive grids.',
  'Declare transition on the base class so both hover-in and hover-out animate smoothly.',
  '@keyframes sets multi-step animation timelines; animation-iteration-count: infinite loops forever.',
  'Mobile-first media queries use min-width; Desktop-first queries use max-width.',
  'Outline takes zero layout space in the Box Model and is best for keyboard :focus rings.'
];
