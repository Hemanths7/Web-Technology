import { DayLesson } from '../types';

export const module2Days: DayLesson[] = [
  {
    day: 11,
    module: 'CSS',
    title: 'CSS Fundamentals & Selectors',
    subtitle: 'CSS syntax, selectors (element, class ., ID #), inline/internal/external & specificity',
    keyIdea: 'CSS is the makeup, styling, and clothing of a webpage; HTML provides the bare skeleton.',
    analogy: 'A student uniform. The element selector (p) is styling every student in the university. A class selector (.cse-student) is styling students who belong to the CSE club. An ID selector (#roll-26CS101) is giving an award to one unique student.',
    definition: 'CSS (Cascading Style Sheets) is a stylesheet language used to specify the presentation, colors, fonts, and layout of elements written in HTML.',
    whyUseIt: 'Without CSS, all webpages look like raw black-and-white 1990s Word documents. CSS enables brand aesthetics, responsive grid layouts, and interactive visual feedback.',
    syntaxBreakdown: [
      { part: 'Selector', description: 'Tells the browser WHICH HTML element(s) you want to style.', example: 'h1' },
      { part: 'Property', description: 'The visual style feature you want to change.', example: 'color' },
      { part: 'Colon (:)', description: 'Separates the property from its target value.', example: ':' },
      { part: 'Value', description: 'The specific style setting applied.', example: '#0284c7' },
      { part: 'Semicolon (;)', description: 'Mandatory end marker for every declaration. Forgetting it breaks subsequent rules.', example: ';' },
      { part: 'Declaration Block ({ ... })', description: 'The curly braces enclosing one or more declarations.', example: '{ color: blue; font-size: 18px; }' }
    ],
    validValuesOrTypes: [
      { name: 'Element Selector', meaning: 'Targets all tags of that type', syntax: 'tagname { }', example: 'p { color: #333; }', expectedBehavior: 'Applies to every <p> tag on the page.' },
      { name: 'Class Selector (.)', meaning: 'Targets elements with matching class attribute', syntax: '.classname { }', example: '.highlight { background: yellow; }', expectedBehavior: 'Re-usable across multiple elements.' },
      { name: 'ID Selector (#)', meaning: 'Targets the single element with matching id', syntax: '#idname { }', example: '#main-title { font-size: 28px; }', expectedBehavior: 'Must be unique to one element per page.' },
      { name: 'External CSS', meaning: 'Linked in <head> via <link>', syntax: '<link rel="stylesheet" href="style.css">', example: 'style.css', expectedBehavior: 'Best practice: Centralized, cacheable stylesheet.' }
    ],
    defaultCode: {
      html: `<!-- HTML for MRDU Department Styles -->
<h1 id="college-title">MRDU College of Engineering</h1>
<h2 class="subheading">Department of Computer Science</h2>

<p class="announcement">Semester 2 practical lab exams start next week.</p>
<p>All students must carry their printed hall tickets and ID cards.</p>
<p class="announcement">Coding Club hackathon registrations close tonight!</p>`,
      css: `/* CSS Rules */
#college-title {
  color: #0284c7;
  font-family: sans-serif;
  border-bottom: 2px solid #0284c7;
  padding-bottom: 6px;
}

.subheading {
  color: #475569;
  font-size: 18px;
}

.announcement {
  background-color: #fef3c7;
  color: #92400e;
  padding: 8px 12px;
  border-left: 4px solid #f59e0b;
  border-radius: 4px;
}

p {
  line-height: 1.6;
  font-family: sans-serif;
}`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| MRDU College of Engineering                     |
| ----------------------------------------------- | (Blue line)
| Department of Computer Science                  | (Grey)
|                                                 |
| [!] Semester 2 practical lab exams start...     | (Yellow card)
| All students must carry their printed hall...   | (Plain)
| [!] Coding Club hackathon registrations close...| (Yellow card)
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: '#college-title { ... }', explanation: 'ID selector (#) targets the unique main heading element.' },
      { line: '.subheading { ... }', explanation: 'Class selector (.) targets any element with class="subheading".' },
      { line: '.announcement { ... }', explanation: 'Styles both announcement paragraphs with yellow badge styling.' },
      { line: 'p { line-height: 1.6; }', explanation: 'Element selector applies comfortable line spacing to all paragraphs.' }
    ],
    commonMistakes: [
      { wrong: 'Using # for a class: #announcement { }', correct: '.announcement { }', why: 'Dots (.) are for classes; hashes (#) are for unique IDs. Mismatching prevents styles from applying.' },
      { wrong: 'p { color: red font-size: 16px; } (missing semicolon)', correct: 'p { color: red; font-size: 16px; }', why: 'Without a semicolon, the parser tries to read "red font-size: 16px" as a single invalid value and ignores both.' }
    ],
    importantDifference: {
      title: 'Class (.) vs. ID (#)',
      conceptA: 'Class (.): Reusable. Can be applied to many elements on the same page (e.g., class="btn").',
      conceptB: 'ID (#): Unique. Must only be applied to ONE element per page (e.g., id="navbar").',
      comparison: 'Think of class as a college uniform (many wear it); think of ID as your student registration number (only you have it).'
    },
    memoryTrick: 'Dot (.) for Class (Polite dot). Hash (#) for ID (Number sign for unique Roll Number).',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Element Selector Practice',
        task: 'Write CSS to turn all <h2> headings purple and centered.',
        hint: 'Use h2 { color: purple; text-align: center; }.',
        solutionHtml: `<h2>MRDU Placements 2026</h2>`,
        solutionCss: `h2 {
  color: #7e22ce;
  text-align: center;
}`,
        explanation: 'Applies element styling globally to all h2 elements.'
      },
      {
        difficulty: 'Medium',
        title: 'Class vs ID Styling',
        task: 'Create two buttons: both share the class "btn" with padding and border-radius, but one has id="primary-btn" with a blue background and the other has id="danger-btn" with a red background.',
        hint: 'Define shared styles in .btn and specific overrides in #primary-btn and #danger-btn.',
        solutionHtml: `<button class="btn" id="primary-btn">Accept Admission</button>
<button class="btn" id="danger-btn">Decline</button>`,
        solutionCss: `.btn {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
}
#primary-btn { background: #0284c7; }
#danger-btn { background: #ef4444; }`,
        explanation: 'Combines reusable class styling with unique ID-based color customization.'
      },
      {
        difficulty: 'Challenge',
        title: 'Demonstrate CSS Specificity',
        task: 'Write a paragraph that has an element selector rule (p), a class selector rule (.text), and an ID selector rule (#lead). Prove that the ID rule wins.',
        hint: 'Assign p { color: black; }, .text { color: blue; }, and #lead { color: red; }.',
        solutionHtml: `<p class="text" id="lead">MRDU Specificity Showcase</p>`,
        solutionCss: `p { color: black; }        /* Specificity: 1 */
.text { color: blue; }     /* Specificity: 10 */
#lead { color: #dc2626; }  /* Specificity: 100 - WINS! */`,
        explanation: 'ID specificity (100) effortlessly overrides class (10) and element (1) specificity.'
      }
    ],
    quizQuestions: [
      {
        id: 'd11-q1',
        question: 'Which character is used to target an element by its CLASS in CSS?',
        options: [
          '. (Period / Dot)',
          '# (Hash)',
          '* (Asterisk)',
          '@ (At sign)'
        ],
        correctAnswer: 0,
        explanation: 'In CSS selectors, a dot (.) denotes a class selector (e.g. .btn).'
      },
      {
        id: 'd11-q2',
        question: 'Which selector has the HIGHEST specificity?',
        options: [
          '#main-heading (ID selector)',
          '.highlight (Class selector)',
          'h1 (Element selector)',
          '* (Universal selector)'
        ],
        correctAnswer: 0,
        explanation: 'ID selectors carry a specificity weight of 100, which beats class selectors (10) and element selectors (1).'
      }
    ]
  },
  {
    day: 12,
    module: 'CSS',
    title: 'CSS Colors, Backgrounds & Text Properties',
    subtitle: 'Hex #RRGGBB, RGB, RGBA, HSL, background-image, linear-gradients & Google Fonts',
    keyIdea: 'Colors and typography establish the emotional brand and readability of your website.',
    analogy: 'Styling colors and fonts is like painting the interior walls of MRDU College and choosing between classic serif stone engravings or modern crisp digital signage.',
    definition: 'CSS provides multiple standardized color representation models (Hex, RGB, RGBA, HSL), background control (colors, images, gradients), and typography properties (font-family, font-size, Google Fonts).',
    whyUseIt: 'Ensures readable contrast ratios, elegant gradients for hero sections, and professional web typography beyond boring default system fonts.',
    syntaxBreakdown: [
      { part: '#RRGGBB', description: 'Hex code: 2 hex digits each for Red, Green, Blue from 00 (0) to FF (255).', example: '#0284c7' },
      { part: 'rgb(r, g, b)', description: 'RGB Function: Values from 0 to 255 for Red, Green, and Blue.', example: 'rgb(2, 132, 199)' },
      { part: 'rgba(r, g, b, a)', description: 'RGBA: Includes alpha channel from 0.0 (fully transparent) to 1.0 (fully solid).', example: 'rgba(2, 132, 199, 0.5)' },
      { part: 'hsl(hue, sat%, light%)', description: 'Hue (0-360 deg on color wheel), Saturation (0-100%), Lightness (0-100%).', example: 'hsl(200, 98%, 39%)' },
      { part: 'linear-gradient(...)', description: 'Algorithmic color transition between two or more colors.', example: 'linear-gradient(to right, #0284c7, #38bdf8)' },
      { part: 'font-family', description: 'Fallback list of font families.', example: "'Inter', Arial, sans-serif" }
    ],
    validValuesOrTypes: [
      { name: 'Hex (#000000 to #FFFFFF)', meaning: 'Hexadecimal Color', syntax: '#RRGGBB', example: '#ffffff (White)', expectedBehavior: 'Standard 6-digit hex color.' },
      { name: 'RGBA (Alpha 0.0 to 1.0)', meaning: 'Translucent Color', syntax: 'rgba(r,g,b,a)', example: 'rgba(0,0,0,0.6)', expectedBehavior: 'Shows underlying content through tinted layer.' },
      { name: 'linear-gradient', meaning: 'Directional Blend', syntax: 'linear-gradient(dir, c1, c2)', example: 'linear-gradient(45deg, blue, red)', expectedBehavior: 'Smooth gradient blend.' },
      { name: 'Google Fonts', meaning: 'Web Font Fetch', syntax: '@import url(...)', example: "@import url('https://fonts.googleapis.com/...');", expectedBehavior: 'Downloads custom web font typeface.' }
    ],
    defaultCode: {
      html: `<!-- MRDU College Hero Banner -->
<div class="hero-card">
  <h1>MRDU Convocation 2026</h1>
  <p class="subtitle">Honoring Excellence in Computer Science & Engineering</p>
  <button class="cta-btn">View Merit List</button>
</div>`,
      css: `/* Styling Hero with Gradient and Typography */
.hero-card {
  background: linear-gradient(135deg, #0f172a 0%, #0369a1 100%);
  color: #ffffff;
  padding: 30px 20px;
  border-radius: 12px;
  text-align: center;
  font-family: 'Inter', system-ui, sans-serif;
  box-shadow: 0 10px 25px -5px rgba(3, 105, 161, 0.3);
}

.hero-card h1 {
  margin: 0;
  font-size: 26px;
  letter-spacing: -0.5px;
}

.subtitle {
  color: rgba(255, 255, 255, 0.85);
  font-size: 15px;
  margin: 10px 0 20px 0;
}

.cta-btn {
  background-color: #f59e0b;
  color: #0f172a;
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| =============================================== |
|           MRDU Convocation 2026                 | (White bold)
|    Honoring Excellence in Computer Science...   | (Translucent)
|                                                 |
|              [ View Merit List ]                | (Amber button)
| =============================================== |
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: 'background: linear-gradient(135deg, #0f172a, #0369a1);', explanation: 'Creates a diagonal gradient from dark slate to deep ocean blue.' },
      { line: 'color: rgba(255, 255, 255, 0.85);', explanation: 'Sets text color to white with an 85% opacity level.' },
      { line: "font-family: 'Inter', system-ui, sans-serif;", explanation: 'Applies Inter font with fallback down to standard system sans-serif.' },
      { line: 'box-shadow: ... rgba(3, 105, 161, 0.3);', explanation: 'Adds a soft translucent blue glow below the banner.' }
    ],
    commonMistakes: [
      { wrong: 'color: 0284c7; (forgetting the #)', correct: 'color: #0284c7;', why: 'Hex codes require the leading hash (#) symbol. Without it, the browser considers it an invalid keyword.' },
      { wrong: 'rgba(255, 0, 0, 50)', correct: 'rgba(255, 0, 0, 0.5)', why: 'The alpha transparency channel in rgba is a decimal between 0.0 (transparent) and 1.0 (opaque), NOT a percentage integer like 50.' }
    ],
    importantDifference: {
      title: 'RGB vs. RGBA',
      conceptA: 'RGB: rgb(red, green, blue). Values 0-255. Completely opaque color.',
      conceptB: 'RGBA: rgba(red, green, blue, alpha). Alpha value 0.0 to 1.0 sets transparency.',
      comparison: 'Use RGBA when you want background cards or glassmorphic overlays where underlying content shines through.'
    },
    memoryTrick: 'RGB = Red Green Blue (0-255). Add A for Alpha (0.0 to 1.0 see-through).',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Apply Hex Colors',
        task: 'Change a paragraph background to #f1f5f9 and text color to #0f172a.',
        hint: 'Use background-color and color properties.',
        solutionHtml: `<p class="note">MRDU Library timings: 8 AM - 10 PM.</p>`,
        solutionCss: `.note {
  background-color: #f1f5f9;
  color: #0f172a;
  padding: 10px;
}`,
        explanation: 'Applies high-contrast accessible hex colors.'
      },
      {
        difficulty: 'Medium',
        title: 'Linear Gradient Card',
        task: 'Create a card with a two-color linear gradient flowing from left to right (from blue #0284c7 to emerald #10b981).',
        hint: 'Use linear-gradient(to right, #0284c7, #10b981).',
        solutionHtml: `<div class="grad-card">Campus Placement Drive 2026</div>`,
        solutionCss: `.grad-card {
  background: linear-gradient(to right, #0284c7, #10b981);
  color: white;
  padding: 20px;
  font-weight: bold;
  border-radius: 8px;
}`,
        explanation: 'Smooth horizontal gradient transition.'
      },
      {
        difficulty: 'Challenge',
        title: 'Glassmorphic Overlay',
        task: 'Create an element with an RGBA translucent background (rgba(255,255,255,0.2)) over a dark gradient container with a 1px translucent border.',
        hint: 'Use rgba for both background and border.',
        solutionHtml: `<div class="glass-container">
  <div class="glass-box">Glassmorphic Admission Badge</div>
</div>`,
        solutionCss: `.glass-container {
  background: linear-gradient(45deg, #1e1b4b, #4338ca);
  padding: 30px;
}
.glass-box {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 15px;
  border-radius: 8px;
}`,
        explanation: 'Modern translucent UI technique using RGBA.'
      }
    ],
    quizQuestions: [
      {
        id: 'd12-q1',
        question: 'In the Hex color code #FF0000, what color does it represent?',
        options: [
          'Pure Red',
          'Pure Green',
          'Pure Blue',
          'Yellow'
        ],
        correctAnswer: 0,
        explanation: '#FF0000 has Red at maximum (FF = 255), Green at 00, and Blue at 00, producing pure red.'
      },
      {
        id: 'd12-q2',
        question: 'What is the valid range for the Alpha channel in rgba(r, g, b, a)?',
        options: [
          '0.0 to 1.0',
          '0 to 100',
          '0 to 255',
          '1 to 10'
        ],
        correctAnswer: 0,
        explanation: 'The alpha transparency channel accepts a floating-point number between 0.0 (transparent) and 1.0 (fully opaque).'
      }
    ]
  },
  {
    day: 13,
    module: 'CSS',
    title: 'CSS Box Model',
    subtitle: 'Content, padding, border, margin & box-sizing: border-box vs content-box',
    keyIdea: 'Every element in CSS is a rectangular box made of Content, Padding, Border, and Margin.',
    analogy: 'A framed picture shipped in a cardboard moving box. Content is the painting itself. Padding is the bubble wrap inside the frame. Border is the wooden picture frame. Margin is the clearance space between this box and other boxes in the moving truck.',
    definition: 'The Box Model is the foundational layout architecture of CSS. Every HTML element renders as four nested concentric rectangles: Content (text/media) -> Padding (inner breathing room) -> Border (perimeter line) -> Margin (outer spacing).',
    whyUseIt: 'Without understanding the Box Model, adding padding to an element will unexpectedly expand its total width, breaking side-by-side columns and causing unwanted scrollbars.',
    syntaxBreakdown: [
      { part: 'Content', description: 'The inner area where text, images, or child elements reside.', example: 'width: 200px; height: 100px;' },
      { part: 'Padding', description: 'Space INSIDE the border; expands the background color and clickable area.', example: 'padding: 15px;' },
      { part: 'Border', description: 'The visible perimeter line wrapping around padding and content.', example: 'border: 2px solid #0284c7;' },
      { part: 'Margin', description: 'Space OUTSIDE the border; pushes neighboring elements away.', example: 'margin: 20px;' },
      { part: 'box-sizing: border-box', description: 'Locks total element width to declared value; padding and border are absorbed inside.', example: 'box-sizing: border-box;' }
    ],
    validValuesOrTypes: [
      { name: 'content-box (Default)', meaning: 'Width = Content Only', syntax: 'box-sizing: content-box', example: 'width: 200px + pad: 20px = 240px Total', expectedBehavior: 'Adding padding increases element rendered size.' },
      { name: 'border-box (Industry Standard)', meaning: 'Width = Total Footprint', syntax: 'box-sizing: border-box', example: 'width: 200px stays 200px Total', expectedBehavior: 'Padding automatically shrinks inner content to preserve width.' },
      { name: 'border-radius', meaning: 'Rounded Corners', syntax: 'border-radius: 8px', example: 'border-radius: 50% (Circle)', expectedBehavior: 'Smooths sharp box corners.' },
      { name: 'margin: 0 auto', meaning: 'Center Block Element', syntax: 'margin: 0 auto', example: 'margin: 0 auto', expectedBehavior: 'Centers fixed-width box horizontally.' }
    ],
    defaultCode: {
      html: `<!-- MRDU Box Model Comparison -->
<div class="box content-box-card">
  <strong>content-box (Default)</strong><br>
  Declared Width: 180px<br>
  Padding: 20px, Border: 4px<br>
  Actual Rendered Width = 228px!
</div>

<div class="box border-box-card">
  <strong>border-box (Modern Standard)</strong><br>
  Declared Width: 180px<br>
  Padding: 20px, Border: 4px<br>
  Actual Rendered Width = 180px!
</div>`,
      css: `.box {
  width: 180px;
  padding: 20px;
  border: 4px solid #0284c7;
  margin: 15px 0;
  font-family: sans-serif;
  font-size: 13px;
  background-color: #e0f2fe;
}

.content-box-card {
  box-sizing: content-box;
}

.border-box-card {
  box-sizing: border-box;
  background-color: #dcfce7;
  border-color: #16a34a;
}`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| +-----------------------------------------+     |
| | content-box: Total Width = 228px        |     | (Wider!)
| +-----------------------------------------+     |
|                                                 |
| +-----------------------------------+           |
| | border-box: Total Width = 180px   |           | (True to 180px)
| +-----------------------------------+           |
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: 'width: 180px;', explanation: 'Sets base width for both boxes.' },
      { line: 'padding: 20px;', explanation: 'Adds 20px inner cushion on all four sides.' },
      { line: 'border: 4px solid #0284c7;', explanation: 'Adds 4px visible line on all four edges.' },
      { line: 'box-sizing: border-box;', explanation: 'Forces width calculation to absorb padding and border, keeping width at exactly 180px.' }
    ],
    commonMistakes: [
      { wrong: 'Using margin to enlarge button clickable area', correct: 'Use padding to expand button clickable area', why: 'Margin is transparent space outside the border and is not clickable. Padding expands the active button area.' },
      { wrong: 'Not using universal box-sizing: border-box reset', correct: '*, *::before, *::after { box-sizing: border-box; }', why: 'Without border-box, building responsive multi-column layouts requires complex, error-prone manual arithmetic.' }
    ],
    importantDifference: {
      title: 'Margin vs. Padding',
      conceptA: 'Padding: Space INSIDE the border. Uses the element background color; increases clickable area.',
      conceptB: 'Margin: Space OUTSIDE the border. Always transparent; pushes neighboring elements away.',
      comparison: 'Padding is like putting on a thick winter jacket (inside you); Margin is asking people to stand 2 meters away from you.'
    },
    memoryTrick: 'Padding protects inside; Margin moves people outside.',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Create a Card Box',
        task: 'Build a div with width 200px, padding 15px, 2px solid grey border, and 10px margin.',
        hint: 'Set width, padding, border, and margin properties.',
        solutionHtml: `<div class="card">MRDU Department Notice</div>`,
        solutionCss: `.card {
  width: 200px;
  padding: 15px;
  border: 2px solid #94a3b8;
  margin: 10px;
}`,
        explanation: 'Basic box model implementation.'
      },
      {
        difficulty: 'Medium',
        title: 'Rounded Circular Avatar',
        task: 'Create an element with width 80px, height 80px, and border-radius: 50% to make a perfect circle.',
        hint: 'Equal width and height with border-radius: 50% produces a circle.',
        solutionHtml: `<div class="avatar">CSE</div>`,
        solutionCss: `.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #0284c7;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`,
        explanation: 'Uses border-radius to shape a box into a circular badge.'
      },
      {
        difficulty: 'Challenge',
        title: 'Center Container with margin: 0 auto',
        task: 'Build a container with max-width: 500px, box-sizing: border-box, and center it horizontally inside the viewport using margin: 0 auto.',
        hint: 'Blocks with a fixed or max width center when left/right margins are set to auto.',
        solutionHtml: `<div class="container">
  <h2>Centered Portal Card</h2>
  <p>Content stays centered regardless of monitor resolution.</p>
</div>`,
        solutionCss: `.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
}`,
        explanation: 'Standard technique for horizontally centering page layouts.'
      }
    ],
    quizQuestions: [
      {
        id: 'd13-q1',
        question: 'Which CSS Box Model property creates space INSIDE the border, adopting the element background color?',
        options: [
          'padding',
          'margin',
          'outline',
          'gap'
        ],
        correctAnswer: 0,
        explanation: 'Padding sits between the content and the border, inside the element perimeter.'
      },
      {
        id: 'd13-q2',
        question: 'If a box has width: 200px, padding: 20px, border: 5px, under box-sizing: border-box, what is its total rendered width?',
        options: [
          '200px',
          '250px',
          '225px',
          '240px'
        ],
        correctAnswer: 0,
        explanation: 'Under border-box, the declared width (200px) is the final outer width; padding and borders are absorbed inside.'
      }
    ]
  },
  {
    day: 14,
    module: 'CSS',
    title: 'CSS Display & Positioning',
    subtitle: 'Display (block, inline, inline-block, none) & Position (static, relative, absolute, fixed, sticky)',
    keyIdea: 'Display decides how an element flows with neighbors; Position decides where it sits in 2D coordinate space.',
    analogy: 'Students in an exam hall. display: block is a student taking up an entire desk row alone. display: inline are students sharing a bench side-by-side. position: fixed is the exam invigilator pinned on a raised stage watching everyone. position: sticky is a notice that scrolls with you until it sticks to the top of your clipboard.',
    definition: 'Display controls the layout box generation of an element (block takes full width; inline flows with text; none hides it). Position determines how an element is offset using coordinates (top, left, right, bottom, z-index).',
    whyUseIt: 'Crucial for sticky navigation headers that stay pinned on scroll, modal overlays, notification badges over icons, and dropdown menus.',
    syntaxBreakdown: [
      { part: 'display: block', description: 'Starts on a new line and expands to fill 100% of parent width. Accepts width & height.', example: 'display: block;' },
      { part: 'display: inline', description: 'Stays in text line. Ignores manual width, height, and vertical margins.', example: 'display: inline;' },
      { part: 'display: inline-block', description: 'Flows side-by-side like inline, but respects custom width, height, and padding.', example: 'display: inline-block;' },
      { part: 'position: static', description: 'Default. Follows normal document flow; top/left/right/bottom coordinates have no effect.', example: 'position: static;' },
      { part: 'position: relative', description: 'Offset relative to its own natural position without disrupting surrounding elements.', example: 'position: relative; top: -5px;' },
      { part: 'position: absolute', description: 'Removed from flow; placed relative to nearest positioned ancestor (non-static).', example: 'position: absolute; top: 0; right: 0;' },
      { part: 'position: fixed', description: 'Pinned relative to the browser viewport glass; never moves during scrolling.', example: 'position: fixed; top: 0; left: 0;' },
      { part: 'position: sticky', description: 'Acts relative until hitting a scroll offset, then locks in place like fixed.', example: 'position: sticky; top: 0;' }
    ],
    validValuesOrTypes: [
      { name: 'display: none', meaning: 'Remove from Layout', syntax: 'display: none', example: 'display: none;', expectedBehavior: 'Element vanishes completely; takes zero space in DOM flow.' },
      { name: 'z-index: 10', meaning: 'Stacking Order Depth', syntax: 'z-index: integer', example: 'z-index: 100;', expectedBehavior: 'Higher numbers render on top of lower numbers (requires non-static position).' },
      { name: 'top / left / right / bottom', meaning: 'Spatial Offsets', syntax: 'top: 10px;', example: 'right: 20px;', expectedBehavior: 'Distance from reference coordinate origin.' }
    ],
    defaultCode: {
      html: `<!-- MRDU Portal Positioning Demo -->
<div class="card-wrapper">
  <div class="dept-card">
    <span class="badge">NEW</span>
    <h3>B.Tech CSE (AIML)</h3>
    <p>Applications are now open for the 2026 academic batch.</p>
    <button class="action-btn">Apply Now</button>
  </div>
</div>`,
      css: `.card-wrapper {
  padding: 20px;
}

.dept-card {
  position: relative; /* Anchor for absolute badge */
  width: 260px;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 16px;
  font-family: sans-serif;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #ef4444;
  color: white;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.action-btn {
  display: inline-block; /* Allows width/padding */
  background: #0284c7;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
}`
    },
    expectedOutputAscii: `+-------------------------------------------------+
|   +-----------------------------+               |
|   | B.Tech CSE (AIML)     [NEW] | (Red badge    |
|   | Applications are now...     |  floats on    |
|   |                             |  top-right)   |
|   | [ Apply Now ]               |               |
|   +-----------------------------+               |
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: 'position: relative;', explanation: 'Establishes .dept-card as the coordinate bounding box for any absolutely positioned children.' },
      { line: 'position: absolute;', explanation: 'Removes .badge from normal document flow, allowing coordinate positioning.' },
      { line: 'top: -10px; right: -10px;', explanation: 'Positions badge so it overlaps the top-right corner of the parent card.' },
      { line: 'display: inline-block;', explanation: 'Allows button to sit cleanly in line while maintaining precise padding dimensions.' }
    ],
    commonMistakes: [
      { wrong: 'position: absolute without position: relative on the parent', correct: 'Add position: relative to the parent card', why: 'Without a positioned parent, the absolute child escapes all the way up to the <body>, ending up in the corner of the entire screen.' },
      { wrong: 'Using z-index on position: static elements', correct: 'Add position: relative (or absolute/fixed) alongside z-index', why: 'z-index has ZERO effect on standard statically positioned elements.' }
    ],
    importantDifference: {
      title: 'Relative vs. Absolute',
      conceptA: 'position: relative: Offsets an element relative to where it naturally was, keeping its original space reserved in page flow.',
      conceptB: 'position: absolute: Pulls the element out of document flow completely; placed relative to nearest non-static parent.',
      comparison: 'Relative leaves a ghost footprint; Absolute leaves zero footprint and floats freely.'
    },
    memoryTrick: 'Absolute needs a Relative parent, or it runs away to live with the Body.',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Sticky Navigation Bar',
        task: 'Create a header bar that sticks to the top of the browser window as the user scrolls.',
        hint: 'Use position: sticky; top: 0;.',
        solutionHtml: `<header class="sticky-nav">MRDU Header Bar</header>
<div style="height: 300px; padding: 20px;">Scroll me to see sticking...</div>`,
        solutionCss: `.sticky-nav {
  position: sticky;
  top: 0;
  background: #0284c7;
  color: white;
  padding: 15px;
  z-index: 100;
}`,
        explanation: 'Implements native sticky positioning without JavaScript.'
      },
      {
        difficulty: 'Medium',
        title: 'Notification Bell Badge',
        task: 'Position a red count badge ("3") over the top-right corner of an icon container.',
        hint: 'Parent has position: relative; badge has position: absolute; top: -5px; right: -5px;.',
        solutionHtml: `<div class="icon-wrap">
  <span>🔔</span>
  <span class="count">3</span>
</div>`,
        solutionCss: `.icon-wrap {
  position: relative;
  display: inline-block;
  font-size: 24px;
}
.count {
  position: absolute;
  top: -4px;
  right: -8px;
  background: red;
  color: white;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 10px;
}`,
        explanation: 'Classic UI badge placement.'
      },
      {
        difficulty: 'Challenge',
        title: 'Fixed Modal Overlay',
        task: 'Construct a modal dialog overlay that covers the entire screen using position: fixed with a centered modal box.',
        hint: 'Overlay has position: fixed; inset: 0; background: rgba(0,0,0,0.5);.',
        solutionHtml: `<div class="overlay">
  <div class="modal">
    <h3>Admission Confirmed</h3>
    <p>Welcome to MRDU B.Tech CSE Class of 2026.</p>
  </div>
</div>`,
        solutionCss: `.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.modal {
  background: white;
  padding: 24px;
  border-radius: 8px;
  max-width: 320px;
  text-align: center;
}`,
        explanation: 'Demonstrates full-screen viewport pinning with position: fixed.'
      }
    ],
    quizQuestions: [
      {
        id: 'd14-q1',
        question: 'Which positioning value keeps an element locked to the browser window even while scrolling?',
        options: [
          'position: fixed',
          'position: relative',
          'position: absolute',
          'position: static'
        ],
        correctAnswer: 0,
        explanation: 'position: fixed pins an element relative to the browser viewport glass.'
      },
      {
        id: 'd14-q2',
        question: 'What is the default position value for all HTML elements?',
        options: [
          'static',
          'relative',
          'absolute',
          'fixed'
        ],
        correctAnswer: 0,
        explanation: 'position: static is the default value, adhering strictly to natural document flow.'
      }
    ]
  },
  {
    day: 15,
    module: 'CSS',
    title: 'CSS Flexbox',
    subtitle: 'display: flex, flex container vs items, main axis (justify-content) & cross axis (align-items)',
    keyIdea: 'Flexbox arranges items along a 1D line (row or column); justify-content controls the MAIN AXIS, align-items controls the CROSS AXIS.',
    analogy: 'Arranging books on a shelf. The shelf is the Flex Container. The books are Flex Items. justify-content decides if the books are pushed to the left, centered, or spaced out evenly across the shelf. align-items decides if tall and short books align to the bottom, top, or center.',
    definition: 'CSS Flexbox (Flexible Box Layout) is a one-dimensional layout model designed to distribute space and align items along either a horizontal row or a vertical column.',
    whyUseIt: 'Solves the notorious CSS problem of vertically centering content, creating flexible navigation bars, equal-height card grids, and mobile-friendly stacks without float hacks.',
    syntaxBreakdown: [
      { part: 'display: flex', description: 'Applied on parent to turn it into a Flex Container. Direct children become Flex Items.', example: 'display: flex;' },
      { part: 'flex-direction', description: 'Sets Main Axis orientation: row (horizontal, default) or column (vertical).', example: 'flex-direction: row;' },
      { part: 'justify-content', description: 'Aligns items along the MAIN AXIS (flex-start, center, flex-end, space-between, space-around, space-evenly).', example: 'justify-content: space-between;' },
      { part: 'align-items', description: 'Aligns items along the CROSS AXIS (stretch, center, flex-start, flex-end).', example: 'align-items: center;' },
      { part: 'gap', description: 'Sets clean empty space between flex items without manual child margins.', example: 'gap: 15px;' },
      { part: 'flex-wrap', description: 'Controls whether items are forced onto a single line (nowrap) or wrap to new lines (wrap).', example: 'flex-wrap: wrap;' }
    ],
    validValuesOrTypes: [
      { name: 'justify-content: space-between', meaning: 'Maximum Spread', syntax: 'space-between', example: 'justify-content: space-between;', expectedBehavior: 'First item at far left, last item at far right, equal space in between.' },
      { name: 'justify-content: center', meaning: 'Center Main Axis', syntax: 'center', example: 'justify-content: center;', expectedBehavior: 'Packs all items into the middle of the main axis.' },
      { name: 'align-items: center', meaning: 'Center Cross Axis', syntax: 'center', example: 'align-items: center;', expectedBehavior: 'Centers items vertically across container height.' },
      { name: 'flex-direction: column', meaning: 'Vertical Main Axis', syntax: 'column', example: 'flex-direction: column;', expectedBehavior: 'Rotates main axis 90 degrees; items stack top-to-bottom.' }
    ],
    defaultCode: {
      html: `<!-- MRDU Responsive Navigation Bar with Flexbox -->
<nav class="flex-navbar">
  <div class="logo">MRDU College</div>
  <div class="nav-links">
    <a href="#home">Home</a>
    <a href="#branches">Branches</a>
    <a href="#placements">Placements</a>
    <a href="#contact">Contact</a>
  </div>
  <button class="portal-btn">Student Login</button>
</nav>`,
      css: `.flex-navbar {
  display: flex;
  justify-content: space-between; /* Spreads logo, links, and button */
  align-items: center;            /* Perfectly centers on vertical axis */
  background-color: #0f172a;
  padding: 12px 20px;
  border-radius: 8px;
  color: white;
  font-family: sans-serif;
}

.logo {
  font-weight: bold;
  font-size: 18px;
  color: #38bdf8;
}

.nav-links {
  display: flex;
  gap: 15px; /* Clean gap between links */
}

.nav-links a {
  color: #e2e8f0;
  text-decoration: none;
  font-size: 14px;
}

.nav-links a:hover {
  color: #38bdf8;
}

.portal-btn {
  background: #0284c7;
  color: white;
  border: none;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
}`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| MRDU College    Home  Branches  Placements   [Login]|
| (Far Left)           (Centered Gap)       (Far Right|
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: 'display: flex;', explanation: 'Turns navbar into a flex container; direct children align horizontally.' },
      { line: 'justify-content: space-between;', explanation: 'Pushes logo to left boundary, button to right boundary, links centered.' },
      { line: 'align-items: center;', explanation: 'Vertically aligns all three components through cross-axis centering.' },
      { line: 'gap: 15px;', explanation: 'Adds clean 15px gutters between links without child margin hacks.' }
    ],
    commonMistakes: [
      { wrong: 'Believing justify-content is always horizontal and align-items is always vertical', correct: 'Remember: justify-content is ALWAYS the Main Axis. When flex-direction is column, the Main Axis is vertical!', why: 'Swapping flex-direction to column rotates the axes. In column mode, justify-content moves items vertically, and align-items moves items horizontally.' },
      { wrong: 'Applying display: flex on child items instead of the parent container', correct: 'Apply display: flex on the PARENT container', why: 'Flexbox rules must be declared on the container that holds the items you wish to arrange.' }
    ],
    importantDifference: {
      title: 'justify-content vs. align-items',
      conceptA: 'justify-content: Controls alignment along the MAIN AXIS (Horizontal in row mode, Vertical in column mode).',
      conceptB: 'align-items: Controls alignment along the CROSS AXIS (Perpendicular to the main axis).',
      comparison: 'Never memorize "horizontal vs vertical". Always remember: Justify = Main Axis, Align = Cross Axis.'
    },
    memoryTrick: 'Justify = Main Street (Main Axis); Align = Cross Street (Cross Axis).',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Perfect Centering Hack',
        task: 'Center a single login card both horizontally and vertically inside a full-height container using Flexbox.',
        hint: 'Use display: flex; justify-content: center; align-items: center; min-height: 200px;.',
        solutionHtml: `<div class="center-container">
  <div class="login-box">MRDU Login</div>
</div>`,
        solutionCss: `.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: #f1f5f9;
}
.login-box {
  background: white;
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}`,
        explanation: 'The classic, elegant 3-line vertical and horizontal centering technique.'
      },
      {
        difficulty: 'Medium',
        title: 'Three-Card Flex Layout',
        task: 'Create a flex container holding 3 cards (CSE, AIML, DS) that wrap to new lines if the screen is narrow.',
        hint: 'Use display: flex; flex-wrap: wrap; gap: 15px;.',
        solutionHtml: `<div class="card-row">
  <div class="card">CSE Core</div>
  <div class="card">CSE (AIML)</div>
  <div class="card">CSE (DS)</div>
</div>`,
        solutionCss: `.card-row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.card {
  flex: 1 1 120px;
  background: #0284c7;
  color: white;
  padding: 15px;
  text-align: center;
  border-radius: 6px;
}`,
        explanation: 'Responsive card wrap using flex-wrap and flex-basis.'
      },
      {
        difficulty: 'Challenge',
        title: 'Vertical Sidebar Layout',
        task: 'Build a vertical sidebar using flex-direction: column, where navigation links sit at the top and a logout button is pushed all the way to the bottom.',
        hint: 'Set flex-direction: column and use margin-top: auto on the logout button.',
        solutionHtml: `<div class="sidebar">
  <div class="top-nav">
    <a href="#">Dashboard</a><br>
    <a href="#">Courses</a>
  </div>
  <button class="logout">Logout</button>
</div>`,
        solutionCss: `.sidebar {
  display: flex;
  flex-direction: column;
  height: 240px;
  width: 140px;
  background: #1e293b;
  padding: 15px;
  color: white;
}
.logout {
  margin-top: auto; /* Pushes to the very bottom */
  background: #ef4444;
  color: white;
  border: none;
  padding: 6px;
  border-radius: 4px;
}`,
        explanation: 'Utilizes flex auto margins to pin footer items to the bottom.'
      }
    ],
    quizQuestions: [
      {
        id: 'd15-q1',
        question: 'Which property controls alignment along the MAIN AXIS in Flexbox?',
        options: [
          'justify-content',
          'align-items',
          'flex-direction',
          'align-content'
        ],
        correctAnswer: 0,
        explanation: 'justify-content controls alignment along the Main Axis.'
      },
      {
        id: 'd15-q2',
        question: 'When flex-direction is set to "column", what direction does the Main Axis run?',
        options: [
          'Vertical (Top to Bottom)',
          'Horizontal (Left to Right)',
          'Diagonal',
          'Circular'
        ],
        correctAnswer: 0,
        explanation: 'Setting flex-direction: column orients the main axis vertically from top to bottom.'
      }
    ]
  },
  {
    day: 16,
    module: 'CSS',
    title: 'CSS Grid System',
    subtitle: 'display: grid, tracks, fr unit, repeat, gap, grid-column/row placement, auto-fit & auto-fill',
    keyIdea: 'If Flexbox is a 1D clothesline, Grid is a 2D chessboard controlling rows AND columns at the same time.',
    analogy: 'A classroom seating chart. Columns are the rows of desks from left to right; rows are the rows from front to back. Grid lets you place Rahul Sharma specifically in Seat (Row 2, Column 3) or give the Professor a desk that spans across Columns 1 to 4.',
    definition: 'CSS Grid is a powerful two-dimensional layout system that allows developers to define columns and rows simultaneously, creating complex responsive matrices without float or calc hacks.',
    whyUseIt: 'Essential for photo galleries, dashboard interfaces, newspaper layouts, and complex responsive application skeletons.',
    syntaxBreakdown: [
      { part: 'display: grid', description: 'Turns container into a 2D Grid Formatting Context.', example: 'display: grid;' },
      { part: 'grid-template-columns', description: 'Defines width of each column track separated by spaces.', example: 'grid-template-columns: 200px 1fr 1fr;' },
      { part: 'grid-template-rows', description: 'Defines height of row tracks.', example: 'grid-template-rows: 60px auto 40px;' },
      { part: 'fr unit (Fraction)', description: 'Represents a proportional fraction of remaining available space.', example: '1fr 2fr (1/3 and 2/3)' },
      { part: 'repeat(count, track)', description: 'Concise helper for repeating column definitions.', example: 'repeat(3, 1fr)' },
      { part: 'grid-column: 1 / 3', description: 'Explicit placement: Item starts at grid line 1 and ends at grid line 3 (spans 2 columns).', example: 'grid-column: 1 / 3;' },
      { part: 'auto-fit vs. auto-fill', description: 'Responsive repeat algorithm that wraps items into columns without media queries.', example: 'repeat(auto-fit, minmax(150px, 1fr))' }
    ],
    validValuesOrTypes: [
      { name: '1fr', meaning: '1 Fraction of Free Space', syntax: '1fr', example: 'repeat(4, 1fr)', expectedBehavior: 'Creates 4 equally sized columns.' },
      { name: 'minmax(150px, 1fr)', meaning: 'Clamp sizing', syntax: 'minmax(min, max)', example: 'minmax(120px, 1fr)', expectedBehavior: 'Never shrinks below 120px; expands to 1fr.' },
      { name: 'gap', meaning: 'Grid Gutters', syntax: 'gap: 15px', example: 'gap: 10px 20px', expectedBehavior: 'Row and column gutters between cells.' },
      { name: 'auto-fit', meaning: 'Expand active items', syntax: 'auto-fit', example: 'repeat(auto-fit, ...)', expectedBehavior: 'Items stretch to fill empty room in row.' }
    ],
    defaultCode: {
      html: `<!-- MRDU Portal Dashboard Grid -->
<div class="portal-grid">
  <header class="grid-header">MRDU Student Dashboard (Full Width)</header>
  <aside class="grid-sidebar">
    <strong>Navigation</strong>
    <p>Admissions</p>
    <p>Grades</p>
    <p>Fees</p>
  </aside>
  <main class="grid-content">
    <h3>Semester Results: Batch 2026</h3>
    <p>Overall department pass percentage: 98.4%.</p>
  </main>
  <footer class="grid-footer">&copy; 2026 MRDU College Portal</footer>
</div>`,
      css: `.portal-grid {
  display: grid;
  grid-template-columns: 140px 1fr; /* 140px Sidebar, rest to Main */
  grid-template-rows: 50px auto 40px;
  gap: 10px;
  font-family: sans-serif;
}

.grid-header {
  grid-column: 1 / 3; /* Spans from grid line 1 to line 3 (both columns) */
  background: #0284c7;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-radius: 4px;
}

.grid-sidebar {
  background: #f1f5f9;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
  font-size: 13px;
}

.grid-content {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 15px;
  border-radius: 4px;
}

.grid-footer {
  grid-column: 1 / 3; /* Spans across entire bottom */
  background: #0f172a;
  color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border-radius: 4px;
}`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| [ HEADER: MRDU Student Dashboard (Spans 1 to 3)]|
+-------------------+-----------------------------+
| [ SIDEBAR (140px) | [ MAIN CONTENT (1fr)        |
| * Admissions      |   Semester Results: 2026    |
| * Grades          |   Pass percentage: 98.4%    |
+-------------------+-----------------------------+
| [ FOOTER: © 2026 MRDU College Portal           ]|
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: 'display: grid;', explanation: 'Initializes the 2D grid formatting context.' },
      { line: 'grid-template-columns: 140px 1fr;', explanation: 'Creates 2 columns: first is locked at 140px, second takes all remaining flexible space (1fr).' },
      { line: 'grid-column: 1 / 3;', explanation: 'Instructs the header and footer to start at grid line 1 and span to grid line 3 (spanning 2 columns).' },
      { line: 'gap: 10px;', explanation: 'Generates consistent 10px spacing between all grid tracks.' }
    ],
    commonMistakes: [
      { wrong: 'grid-column: 1 / 2 (expecting it to span 2 columns)', correct: 'grid-column: 1 / 3', why: 'Grid coordinates point to GRID LINES, not cells! Line 1 to Line 2 spans only ONE column. Line 1 to Line 3 spans TWO columns.' },
      { wrong: 'Confusing auto-fit and auto-fill', correct: 'Use auto-fit when you want active items to expand into available space', why: 'auto-fill keeps ghost empty tracks open; auto-fit collapses empty tracks so items stretch to fill the row.' }
    ],
    importantDifference: {
      title: 'CSS Grid vs. CSS Flexbox',
      conceptA: 'Grid: Two-dimensional (rows AND columns at the same time). Layout-first approach.',
      conceptB: 'Flexbox: One-dimensional (row OR column). Content-first flow.',
      comparison: 'Use Grid for full page application layouts and galleries; use Flexbox for component rows, navbars, and buttons.'
    },
    memoryTrick: 'Flexbox is a 1D Clothesline; Grid is a 2D Chessboard.',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: '3-Column Image Gallery',
        task: 'Build a grid container with 3 equal columns using the repeat() and fr unit.',
        hint: 'Use grid-template-columns: repeat(3, 1fr); gap: 10px;.',
        solutionHtml: `<div class="gallery">
  <div>Photo 1</div><div>Photo 2</div><div>Photo 3</div>
</div>`,
        solutionCss: `.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.gallery div {
  background: #0284c7;
  color: white;
  padding: 20px;
  text-align: center;
}`,
        explanation: 'Standard 3-column equal grid.'
      },
      {
        difficulty: 'Medium',
        title: 'Explicit Grid Placement',
        task: 'Create a 3-column grid where the first card spans 2 columns using grid-column: 1 / 3.',
        hint: 'Apply grid-column: 1 / 3 on the featured element.',
        solutionHtml: `<div class="grid-board">
  <div class="featured">Featured College Event</div>
  <div>Notice 1</div>
  <div>Notice 2</div>
</div>`,
        solutionCss: `.grid-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.featured {
  grid-column: 1 / 3;
  background: #f59e0b;
  padding: 15px;
  font-weight: bold;
}
.grid-board div {
  border: 1px solid #cbd5e1;
  padding: 15px;
}`,
        explanation: 'Spans a single item across multiple column tracks.'
      },
      {
        difficulty: 'Challenge',
        title: 'Responsive Grid Without Media Queries',
        task: 'Construct an adaptive card grid that automatically rearranges from 1 to 4 columns depending on screen size using auto-fit and minmax().',
        hint: 'Use grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));.',
        solutionHtml: `<div class="auto-grid">
  <div>CSE Core</div>
  <div>CSE (AIML)</div>
  <div>CSE (DS)</div>
  <div>CSE (Cyber)</div>
</div>`,
        solutionCss: `.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}
