import { Day1SectionItem } from '../types';

export const day1ComprehensiveNotes: Day1SectionItem[] = [
  {
    id: 1,
    title: '1. What is the Internet?',
    badge: 'Network Foundation',
    definition: 'The Internet is a worldwide network that connects computers and devices so they can communicate and share information.',
    simpleWords: 'The Internet is a huge network that connects millions of devices around the world.',
    examples: [
      'Websites',
      'Email',
      'Online classes',
      'YouTube',
      'Online shopping',
      'Online banking',
      'Social media',
    ],
    analogy: 'Think about roads connecting cities:\nHyderabad ─── Bengaluru ─── Chennai ─── Delhi\nRoads allow cities to communicate and transport things.\nSimilarly:\nComputer ─── Network ─── Network ─── Server\nThe Internet allows devices to communicate.',
    diagramAscii: `Hyderabad ─── Bengaluru ─── Chennai ─── Delhi
(Roads allow cities to transport goods)

Computer  ─── Network   ─── Network ─── Server
(Internet allows devices to communicate)`,
  },
  {
    id: 2,
    title: '2. What is the Web?',
    badge: 'Service on the Internet',
    definition: 'The Web, or World Wide Web (WWW), is a system of webpages and websites that we access through the Internet.',
    notes: [
      'Important difference: Students often confuse Internet and Web.',
      'Internet = The network/infrastructure',
      'Web = A service that runs using the Internet',
    ],
    diagramAscii: `Internet
   ↓
The network / infrastructure

Web (WWW)
   ↓
A service that runs using the Internet`,
    examples: ['When you open https://www.google.com, you are using the Web through the Internet.'],
    analogy: 'Internet = Roads\nWeb = Vehicles travelling on those roads\nThe Internet provides the connection, while the Web provides webpages and websites that we access through that connection.',
  },
  {
    id: 3,
    title: '3. What is a Website?',
    badge: 'Collection of Pages',
    definition: 'A website is a collection of related webpages available under a common website/domain.',
    examples: [
      'For example, an MRDU college website contains: Home, About, Courses, Branches, Placements, Events, Contact.',
      'These are different webpages that together form the website.',
    ],
    diagramAscii: `MRDU College Website
        |
        |------ Home
        |------ About
        |------ Branches
        |------ Placements
        |------ Events
        |------ Contact`,
  },
  {
    id: 4,
    title: '4. What is a Webpage?',
    badge: 'Single Document',
    definition: 'A webpage is a single document that can be displayed in a web browser (e.g. home.html, branches.html, placements.html, contact.html). Each represents an individual webpage.',
    table: {
      headers: ['Website', 'Webpage'],
      rows: [
        ['Collection of webpages', 'Single page'],
        ['Contains multiple pages', 'One individual document'],
        ['Example: MRDU College website', 'Example: home.html'],
      ],
    },
    memoryTrick: 'Website = Book | Webpage = One page of the book',
  },
  {
    id: 5,
    title: '5. What is a Browser?',
    badge: 'Client Software',
    definition: 'A web browser is software used to access and display webpages.',
    examples: ['Google Chrome', 'Microsoft Edge', 'Mozilla Firefox', 'Apple Safari'],
    steps: [
      { stepNumber: 1, title: 'Requests info', desc: 'Requests information from a remote web server.' },
      { stepNumber: 2, title: 'Receives files', desc: 'Receives the webpage files over HTTP.' },
      { stepNumber: 3, title: 'Reads code', desc: 'Reads the HTML, CSS and JavaScript.' },
      { stepNumber: 4, title: 'Processes code', desc: 'Processes and builds the DOM tree in memory.' },
      { stepNumber: 5, title: 'Displays webpage', desc: 'Displays the final webpage on the user screen.' },
    ],
    diagramAscii: `Website files
      ↓
Browser reads files
      ↓
Browser processes them
      ↓
Webpage appears on screen`,
    analogy: 'Think of the browser as a translator.\nThe developer writes: <h1>MRDU College</h1>\nThe browser understands the HTML and displays: MRDU College in bold big font.',
  },
  {
    id: 6,
    title: '6. What is a Client?',
    badge: 'Requesting Device',
    definition: 'A client is a device or software that requests a service or information from another computer. In web development, the browser acts as the client.',
    diagramAscii: `Your Laptop / Phone
        ↓
Chrome Browser (Client)
        ↓
    Request`,
    notes: ['The browser asks the server for a webpage.'],
  },
  {
    id: 7,
    title: '7. What is a Server?',
    badge: 'Resource Provider',
    definition: 'A server is a computer or system that stores and provides resources or services to clients.',
    examples: [
      'HTML files',
      'CSS files',
      'JavaScript files',
      'Images',
      'Videos',
      'Other website resources',
    ],
    notes: ['When a browser requests a webpage, the server sends the required resources back.'],
  },
  {
    id: 8,
    title: '8. Client-Server Model',
    badge: 'Core Architecture',
    definition: 'The fundamental communication architecture of the Web where clients request resources and servers provide responses.',
    diagramAscii: `             REQUEST (GET /index.html)
Browser ------------------------------------> Server
(Client)                                      |
                                              | Finds requested resource
                                              |
Browser <------------------------------------ Server
             RESPONSE (200 OK + HTML file)`,
    steps: [
      { stepNumber: 1, title: 'User enters URL', desc: 'User types https://mrdu.ac.in in the browser address bar.' },
      { stepNumber: 2, title: 'Browser sends request', desc: 'Browser → Server: "Please give me the index.html webpage."' },
      { stepNumber: 3, title: 'Server processes request', desc: 'The server verifies the path and locates index.html on disk.' },
      { stepNumber: 4, title: 'Server sends response', desc: 'Server → Browser: Returns HTTP response containing HTML code.' },
      { stepNumber: 5, title: 'Browser displays page', desc: 'Browser engine parses tags and paints pixels on screen.' },
    ],
  },
  {
    id: 9,
    title: '9. Client-Server Analogy',
    badge: 'Real-Life Analogy',
    analogy: 'Imagine a restaurant:\nCustomer → Waiter → Kitchen\nCustomer ← Waiter ← Kitchen\nThe customer asks for food.\nThe kitchen prepares it.\nThe waiter brings it back.\nSimilarly:\nBrowser → Server (Request)\nBrowser ← Server (Response)',
    memoryTrick: 'Client asks. Server provides.',
    diagramAscii: `Restaurant:
Customer (Client) ───[Order: Request]───> Kitchen (Server)
Customer (Client) <───[Food: Response]─── Kitchen (Server)

Web:
Browser  (Client) ───[HTTP Request]────> Web Server
Browser  (Client) <──[HTTP Response]─── Web Server`,
  },
  {
    id: 10,
    title: '10. What is a Request?',
    badge: 'Message from Client',
    definition: 'A request is a message sent by the client asking the server for a resource or service.',
    examples: ['Browser → "Give me the home page (index.html)"', 'The browser sends a request when you open any website.'],
  },
  {
    id: 11,
    title: '11. What is a Response?',
    badge: 'Message from Server',
    definition: 'A response is the server’s reply to the client’s request.',
    examples: ['The response contains: HTML, CSS, JavaScript, Images, and other files requested by the client.'],
    diagramAscii: `Browser ─── Request ────> Server
Server  ─── Response ───> Browser`,
  },
  {
    id: 12,
    title: '12. What is HTML?',
    badge: 'Language of Structure',
    definition: 'HTML = HyperText Markup Language. HTML is a markup language used to structure the content of a webpage. HTML tells the browser what content exists and how that content is organized.',
    examples: ['Heading', 'Paragraph', 'Image', 'Link', 'Table', 'Form', 'List'],
    analogy: 'HTML is like the skeleton of a webpage:\nHuman body → Skeleton → Provides structure\nWebpage → HTML → Provides structure',
    diagramAscii: `Human Body        Webpage
    ↓                ↓
 Skeleton          HTML
    ↓                ↓
Provides         Provides
Structure        Structure`,
  },
  {
    id: 13,
    title: '13. Why do we use HTML?',
    badge: 'Purpose',
    definition: 'HTML is used to create the basic structure of a webpage. HTML can define headings, paragraphs, lists, links, images, tables, forms, audio, and video.',
    codeSnippets: [
      {
        language: 'html',
        code: `<h1>MRDU College</h1>\n<p>Welcome to MRDU College.</p>`,
        caption: 'The browser renders this as a bold title followed by a standard body paragraph.',
      },
    ],
  },
  {
    id: 14,
    title: '14. Is HTML a Programming Language?',
    badge: 'Important Concept',
    definition: 'HTML is a markup language, not a programming language. HTML describes the structure and meaning of content. It does not provide programming logic such as if-else, for loops, while loops, functions, or variables.',
    table: {
      headers: ['Language', 'Primary Role', 'Analogy'],
      rows: [
        ['HTML', 'Structure (Content & Layout)', 'Skeleton / Bricks'],
        ['CSS', 'Appearance (Design, Colors, Fonts)', 'Skin, Clothes & Paint'],
        ['JavaScript', 'Behavior (Interactivity & Logic)', 'Muscles, Brain & Actions'],
      ],
    },
    diagramAscii: `HTML       → Structure (Button exists)
CSS        → Appearance (Button is Blue)
JavaScript → Behavior (Button clicks and opens menu)`,
  },
  {
    id: 15,
    title: '15. What is Markup?',
    badge: 'Syntax Meaning',
    definition: 'A markup language uses special tags to identify and structure content.',
    examples: [
      '<h1>MRDU College</h1> → Tells the browser: "This is a heading."',
      '<p>Welcome to our college.</p> → Tells the browser: "This is a paragraph."',
    ],
  },
  {
    id: 16,
    title: '16. What is an HTML Tag?',
    badge: 'Syntax Keyword',
    definition: 'A tag is a special keyword written inside angle brackets < > that tells the browser about an element.',
    examples: [
      '<h1> is an opening tag.',
      '</h1> is a closing tag. The forward slash / indicates the closing tag.',
    ],
  },
  {
    id: 17,
    title: '17. What is an HTML Element?',
    badge: 'Complete Unit',
    definition: 'An HTML element consists of the opening tag, content, and closing tag where applicable.',
    diagramAscii: `<h1>            MRDU College            </h1>
 ───                 ────────────            ────
Opening Tag            Content            Closing Tag
└───────────────────────────────────────────────────┘
                Complete HTML Element`,
    memoryTrick: 'Tag = <h1> | Element = <h1>MRDU College</h1>',
  },
  {
    id: 18,
    title: '18. First HTML Example',
    badge: 'Hands-on Code',
    definition: 'Create a file named index.html and write the following code. Open it in any web browser to see your first webpage.',
    codeSnippets: [
      {
        language: 'html',
        code: `<h1>MRDU College</h1>\n<p>Welcome to MRDU College.</p>`,
        caption: 'Output: Heading in large font + standard paragraph text.',
      },
    ],
  },
  {
    id: 19,
    title: '19. What is a .html File?',
    badge: 'File Extension',
    definition: 'HTML files normally use the .html extension. A file extension tells the operating system and software what type of file it is (e.g. photo.jpg, document.pdf, script.js, index.html).',
    notes: ['.html → HTML document readable by browsers'],
  },
  {
    id: 20,
    title: '20. Why do we use .html?',
    badge: 'Browser Recognition',
    definition: 'When the browser sees an HTML document with the .html extension, it knows that the file contains HTML markup that needs to be processed, parsed, and displayed visually.',
  },
  {
    id: 21,
    title: '21. Your First HTML File',
    badge: 'Complete Boilerplate',
    definition: 'Step-by-step instructions to create your first standard HTML document.',
    steps: [
      { stepNumber: 1, title: 'Create Folder', desc: 'Create a folder named MRDU_Web on your computer.' },
      { stepNumber: 2, title: 'Create File', desc: 'Inside MRDU_Web, create a file named index.html.' },
      { stepNumber: 3, title: 'Open in Editor', desc: 'Open index.html in VS Code.' },
      { stepNumber: 4, title: 'Write HTML Code', desc: 'Paste the standard boilerplate code below.' },
    ],
    codeSnippets: [
      {
        language: 'html',
        code: `<!DOCTYPE html>
<html>
<head>
    <title>MRDU College</title>
</head>
<body>
    <h1>MRDU College</h1>
    <p>Welcome to MRDU College.</p>
</body>
</html>`,
        caption: 'Standard complete HTML document.',
      },
    ],
  },
  {
    id: 22,
    title: '22. Basic Folder Structure',
    badge: 'Project Architecture',
    definition: 'For Day 1, students should understand a basic project folder. Start simple with index.html, and expand as you learn CSS and JS.',
    diagramAscii: `Day 1 Beginner:
MRDU_Web
│
└── index.html

Later in Course:
MRDU_Web
│
├── index.html
├── style.css
├── script.js
└── images/`,
  },
  {
    id: 23,
    title: '23. How to Open HTML in a Browser',
    badge: 'Execution Methods',
    definition: 'Two standard methods to view your webpage in a browser:',
    steps: [
      { stepNumber: 1, title: 'Method 1: File Explorer', desc: 'Navigate to the MRDU_Web folder. Double-click index.html. The default browser opens the page immediately.' },
      { stepNumber: 2, title: 'Method 2: VS Code Live Server', desc: 'Right-click index.html inside VS Code and choose "Open with Live Server" or click "Go Live" at the bottom.' },
    ],
  },
  {
    id: 24,
    title: '24. What Happens When You Open index.html?',
    badge: 'Parsing Process',
    definition: 'The browser reads the HTML file and parses <h1> as a heading command. The browser does NOT display <h1>MRDU College</h1> as raw text; it renders "MRDU College" styled as a heading.',
    diagramAscii: `index.html
     ↓
Browser reads HTML
     ↓
Browser understands <h1>
     ↓
Browser displays heading (not raw code!)`,
  },
  {
    id: 25,
    title: '25. How a Browser Displays HTML',
    badge: 'Browser Pipeline',
    definition: 'The sequential pipeline of how raw HTML text turns into an interactive screen view.',
    diagramAscii: `HTML CODE
   ↓
Browser reads the code
   ↓
Browser interprets the markup
   ↓
Browser creates the webpage structure (DOM)
   ↓
Browser displays the final result`,
  },
  {
    id: 26,
    title: '26. Static Webpage — Basic Idea',
    badge: 'Static vs Dynamic',
    definition: 'A static webpage generally displays content that is directly written in the files. Every visitor sees the same content until the developer updates the file.',
    codeSnippets: [
      {
        language: 'html',
        code: `<h1>MRDU College</h1>\n<p>Welcome Students!</p>`,
        caption: 'Static content written directly in HTML.',
      },
    ],
    notes: ['Later, with JavaScript and backend technologies, webpages become dynamic and interactive.'],
  },
  {
    id: 27,
    title: '27. HTML Project Example — MRDU College',
    badge: 'Full College Project',
    definition: 'Let us build the foundation of our semester project: The MRDU College Portal.',
    diagramAscii: `MRDU College Website
       |
       ├── Home (index.html)
       ├── Branches
       ├── Placements
       ├── Events
       └── Contact`,
    codeSnippets: [
      {
        language: 'html',
        code: `<!DOCTYPE html>
<html>
<head>
    <title>MRDU College</title>
</head>
<body>
    <h1>MRDU College</h1>
    <p>Welcome to Malla Reddy Deemed to be University.</p>
    <p>We provide education in engineering and technology.</p>
</body>
</html>`,
        caption: 'MRDU College Portal homepage code.',
      },
    ],
  },
  {
    id: 28,
    title: '28. Important Terms from Day 1',
    badge: 'Master Vocabulary Table',
    definition: 'Core technical vocabulary every 1st-year computer science student must master on Day 1.',
    table: {
      headers: ['Term', 'Simple Meaning'],
      rows: [
        ['Internet', 'Worldwide network connecting devices'],
        ['Web', 'System of webpages accessed through the Internet'],
        ['Website', 'Collection of related webpages under a domain'],
        ['Webpage', 'One individual webpage / document'],
        ['Browser', 'Software used to access and display webpages'],
        ['Client', 'Device / software requesting a service'],
        ['Server', 'System that provides resources / services'],
        ['Request', 'Message sent by client asking for a resource'],
        ['Response', 'Reply sent by server containing the resource'],
        ['HTML', 'Markup language used for webpage structure'],
        ['Tag', 'HTML markup keyword written inside < >'],
        ['Element', 'Complete HTML unit (opening tag + content + closing tag)'],
        ['.html', 'Standard HTML file extension'],
      ],
    },
  },
  {
    id: 29,
    title: '29. Difference: Internet vs Web vs Website vs Webpage',
    badge: 'Hierarchy Breakdown',
    definition: 'Students often confuse these four terms. Notice how they nest inside each other from largest to smallest.',
    diagramAscii: `Internet (The worldwide network / roads)
   ↓
Web (The system of websites / vehicles travelling on roads)
   ↓
Website (The collection of pages / the whole book)
   ↓
Webpage (One individual page / one page of the book)`,
    examples: [
      'Internet: Global network infrastructure',
      'Web: World Wide Web service',
      'Website: MRDU College Website (mrdu.ac.in)',
      'Webpage: Home Webpage (index.html)',
    ],
  },
  {
    id: 30,
    title: '30. Difference: Client vs Server',
    badge: 'Role Comparison',
    definition: 'The clear distinction between the requester and provider in web communication.',
    diagramAscii: `Chrome Browser (Client)
        |
        |  1. HTTP Request (GET /home)
        ↓
    Web Server
        |
        |  2. HTTP Response (200 OK + HTML)
        ↓
Chrome Browser (Client)`,
    memoryTrick: 'Client asks. Server answers.',
  },
  {
    id: 31,
    title: '31. Difference: HTML vs CSS vs JavaScript',
    badge: 'Web Trilogy',
    definition: 'The three foundational pillars of all modern frontend web development.',
    table: {
      headers: ['Pillar', 'Role', 'Button Example'],
      rows: [
        ['HTML', 'Structure', 'Create the button element (<button>Apply</button>)'],
        ['CSS', 'Design / Appearance', 'Make the button blue with rounded corners & shadow'],
        ['JavaScript', 'Behavior / Interactivity', 'Make the button open an admission form popup on click'],
      ],
    },
  },
  {
    id: 32,
    title: '32. Common Beginner Mistakes',
    badge: 'Pitfalls to Avoid',
    definition: 'The top 6 mistakes made by beginners in their very first week of web development.',
    mistakes: [
      {
        wrong: 'index.txt or "index.html.txt"',
        correct: 'index.html',
        note: 'Mistake 1: Saving with the wrong extension. Enable file extensions in Windows/Mac to verify.',
      },
      {
        wrong: 'index.htmll',
        correct: 'index.html',
        note: 'Mistake 2: Writing the extension with spelling typos (two Ls).',
      },
      {
        wrong: 'h1 MRDU College /h1',
        correct: '<h1>MRDU College</h1>',
        note: 'Mistake 3: Forgetting angle brackets < >.',
      },
      {
        wrong: '<h1>MRDU College',
        correct: '<h1>MRDU College</h1>',
        note: 'Mistake 4: Forgetting the closing tag with forward slash (/).',
      },
      {
        wrong: 'Treating a single webpage as the whole website',
        correct: 'Website = Collection of pages | Webpage = Single document',
        note: 'Mistake 5: Confusing website and webpage.',
      },
      {
        wrong: 'Using Internet and Web interchangeably',
        correct: 'Internet = Network infrastructure | Web = Service of pages',
        note: 'Mistake 6: Confusing Internet and Web.',
      },
    ],
  },
  {
    id: 33,
    title: '33. Day 1 Practical Exercises',
    badge: 'Lab Assignments',
    definition: 'Three hands-on lab exercises for students to practice in the lab session.',
    steps: [
      {
        stepNumber: 1,
        title: 'Exercise 1: First Webpage',
        desc: 'Create index.html. Display "MRDU College" using an <h1> heading and "Welcome to our college" using a <p> paragraph.',
      },
      {
        stepNumber: 2,
        title: 'Exercise 2: Student Profile',
        desc: 'Create a student profile page showing Name, College, Branch, and Year using <h1> and multiple <p> tags.',
      },
      {
        stepNumber: 3,
        title: 'Exercise 3: Explain Client-Server Flow',
        desc: 'Explain in your own words what happens when a student types a URL in Chrome until the page appears.',
      },
    ],
    codeSnippets: [
      {
        language: 'html',
        code: `<!-- Exercise 2 Solution: Student Profile -->
<h1>Student Profile</h1>
<p>Name: Rahul</p>
<p>College: MRDU College</p>
<p>Branch: CSE</p>
<p>Year: I B.Tech</p>`,
        caption: 'Exercise 2 Sample Student Profile Code.',
      },
    ],
  },
  {
    id: 34,
    title: '34. Day 1 Viva Questions & Answers',
    badge: '15 High-Yield Viva Q&A',
    definition: '15 frequent oral exam questions with concise, high-scoring answers.',
    qaList: [
      { q: '1. What is the Internet?', a: 'The Internet is a worldwide network that connects computers and devices so they can share information.' },
      { q: '2. What is the Web?', a: 'The Web (WWW) is a system of interlinked webpages and websites accessed through the Internet.' },
      { q: '3. What is a website?', a: 'A website is a collection of related webpages hosted under a single domain.' },
      { q: '4. What is a webpage?', a: 'A webpage is an individual document that can be displayed in a web browser.' },
      { q: '5. What is a browser?', a: 'A web browser is software used to request, parse, and display webpages.' },
      { q: '6. Give examples of web browsers.', a: 'Google Chrome, Microsoft Edge, Mozilla Firefox, and Apple Safari.' },
      { q: '7. What is a client?', a: 'A client is a device or software application that requests services or resources from a server.' },
      { q: '8. What is a server?', a: 'A server is a computer system that stores and delivers resources or services to clients.' },
      { q: '9. What is a request?', a: 'A request is a message sent by the client asking the server for a resource or action.' },
      { q: '10. What is a response?', a: 'A response is the server’s reply to the client, delivering the requested HTML, CSS, or media.' },
      { q: '11. What is HTML?', a: 'HTML stands for HyperText Markup Language and is used to structure content on the web.' },
      { q: '12. Is HTML a programming language?', a: 'No, HTML is a declarative markup language, not a programming language.' },
      { q: '13. What is the file extension of an HTML file?', a: '.html' },
      { q: '14. What is an HTML tag?', a: 'A tag is a syntax keyword enclosed in angle brackets (< >) that tells the browser how to handle content.' },
      { q: '15. What is an HTML element?', a: 'An element is the complete unit consisting of the opening tag, content, and closing tag.' },
    ],
  },
  {
    id: 35,
    title: '35. Day 1 Blackboard Summary',
    badge: 'Classroom Board Summary',
    definition: 'Summary diagram to write on the blackboard at the conclusion of class.',
    diagramAscii: `INTERNET   → Worldwide network
WEB        → System of webpages
WEBSITE    → Collection of webpages
WEBPAGE    → One individual page
BROWSER    → Displays webpages
CLIENT     → Requests resources
SERVER     → Provides resources
HTML       → Structures webpage
.html      → HTML file extension

Client-Server Request Cycle:
User → Browser (Client) → Request → Server → Response → Browser → Webpage`,
    memoryTrick: 'HTML is a markup language used to structure the content of webpages.',
  },
];
