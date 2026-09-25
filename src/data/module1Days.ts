import { DayLesson } from '../types';
import { day1ComprehensiveNotes } from './day1ComprehensiveNotes';

export const module1Days: DayLesson[] = [
  {
    day: 1,
    module: 'HTML',
    title: 'Introduction to Web & HTML Fundamentals',
    subtitle: 'Web Anatomy, Client-Server Model, Browsers & HTML File Architecture',
    keyIdea: 'HTML is the structural skeleton of every webpage on the internet.',
    analogy: 'Building a webpage is like building the MRDU College campus. HTML is the steel rebar, concrete pillars, and brick walls. It defines where rooms, doors, and corridors exist.',
    definition: 'HTML (HyperText Markup Language) is the standard declarative markup language used to build and organize the structural content of documents displayed in web browsers.',
    whyUseIt: 'Without HTML, a computer browser cannot distinguish between a headline, an image, a clickable button, or a paragraph. HTML provides standard tags that tell the browser what each piece of content represents.',
    structuredDay1Notes: day1ComprehensiveNotes,
    syntaxBreakdown: [
      { part: '<tagname>', description: 'Opening Tag: Signals the browser that an element of this type begins here.', example: '<p>' },
      { part: 'Content', description: 'The inner text, image, or media displayed to the website user.', example: 'Welcome to MRDU College' },
      { part: '</tagname>', description: 'Closing Tag: Has a forward slash (/) that marks the end of this element.', example: '</p>' },
      { part: 'Element', description: 'The complete unit consisting of opening tag, content, and closing tag.', example: '<p>Welcome to MRDU College</p>' },
      { part: '.html extension', description: 'The file suffix that informs operating systems and servers to treat the file as a web document.', example: 'index.html' }
    ],
    validValuesOrTypes: [
      { name: 'index.html', meaning: 'Default Root File', syntax: 'filename.html', example: 'index.html', expectedBehavior: 'Automatically served by web servers when visiting the domain root (e.g. mrdu.edu).' },
      { name: 'Client (Browser)', meaning: 'User-side Application', syntax: 'Chrome / Edge', example: 'Google Chrome', expectedBehavior: 'Sends HTTP requests and parses HTML/CSS code into interactive pixels.' },
      { name: 'Server', meaning: 'Remote Storage Host', syntax: 'Apache / Nginx / Node', example: 'Ubuntu Web Server', expectedBehavior: 'Listens for requests 24/7 and delivers HTML files over the network.' }
    ],
    defaultCode: {
      html: `<!-- MRDU College Portal - Day 1 First HTML File -->
<!DOCTYPE html>
<html>
  <head>
    <title>MRDU College - Official Portal</title>
  </head>
  <body>
    <h1>Welcome to MRDU College of Engineering</h1>
    <p>Empowering 1st-Year B.Tech Computer Science Students.</p>
    <button>Explore Campus</button>
  </body>
</html>`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| MRDU College - Official Portal                  |
+-------------------------------------------------+
| Welcome to MRDU College of Engineering          |
|                                                 |
| Empowering 1st-Year B.Tech Computer Science...  |
|                                                 |
| [ Explore Campus ]                              |
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: '<!DOCTYPE html>', explanation: 'Informs the browser engine to parse this document strictly using HTML5 modern standards mode.' },
      { line: '<html>', explanation: 'The root container enclosing all HTML code on the webpage.' },
      { line: '<head>', explanation: 'Contains invisible document metadata, character sets, and browser tab titles.' },
      { line: '<title>...</title>', explanation: 'Defines the exact title displayed on the operating system browser tab.' },
      { line: '<body>', explanation: 'The visual stage: every element visible to the visitor must reside between <body> and </body>.' },
      { line: '<h1>...</h1>', explanation: 'Level-1 primary heading representing the main subject of the document.' },
      { line: '<p>...</p>', explanation: 'Standard paragraph block element for readable body sentences.' },
      { line: '<button>...</button>', explanation: 'Creates an interactive clickable button element on the webpage.' }
    ],
    commonMistakes: [
      { wrong: 'index.html.txt or "my website.html"', correct: 'index.html', why: 'Spaces in filenames cause broken server URLs, and hidden .txt extensions prevent the browser from rendering HTML.' },
      { wrong: '<h1>MRDU College<h1>', correct: '<h1>MRDU College</h1>', why: 'Forgetting the forward slash (/) in the closing tag makes the browser treat following text as part of the heading.' },
      { wrong: '<p>Welcome</p', correct: '<p>Welcome</p>', why: 'Missing closing angle bracket (>) corrupts the DOM tree parsing.' }
    ],
    importantDifference: {
      title: 'HTML Tag vs. HTML Element',
      conceptA: 'HTML Tag: The individual bracketed keyword markers (<p> or </p>).',
      conceptB: 'HTML Element: The entire complete node including opening tag, inner content, and closing tag.',
      comparison: 'A tag is like a pair of bookends; an element is the bookends plus all the books sitting between them.'
    },
    memoryTrick: 'HTML = Houses, Towns, Maps, Landmarks (Provides physical structural coordinates; cannot paint walls).',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Create Your First HTML File',
        task: 'Write a basic HTML document with an h1 containing "MRDU CSE Department" and a paragraph with your roll number.',
        hint: 'Wrap your content inside <body> tags with matching closing tags.',
        solutionHtml: `<!DOCTYPE html>
<html>
  <head><title>My Roll Number</title></head>
  <body>
    <h1>MRDU CSE Department</h1>
    <p>Student Roll No: 26CS101</p>
  </body>
</html>`,
        explanation: 'The h1 element defines the main heading and p holds the roll number detail inside the body.'
      },
      {
        difficulty: 'Medium',
        title: 'Branch Announcement with Button',
        task: 'Create a page with an h1 heading for MRDU College, an h2 for "Admissions 2026", two paragraphs describing CSE and AIML, and a button labeled "Apply Now".',
        hint: 'Use h1, h2, two p tags, and one button tag inside the body.',
        solutionHtml: `<!DOCTYPE html>
<html>
  <head><title>MRDU Admissions</title></head>
  <body>
    <h1>MRDU College of Engineering</h1>
    <h2>Admissions 2026 Open</h2>
    <p>B.Tech Computer Science and Engineering: 180 Seats.</p>
    <p>B.Tech Artificial Intelligence and Machine Learning: 60 Seats.</p>
    <button>Apply Now</button>
  </body>
</html>`,
        explanation: 'Provides clear semantic structure with a prominent call-to-action button.'
      },
      {
        difficulty: 'Challenge',
        title: 'Simulate Client-Server Flow',
        task: 'Write a complete HTML document that explains how the browser requests a file from a server using 3 ordered steps inside paragraph tags.',
        hint: 'Explain: 1. User enters URL, 2. Server responds with HTML, 3. Browser renders pixels.',
        solutionHtml: `<!DOCTYPE html>
<html>
  <head><title>Client-Server Architecture</title></head>
  <body>
    <h1>How the Web Works at MRDU</h1>
    <p>Step 1: The browser (client) sends an HTTP GET request for index.html.</p>
    <p>Step 2: The MRDU web server locates index.html on its disk and transmits raw text back.</p>
    <p>Step 3: The browser rendering engine parses tags and paints pixels on screen.</p>
  </body>
</html>`,
        explanation: 'Clearly articulates the fundamental client-server request/response cycle.'
      }
    ],
    quizQuestions: [
      {
        id: 'd1-q1',
        question: 'What is the correct Basic Structure of an HTML document?',
        codeSnippet: `Option A:
<!DOCTYPE html><html><head></head><body>Your code goes here</body></html>

Option B:
<!DOCTYPE html><html><head>Your code goes here</head></html>`,
        options: [
          'Option A: Head contains metadata, Body contains visible content',
          'Option B: Head contains all visible code directly',
          'Neither is correct',
          'Both are equally valid in modern HTML'
        ],
        correctAnswer: 0,
        explanation: 'Visible user content must always be placed inside the <body> tag. The <head> tag is reserved for metadata, title, and links.'
      },
      {
        id: 'd1-q2',
        question: 'What does HTML stand for?',
        options: [
          'HyperText Markup Language',
          'High Tech Modern Language',
          'Hyper Transfer Mode Logic',
          'Home Tool Management Layout'
        ],
        correctAnswer: 0,
        explanation: 'HTML stands for HyperText (text with links) Markup (tags defining structure) Language.'
      },
      {
        id: 'd1-q3',
        question: 'Which of the following is an HTML Tag rather than an HTML Element?',
        options: [
          '<h1>',
          '<h1>MRDU College</h1>',
          '<p>Computer Science</p>',
          '<button>Submit</button>'
        ],
        correctAnswer: 0,
        explanation: '<h1> is an opening tag. When combined with content and a closing tag (<h1>...</h1>), it becomes a full HTML Element.'
      }
    ]
  },
  {
    day: 2,
    module: 'HTML',
    title: 'HTML Document Structure & Meta Tags',
    subtitle: 'DOCTYPE, html, head, body, charset UTF-8, viewport & responsive configuration',
    keyIdea: 'The <head> is like the college ID card of a webpage; <body> is the physical student attending class.',
    analogy: 'Think of an HTML document as a student profile. The <head> contains unseen official data (registration number, blood group, permissions). The <body> contains the actual visible student.',
    definition: 'Document Structure is the baseline organizational hierarchy required by web engines to parse and layout a page. Meta tags provide machine-readable metadata about character encoding, viewport sizing, and search descriptions.',
    whyUseIt: 'Without proper meta tags, mobile phones will display desktop pages zoomed out at microscopic sizes (980px virtual width), and special characters will turn into garbled symbols (mojibake).',
    syntaxBreakdown: [
      { part: '<!DOCTYPE html>', description: 'Prolog declaration that triggers standard modern HTML5 rendering mode.', example: '<!DOCTYPE html>' },
      { part: '<html lang="en">', description: 'The root element wrapping everything. lang="en" announces language to screen readers.', example: '<html lang="en">' },
      { part: '<meta charset="UTF-8">', description: 'Specifies Unicode 8-bit encoding, supporting all English, Hindi, math, and emoji characters.', example: '<meta charset="UTF-8">' },
      { part: '<meta name="viewport" content="...">', description: 'Instructs mobile browsers to scale the visual canvas 1:1 with device screen width.', example: 'width=device-width, initial-scale=1.0' },
      { part: '<title>', description: 'Sets the name displayed on the browser tab and search engine results.', example: '<title>MRDU Portal</title>' }
    ],
    validValuesOrTypes: [
      { name: 'charset="UTF-8"', meaning: 'Universal Unicode', syntax: 'UTF-8', example: '<meta charset="UTF-8">', expectedBehavior: 'Prevents symbol errors like â€™ instead of apostrophes.' },
      { name: 'width=device-width', meaning: 'Match Screen Glass', syntax: 'device-width', example: 'width=device-width', expectedBehavior: 'Renders at 390px on iPhone rather than 980px desktop fallback.' },
      { name: 'initial-scale=1.0', meaning: '100% Zoom Default', syntax: '1.0', example: 'initial-scale=1.0', expectedBehavior: 'Page starts with natural unzoomed 1:1 sizing.' }
    ],
    defaultCode: {
      html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="MRDU College 1st-Year Engineering Portal">
    <title>MRDU College - Structure Demo</title>
  </head>
  <body>
    <h1>Welcome to MRDU College</h1>
    <p>Notice: Mobile viewport meta tag is active!</p>
    <p>This layout adapts cleanly across phones, tablets, and laptops.</p>
  </body>
</html>`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| MRDU College - Structure Demo                   |
+-------------------------------------------------+
| Welcome to MRDU College                         |
|                                                 |
| Notice: Mobile viewport meta tag is active!     |
| This layout adapts cleanly across phones...     |
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: '<!DOCTYPE html>', explanation: 'Forces modern standards mode in web browsers.' },
      { line: '<html lang="en">', explanation: 'Root element with language set to English for assistive screen readers.' },
      { line: '<meta charset="UTF-8">', explanation: 'Enables full Unicode character set.' },
      { line: '<meta name="viewport"...>', explanation: 'Enforces mobile responsiveness by matching viewport width to screen width.' },
      { line: '<title>...</title>', explanation: 'Sets browser tab label.' },
      { line: '<body>...</body>', explanation: 'Encapsulates all visible user content.' }
    ],
    commonMistakes: [
      { wrong: '<head><p>Hello World</p></head>', correct: '<body><p>Hello World</p></body>', why: '<head> cannot contain visible elements. The browser will force the tag into body, corrupting structure.' },
      { wrong: 'Omitting <meta name="viewport">', correct: '<meta name="viewport" content="width=device-width, initial-scale=1.0">', why: 'Without viewport, mobile devices render pages microscopic at 980px.' }
    ],
    importantDifference: {
      title: '<head> vs. <body>',
      conceptA: '<head>: Invisible brain of the page holding meta tags, title, fonts, and stylesheets.',
      conceptB: '<body>: Visible physical stage containing all text, buttons, forms, and images.',
      comparison: 'What is inside <head> is read by browsers and Google; what is inside <body> is seen by human visitors.'
    },
    memoryTrick: 'Head for Brains (Meta info), Body for Bones (Visible content).',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Create Proper Boilerplate',
        task: 'Write a pristine HTML5 skeleton with lang="en", UTF-8 charset, and title "MRDU B.Tech Portal".',
        hint: 'Use <!DOCTYPE html>, html, head, meta, title, and body tags in order.',
        solutionHtml: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MRDU B.Tech Portal</title>
  </head>
  <body>
    <h1>MRDU Engineering Portal</h1>
  </body>
</html>`,
        explanation: 'Follows industry standards for a complete HTML5 document.'
      },
      {
        difficulty: 'Medium',
        title: 'Add Search Engine Meta Tags',
        task: 'Add meta description and author tags inside the head tag for MRDU College.',
        hint: 'Use <meta name="description" content="..."> and <meta name="author" content="...">.',
        solutionHtml: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Official portal for MRDU College of Engineering, CSE branch.">
    <meta name="author" content="MRDU Web Committee">
    <title>MRDU College</title>
  </head>
  <body>
    <h1>Admissions Desk</h1>
  </body>
</html>`,
        explanation: 'Enables search engines to display relevant snippets in search results.'
      },
      {
        difficulty: 'Challenge',
        title: 'Inspect Mobile Viewport Behavior',
        task: 'Create two pages (one with viewport meta, one without) and contrast their visual behavior on mobile screens.',
        hint: 'Demonstrate the difference with a wide table or text block.',
        solutionHtml: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive MRDU</title>
  </head>
  <body>
    <h1>Mobile-Optimized Header</h1>
    <p>This text adjusts to standard 16px size on mobile screens.</p>
  </body>
</html>`,
        explanation: 'The viewport meta tag guarantees readability without double-tap zooming.'
      }
    ],
    quizQuestions: [
      {
        id: 'd2-q1',
        question: 'Which tag contains information NOT visible directly on the webpage?',
        options: [
          '<head>',
          '<body>',
          '<h1>',
          '<p>'
        ],
        correctAnswer: 0,
        explanation: 'The <head> tag stores metadata, links to stylesheets, and the page title, none of which render on the body canvas.'
      },
      {
        id: 'd2-q2',
        question: 'What is the purpose of <meta name="viewport" content="width=device-width, initial-scale=1.0">?',
        options: [
          'Ensures the webpage matches the screen width of mobile devices',
          'Changes the background color to white',
          'Downloads Google Chrome on the user device',
          'Encrypts user passwords'
        ],
        correctAnswer: 0,
        explanation: 'The viewport meta tag prevents mobile browsers from defaulting to a 980px desktop zoom mode.'
      }
    ]
  },
  {
    day: 3,
    module: 'HTML',
    title: 'Heading & Paragraph Tags',
    subtitle: 'h1 through h6 hierarchy, p elements, semantic ranking & typography weights',
    keyIdea: 'Headings are like newspaper headlines; paragraphs are the story text underneath.',
    analogy: 'In a college library, h1 is the Name of the Building (MRDU Library), h2 is a Floor (2nd Floor - Computer Science), h3 is a Book Section (Data Structures), and p is a paragraph inside a book.',
    definition: 'Headings (<h1> to <h6>) define semantic document levels from highest (h1) to lowest (h6) rank. Paragraphs (<p>) encapsulate discrete blocks of prose.',
    whyUseIt: 'Search engines (Googlebot) and screen readers rely on heading hierarchy to index document structure. Never skip heading levels purely for visual font sizing.',
    syntaxBreakdown: [
      { part: '<h1>', description: 'Top-level heading. Standard practice is to have exactly ONE h1 per webpage.', example: '<h1>MRDU College</h1>' },
      { part: '<h2>', description: 'Major chapter/section title subordinate to h1.', example: '<h2>Departments</h2>' },
      { part: '<h3> to <h6>', description: 'Sub-tier headings descending in structural importance.', example: '<h3>CSE Core</h3>' },
      { part: '<p>', description: 'Paragraph element; browsers automatically inject vertical margin above and below.', example: '<p>Text...</p>' }
    ],
    validValuesOrTypes: [
      { name: 'h1', meaning: 'Document Title (Largest)', syntax: '<h1>...</h1>', example: '<h1>MRDU College</h1>', expectedBehavior: 'Renders in large bold font (~32px default).' },
      { name: 'h2', meaning: 'Section Header', syntax: '<h2>...</h2>', example: '<h2>Academics</h2>', expectedBehavior: 'Renders in medium-large bold font (~24px).' },
      { name: 'h6', meaning: 'Lowest Sub-header', syntax: '<h6>...</h6>', example: '<h6>Lab Section B</h6>', expectedBehavior: 'Renders in small bold font (~10-12px).' },
      { name: 'p', meaning: 'Body Paragraph', syntax: '<p>...</p>', example: '<p>Welcome</p>', expectedBehavior: 'Standard 16px body text with margin breaks.' }
    ],
    defaultCode: {
      html: `<!-- MRDU College Department Hierarchy -->
<h1>MRDU College of Engineering</h1>
<h2>Department of Computer Science</h2>
<p>The Department of Computer Science trains students in algorithms, systems, and software engineering.</p>

<h3>Academic Programs</h3>
<h4>1. B.Tech Computer Science Core</h4>
<p>Intake: 180 Students. Focus on Data Structures and Web Technologies.</p>

<h4>2. B.Tech CSE (Artificial Intelligence & ML)</h4>
<p>Intake: 60 Students. Focus on Neural Networks and Python.</p>`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| MRDU College of Engineering                     |
|                                                 |
| Department of Computer Science                  |
| The Department of Computer Science trains...    |
|                                                 |
| Academic Programs                               |
| 1. B.Tech Computer Science Core                 |
| Intake: 180 Students. Focus on Data...          |
|                                                 |
| 2. B.Tech CSE (Artificial Intelligence & ML)   |
| Intake: 60 Students. Focus on Neural...         |
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: '<h1>MRDU College...</h1>', explanation: 'Establishes the supreme document topic; critical for SEO.' },
      { line: '<h2>Department...</h2>', explanation: 'Primary division underneath the college title.' },
      { line: '<p>The Department...</p>', explanation: 'Introductory paragraph with automatic spacing.' },
      { line: '<h3>Academic Programs</h3>', explanation: 'Sub-topic grouping individual degree specializations.' },
      { line: '<h4>1. B.Tech...</h4>', explanation: 'Specific course heading subordinate to Academic Programs.' }
    ],
    commonMistakes: [
      { wrong: 'Using multiple <h1> tags randomly across one page', correct: 'One <h1> per page; use <h2> and <h3> for sub-sections', why: 'Multiple h1 tags confuse search engine crawlers regarding what the primary page topic is.' },
      { wrong: 'Skipping levels: <h1> to <h4> directly', correct: '<h1> -> <h2> -> <h3> -> <h4>', why: 'Screen readers allow blind users to jump heading by heading. Skipping levels creates broken navigational flow.' }
    ],
    importantDifference: {
      title: 'h1 vs. h6',
      conceptA: '<h1>: Highest structural importance, largest font, defines entire page subject.',
      conceptB: '<h6>: Lowest structural importance, smallest font, used for minor footnotes.',
      comparison: 'Think of 1 as 1st Rank Champion (Biggest and most important).'
    },
    memoryTrick: '1 is the King (Largest/Most Important); 6 is the Soldier (Smallest/Subordinate).',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Document Outline',
        task: 'Create a page with your Name (h1), your branch (h2), your semester (h3), and a paragraph describing your ambition.',
        hint: 'Use h1, h2, h3, and p in descending order.',
        solutionHtml: `<h1>Rahul Verma</h1>
<h2>Computer Science & Engineering</h2>
<h3>Second Semester</h3>
<p>My goal is to master Front-End Web Development and contribute to open-source software.</p>`,
        explanation: 'Creates a clean, logical semantic outline.'
      },
      {
        difficulty: 'Medium',
        title: 'Campus Tour Outline',
        task: 'Build a 3-tier heading outline for MRDU Campus Tour: Campus (h1) -> Zones (h2) -> Specific Labs (h3) -> Lab details (p).',
        hint: 'Campus (h1) -> Academic Block (h2) -> Turing Lab (h3) -> p.',
        solutionHtml: `<h1>MRDU Campus Tour</h1>
<h2>Academic Block A</h2>
<h3>Alan Turing Computing Lab</h3>
<p>Equipped with 60 high-performance workstations for compiler design labs.</p>
<h3>Ada Lovelace AI Center</h3>
<p>Dedicated server cluster for training deep learning models.</p>`,
        explanation: 'Demonstrates hierarchical sub-sectioning.'
      },
      {
        difficulty: 'Challenge',
        title: 'Full 6-Level Hierarchy',
        task: 'Construct a valid document outline utilizing all 6 heading levels (h1 to h6) in strict logical order without skipping any step.',
        hint: 'Country -> State -> University -> Faculty -> Department -> Subject.',
        solutionHtml: `<h1>India Higher Education</h1>
<h2>State Technical University</h2>
<h3>MRDU College of Engineering</h3>
<h4>School of Computing</h4>
<h5>B.Tech 1st Year</h5>
<h6>Section C Coding Lab</h6>
<p>Lab session underway from 9:00 AM to 12:00 PM.</p>`,
        explanation: 'Enforces complete understanding of strict semantic tree nesting.'
      }
    ],
    quizQuestions: [
      {
        id: 'd3-q1',
        question: 'The HTML h1 element is known as the ______ element.',
        options: [
          'main heading',
          'paragraph',
          'button',
          'footer'
        ],
        correctAnswer: 0,
        explanation: 'h1 stands for Heading 1 and represents the main heading of a web page.'
      },
      {
        id: 'd3-q2',
        question: 'Which heading tag produces the SMALLEST font size by default?',
        options: [
          '<h6>',
          '<h1>',
          '<h3>',
          '<h4>'
        ],
        correctAnswer: 0,
        explanation: 'h6 represents the 6th and lowest heading level, rendering with the smallest font size.'
      }
    ]
  },
  {
    day: 4,
    module: 'HTML',
    title: 'Text Formatting & Inline Elements',
    subtitle: 'b, strong, i, em, u, strikethrough (s/del), sub, sup & inline flow mechanics',
    keyIdea: 'Inline elements flow within a sentence like words in a line; formatting tags highlight or emphasize specific words.',
    analogy: 'Writing a lecture note with a pen: strong is writing in bold red ink for exam importance; em is slanting text for tone; sup is writing mathematical powers (X²); sub is chemical formulas (H₂O).',
    definition: 'Inline elements consume only the horizontal space required by their content without breaking onto a new line. Formatting tags convey either visual styling (presentational) or semantic importance.',
    whyUseIt: 'Allows emphasizing key terms, writing mathematical equations, chemistry formulas, and highlighting terms without disrupting the flow of a paragraph.',
    syntaxBreakdown: [
      { part: '<b> vs <strong>', description: '<b> applies visual boldness. <strong> signals high importance to screen readers and SEO.', example: '<strong>WARNING</strong>' },
      { part: '<i> vs <em>', description: '<i> provides visual italicization. <em> provides semantic vocal stress emphasis.', example: '<em>Crucial</em>' },
      { part: '<sub>', description: 'Subscript: Aligns text slightly lower than the baseline with reduced font size.', example: 'H<sub>2</sub>O' },
      { part: '<sup>', description: 'Superscript: Aligns text slightly higher than the baseline.', example: '(A+B)<sup>2</sup>' },
      { part: '<del> / <s>', description: 'Strikethrough: Represents deleted, expired, or discounted information.', example: '<del>₹50,000</del>' }
    ],
    validValuesOrTypes: [
      { name: '<strong>', meaning: 'High Importance', syntax: '<strong>...</strong>', example: '<strong>Required</strong>', expectedBehavior: 'Screen readers read with urgent vocal emphasis; bolded.' },
      { name: '<em>', meaning: 'Stressed Emphasis', syntax: '<em>...</em>', example: '<em>Must attend</em>', expectedBehavior: 'Screen readers alter pitch/stress; italicized.' },
      { name: '<sub>', meaning: 'Chemical Subscript', syntax: '<sub>...</sub>', example: 'CO<sub>2</sub>', expectedBehavior: 'Drops lower half-step below standard baseline.' },
      { name: '<sup>', meaning: 'Mathematical Power', syntax: '<sup>...</sup>', example: 'X<sup>3</sup>', expectedBehavior: 'Rises half-step above standard character height.' }
    ],
    defaultCode: {
      html: `<!-- MRDU Chemistry & Math Department Notes -->
<p>
  <strong>NOTICE:</strong> The <em>Engineering Chemistry</em> exam date is finalized.
</p>
<p>
  Chemical reaction formula: 
  2H<sub>2</sub> + O<sub>2</sub> &rarr; 2H<sub>2</sub>O
</p>
<p>
  Quadratic formula expansion: 
  (A + B)<sup>2</sup> = A<sup>2</sup> + 2AB + B<sup>2</sup>
</p>
<p>
  Tuition Fee Discount: 
  Original Fee: <del>₹1,20,000</del> <strong>Now: ₹95,000</strong>
</p>`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| NOTICE: The Engineering Chemistry exam date...  |
|                                                 |
| Chemical reaction formula:                      |
| 2H2 + O2 -> 2H2O  (2's in subscript)            |
|                                                 |
| Quadratic formula expansion:                    |
| (A + B)^2 = A^2 + 2AB + B^2 (powers raised)     |
|                                                 |
| Tuition Fee: ~1,20,000~ Now: 95,000             |
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: '<strong>NOTICE:</strong>', explanation: 'Bold and semantically critical alert read emphatically by screen readers.' },
      { line: '<em>Engineering Chemistry</em>', explanation: 'Applies semantic verbal emphasis in italics.' },
      { line: 'H<sub>2</sub>O', explanation: 'Lowers numeral 2 below baseline for correct chemical typography.' },
      { line: '(A + B)<sup>2</sup>', explanation: 'Raises exponent 2 above baseline for mathematical powers.' },
      { line: '<del>₹1,20,000</del>', explanation: 'Draws a horizontal strikethrough line over the superseded tuition fee.' }
    ],
    commonMistakes: [
      { wrong: 'Using <u> (underline) for normal text emphasis', correct: 'Use <em> or <strong>', why: 'Users universally associate underlined web text with clickable hyperlinks. Underlining normal text creates confusion.' },
      { wrong: 'Confusing <sub> and <sup>: H<sup>2</sup>O', correct: 'H<sub>2</sub>O', why: '<sub> goes SUB (down like submarine); <sup> goes SUPER (up like superman).' }
    ],
    importantDifference: {
      title: '<b> vs. <strong>',
      conceptA: '<b>: Purely visual bold style. No added meaning or accessibility signal.',
      conceptB: '<strong>: Semantic importance. Alerts screen readers and search engines that text is critical.',
      comparison: 'Always prefer <strong> when the text represents important warnings, deadlines, or key terms.'
    },
    memoryTrick: 'SUB = Submarine (Goes down below baseline). SUP = Superman (Flies up above baseline).',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Chemical Formula',
        task: 'Write the chemical formula for Glucose (C6H12O6) using <sub> tags.',
        hint: 'Wrap every number (6, 12, 6) in <sub> tags.',
        solutionHtml: `<p>Glucose Formula: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></p>`,
        explanation: 'Demonstrates proper use of subscript for molecular formulas.'
      },
      {
        difficulty: 'Medium',
        title: 'Physics Kinetic Energy Formula',
        task: 'Write the formula for Kinetic Energy: KE = 1/2 * m * v^2 using <sup> tags.',
        hint: 'Wrap the exponent 2 in <sup>.',
        solutionHtml: `<p>Kinetic Energy: KE = &frac12;mv<sup>2</sup></p>`,
        explanation: 'Correctly formats physical exponent notation.'
      },
      {
        difficulty: 'Challenge',
        title: 'College Admissions Notice',
        task: 'Construct a paragraph announcing that the last date was <del>August 10</del> but is now <strong>extended to August 25</strong>, with <em>mandatory</em> registration.',
        hint: 'Combine del, strong, and em inside a single sentence.',
        solutionHtml: `<p>Admission Deadline: Previously <del>August 10</del>, applications are now <strong>extended to August 25</strong>. Online verification is <em>mandatory</em> for all B.Tech candidates.</p>`,
        explanation: 'Combines presentational strikethrough with semantic emphasis.'
      }
    ],
    quizQuestions: [
      {
        id: 'd4-q1',
        question: 'Which tag is used to write chemical formulas like H2O with lowered numbers?',
        options: [
          '<sub>',
          '<sup>',
          '<small>',
          '<down>'
        ],
        correctAnswer: 0,
        explanation: '<sub> stands for Subscript and places text slightly below the normal baseline.'
      },
      {
        id: 'd4-q2',
        question: 'What is the key difference between <b> and <strong>?',
        options: [
          '<strong> has semantic importance for screen readers, while <b> is purely visual',
          '<b> has larger font size than <strong>',
          '<strong> only works in Google Chrome',
          'There is zero difference in modern browsers'
        ],
        correctAnswer: 0,
        explanation: '<strong> informs accessibility software and search engines of high importance, whereas <b> only bolds text visually.'
      }
    ]
  },
  {
    day: 5,
    module: 'HTML',
    title: 'HTML Lists',
    subtitle: 'ul, ol, dl, dt, dd, li & nested multi-tier hierarchical list structures',
    keyIdea: 'Lists organize messy scattered data into clear, scannable bullet points or numbered sequences.',
    analogy: 'A shopping list for your hostel room is an Unordered List (order does not matter). The step-by-step algorithm to boil Maggi is an Ordered List (step 2 must follow step 1). A dictionary is a Description List.',
    definition: 'Lists group related items together. <ul> creates bulleted lists, <ol> creates numbered lists, and <dl> creates key-value pairs (terms and descriptions).',
    whyUseIt: 'Essential for navigation menus, feature checklists, course syllabi, algorithms, and technical glossaries.',
    syntaxBreakdown: [
      { part: '<ul>', description: 'Unordered List container. Items marked with bullet points.', example: '<ul>...</ul>' },
      { part: '<ol>', description: 'Ordered List container. Items marked with numbers or letters.', example: '<ol type="1">...</ol>' },
      { part: '<li>', description: 'List Item: The only valid direct child of <ul> and <ol>.', example: '<li>Data Structures</li>' },
      { part: '<dl>', description: 'Description List container for term-definition pairs.', example: '<dl>...</dl>' },
      { part: '<dt>', description: 'Description Term (the keyword or title being defined).', example: '<dt>RAM</dt>' },
      { part: '<dd>', description: 'Description Definition (the explanatory value for the term).', example: '<dd>Random Access Memory</dd>' }
    ],
    validValuesOrTypes: [
      { name: 'ol type="1"', meaning: 'Decimal Numbers (Default)', syntax: '<ol type="1">', example: '1, 2, 3...', expectedBehavior: 'Sequential Arabic numerals.' },
      { name: 'ol type="A"', meaning: 'Uppercase Letters', syntax: '<ol type="A">', example: 'A, B, C...', expectedBehavior: 'Alphabetical indexing.' },
      { name: 'ol type="I"', meaning: 'Roman Numerals', syntax: '<ol type="I">', example: 'I, II, III...', expectedBehavior: 'Uppercase Roman numbers.' },
      { name: 'ol start="5"', meaning: 'Offset Starting Index', syntax: '<ol start="5">', example: '5, 6, 7...', expectedBehavior: 'Begins numbering at index 5.' }
    ],
    defaultCode: {
      html: `<!-- MRDU Academic Syllabus & Glossary -->
<h2>MRDU B.Tech CSE Curriculum</h2>
<ul>
  <li>Semester 1
    <ol type="A">
      <li>Engineering Mathematics</li>
      <li>Computer Programming in C</li>
      <li>Digital Electronics</li>
    </ol>
  </li>
  <li>Semester 2
    <ol type="A">
      <li>Data Structures & Algorithms</li>
      <li>Web Development Fundamentals</li>
    </ol>
  </li>
</ul>

<h3>Technical Glossary</h3>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language: The skeleton of web pages.</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets: The presentation and makeup of web pages.</dd>
</dl>`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| MRDU B.Tech CSE Curriculum                      |
| * Semester 1                                    |
|    A. Engineering Mathematics                   |
|    B. Computer Programming in C                 |
|    C. Digital Electronics                       |
| * Semester 2                                    |
|    A. Data Structures & Algorithms              |
|    B. Web Development Fundamentals              |
|                                                 |
| Technical Glossary                              |
| HTML                                            |
|    HyperText Markup Language: The skeleton...   |
| CSS                                             |
|    Cascading Style Sheets: The presentation...  |
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: '<ul>', explanation: 'Creates top-level bulleted list.' },
      { line: '<li>Semester 1', explanation: 'First main list item containing a nested sub-list.' },
      { line: '<ol type="A">', explanation: 'Nested ordered list with uppercase letter indexing.' },
      { line: '<dl>', explanation: 'Initializes key-value dictionary list.' },
      { line: '<dt>HTML</dt>', explanation: 'Term being defined.' },
      { line: '<dd>HyperText...</dd>', explanation: 'Indented definition for HTML.' }
    ],
    commonMistakes: [
      { wrong: '<ul><h3>Semesters</h3><li>Sem 1</li></ul>', correct: '<h3>Semesters</h3><ul><li>Sem 1</li></ul>', why: 'Only <li> tags are allowed as direct children of <ul> and <ol>. Headings must stay outside.' },
      { wrong: 'Nesting <ol> directly inside <ul> without <li>', correct: '<ul><li>Parent Item<ol><li>Sub item</li></ol></li></ul>', why: 'A nested list must sit inside an <li> of the parent list.' }
    ],
    importantDifference: {
      title: '<ul> vs. <ol> vs. <dl>',
      conceptA: '<ul>: Unordered bulleted collection (order has no priority).',
      conceptB: '<ol>: Numbered sequence (step order is essential).',
      comparison: '<dl> is specifically for key-value definitions with terms (<dt>) and explanations (<dd>).'
    },
    memoryTrick: 'UL = Universal List (Bullets). OL = Order Logical (1, 2, 3). DL = Dictionary List.',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Daily To-Do List',
        task: 'Create an ordered list (<ol>) of 3 tasks you must accomplish before the first morning lecture.',
        hint: 'Use <ol> and 3 <li> elements.',
        solutionHtml: `<h3>Morning Routine</h3>
<ol>
  <li>Wake up at 6:30 AM</li>
  <li>Review Web Development Notes</li>
  <li>Reach MRDU Hall B by 8:45 AM</li>
</ol>`,
        explanation: 'Sequence matters for a morning routine, so an ordered list is ideal.'
      },
      {
        difficulty: 'Medium',
        title: 'Nested Department List',
        task: 'Create an unordered list of MRDU Departments, where CSE nests an ordered list of 3 branch specializations.',
        hint: 'Place <ol> inside the CSE <li> element.',
        solutionHtml: `<ul>
  <li>Mechanical Engineering</li>
  <li>Computer Science
    <ol>
      <li>CSE - Artificial Intelligence</li>
      <li>CSE - Data Science</li>
      <li>CSE - Cyber Security</li>
    </ol>
  </li>
  <li>Electrical Engineering</li>
</ul>`,
        explanation: 'Correctly nests a secondary ordered list inside a parent list item.'
      },
      {
        difficulty: 'Challenge',
        title: 'Computer Components Glossary',
        task: 'Construct a Description List (<dl>) defining CPU, GPU, and RAM with accurate technical definitions.',
        hint: 'Use <dl> with alternating <dt> and <dd> pairs.',
        solutionHtml: `<dl>
  <dt>CPU</dt>
  <dd>Central Processing Unit: The primary logic brain executing arithmetic instructions.</dd>
  <dt>GPU</dt>
  <dd>Graphics Processing Unit: Parallel processor specialized in matrix operations and 3D rendering.</dd>
  <dt>RAM</dt>
  <dd>Random Access Memory: High-speed volatile memory holding active execution data.</dd>
</dl>`,
        explanation: 'Demonstrates professional implementation of description lists.'
      }
    ],
    quizQuestions: [
      {
        id: 'd5-q1',
        question: 'Which tag is used to define an individual item inside an HTML list?',
        options: [
          '<li>',
          '<ul>',
          '<ol>',
          '<item>'
        ],
        correctAnswer: 0,
        explanation: '<li> stands for List Item and is used inside both <ul> and <ol> containers.'
      },
      {
        id: 'd5-q2',
        question: 'What are the two child tags used inside a Description List (<dl>)?',
        options: [
          '<dt> for term and <dd> for description',
          '<li> and <item>',
          '<term> and <def>',
          '<left> and <right>'
        ],
        correctAnswer: 0,
        explanation: '<dt> is Description Term and <dd> is Description Data/Definition.'
      }
    ]
  },
  {
    day: 6,
    module: 'HTML',
    title: 'HTML Links & Navigation',
    subtitle: 'a tag, href, absolute vs relative URLs, internal/external, anchor jumps (#) & target attribute',
    keyIdea: 'Links are bridges between web pages; without links, the web would be isolated islands.',
    analogy: 'A link is a doorway. Opening a door to another room in the same campus building is a Relative URL. Getting on an airplane to another country is an Absolute URL. Taking an elevator to the 3rd floor is an Anchor Jump (#).',
    definition: 'Hyperlinks created with the <a> (anchor) tag allow users to navigate between documents, jump to specific sections within the same page, or trigger external protocols (email, phone).',
    whyUseIt: 'Enables website navigation bars, citations, resource downloads, and single-page section jumps.',
    syntaxBreakdown: [
      { part: '<a ...>', description: 'Anchor tag opening. Must contain destination attributes.', example: '<a href="...">Link</a>' },
      { part: 'href="..."', description: 'Hypertext Reference: The target URL or destination file path.', example: 'href="placements.html"' },
      { part: 'target="_blank"', description: 'Instructs the browser to open the link in a fresh browser tab.', example: 'target="_blank"' },
      { part: 'href="#section-id"', description: 'Same-page anchor link that scrolls viewport directly to the matching id.', example: 'href="#contact"' },
      { part: 'mailto: / tel:', description: 'Special link protocols that launch default email client or phone dialer.', example: 'href="mailto:help@mrdu.edu"' }
    ],
    validValuesOrTypes: [
      { name: 'Absolute URL', meaning: 'Complete External Web Address', syntax: 'https://example.com/page', example: 'https://aicte-india.org', expectedBehavior: 'Navigates to external server.' },
      { name: 'Relative URL', meaning: 'Local File in Same Project', syntax: 'filename.html OR folder/file.html', example: 'branches.html', expectedBehavior: 'Loads local sibling or subfolder file.' },
      { name: 'Anchor Jump', meaning: 'Same-page Section Target', syntax: '#elementId', example: '#admissions', expectedBehavior: 'Smoothly jumps viewport to element with id="admissions".' },
      { name: 'target="_blank"', meaning: 'New Tab', syntax: '_blank', example: 'target="_blank"', expectedBehavior: 'Opens link in a new window/tab.' }
    ],
    defaultCode: {
      html: `<!-- MRDU College Navigation Bar -->
<nav>
  <a href="index.html">Home</a> |
  <a href="placements.html">Placements</a> |
  <a href="https://www.aicte-india.org" target="_blank">AICTE Portal (External)</a> |
  <a href="#contact-us">Jump to Contact</a>
</nav>

<div style="height: 120px; padding: 10px; background: #e2e8f0; margin: 15px 0;">
  <h3>Campus News Feed</h3>
  <p>Scroll down to see the contact details...</p>
</div>

<footer id="contact-us" style="background: #1e293b; color: white; padding: 15px;">
  <h4>MRDU College Helpdesk</h4>
  <p>Email: <a href="mailto:admissions@mrdu.edu" style="color: #60a5fa;">admissions@mrdu.edu</a></p>
  <p>Phone: <a href="tel:+919876543210" style="color: #60a5fa;">+91 98765 43210</a></p>
</footer>`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| Home | Placements | AICTE Portal | Jump to Contact |
|                                                 |
| [ Campus News Feed Container ]                  |
| Scroll down to see the contact details...       |
|                                                 |
| MRDU College Helpdesk                           |
| Email: admissions@mrdu.edu                      |
| Phone: +91 98765 43210                          |
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: '<nav>', explanation: 'Semantic container wrapping primary site navigation links.' },
      { line: '<a href="index.html">', explanation: 'Relative link targeting local homepage in current folder.' },
      { line: 'target="_blank"', explanation: 'Forces external AICTE website to launch in a new browser tab.' },
      { line: '<a href="#contact-us">', explanation: 'Internal jump targeting element with id="contact-us".' },
      { line: '<footer id="contact-us">', explanation: 'Receiving target of the anchor link.' },
      { line: 'href="mailto:..."', explanation: 'Opens user default mail client addressed to MRDU admissions.' }
    ],
    commonMistakes: [
      { wrong: '<a href="contact-us">Contact</a> (missing #)', correct: '<a href="#contact-us">Contact</a>', why: 'Without #, the browser tries to find a file named contact-us.html instead of scrolling on the same page.' },
      { wrong: '<a href="www.google.com">Google</a>', correct: '<a href="https://www.google.com">Google</a>', why: 'Missing protocol (https://) causes browser to treat it as a local relative path (localhost/www.google.com).' }
    ],
    importantDifference: {
      title: 'Absolute URL vs. Relative URL',
      conceptA: 'Absolute URL: Full address including protocol (https://) and domain. Used for external sites.',
      conceptB: 'Relative URL: Local path relative to current file location (e.g. about.html). Used for internal pages.',
      comparison: 'If your site changes domains, relative links never break; absolute links to external sites remain static.'
    },
    memoryTrick: 'HREF = Hypertext REFerence (Where should this click travel?).',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'External Resource Link',
        task: 'Create an anchor tag linking to Wikipedia Computer Science that opens in a new tab.',
        hint: 'Use href="https://..." and target="_blank".',
        solutionHtml: `<a href="https://en.wikipedia.org/wiki/Computer_science" target="_blank">Computer Science Wiki</a>`,
        explanation: 'Standard external link format.'
      },
      {
        difficulty: 'Medium',
        title: 'Two-Page Interlink',
        task: 'Write code for a navigation bar with links between home.html, branches.html, and fees.html.',
        hint: 'Use relative file names in the href attribute.',
        solutionHtml: `<nav>
  <a href="home.html">Home</a> |
  <a href="branches.html">Branches</a> |
  <a href="fees.html">Fee Structure</a>
</nav>`,
        explanation: 'Enables multi-page website navigation.'
      },
      {
        difficulty: 'Challenge',
        title: 'Single-Page FAQ Jumper',
        task: 'Create 3 FAQ question links at the top that jump directly to 3 answer paragraphs at the bottom using anchor IDs.',
        hint: 'Link to #faq1, #faq2, #faq3 and assign matching ids on the headings.',
        solutionHtml: `<nav>
  <a href="#q1">Q1: Admission Date?</a> |
  <a href="#q2">Q2: Hostel Fees?</a> |
  <a href="#q3">Q3: Bus Routes?</a>
</nav>
<div style="height: 100px;"></div>
<h3 id="q1">Q1: Admission Date?</h3>
<p>Admissions close on August 31.</p>
<h3 id="q2">Q2: Hostel Fees?</h3>
<p>Annual hostel fee is ₹65,000.</p>
<h3 id="q3">Q3: Bus Routes?</h3>
<p>Buses cover all major city points.</p>`,
        explanation: 'Smoothly navigates single-page documentation.'
      }
    ],
    quizQuestions: [
      {
        id: 'd6-q1',
        question: 'Which attribute specifies the destination URL of a link in the <a> tag?',
        options: [
          'href',
          'src',
          'link',
          'target'
        ],
        correctAnswer: 0,
        explanation: 'href stands for Hypertext Reference and defines the destination URL.'
      },
      {
        id: 'd6-q2',
        question: 'How do you tell the browser to open a link in a new browser tab?',
        options: [
          'target="_blank"',
          'target="_new"',
          'open="newtab"',
          'href="_blank"'
        ],
        correctAnswer: 0,
        explanation: 'target="_blank" is the standard HTML value to instruct browsers to spawn a new tab/window.'
      }
    ]
  },
  {
    day: 7,
    module: 'HTML',
    title: 'HTML Images & Media Elements',
    subtitle: 'img, src, alt, JPG, PNG, GIF, SVG, responsive images & picture element',
    keyIdea: 'Images communicate visually; without alt text, search engines and visually impaired students are blind.',
    analogy: 'An <img> tag is like a photo frame hung on the MRDU corridor wall. The frame itself does not have a photo painted on it; it holds a paper picture located at a specific file path (src).',
    definition: 'The <img> tag embeds raster or vector graphics into a webpage. It is a void element (no closing tag). The <picture> element provides responsive art direction by serving different image files based on screen size.',
    whyUseIt: 'Display college logos, campus maps, student photos, diagrams, and responsive visual assets.',
    syntaxBreakdown: [
      { part: '<img ...>', description: 'Self-closing void element. Never write </img>.', example: '<img src="..." alt="...">' },
      { part: 'src="..."', description: 'Source: Path to the image file (relative or absolute).', example: 'src="images/campus.jpg"' },
      { part: 'alt="..."', description: 'Alternative Text: Displayed if image fails to load; read by screen readers for accessibility.', example: 'alt="MRDU Main Building"' },
      { part: 'width / height', description: 'Dimensions in pixels. Prevents Cumulative Layout Shift (CLS) as image loads.', example: 'width="300" height="200"' },
      { part: '<picture>', description: 'Container holding multiple <source> tags and a fallback <img> for responsive art direction.', example: '<picture><source ...><img></picture>' }
    ],
    validValuesOrTypes: [
      { name: 'JPG / JPEG', meaning: 'Joint Photographic Experts Group', syntax: '.jpg', example: 'campus.jpg', expectedBehavior: 'Best for complex photographs; smaller file sizes with lossy compression.' },
      { name: 'PNG', meaning: 'Portable Network Graphics', syntax: '.png', example: 'logo.png', expectedBehavior: 'Lossless compression; supports transparent backgrounds.' },
      { name: 'SVG', meaning: 'Scalable Vector Graphics', syntax: '.svg', example: 'icon.svg', expectedBehavior: 'XML math vectors; crystal sharp at any zoom level, tiny size.' },
      { name: 'GIF', meaning: 'Graphics Interchange Format', syntax: '.gif', example: 'loader.gif', expectedBehavior: 'Simple 256-color animated frames.' }
    ],
    defaultCode: {
      html: `<!-- MRDU College Visual Showcase -->
<h2>MRDU Campus Central Library</h2>
<img 
  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=80" 
  alt="MRDU College Central Library with modern study pods" 
  width="360" 
  height="220"
  style="border-radius: 8px; border: 2px solid #0284c7;"
>
<p>Caption: Open 24/7 for B.Tech CSE research scholars.</p>

<h3>Responsive Picture Element Example</h3>
<picture>
  <source media="(min-width: 600px)" srcset="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=80">
  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&auto=format&fit=crop&q=80" alt="MRDU Graduation Day" width="280">
</picture>`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| MRDU Campus Central Library                     |
| +---------------------------------------------+ |
| | [ PHOTO: MRDU Central Library ]             | |
| |                                             | |
| +---------------------------------------------+ |
| Caption: Open 24/7 for B.Tech CSE...           |
|                                                 |
| Responsive Picture Element Example              |
| [ PHOTO: MRDU Graduation Day ]                  |
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: '<img ...>', explanation: 'Embeds an image; void tag without closing counterpart.' },
      { line: 'src="https://..."', explanation: 'Specifies the URL from which the browser fetches the image.' },
      { line: 'alt="MRDU College..."', explanation: 'Descriptive text for accessibility and search engines.' },
      { line: 'width="360" height="220"', explanation: 'Reserves aspect-ratio space to prevent visual layout jumping.' },
      { line: '<picture> and <source>', explanation: 'Swaps image asset automatically based on screen width.' }
    ],
    commonMistakes: [
      { wrong: '<img src="C:\\Users\\Rahul\\Desktop\\pic.png">', correct: '<img src="images/pic.png">', why: 'Local C: drive paths fail instantly when uploaded to a server or opened on any other computer.' },
      { wrong: '<img src="photo.jpg"> (leaving out alt)', correct: '<img src="photo.jpg" alt="Description">', why: 'Violates web accessibility guidelines; visually impaired students cannot know what the image shows.' }
    ],
    importantDifference: {
      title: 'PNG vs. JPG vs. SVG',
      conceptA: 'JPG: Best for photographs with millions of colors; no transparency.',
      conceptB: 'PNG: Best for logos and UI elements needing transparent backgrounds.',
      comparison: 'SVG is pure code math vectors that scale infinitely without ever pixelating or blurring.'
    },
    memoryTrick: 'SRC = Source (Where is the image file?). ALT = Always Learnable Text (What does it show?).',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Add College Logo',
        task: 'Write an img tag displaying logo.png with alt text "MRDU College Official Crest" and width of 150px.',
        hint: 'Use src, alt, and width attributes.',
        solutionHtml: `<img src="logo.png" alt="MRDU College Official Crest" width="150">`,
        explanation: 'Standard image inclusion.'
      },
      {
        difficulty: 'Medium',
        title: 'Broken Path Fallback Test',
        task: 'Intentionally set src to a nonexistent file path and verify that the alt text renders cleanly.',
        hint: 'Set src="nonexistent.png" and provide descriptive alt text.',
        solutionHtml: `<img src="nonexistent.png" alt="Dr. APJ Abdul Kalam Research Lab Building">`,
        explanation: 'Allows seeing how browsers present the broken image indicator alongside alt text.'
      },
      {
        difficulty: 'Challenge',
        title: 'Responsive Art Direction',
        task: 'Create a <picture> element that displays desktop-banner.jpg on screens wider than 768px and mobile-banner.jpg on smaller screens.',
        hint: 'Use <source media="(min-width: 768px)" srcset="..."> inside <picture>.',
        solutionHtml: `<picture>
  <source media="(min-width: 768px)" srcset="desktop-banner.jpg">
  <img src="mobile-banner.jpg" alt="MRDU Annual Techfest Banner">
</picture>`,
        explanation: 'Delivers optimal bandwidth-saving image sizes across mobile and desktop.'
      }
    ],
    quizQuestions: [
      {
        id: 'd7-q1',
        question: 'Which of the following is a Void Element (has NO closing tag)?',
        options: [
          '<img>',
          '<p>',
          '<h1>',
          '<a>'
        ],
        correctAnswer: 0,
        explanation: '<img> is a self-closing void element. It cannot contain text or children, so it has no </img>.'
      },
      {
        id: 'd7-q2',
        question: 'Which graphic format can be scaled to billboard size without ANY pixelation?',
        options: [
          'SVG (Scalable Vector Graphics)',
          'JPG',
          'PNG',
          'GIF'
        ],
        correctAnswer: 0,
        explanation: 'SVG is built using mathematical formulas and vectors, making it infinitely scalable at any resolution.'
      }
    ]
  },
  {
    day: 8,
    module: 'HTML',
    title: 'HTML Tables: Structure & Content',
    subtitle: 'table, tr, td, th, colspan, rowspan, thead, tbody, tfoot & accessible data matrices',
    keyIdea: 'Tables are like Excel spreadsheets; use them ONLY for structured data, never for webpage layouts.',
    analogy: 'A table is identical to your printed semester grade card. <tr> is a row, <th> is a column title (Subject, Grade), <td> is the actual mark earned, and colspan merges cells across columns for a total score row.',
    definition: 'HTML tables format structured, two-dimensional tabular data into rows and columns using <table>, <tr> (row), <th> (header cell), and <td> (data cell).',
    whyUseIt: 'Essential for displaying exam timetables, fee breakdowns, student marks, placement statistics, and comparison charts.',
    syntaxBreakdown: [
      { part: '<table>', description: 'The outer container wrapper for the entire table.', example: '<table border="1">...</table>' },
      { part: '<tr>', description: 'Table Row: Creates a horizontal row containing cells.', example: '<tr>...</tr>' },
      { part: '<th>', description: 'Table Header: Centered and bold by default. Defines column or row subject.', example: '<th>Roll No</th>' },
      { part: '<td>', description: 'Table Data: Standard cell holding regular information.', example: '<td>26CS101</td>' },
      { part: 'colspan="N"', description: 'Merges a cell horizontally across N adjacent columns.', example: '<td colspan="2">Merged</td>' },
      { part: 'rowspan="N"', description: 'Merges a cell vertically across N stacked rows.', example: '<td rowspan="2">Lab</td>' },
      { part: '<thead>, <tbody>, <tfoot>', description: 'Semantic section wrappers grouping header, body, and summary footer rows.', example: '<thead><tr>...</tr></thead>' }
    ],
    validValuesOrTypes: [
      { name: 'colspan="2"', meaning: 'Spans 2 columns horizontally', syntax: 'colspan="integer"', example: '<td colspan="2">Total</td>', expectedBehavior: 'Cell widens to occupy 2 column widths.' },
      { name: 'rowspan="2"', meaning: 'Spans 2 rows vertically', syntax: 'rowspan="integer"', example: '<td rowspan="2">Physics Lab</td>', expectedBehavior: 'Cell height stretches across 2 row lines.' },
      { name: 'thead', meaning: 'Table Header Section', syntax: '<thead>', example: '<thead>...</thead>', expectedBehavior: 'Groups column title rows for print and screen readers.' },
      { name: 'tbody', meaning: 'Table Body Section', syntax: '<tbody>', example: '<tbody>...</tbody>', expectedBehavior: 'Contains main data rows.' }
    ],
    defaultCode: {
      html: `<!-- MRDU B.Tech Semester Timetable -->
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 450px;">
  <thead>
    <tr style="background: #0284c7; color: white;">
      <th>Time Slot</th>
      <th>Mon - Wed</th>
      <th>Thu - Fri</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9:00 - 10:30 AM</td>
      <td>Web Tech Lab</td>
      <td>Data Structures</td>
    </tr>
    <tr>
      <td>10:30 - 11:00 AM</td>
      <td colspan="2" align="center" style="background: #fef08a; font-weight: bold;">
        TEA & SNACK BREAK
      </td>
    </tr>
    <tr>
      <td>11:00 - 1:00 PM</td>
      <td rowspan="2">AI Systems Project</td>
      <td>Discrete Maths</td>
    </tr>
    <tr>
      <td>1:00 - 2:00 PM</td>
      <td>Engineering Ethics</td>
    </tr>
  </tbody>
  <tfoot>
    <tr style="background: #f1f5f9;">
      <td colspan="3" align="center">MRDU Academic Schedule 2026</td>
    </tr>
  </tfoot>
</table>`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| Time Slot       | Mon - Wed      | Thu - Fri    |
+-----------------+----------------+--------------+
| 9:00 - 10:30 AM | Web Tech Lab   | Data Struct  |
+-----------------+----------------+--------------+
| 10:30 - 11:00 AM|        TEA & SNACK BREAK      | (colspan=2)
+-----------------+----------------+--------------+
| 11:00 - 1:00 PM | AI Systems     | Discrete M   |
| 1:00 - 2:00 PM  | Project (row=2)| Eng Ethics   |
+-----------------+----------------+--------------+
|            MRDU Academic Schedule 2026          | (colspan=3)
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: '<table border="1"...>', explanation: 'Initializes table with borders and unified border-collapse styling.' },
      { line: '<thead>', explanation: 'Semantic container for column header rows.' },
      { line: '<th>Time Slot</th>', explanation: 'Creates centered bold header cells.' },
      { line: '<td colspan="2">', explanation: 'Merges across 2 columns horizontally for the break slot.' },
      { line: '<td rowspan="2">', explanation: 'Merges across 2 rows vertically for the 2-hour AI project slot.' },
      { line: '<tfoot>', explanation: 'Contains summary or citation row at the bottom of the table.' }
    ],
    commonMistakes: [
      { wrong: 'Keeping extra <td> cells in a row that has a colspan="2"', correct: 'Delete the <td> absorbed by the colspan', why: 'If a cell spans 2 columns, having another td makes the row 3 columns wide, misaligning the grid.' },
      { wrong: 'Using tables to design general website layouts', correct: 'Use CSS Flexbox or Grid for page layouts', why: 'Tables break responsive design on mobile devices and destroy screen reader accessibility.' }
    ],
    importantDifference: {
      title: 'colspan vs. rowspan',
      conceptA: 'colspan: Expands a cell horizontally to the right across multiple columns.',
      conceptB: 'rowspan: Expands a cell vertically downwards across multiple rows.',
      comparison: 'Colspan is like knocking down side walls; Rowspan is like removing a ceiling/floor between levels.'
    },
    memoryTrick: 'COLSPAN = Columns (Left to Right Horizon). ROWSPAN = Rows (Top to Bottom Elevator).',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Student Marksheet',
        task: 'Build a 3-row, 2-column table displaying Subject and Marks (e.g., Web Tech: 95, Maths: 90).',
        hint: 'Use <table>, <tr>, <th>, and <td>.',
        solutionHtml: `<table border="1">
  <tr><th>Subject</th><th>Marks</th></tr>
  <tr><td>Web Technologies</td><td>95</td></tr>
  <tr><td>Engineering Mathematics</td><td>90</td></tr>
</table>`,
        explanation: 'Basic 2x2 data table.'
      },
      {
        difficulty: 'Medium',
        title: 'Fee Summary with Colspan',
        task: 'Create a fee table where the final row has a colspan="2" cell stating "Total Payable: ₹85,000".',
        hint: 'Use colspan="2" on the total row.',
        solutionHtml: `<table border="1">
  <tr><th>Particulars</th><th>Amount</th></tr>
  <tr><td>Tuition Fee</td><td>₹70,000</td></tr>
  <tr><td>Laboratory Fee</td><td>₹15,000</td></tr>
  <tr><td colspan="2">Total Payable: ₹85,000</td></tr>
</table>`,
        explanation: 'Demonstrates horizontal cell consolidation.'
      },
      {
        difficulty: 'Challenge',
        title: 'Complex Department Timetable',
        task: 'Construct a full timetable using thead, tbody, tfoot, with at least one colspan (Lunch Break) and one rowspan (3-Hour Workshop Lab).',
        hint: 'Ensure remaining rows account for the cell absorbed by rowspan.',
        solutionHtml: `<table border="1">
  <thead>
    <tr><th>Day</th><th>Slot 1</th><th>Slot 2</th></tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Friday</td>
      <td>Robotics Workshop Part 1</td>
      <td>Maths</td>
    </tr>
    <tr>
      <td>Robotics Workshop Part 2</td>
      <td>Physics</td>
    </tr>
    <tr>
      <td colspan="3" align="center">Lunch</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="3">Approved by Dean Academics</td></tr>
  </tfoot>
</table>`,
        explanation: 'Demonstrates complete mastery of complex tabular cell geometry.'
      }
    ],
    quizQuestions: [
      {
        id: 'd8-q1',
        question: 'Which attribute merges a table cell HORIZONTALLY across two or more columns?',
        options: [
          'colspan',
          'rowspan',
          'span',
          'merge'
        ],
        correctAnswer: 0,
        explanation: 'colspan merges cells horizontally across columns.'
      },
      {
        id: 'd8-q2',
        question: 'What is the semantic difference between <th> and <td>?',
        options: [
          '<th> is a bold, centered header cell; <td> is a standard data cell',
          '<th> creates a new row; <td> creates a new column',
          '<th> is only allowed in <tfoot>',
          'There is no difference'
        ],
        correctAnswer: 0,
        explanation: '<th> defines table headers (bold and centered by default) while <td> represents normal data cells.'
      }
    ]
  },
  {
    day: 9,
    module: 'HTML',
    title: 'HTML5 Forms & Input Elements',
    subtitle: 'form, input types (text, email, password, number, date, checkbox, radio, file, submit), label & validation',
    keyIdea: 'Forms are the two-way bridge between users and the server; without forms, users could never log in or submit exams.',
    analogy: 'A <form> is a physical paper admission application. <label> is the printed prompt ("Your Full Name:"), <input> is the blank box where you write with a pen, and <input type="submit"> is handing the paper to the clerk at the counter.',
    definition: 'HTML Forms collect user input to send to a backend server for processing. Inputs range from text boxes and passwords to calendar pickers, radio buttons, and file uploaders.',
    whyUseIt: 'Essential for student portals, semester registrations, online fee payments, complaint desks, and user authentication.',
    syntaxBreakdown: [
      { part: '<form action="..." method="...">', description: 'Container. action defines backend destination URL; method defines HTTP verb (GET or POST).', example: '<form action="/apply" method="POST">' },
      { part: '<label for="inputId">', description: 'Accessible label. Clicking it automatically focuses the associated input.', example: '<label for="sname">Name:</label>' },
      { part: '<input id="inputId" name="..." type="...">', description: 'The interactive input control.', example: '<input id="sname" type="text">' },
      { part: 'type="radio" name="sameGroup"', description: 'Mutually exclusive choices. All related radio buttons MUST share the same name attribute.', example: 'name="gender"' },
      { part: 'type="checkbox"', description: 'Allows selecting multiple independent choices.', example: 'type="checkbox"' },
      { part: 'required', description: 'Native validation attribute preventing submission if field is left blank.', example: 'required' }
    ],
    validValuesOrTypes: [
      { name: 'type="text"', meaning: 'Single line text', syntax: 'type="text"', example: '<input type="text">', expectedBehavior: 'Accepts alphanumeric text.' },
      { name: 'type="password"', meaning: 'Masked characters', syntax: 'type="password"', example: '<input type="password">', expectedBehavior: 'Masks keystrokes as dots/asterisks.' },
      { name: 'type="email"', meaning: 'Validated email format', syntax: 'type="email"', example: '<input type="email">', expectedBehavior: 'Requires valid @ symbol and domain.' },
      { name: 'type="radio"', meaning: 'Single select among many', syntax: 'type="radio"', example: '<input type="radio" name="b">', expectedBehavior: 'Allows picking only 1 option in group.' },
      { name: 'type="checkbox"', meaning: 'Multi-select options', syntax: 'type="checkbox"', example: '<input type="checkbox">', expectedBehavior: 'Independent toggle checkmarks.' }
    ],
    defaultCode: {
      html: `<!-- MRDU B.Tech Admission Form -->
<form action="/submit-registration" method="POST" style="max-width: 420px; padding: 15px; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #0284c7;">Student Registration 2026</h3>
  
  <label for="fname">Student Full Name:</label><br>
  <input type="text" id="fname" name="fullname" placeholder="e.g. Aditya Sharma" required style="width: 100%; margin-bottom: 10px;"><br>

  <label for="uemail">College Email ID:</label><br>
  <input type="email" id="uemail" name="email" placeholder="name@mrdu.edu" required style="width: 100%; margin-bottom: 10px;"><br>

  <label for="pass">Portal Password:</label><br>
  <input type="password" id="pass" name="password" minlength="8" placeholder="Min 8 characters" required style="width: 100%; margin-bottom: 10px;"><br>

  <label>Select B.Tech Branch:</label><br>
  <input type="radio" id="b1" name="branch" value="CSE" checked>
  <label for="b1">CSE Core</label>
  <input type="radio" id="b2" name="branch" value="AIML">
  <label for="b2">CSE (AIML)</label>
  <input type="radio" id="b3" name="branch" value="DS">
  <label for="b3">CSE (Data Science)</label><br><br>

  <label for="cert">Upload 10+2 Marksheet (PDF):</label><br>
  <input type="file" id="cert" name="marksheet" accept=".pdf" style="margin-bottom: 15px;"><br>

  <input type="checkbox" id="terms" name="agree" required>
  <label for="terms">I verify all information provided is accurate.</label><br><br>

  <input type="submit" value="Register for B.Tech" style="background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
</form>`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| Student Registration 2026                       |
| Student Full Name:                              |
| [ Aditya Sharma............................... ]|
| College Email ID:                               |
| [ name@mrdu.edu............................... ]|
| Portal Password:                                |
| [ •••••••••••••............................... ]|
| Select B.Tech Branch:                           |
| (*) CSE Core   ( ) CSE (AIML)   ( ) CSE (DS)    |
| Upload 10+2 Marksheet (PDF):                    |
| [ Choose File ] No file chosen                  |
| [X] I verify all information is accurate.       |
|                                                 |
| [ Register for B.Tech ]                         |
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: '<form action="..." method="POST">', explanation: 'Prepares secure HTTP POST payload destination.' },
      { line: '<label for="fname">', explanation: 'Links label text to input sharing id="fname"; improves mobile tap area.' },
      { line: 'required', explanation: 'Prevents form submission if user leaves field empty.' },
      { line: 'type="password"', explanation: 'Hides typed characters to prevent shoulder-surfing.' },
      { line: 'name="branch"', explanation: 'Shared name across radio options guarantees mutually exclusive choice.' },
      { line: 'type="submit"', explanation: 'Triggers browser validation and transmits form data.' }
    ],
    commonMistakes: [
      { wrong: 'Different name attributes on related radio buttons: name="b1", name="b2"', correct: 'Exact same name attribute: name="branch"', why: 'Different names trick the browser into treating them as separate questions, letting the user select all simultaneously.' },
      { wrong: '<label>Name</label><input type="text"> (unlinked)', correct: '<label for="u">Name</label><input id="u" type="text">', why: 'Without matching for and id attributes, clicking the label does not focus the input field.' }
    ],
    importantDifference: {
      title: 'Radio vs. Checkbox',
      conceptA: 'Radio (<input type="radio">): Allows selecting exactly ONE option from a group (e.g. Branch selection).',
      conceptB: 'Checkbox (<input type="checkbox">): Allows selecting zero, one, or MULTIPLE independent choices (e.g. Hobbies).',
      comparison: 'Use radio buttons for "Pick either A or B"; use checkboxes for "Select all that apply".'
    },
    memoryTrick: 'Label FOR matches Input ID like a key matches its lock.',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Student Login Form',
        task: 'Build a form with email input, password input, and a Submit button.',
        hint: 'Use type="email" and type="password".',
        solutionHtml: `<form action="/login" method="POST">
  <label for="em">Email:</label><br>
  <input type="email" id="em" required><br>
  <label for="pw">Password:</label><br>
  <input type="password" id="pw" required><br><br>
  <input type="submit" value="Log In">
</form>`,
        explanation: 'Standard login structure.'
      },
      {
        difficulty: 'Medium',
        title: 'Hostel Allotment Survey',
        task: 'Create a form with a date input for arrival, radio buttons for Room Type (Single/Shared), and a number input for Semester.',
        hint: 'Use type="date", type="number" with min="1" max="8", and radio buttons.',
        solutionHtml: `<form>
  <label for="arr">Date of Arrival:</label>
  <input type="date" id="arr"><br><br>
  <label for="sem">Current Semester (1-8):</label>
  <input type="number" id="sem" min="1" max="8"><br><br>
  <label>Room Preference:</label><br>
  <input type="radio" id="s" name="room" value="single"><label for="s">Single AC</label>
  <input type="radio" id="d" name="room" value="shared" checked><label for="d">Shared Non-AC</label><br><br>
  <input type="submit" value="Submit Preference">
</form>`,
        explanation: 'Combines multiple specialized HTML5 input types.'
      },
      {
        difficulty: 'Challenge',
        title: 'Strict Admission Form',
        task: 'Construct a form with regex pattern validation (10-digit mobile number), PDF-only file uploader, and min/max age validation.',
        hint: 'Use pattern="[0-9]{10}", accept=".pdf", and type="number" with min="17" max="25".',
        solutionHtml: `<form action="/apply" method="POST" enctype="multipart/form-data">
  <label for="phone">Student Mobile (10 digits):</label>
  <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="9876543210" required><br><br>
  <label for="age">Candidate Age:</label>
  <input type="number" id="age" min="17" max="25" required><br><br>
  <label for="doc">ID Proof (PDF only):</label>
  <input type="file" id="doc" accept=".pdf" required><br><br>
  <input type="submit" value="Verify & Submit">
</form>`,
        explanation: 'Utilizes browser-native validation attributes.'
      }
    ],
    quizQuestions: [
      {
        id: 'd9-q1',
        question: 'Which input type masks characters so they appear as dots or asterisks?',
        options: [
          'type="password"',
          'type="text"',
          'type="hidden"',
          'type="mask"'
        ],
        correctAnswer: 0,
        explanation: 'type="password" hides typed characters to safeguard sensitive credentials on screen.'
      },
      {
        id: 'd9-q2',
        question: 'How do you ensure only ONE radio button can be selected in a group?',
        options: [
          'Assign all related radio inputs the EXACT same name attribute',
          'Give them all the same id attribute',
          'Use the single="true" attribute',
          'Wrap each in a separate <form>'
        ],
        correctAnswer: 0,
        explanation: 'Radio buttons sharing identical name attributes belong to the same mutual exclusion group.'
      }
    ]
  },
  {
    day: 10,
    module: 'HTML',
    title: 'HTML5 Multimedia & Semantic Elements',
    subtitle: 'video, audio, controls, canvas intro & semantic layout (header, nav, main, article, section, aside, footer)',
    keyIdea: 'Semantic tags describe their meaning to search engines and humans; non-semantic tags (div, span) are blank boxes.',
    analogy: 'Semantic tags are like labeled rooms in a college building: "Library" (header), "Corridor" (nav), "Lecture Hall" (main), "Notice Board" (aside), and "Security Desk" (footer). A <div> is just an unlabeled cardboard box.',
    definition: 'HTML5 introduced native multimedia elements (<video>, <audio>) eliminating third-party plugins (Flash), and semantic elements that clearly describe the role of each section on the page.',
    whyUseIt: 'SEO search crawlers and screen readers use semantic tags to instantly understand your webpage outline. Video and audio tags stream media natively with built-in controls.',
    syntaxBreakdown: [
      { part: '<video controls ...>', description: 'Embeds video player. controls attribute displays play, pause, volume, and fullscreen buttons.', example: '<video src="tour.mp4" controls>' },
      { part: '<audio controls ...>', description: 'Embeds sound player with audio playback UI.', example: '<audio src="anthem.mp3" controls>' },
      { part: '<header>', description: 'Top section containing college logo, portal title, or introductory banner.', example: '<header>...</header>' },
      { part: '<nav>', description: 'Reserved exclusively for major navigation menus and links.', example: '<nav>...</nav>' },
      { part: '<main>', description: 'Wraps the primary, unique content of the page (only one per document).', example: '<main>...</main>' },
      { part: '<section> & <article>', description: '<section> groups thematic content; <article> is an independent, self-contained story or post.', example: '<article>...</article>' },
      { part: '<aside>', description: 'Sidebar content indirectly related to surrounding content (Notice board, quick links).', example: '<aside>...</aside>' },
      { part: '<footer>', description: 'Bottom region containing copyright notices, accreditation links, and addresses.', example: '<footer>...</footer>' }
    ],
    validValuesOrTypes: [
      { name: 'controls', meaning: 'Show Player Controls', syntax: 'controls', example: '<video controls>', expectedBehavior: 'Renders play, timeline scrubber, volume, and fullscreen.' },
      { name: 'autoplay muted', meaning: 'Auto-play without sound', syntax: 'autoplay muted', example: '<video autoplay muted>', expectedBehavior: 'Plays on load (browsers require muted for autoplay).' },
      { name: 'poster="thumb.jpg"', meaning: 'Video Thumbnail Cover', syntax: 'poster="url"', example: 'poster="thumb.jpg"', expectedBehavior: 'Shows image before user clicks play.' },
      { name: '<canvas>', meaning: 'Scriptable Drawing Surface', syntax: '<canvas id="c">', example: '<canvas width="200" height="100">', expectedBehavior: 'Pixel canvas rendered via JavaScript.' }
    ],
    defaultCode: {
      html: `<!-- Complete HTML5 Semantic Layout for MRDU Portal -->
<header style="background: #0284c7; color: white; padding: 12px 20px; border-radius: 6px;">
  <h1 style="margin: 0; font-size: 22px;">MRDU College of Engineering</h1>
  <p style="margin: 2px 0 0 0; font-size: 13px;">Department of Computer Science & Engineering</p>
</header>

<nav style="background: #e2e8f0; padding: 8px 15px; margin: 10px 0; border-radius: 4px;">
  <a href="#home">Home</a> | 
  <a href="#academics">Academics</a> | 
  <a href="#media">Campus Tour</a> | 
  <a href="#notices">Notice Board</a>
</nav>

<div style="display: flex; gap: 15px; flex-wrap: wrap;">
  <main style="flex: 2; min-width: 250px;">
    <article style="border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
      <h2>Welcome 1st-Year Students!</h2>
      <p>Orientation commences on Monday at the Dr. APJ Abdul Kalam Auditorium.</p>
    </article>

    <section id="media" style="border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px;">
      <h3>Campus Virtual Tour (Video)</h3>
      <video width="100%" controls style="max-height: 180px; background: #000; border-radius: 4px;">
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    </section>
  </main>

  <aside id="notices" style="flex: 1; min-width: 180px; background: #fef3c7; padding: 12px; border-radius: 6px; border: 1px solid #fde047;">
    <h3 style="margin-top: 0; color: #854d0e;">Notice Board</h3>
    <ul style="padding-left: 18px; margin-bottom: 0;">
      <li>Exam Forms due Friday</li>
      <li>Coding Club Meet 4 PM</li>
      <li>Library Book Returns</li>
    </ul>
  </aside>
</div>

<footer style="background: #0f172a; color: #94a3b8; padding: 12px 20px; margin-top: 15px; border-radius: 6px; text-align: center; font-size: 13px;">
  &copy; 2026 MRDU College. Approved by AICTE, New Delhi.
</footer>`
    },
    expectedOutputAscii: `+-------------------------------------------------+
| MRDU College of Engineering                     |
| Department of Computer Science & Engineering    |
+-------------------------------------------------+
| Home | Academics | Campus Tour | Notice Board   |
+-------------------------------------------------+
| [ MAIN ARTICLE: Welcome Students ] | [ ASIDE ]  |
| Orientation commences on Monday... | Notices:   |
|                                    | * Exam Due |
| [ VIDEO: Campus Virtual Tour ]     | * Club 4PM |
| [ > Play ] 00:00 / 00:15           |            |
+-------------------------------------------------+
| © 2026 MRDU College. Approved by AICTE...       |
+-------------------------------------------------+`,
    lineByLineExplanation: [
      { line: '<header>', explanation: 'Declares top branding container semantically.' },
      { line: '<nav>', explanation: 'Designates global navigation links.' },
      { line: '<main>', explanation: 'Contains the primary unique content of the page.' },
      { line: '<article>', explanation: 'Encapsulates an independent, self-contained announcement.' },
      { line: '<video controls ...>', explanation: 'Streams video natively with user control buttons.' },
      { line: '<aside>', explanation: 'Sidebar holding secondary related notices.' },
      { line: '<footer>', explanation: 'Bottom footer containing legal and accreditation text.' }
    ],
    commonMistakes: [
      { wrong: '<video src="clip.mp4"></video> (leaving out controls)', correct: '<video src="clip.mp4" controls></video>', why: 'Without the controls attribute, the video appears as a frozen static image with no play button.' },
      { wrong: 'Wrapping everything in <div> tags with no semantic tags', correct: 'Use <header>, <nav>, <main>, <article>, <footer>', why: 'A "div soup" strips meaning away from search engine indexing and assistive screen readers.' }
    ],
    importantDifference: {
      title: '<section> vs. <article>',
      conceptA: '<section>: A thematic grouping of content, typically introduced with a heading (e.g. "Gallery Section").',
      conceptB: '<article>: A self-contained, independently distributable piece of content (e.g. a blog post or news story).',
      comparison: 'If the content makes complete sense published on its own in an RSS feed, it is an <article>.'
    },
    memoryTrick: 'Semantic tags mean what they say: Header heads, Nav navigates, Main matters, Footer foots.',
    practiceExercises: [
      {
        difficulty: 'Easy',
        title: 'Embed Audio Anthem',
        task: 'Write an audio tag with controls that streams "college-anthem.mp3".',
        hint: 'Use <audio controls src="..."></audio>.',
        solutionHtml: `<audio controls src="college-anthem.mp3">
  Your browser does not support the audio element.
</audio>`,
        explanation: 'Standard audio embedding.'
      },
      {
        difficulty: 'Medium',
        title: 'Semantic College Notice',
        task: 'Structure a page with header, nav, article (News), aside (Upcoming Events), and footer.',
        hint: 'Use HTML5 semantic tags instead of generic divs.',
        solutionHtml: `<header><h1>MRDU Events</h1></header>
<nav><a href="#events">Events</a></nav>
<main>
  <article>
    <h2>Annual Hackathon Announced</h2>
    <p>48-hour continuous coding challenge starting October 15.</p>
  </article>
</main>
<aside>
  <h3>Sponsors</h3>
  <p>Google Cloud, GitHub, Intel.</p>
</aside>
<footer><p>&copy; 2026 MRDU Tech Committee</p></footer>`,
        explanation: 'Clean semantic structure.'
      },
      {
        difficulty: 'Challenge',
        title: 'HTML5 Canvas Intro',
        task: 'Write an HTML <canvas> tag with id="demoCanvas", width="300", height="150" and explain its purpose.',
        hint: 'Canvas provides a pixel canvas drawn via JavaScript.',
        solutionHtml: `<canvas id="demoCanvas" width="300" height="150" style="border: 1px solid #0284c7;">
  Your browser does not support the HTML5 canvas tag.
</canvas>`,
        explanation: 'Provides a hardware-accelerated drawing surface for graphs, games, and dynamic animations.'
      }
    ],
    quizQuestions: [
      {
        id: 'd10-q1',
        question: 'Which boolean attribute MUST be present on a <video> tag so the user can play, pause, and adjust volume?',
        options: [
          'controls',
          'autoplay',
          'buttons',
          'player'
        ],
        correctAnswer: 0,
        explanation: 'The controls attribute instructs the browser to paint its native playback controls UI.'
      },
      {
        id: 'd10-q2',
        question: 'Which semantic element should be used for secondary sidebar content like a notice board or advertisements?',
        options: [
          '<aside>',
          '<sidebar>',
          '<section>',
          '<article>'
        ],
        correctAnswer: 0,
        explanation: '<aside> is specifically defined for tangential, indirectly related sidebar content.'
      }
    ]
  }
];