.auto-grid div {
  background: #0f172a;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 6px;
}`,
        explanation: 'Responsive magic: Automatically computes column counts based on viewport width.'
      }
    ],
    quizQuestions: [
      {
        id: 'd16-q1',
        question: 'What does "1fr" mean in CSS Grid?',
        options: [
          'One Fraction of the available free space',
          'One Fixed Row',
          'One Frame Rate',
          'One Font Resolution'
        ],
        correctAnswer: 0,
        explanation: 'fr stands for Fraction and represents a proportional share of available container space.'
      },
      {
        id: 'd16-q2',
        question: 'If you want a grid item to span from the first column line across two columns, what is the correct syntax?',
        options: [
          'grid-column: 1 / 3',
          'grid-column: 1 / 2',
          'grid-column: 2',
          'span-column: 2'
        ],
        correctAnswer: 0,
        explanation: 'Grid lines start at 1. Spanning two columns requires ending at grid line 3 (1 / 3).'
      }
    ]
  },
  {
    day: 17,
    module: 'CSS',
    title: 'CSS Transitions & Transform Functions',
    subtitle: 'Transitions (duration, timing, delay), :hover & 2D/3D Transforms (rotate, scale, translate, skew)',
    keyIdea: 'Transitions make state changes smooth over time; Transforms alter the physical shape, position, or scale of an element.',
    analogy: 'A transition is a modern dimmer switch that smoothly fades lights up instead of an abrupt click. A transform is picking up a book on your desk and rotating it 45 degrees, sliding it 2 inches to the right (translate), or zooming in with a magnifying glass (scale).',
    definition: 'CSS Transitions animate property changes smoothly over a given duration. CSS Transforms visually manipulate an element in coordinate space (rotate, scale, translate, skew) without affecting the normal flow of surrounding elements.',
    whyUseIt: 'Transforms and transitions run hardware-accelerated on the computer GPU, delivering silky smooth 60 FPS interactive buttons, card lifts, and hover effects.',
    syntaxBreakdown: [
      { part: 'transition: property duration timing delay', description: 'Shorthand configuring smooth property animation.', example: 'transition: all 0.3s ease;' },
      { part: ':hover', description: 'Pseudo-class activating styles when user places mouse cursor over element.', example: '.btn:hover { background: blue; }' },
      { part: 'transform: rotate(deg)', description: 'Rotates an element clockwise by specified angle.', example: 'transform: rotate(45deg);' },
      { part: 'transform: scale(factor)', description: 'Resizes element up or down (1.1 = 110% size).', example: 'transform: scale(1.1);' },
      { part: 'transform: translate(x, y)', description: 'Moves element horizontally (x) and vertically (y) from its origin.', example: 'transform: translateY(-8px);' },
      { part: 'transform: skew(x, y)', description: 'Distorts element along coordinate axes by specified degree.', example: 'transform: skewX(10deg);' }
    ],
    validValuesOrTypes: [
      { name: 'transition: transform 0.3s ease', meaning: 'Smooth transform', syntax: '0.3s ease', example: '0.3s ease', expectedBehavior: 'Smooth acceleration and deceleration over 300 milliseconds.' },
      { name: 'translateY(-6px)', meaning: 'Lift element up', syntax: 'translateY(val)', example: 'translateY(-6px)', expectedBehavior: 'Moves box 6px upward on hover.' },
      { name: 'scale(1.05)', meaning: 'Grow 5%', syntax: 'scale(factor)', example: 'scale(1.05)', expectedBehavior: 'Enlarges element smoothly.' },
      { name: 'rotate(180deg)', meaning: 'Spin half circle', syntax: 'rotate(deg)', example: 'rotate(180deg)', expectedBehavior: 'Turns element upside down.' }
    ],
    defaultCode: {
      html: `<!-- MRDU Interactive Interactive Cards -->
<div class="card-deck">
  <div class="hover-card card-lift">
    <h4>Lift Effect</h4>
    <p>Hover me to lift up smoothly.</p>
  </div>

  <div class="hover-card card-scale">
    <h4>Scale Effect</h4>
    <p>Hover me to expand size.</p>
  </div>

  <div class="hover-card card-rotate">
    <h4>Rotate Effect</h4>
    <p>Hover me to tilt 5 degrees.</p>
  </div>
</div>`,
      css: `.card-deck {
  display: flex;
  gap: 15px;
  font-family: sans-serif;
}

.hover-card {
  flex: 1;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  /* CRITICAL: Transition declared on BASE class so reverse animation is also smooth */
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.card-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 20px -3px rgba(2, 132, 199, 0.25);
  border-color: #0284c7;
}

.card-scale:hover {
  transform: scale(1.06);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-color: #10b981;
}

.card-rotate:hover {
  transform: rotate(5deg) scale(1.03);
  border-color: #f59e0b;
}`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| Normal State:                                   |
| [ Card 1 ]       [ Card 2 ]       [ Card 3 ]    |
|                                                 |
| On Hover:                                       |
| [ Card 1 ]^ (Lifts up with blue shadow)         |
| {  Card 2  } (Grows larger)                     |
| / Card 3 /  (Tilts 5 degrees clockwise)         |
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: 'transition: transform 0.3s ease, ...;', explanation: 'Declares on base element that transform and shadow changes must animate smoothly over 0.3 seconds.' },
      { line: 'transform: translateY(-8px);', explanation: 'Offsets card upward by 8 pixels on hover without pushing surrounding elements.' },
      { line: 'transform: scale(1.06);', explanation: 'Enlarges the scale card by 6% on hover.' },
      { line: 'transform: rotate(5deg);', explanation: 'Rotates the card 5 degrees clockwise.' }
    ],
    commonMistakes: [
      { wrong: 'Putting the transition rule inside the :hover selector: .card:hover { transition: 0.3s; }', correct: 'Put transition on the base selector: .card { transition: 0.3s; }', why: 'If transition is only in :hover, the hover-in is smooth, but the moment the mouse leaves, the card snaps back abruptly like a broken spring.' },
      { wrong: 'Expecting transform: translate to push neighboring elements down', correct: 'Use margin if you need surrounding elements to physically move', why: 'Transforms are rendered on the GPU layer without re-calculating DOM flow; neighbors do not move.' }
    ],
    importantDifference: {
      title: 'Transition vs. Animation',
      conceptA: 'Transition: Requires a trigger state change (like :hover). Animates smoothly from State A to State B once.',
      conceptB: 'Animation (@keyframes): Runs automatically. Can have multiple intermediate checkpoints and loop infinitely.',
      comparison: 'Use transition for user hover responses; use animation for continuous spinners and autonomous banners.'
    },
    memoryTrick: 'Transitions live on the Base element, so the card knows how to walk back home smoothly.',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Smooth Button Color Transition',
        task: 'Build a button that transitions background-color from navy to sky blue over 0.4s on hover.',
        hint: 'Use transition: background-color 0.4s ease; on button.',
        solutionHtml: `<button class="smooth-btn">MRDU Portal</button>`,
        solutionCss: `.smooth-btn {
  background: #0f172a;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.4s ease;
}
.smooth-btn:hover {
  background: #0284c7;
}`,
        explanation: 'Classic hover transition.'
      },
      {
        difficulty: 'Medium',
        title: 'Card Lift with Shadow',
        task: 'Create an event card that translates Y by -6px and adds a drop shadow on hover.',
        hint: 'Use transform: translateY(-6px); box-shadow: ... on :hover.',
        solutionHtml: `<div class="event-card">Hackathon 2026</div>`,
        solutionCss: `.event-card {
  width: 180px;
  padding: 20px;
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.event-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}`,
        explanation: 'Elevates card visually off the page.'
      },
      {
        difficulty: 'Challenge',
        title: 'Interactive Image Zoom Inside Overflow Hidden',
        task: 'Create an image container with overflow: hidden; where hovering scales the image to 1.15 without the image spilling outside the card.',
        hint: 'Container has overflow: hidden; inner img has transition: transform 0.4s; and scale(1.15) on hover.',
        solutionHtml: `<div class="img-frame">
  <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300" alt="Campus">
</div>`,
        solutionCss: `.img-frame {
  width: 220px;
  height: 140px;
  overflow: hidden;
  border-radius: 8px;
}
.img-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.img-frame:hover img {
  transform: scale(1.15);
}`,
        explanation: 'Professional e-commerce/editorial zoom effect.'
      }
    ],
    quizQuestions: [
      {
        id: 'd17-q1',
        question: 'Where should the "transition" property be declared to ensure SMOOTH animation both on hover-in AND hover-out?',
        options: [
          'On the base selector (.btn)',
          'Only inside the :hover selector (.btn:hover)',
          'Inside the <body> tag',
          'In the HTML tag directly'
        ],
        correctAnswer: 0,
        explanation: 'Declaring transition on the base selector guarantees that the return animation also plays smoothly when the cursor leaves.'
      },
      {
        id: 'd17-q2',
        question: 'Which transform function enlarges or shrinks an element?',
        options: [
          'scale()',
          'rotate()',
          'translate()',
          'skew()'
        ],
        correctAnswer: 0,
        explanation: 'scale() resizes an element proportionally by a multiplier factor.'
      }
    ]
  },
  {
    day: 18,
    module: 'CSS',
    title: 'CSS Animations & Keyframes',
    subtitle: '@keyframes, animation-name, duration, iteration-count, direction & loaders/bouncing elements',
    keyIdea: 'Keyframes are a timeline movie script; the animation property hires an element to perform that script.',
    analogy: 'An old-school cartoon flipbook. Each page is a keyframe (0%, 50%, 100%). When you flip through the pages rapidly (animation-duration: 1s), the drawing comes alive into continuous fluid motion.',
    definition: 'CSS Keyframe Animations allow continuous, autonomous multi-step animations without requiring user interaction like hover. Keyframe checkpoints (@keyframes) define style shifts over a percentage timeline (0% to 100%).',
    whyUseIt: 'Essential for loading spinners during API fetches, attention-grabbing alert pulses, bouncing notifications, and marquee announcement ribbons.',
    syntaxBreakdown: [
      { part: '@keyframes animationName { ... }', description: 'Defines the timeline and visual checkpoints (from/to or 0% to 100%).', example: '@keyframes spin { to { transform: rotate(360deg); } }' },
      { part: 'animation-name', description: 'Binds an HTML element to a specific @keyframes timeline name.', example: 'animation-name: spin;' },
      { part: 'animation-duration', description: 'Sets the elapsed time for one complete cycle.', example: 'animation-duration: 1s;' },
      { part: 'animation-iteration-count', description: 'Specifies loop count (e.g. 3, or infinite for continuous play).', example: 'animation-iteration-count: infinite;' },
      { part: 'animation-timing-function', description: 'Pacing curve (linear, ease, ease-in-out).', example: 'animation-timing-function: linear;' },
      { part: 'animation-direction', description: 'normal, reverse, alternate (bounces back and forth).', example: 'animation-direction: alternate;' }
    ],
    validValuesOrTypes: [
      { name: 'infinite', meaning: 'Loop forever', syntax: 'infinite', example: 'animation: spin 1s infinite;', expectedBehavior: 'Never stops playing.' },
      { name: 'alternate', meaning: 'Bounce back and forth', syntax: 'alternate', example: 'animation: bounce 0.6s alternate;', expectedBehavior: 'Plays forward, then backwards, then forward.' },
      { name: 'linear', meaning: 'Constant unvarying speed', syntax: 'linear', example: 'linear', expectedBehavior: 'Perfect for rotating spinners without hiccups.' },
      { name: 'from / to', meaning: '0% and 100%', syntax: 'from { } to { }', example: 'from { opacity: 0; } to { opacity: 1; }', expectedBehavior: 'Simple two-step start to end.' }
    ],
    defaultCode: {
      html: `<!-- MRDU Automated Animations Demo -->
<div class="animation-stage">
  <div class="loader-box">
    <div class="spinner"></div>
    <p>Loading Portal Data...</p>
  </div>

  <div class="bounce-box">
    <div class="bouncing-ball"></div>
    <p>Bouncing Ball</p>
  </div>

  <div class="marquee-track">
    <div class="sliding-text">
      🚨 ADMISSIONS 2026 CLOSING SOON — REGISTER AT MRDU CAMPUS DESK 🚨
    </div>
  </div>
</div>`,
      css: `.animation-stage {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: sans-serif;
  align-items: center;
}

/* 1. Loading Spinner */
.spinner {
  width: 36px;
  height: 36px;
  border: 4px solid #cbd5e1;
  border-top: 4px solid #0284c7; /* Visible spinning point */
  border-radius: 50%;
  animation: spinLoader 0.8s linear infinite;
}
@keyframes spinLoader {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 2. Bouncing Ball */
.bouncing-ball {
  width: 32px;
  height: 32px;
  background: #f59e0b;
  border-radius: 50%;
  animation: bounceBall 0.6s cubic-bezier(0.28, 0.84, 0.42, 1) infinite alternate;
}
@keyframes bounceBall {
  from { transform: translateY(0); }
  to   { transform: translateY(-40px); }
}

/* 3. Sliding Marquee Text */
.marquee-track {
  width: 100%;
  max-width: 360px;
  overflow: hidden;
  background: #0f172a;
  color: #38bdf8;
  padding: 8px 0;
  border-radius: 4px;
}
.sliding-text {
  display: inline-block;
  white-space: nowrap;
  animation: slideText 6s linear infinite;
}
@keyframes slideText {
  from { transform: translateX(100%); }
  to   { transform: translateX(-100%); }
}`
    },
    expectedOutputAscii: `+-------------------------------------------------+
|               ( O )                             |
|          Loading Portal Data... (Spinning 360)  |
|                                                 |
|                 O                               |
|                 |  (Bounces up and down)        |
|               (---)                             |
|                                                 |
| [ 🚨 ADMISSIONS 2026 CLOSING SOON... ===> ]     | (Sliding)
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: '@keyframes spinLoader { ... }', explanation: 'Creates timeline rotating from 0 to 360 degrees.' },
      { line: 'animation: spinLoader 0.8s linear infinite;', explanation: 'Applies spinner timeline with unvarying linear pacing repeating forever.' },
      { line: 'animation-direction: alternate;', explanation: 'Allows bouncing ball to play forward then reverse, simulating gravity.' },
      { line: 'transform: translateX(100%) to -100%', explanation: 'Slides text horizontally across the full overflow container.' }
    ],
    commonMistakes: [
      { wrong: 'Mismatched spelling between animation-name and @keyframes: animation: myMove; @keyframes mymove', correct: 'Ensure identical casing: myMove matches myMove', why: 'CSS animation identifiers are case-sensitive. The browser fails to locate the timeline if casing differs.' },
      { wrong: 'Forgetting animation-duration', correct: 'Always provide duration: animation: spin 1s infinite;', why: 'Default animation duration is 0 seconds. Without a duration, nothing will move.' }
    ],
    importantDifference: {
      title: 'Animation vs. Transition',
      conceptA: 'Animation: Runs on its own timeline using @keyframes. Supports intermediate % checkpoints and infinite looping.',
      conceptB: 'Transition: Requires a user trigger (e.g. :hover). Moves strictly from start to finish once.',
      comparison: 'Use animations for perpetual loaders and autonomous pulses; use transitions for subtle user hover interactions.'
    },
    memoryTrick: 'Keyframes write the movie script; Animation hires the actor to perform it.',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Pulsing Live Indicator',
        task: 'Build a small green dot that pulses its opacity from 1 to 0.3 infinitely to simulate a live server status.',
        hint: 'Use @keyframes with from { opacity: 1; } to { opacity: 0.3; } and infinite alternate.',
        solutionHtml: `<div class="status-wrap">
  <span class="pulse-dot"></span> Server Online
</div>`,
        solutionCss: `.pulse-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 1s infinite alternate;
}
@keyframes pulse {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0.3; transform: scale(0.8); }
}`,
        explanation: 'Classic live status indicator.'
      },
      {
        difficulty: 'Medium',
        title: 'Spinning Dual-Color Ring',
        task: 'Create a 40px circle with a light grey border and deep blue top border that spins continuously.',
        hint: 'Use border-radius: 50%, border-top-color: #0284c7, and rotate(360deg).',
        solutionHtml: `<div class="ring-loader"></div>`,
        solutionCss: `.ring-loader {
  width: 40px;
  height: 40px;
  border: 4px solid #e2e8f0;
  border-top-color: #0284c7;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}`,
        explanation: 'Standard circular loading spinner.'
      },
      {
        difficulty: 'Challenge',
        title: 'Multi-Keyframe Rainbow Badge',
        task: 'Create an element that cycles its background through 4 colors at 0%, 33%, 66%, and 100% checkpoints infinitely.',
        hint: 'Use 0%, 33%, 66%, 100% selectors inside @keyframes.',
        solutionHtml: `<div class="color-badge">MRDU Hackathon Active</div>`,
        solutionCss: `.color-badge {
  padding: 12px;
  color: white;
  border-radius: 6px;
  font-weight: bold;
  text-align: center;
  animation: colorCycle 4s infinite linear;
}
@keyframes colorCycle {
  0%   { background-color: #0284c7; }
  33%  { background-color: #10b981; }
  66%  { background-color: #f59e0b; }
  100% { background-color: #0284c7; }
}`,
        explanation: 'Demonstrates multi-checkpoint keyframe control.'
      }
    ],
    quizQuestions: [
      {
        id: 'd18-q1',
        question: 'Which CSS rule is used to define the timeline checkpoints of an animation?',
        options: [
          '@keyframes',
          '@animation',
          '@timeline',
          '@transitions'
        ],
        correctAnswer: 0,
        explanation: '@keyframes specifies the styles at different points in the animation sequence.'
      },
      {
        id: 'd18-q2',
        question: 'What is the default duration of a CSS animation if omitted?',
        options: [
          '0s (Animation will not play)',
          '1s',
          'Infinity',
          '300ms'
        ],
        correctAnswer: 0,
        explanation: 'If animation-duration is not specified, it defaults to 0s and does not execute.'
      }
    ]
  },
  {
    day: 19,
    module: 'CSS',
    title: 'CSS Media Queries & Responsive Design',
    subtitle: 'Responsive design vs media queries, min-width vs max-width, breakpoints & mobile-first',
    keyIdea: 'Responsive design is the goal (website looks great on any screen); Media queries are the tool used to achieve that goal.',
    analogy: 'Water poured into different containers. In a narrow glass (mobile phone), water stacks into a tall column. In a broad plate (desktop monitor), water spreads into a wide multi-column pool. The website adapts to fit the container glass.',
    definition: 'Responsive Web Design (RWD) ensures web pages render gracefully across smartphones, tablets, laptops, and ultra-wide desktops. Media queries are CSS @rules that apply specific styles only when viewport dimensions match specified conditions.',
    whyUseIt: 'Over 60% of all internet browsing happens on mobile devices. Websites that do not adapt force users to zoom and pan horizontally, resulting in high bounce rates and ruined user experience.',
    syntaxBreakdown: [
      { part: '@media', description: 'The CSS at-rule declaring conditional media evaluation.', example: '@media ... { }' },
      { part: '(min-width: 768px)', description: 'MOBILE-FIRST: Applies styles only when screen width is 768px OR WIDER.', example: '@media (min-width: 768px)' },
      { part: '(max-width: 600px)', description: 'DESKTOP-FIRST: Applies styles only when screen width is 600px OR NARROWER.', example: '@media (max-width: 600px)' },
      { part: 'Breakpoints', description: 'Strategic pixel widths where layout shifts: Mobile (<600px), Tablet (600-1024px), Desktop (>1024px).', example: '768px, 1024px' },
      { part: 'Fluid Layouts (%)', description: 'Using percentage and max-width instead of rigid fixed pixel widths.', example: 'width: 100%; max-width: 1200px;' },
      { part: 'Responsive Typography', description: 'Using rem, vw, or fluid scaling so headings adjust proportionally on mobile.', example: 'font-size: clamp(1.2rem, 3vw, 2rem);' }
    ],
    validValuesOrTypes: [
      { name: 'min-width (Mobile-First)', meaning: 'Starts small, scales up', syntax: '@media (min-width: 768px)', example: '@media (min-width: 768px) { ... }', expectedBehavior: 'Styles kick in on tablets and desktop.' },
      { name: 'max-width (Desktop-First)', meaning: 'Starts large, scales down', syntax: '@media (max-width: 600px)', example: '@media (max-width: 600px) { ... }', expectedBehavior: 'Styles kick in only on mobile screens.' },
      { name: 'Mobile-first Approach', meaning: 'Base CSS is Mobile', syntax: 'Base CSS -> @media min-width', example: 'Best practice in modern engineering', expectedBehavior: 'Lighter payload and faster loading on phones.' }
    ],
    defaultCode: {
      html: `<!-- MRDU Responsive Department Grid -->
<div class="responsive-wrapper">
  <h2>MRDU Academic Branches</h2>
  <div class="dept-flex-grid">
    <div class="dept-box">
      <h3>CSE Core</h3>
      <p>180 Seats</p>
    </div>
    <div class="dept-box">
      <h3>CSE (AIML)</h3>
      <p>60 Seats</p>
    </div>
    <div class="dept-box">
      <h3>CSE (Data Science)</h3>
      <p>60 Seats</p>
    </div>
  </div>
</div>`,
      css: `/* MOBILE-FIRST BASE STYLES (< 600px) */
.responsive-wrapper {
  font-family: sans-serif;
  padding: 10px;
}

.dept-flex-grid {
  display: flex;
  flex-direction: column; /* Stacks vertically on phone */
  gap: 12px;
}

.dept-box {
  background: #0284c7;
  color: white;
  padding: 16px;
  border-radius: 6px;
  text-align: center;
}

/* TABLET & DESKTOP ENHANCEMENT (>= 600px) */
@media (min-width: 600px) {
  .dept-flex-grid {
    flex-direction: row; /* Shifts side-by-side on larger screens */
  }
  .dept-box {
    flex: 1; /* Equal width distribution */
  }
}`
    },
    expectedOutputAscii: `Mobile View (< 600px):
+-------------------------------------------------+
| [ CSE Core (180 Seats)                        ] |
| [ CSE (AIML) (60 Seats)                       ] |
| [ CSE (Data Science) (60 Seats)               ] |
+-------------------------------------------------+

Tablet & Desktop View (>= 600px):
+-------------------------------------------------+
| [ CSE Core ]     [ CSE (AIML) ]    [ CSE (DS) ] |
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: 'flex-direction: column;', explanation: 'Base mobile CSS arranges cards in a natural single-column vertical stack.' },
      { line: '@media (min-width: 600px)', explanation: 'Evaluates screen width; triggers following block only when screen is 600px or wider.' },
      { line: 'flex-direction: row;', explanation: 'Swaps stack into a horizontal row for tablets and laptops.' },
      { line: 'flex: 1;', explanation: 'Distributes equal 1/3 width to each department box.' }
    ],
    commonMistakes: [
      { wrong: 'Confusing min-width with max-width', correct: 'min-width means "from this size and larger"; max-width means "up to this size and smaller"', why: 'Using max-width when intending mobile-first reverses your logic and leads to messy overrides.' },
      { wrong: 'Using fixed pixel widths: width: 1200px;', correct: 'Use fluid sizing: width: 100%; max-width: 1200px;', why: 'Fixed 1200px width forces mobile phone screens to generate ugly horizontal scrollbars.' }
    ],
    importantDifference: {
      title: 'Responsive Design vs. Media Queries',
      conceptA: 'Responsive Design: The overarching architectural goal (a site that feels native on any device).',
      conceptB: 'Media Query: One specific CSS tool used to achieve that goal.',
      comparison: 'Media queries are not the only way to achieve responsiveness; fluid % widths, Flexbox wrap, and auto-fit Grid also make sites responsive.'
    },
    memoryTrick: 'Min-Width = Mobile First (Starts small, expands up). Max-Width = Desktop First (Starts big, shrinks down).',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Background Color Switcher',
        task: 'Write a media query that changes the body background to light blue on mobile (<600px) and white on desktop.',
        hint: 'Use @media (max-width: 600px) { body { background: #e0f2fe; } }.',
        solutionHtml: `<p>Resize browser window to observe background change.</p>`,
        solutionCss: `body {
  background: #ffffff;
}
@media (max-width: 600px) {
  body {
    background: #e0f2fe;
  }
}`,
        explanation: 'Simple desktop-first media query demonstration.'
      },
      {
        difficulty: 'Medium',
        title: 'Responsive Navigation Bar',
        task: 'Build a navigation menu that displays as a vertical column on mobile, but shifts to a horizontal row with 15px gap on screens wider than 768px.',
        hint: 'Base CSS flex-direction: column; media query min-width: 768px flex-direction: row.',
        solutionHtml: `<nav class="responsive-nav">
  <a href="#">Home</a>
  <a href="#">Academics</a>
  <a href="#">Placements</a>
</nav>`,
        solutionCss: `.responsive-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
@media (min-width: 768px) {
  .responsive-nav {
    flex-direction: row;
    gap: 20px;
  }
}`,
        explanation: 'Standard responsive navigation pattern.'
      },
      {
        difficulty: 'Challenge',
        title: '3-Tier Breakpoint Course Grid',
        task: 'Build a course grid that shows 1 column on mobile (<600px), 2 columns on tablets (600px - 1024px), and 3 columns on desktop (>1024px).',
        hint: 'Base 1fr; @media (min-width: 600px) repeat(2, 1fr); @media (min-width: 1024px) repeat(3, 1fr).',
        solutionHtml: `<div class="tier-grid">
  <div>Card 1</div><div>Card 2</div><div>Card 3</div>
</div>`,
        solutionCss: `/* Mobile */
.tier-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
/* Tablet */
@media (min-width: 600px) {
  .tier-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
/* Desktop */
@media (min-width: 1024px) {
  .tier-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
        explanation: 'Industry standard mobile-first 3-tier breakpoint implementation.'
      }
    ],
    quizQuestions: [
      {
        id: 'd19-q1',
        question: 'What does "@media (min-width: 768px)" target?',
        options: [
          'Devices with screen width of 768px OR WIDER (Tablets and Desktops)',
          'Devices with screen width of 768px OR SMALLER (Phones only)',
          'Only devices with exactly 768px width',
          'Only printed documents'
        ],
        correctAnswer: 0,
        explanation: 'min-width defines a lower boundary; the CSS applies to screens 768px and up.'
      },
      {
        id: 'd19-q2',
        question: 'Are "Responsive Design" and "Media Queries" the same thing?',
        options: [
          'No: Responsive Design is the overall goal; Media Query is a CSS technique to achieve it',
          'Yes: They are exact synonyms',
          'No: Media queries are only for audio and video',
          'Yes: Both only work on Apple devices'
        ],
        correctAnswer: 0,
        explanation: 'Responsive Design is the overall philosophy/result, while media queries are one of several technical tools used.'
      }
    ]
  },
  {
    day: 20,
    module: 'CSS',
    title: 'CSS Advanced',
    subtitle: 'outline vs border, overflow (visible, hidden, scroll, auto), float/clear & typography metrics',
    keyIdea: 'Advanced CSS provides precision control over overflow clipping, focus outlines, legacy floats, and typographic spacing.',
    analogy: 'Overflow is pouring 500ml of Chai into a 300ml cup. visible means it spills all over the desk; hidden means you slice off the excess; scroll means the cup grows a magic scroll wheel to reach every drop. Outline is like drawing a chalk ring around a picture frame without moving the frame.',
    definition: 'Day 20 unifies advanced styling controls: Outline (non-layout perimeter line), Overflow (handling content that exceeds container boundaries), Float & Clear (legacy wrap alignment), and Typographic Spacing (line-height, letter-spacing vs word-spacing).',
    whyUseIt: 'Essential for scrollable notice panels, accessible keyboard navigation focus rings, text justification, and preventing messy layout breaks when content runs longer than expected.',
    syntaxBreakdown: [
      { part: 'outline: width style color', description: 'Draws a boundary OUTSIDE the border that takes up ZERO space in the box model.', example: 'outline: 2px dashed #0284c7;' },
      { part: 'overflow: visible | hidden | scroll | auto', description: 'Controls what happens when inner content overflows its parent box dimensions.', example: 'overflow-y: auto;' },
      { part: 'float: left | right', description: 'Pushes an element to the side, allowing text to wrap naturally around it.', example: 'float: left; margin-right: 15px;' },
      { part: 'clear: both', description: 'Prevents following elements from wrapping alongside floated items.', example: 'clear: both;' },
      { part: 'text-align: left|center|right|justify', description: 'Aligns text lines inside block container.', example: 'text-align: justify;' },
      { part: 'letter-spacing vs word-spacing', description: 'letter-spacing sets space between characters; word-spacing sets space between words.', example: 'letter-spacing: 1px; word-spacing: 4px;' }
    ],
    validValuesOrTypes: [
      { name: 'overflow: auto', meaning: 'Smart Scrollbars', syntax: 'overflow: auto', example: 'overflow-y: auto', expectedBehavior: 'Shows scrollbars ONLY when content actually overflows.' },
      { name: 'overflow: hidden', meaning: 'Clip overflow', syntax: 'overflow: hidden', example: 'overflow: hidden', expectedBehavior: 'Clips content cleanly; prevents spillover.' },
      { name: 'line-height: 1.6', meaning: 'Reading line spacing', syntax: 'line-height: number', example: 'line-height: 1.6', expectedBehavior: 'Sets line height to 1.6 times font size.' },
      { name: 'outline-offset', meaning: 'Gap between border and outline', syntax: 'outline-offset: 3px', example: 'outline-offset: 2px', expectedBehavior: 'Creates a gap between border and focus ring.' }
    ],
    defaultCode: {
      html: `<!-- MRDU Advanced CSS Layout Components -->
<div class="advanced-demo">
  <div class="scroll-card">
    <h4>MRDU Urgent Notice Board</h4>
    <p>Notice 1: Semester fees due on October 10 without late fee penalty.</p>
    <p>Notice 2: Web Tech Practical lab timing shifted to Room 204.</p>
    <p>Notice 3: Library open until midnight for final exam preparations.</p>
    <p>Notice 4: Coding Club Hackathon registration deadline extended!</p>
  </div>

  <div class="typography-card">
    <h4>CSE Editorial Column</h4>
    <p class="custom-type">
      Computer Science education at MRDU emphasizes real-world systems engineering, 
      algorithmic thinking, and scalable modern web architecture.
    </p>
    <button class="focus-btn">Keyboard Focusable Button</button>
  </div>
</div>`,
      css: `.advanced-demo {
  display: flex;
  gap: 15px;
  font-family: sans-serif;
  flex-wrap: wrap;
}

/* 1. Overflow Scroll Box */
.scroll-card {
  width: 220px;
  height: 140px;
  border: 1px solid #cbd5e1;
  padding: 12px;
  border-radius: 6px;
  background: #f8fafc;
  overflow-y: auto; /* Adds scrollbar only when content overflows */
  font-size: 13px;
}
.scroll-card h4 {
  margin-top: 0;
  color: #0284c7;
}

/* 2. Typographic Polish & Outline */
.typography-card {
  flex: 1;
  min-width: 220px;
  border: 1px solid #cbd5e1;
  padding: 12px;
  border-radius: 6px;
  font-size: 13px;
}

.custom-type {
  text-align: justify;
  line-height: 1.6;
  letter-spacing: 0.5px;
  word-spacing: 2px;
  color: #334155;
}

.focus-btn {
  background: #0284c7;
  color: white;
  border: 2px solid #0369a1;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
}
.focus-btn:focus {
  /* Outline doesn't alter box model dimensions! */
  outline: 3px solid #f59e0b;
  outline-offset: 2px;
}`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| [ Urgent Notice Board ]  | [ CSE Editorial ]    |
| Notice 1: Sem fees... [^]| Computer Science     |
| Notice 2: Web Tech... |#|| education at MRDU    | (Justified)
| Notice 3: Library...  [v]| emphasizes...        |
| (Scrollable container)   | [ Focus Button ]     |
|                          | (Amber outline ring) |
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: 'overflow-y: auto;', explanation: 'Injects a vertical scrollbar automatically because the 4 notices exceed the 140px box height.' },
      { line: 'text-align: justify;', explanation: 'Aligns text along both left and right edges, adjusting inter-word spacing.' },
      { line: 'line-height: 1.6;', explanation: 'Sets comfortable reading distance between consecutive lines of text.' },
      { line: 'outline: 3px solid #f59e0b;', explanation: 'Draws a high-contrast focus ring that does not alter box model layout dimensions.' }
    ],
    commonMistakes: [
      { wrong: 'Confusing letter-spacing with word-spacing: letter-spacing: 8px;', correct: 'letter-spacing: 0.5px; word-spacing: 6px;', why: 'letter-spacing adds space between EVERY individual character, turning sentences into unreadable disjointed letters.' },
      { wrong: 'Using border instead of outline for keyboard :focus indicators', correct: 'Use outline: 2px solid ...', why: 'Adding a 2px border on :focus increases box dimensions and causes the button to visibly jerk and jump surrounding layout.' }
    ],
    importantDifference: {
      title: 'Border vs. Outline',
      conceptA: 'Border: Part of the CSS Box Model. Adds to the element physical dimensions and can be styled per side (border-top).',
      conceptB: 'Outline: Floats outside the border. Does NOT take up any space in the layout and cannot be set per-side.',
      comparison: 'Use borders for cards and visual frames; use outlines for accessibility keyboard focus rings.'
    },
    memoryTrick: 'Borders build walls that take space; Outlines shine lights that take zero space.',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Scrollable Notice Box',
        task: 'Build a container with height 80px and overflow-y: scroll containing 4 long paragraphs.',
        hint: 'Use height: 80px; overflow-y: scroll;.',
        solutionHtml: `<div class="scroll-box">
  <p>Item 1</p><p>Item 2</p><p>Item 3</p><p>Item 4</p>
</div>`,
        solutionCss: `.scroll-box {
  height: 80px;
  overflow-y: scroll;
  border: 1px solid #94a3b8;
  padding: 8px;
}`,
        explanation: 'Enforces scrollable vertical view.'
      },
      {
        difficulty: 'Medium',
        title: 'Typographic Spacing Control',
        task: 'Style an article with text-align: justify, line-height: 1.8, and letter-spacing: 1px.',
        hint: 'Apply text-align, line-height, and letter-spacing.',
        solutionHtml: `<p class="editorial">MRDU Research Center conducts cutting-edge computing investigations in deep neural architectures.</p>`,
        solutionCss: `.editorial {
  text-align: justify;
  line-height: 1.8;
  letter-spacing: 1px;
  color: #1e293b;
}`,
        explanation: 'Polishes reading ergonomics.'
      },
      {
        difficulty: 'Challenge',
        title: 'Accessible Focus Ring with Outline Offset',
        task: 'Create an accessible button that displays an outline: 3px solid #0284c7 with outline-offset: 4px when focused via keyboard Tab key.',
        hint: 'Use :focus pseudo-class with outline and outline-offset.',
        solutionHtml: `<button class="accessible-btn">Submit Exam Form</button>`,
        solutionCss: `.accessible-btn {
  background: #0f172a;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
}
.accessible-btn:focus {
  outline: 3px solid #0284c7;
  outline-offset: 4px;
}`,
        explanation: 'Provides an accessible focus indicator without shifting layout geometry.'
      }
    ],
    quizQuestions: [
      {
        id: 'd20-q1',
        question: 'Which of the following does NOT take up any space in the CSS Box Model calculations?',
        options: [
          'outline',
          'border',
          'padding',
          'content'
        ],
        correctAnswer: 0,
        explanation: 'outline floats outside the border edge and has zero impact on box model dimensions or adjacent elements.'
      },
      {
        id: 'd20-q2',
        question: 'Which overflow value adds scrollbars ONLY if the content actually exceeds the container dimensions?',
        options: [
          'overflow: auto',
          'overflow: scroll',
          'overflow: hidden',
          'overflow: visible'
        ],
        correctAnswer: 0,
        explanation: 'overflow: auto is the smart mode; it suppresses scrollbars when content fits, and reveals them only when content overflows.'
      }
    ]
  }
];
