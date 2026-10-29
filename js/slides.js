/* =============================================
   slides.js
   PPT Deck Data + Slide Viewer Logic
   Sarah Dagohoy - TLE Computer Programming
   ============================================= */

var pptDecks = [
    {
        number: "PPT 01",
        title: "Introduction to Computer Programming",
        subtitle: "What Programming Is & How Computers Follow Instructions",
        icon: "CP",
        slideCount: 3,
        slides: [
            {
                heading: "What is Computer Programming?",
                bullets: [
                    "Computer programming is the process of creating instructions that tell a computer what to do.",
                    "Computers do not think on their own - they follow step-by-step commands written by programmers.",
                    "Programming helps people develop applications, websites, games, and software to solve real-world problems."
                ],
                code: "// Example Instruction:\nStep 1: Ask user for their name\nStep 2: Display \"Welcome to TLE Programming, Sarah Dagohoy!\""
            },
            {
                heading: "Why Learn Computer Programming?",
                bullets: [
                    "Builds logical thinking and problem-solving skills.",
                    "Lets you create your own websites, mobile apps, and online games.",
                    "Prepares students to become future software engineers and web developers."
                ],
                code: "Goal: Turn creative ideas into working websites & software!"
            },
            {
                heading: "Summary: PPT 1 Key Takeaway",
                bullets: [
                    "Every website or online game you play is powered by code.",
                    "In TLE Computer Programming, we start with the core languages of the web: HTML and CSS."
                ],
                code: "Computer + Clear Instructions (Code) = Useful Application"
            }
        ]
    },
    {
        number: "PPT 02",
        title: "HTML Fundamentals & Elements",
        subtitle: "HyperText Markup Language & Building Blocks of a Webpage",
        icon: "HT",
        slideCount: 3,
        slides: [
            {
                heading: "What is HTML?",
                bullets: [
                    "HTML stands for HyperText Markup Language.",
                    "It is the standard language used to create the structure and content of a web page.",
                    "Every webpage you visit on the internet uses HTML at its core."
                ],
                code: "<!DOCTYPE html>\n<html>\n  <head><title>My Website</title></head>\n  <body>Hello World!</body>\n</html>"
            },
            {
                heading: "HTML Elements: The Building Blocks",
                bullets: [
                    "HTML elements are the building blocks of a webpage.",
                    "They define the different parts of the page, such as headings, paragraphs, images, and links.",
                    "Most HTML elements have an opening tag, content inside, and a closing tag."
                ],
                code: "<p>This entire line is an HTML Paragraph Element.</p>"
            },
            {
                heading: "Anatomy of an HTML Tag",
                bullets: [
                    "Opening Tag: <tagname> starts the element.",
                    "Content: The text or media displayed on screen.",
                    "Closing Tag: </tagname> ends the element with a forward slash."
                ],
                code: "<h1>Computer Programming</h1>"
            }
        ]
    },
    {
        number: "PPT 03",
        title: "Website Structure & Text Formatting",
        subtitle: "Header, Main, Footer, Headings, Paragraphs & Formatting",
        icon: "WS",
        slideCount: 3,
        slides: [
            {
                heading: "Website Structure",
                bullets: [
                    "A website is organized into different sections such as the Header, Main Content, and Footer.",
                    "<header>: Shows the website title, logo, and navigation links.",
                    "<section> / <main>: Contains the core lessons and information.",
                    "<footer>: Displays copyright info and credits at the bottom."
                ],
                code: "<header>Top Title & Navigation</header>\n<section>Main Webpage Content</section>\n<footer>2026 Programming | For Future Programmer</footer>"
            },
            {
                heading: "Headings and Paragraphs",
                bullets: [
                    "Headings (<h1> to <h6>) are used to organize the titles and subtitles of a webpage.",
                    "<h1> is the largest main heading, while <h6> is the smallest.",
                    "Paragraphs (<p>) contain detailed information and keep text neat and easy to read."
                ],
                code: "<h1>Main Website Title</h1>\n<h2>Section Subtitle</h2>\n<p>This paragraph explains the topic clearly.</p>"
            },
            {
                heading: "HTML Text Formatting",
                bullets: [
                    "HTML formatting changes the appearance of text for emphasis:",
                    "<strong> or <b> makes text Bold.",
                    "<em> or <i> makes text Italic.",
                    "<u> makes text Underlined, and <mark> highlights text."
                ],
                code: "<strong>Bold Text</strong> | <em>Italic Text</em> | <u>Underlined</u>"
            }
        ]
    },
    {
        number: "PPT 04",
        title: "Adding Images & Hyperlinks",
        subtitle: "Visual Media with <img> and Connecting Pages with <a>",
        icon: "IM",
        slideCount: 3,
        slides: [
            {
                heading: "Adding Images in HTML",
                bullets: [
                    "Images make a website more attractive, colorful, and informative.",
                    "In HTML, images are added using the <img> tag.",
                    "Use the 'src' attribute for the image file path and 'alt' for descriptive text."
                ],
                code: "<img src=\"profile.jpg\" alt=\"Student Photo\" width=\"300\">"
            },
            {
                heading: "Creating Hyperlinks with the <a> Tag",
                bullets: [
                    "Hyperlinks connect one webpage to another or open websites on the internet.",
                    "They are created using the <a> (anchor) tag in HTML.",
                    "The 'href' attribute specifies the destination URL or page filename."
                ],
                code: "<nav>\n  <a href=\"index.html\">Home</a>\n  <a href=\"about.html\">About Me</a>\n  <a href=\"score.html\">Score</a>\n  <a href=\"feedback.html\">Feedback</a>\n</nav>"
            },
            {
                heading: "Why Images & Links Matter",
                bullets: [
                    "Navigation bars rely on hyperlinks so users can move between Home, About Me, Score, and Feedback.",
                    "Visuals and links turn plain text documents into interactive websites."
                ],
                code: "<a href=\"https://example.com\" target=\"_blank\">Visit a Website</a>"
            }
        ]
    },
    {
        number: "PPT 05",
        title: "Organizing Data with HTML Tables",
        subtitle: "Rows, Columns, Headers & Structured Information",
        icon: "TB",
        slideCount: 3,
        slides: [
            {
                heading: "What are HTML Tables?",
                bullets: [
                    "Tables are used to organize information into rows and columns.",
                    "They are very useful for displaying schedules, student grades, and data clearly and neatly."
                ],
                code: "<table> ... </table>"
            },
            {
                heading: "Essential Table Tags",
                bullets: [
                    "<table>: Wraps the entire table.",
                    "<tr> (Table Row): Creates a horizontal row.",
                    "<th> (Table Header): Creates a bold header cell for column titles.",
                    "<td> (Table Data): Contains the actual data cell inside a row."
                ],
                code: "<table border=\"1\">\n  <tr>\n    <th>Name</th>\n    <th>Grade</th>\n  </tr>\n  <tr>\n    <td>Sarah Dagohoy</td>\n    <td>Grade 10</td>\n  </tr>\n</table>"
            },
            {
                heading: "Tips for Clean Tables",
                bullets: [
                    "Always pair <th> headers with matching <td> data cells in each row.",
                    "Combine HTML tables with CSS borders and padding for a clean editorial look."
                ],
                code: "th, td { border: 1px solid #9e241f; padding: 8px; }"
            }
        ]
    },
    {
        number: "PPT 06",
        title: "CSS Styling, Properties & Attributes",
        subtitle: "Cascading Style Sheets, Colors, Fonts, Layouts & Attributes",
        icon: "CS",
        slideCount: 3,
        slides: [
            {
                heading: "What is CSS?",
                bullets: [
                    "CSS stands for Cascading Style Sheets.",
                    "It is used to design and improve the appearance of a website by adding colors, fonts, spacing, and layouts.",
                    "While HTML is the skeleton of a webpage, CSS is the style and outfit!"
                ],
                code: "body {\n  background-color: #ff9eaa;\n  color: #9e241f;\n  font-family: 'Montserrat', sans-serif;\n}"
            },
            {
                heading: "Properties & Attributes",
                bullets: [
                    "HTML Attributes provide additional information inside an HTML tag (like href, src, id, class, min, max).",
                    "CSS Properties control the visual design and appearance of elements (like color, background-color, border, font-size).",
                    "Both work together in building a complete webpage."
                ],
                code: "<!-- HTML Attribute Example -->\n<input type=\"number\" min=\"1\" max=\"100\">\n\n/* CSS Property Example */\n.card { background: #f3ebd8; border: 2px solid #9e241f; }"
            },
            {
                heading: "How to Connect CSS to HTML",
                bullets: [
                    "Use the <link> tag inside the <head> section to connect an external style.css file to all your pages.",
                    "This keeps your design consistent across Home, About Me, Score, and Feedback!"
                ],
                code: "<link rel=\"stylesheet\" href=\"style.css\">"
            }
        ]
    }
];

/* ---- Render PPT Cards ---- */
function renderPptCards() {
    var grid = document.getElementById('ppt-cards-grid');
    if (!grid) return;

    grid.innerHTML = pptDecks.map(function(deck, idx) {
        return '<div onclick="openSlideDeck(' + idx + ')" class="ppt-card">'
            + '<div class="ppt-card-top">'
            +   '<span class="ppt-number-badge">' + deck.number + '</span>'
            +   '<span class="ppt-slides-label">' + deck.slideCount + ' Slides - PPTX</span>'
            + '</div>'
            + '<div class="ppt-preview-box">'
            +   '<div class="ppt-icon-box"><span style="font-family:\'Shrikhand\',cursive;font-size:1.1rem;color:#9e241f;">' + deck.icon + '</span></div>'
            +   '<div><h3 class="ppt-card-title">' + deck.title + '</h3></div>'
            + '</div>'
            + '<p class="ppt-card-subtitle">' + deck.subtitle + '</p>'
            + '<div class="ppt-card-footer">'
            +   '<span class="ppt-open-label">Open Presentation</span>'
            +   '<span class="ppt-play-btn">&#9654;</span>'
            + '</div>'
            + '</div>';
    }).join('');
}

/* ---- Slide Modal Logic ---- */
var currentDeckIndex = 0;
var currentSlideIndex = 0;

function initSlideModal() {
    updateSlideModalUI();
}

window.openSlideDeck = function(deckIdx) {
    currentDeckIndex = deckIdx;
    currentSlideIndex = 0;
    updateSlideModalUI();
    var modal = document.getElementById('ppt-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('open');
    }
};

window.closeSlideDeck = function() {
    var modal = document.getElementById('ppt-modal');
    if (modal) {
        modal.classList.remove('open');
        modal.classList.add('hidden');
    }
};

window.nextSlide = function() {
    var deck = pptDecks[currentDeckIndex];
    if (currentSlideIndex < deck.slides.length - 1) {
        currentSlideIndex++;
        updateSlideModalUI();
    } else if (currentDeckIndex < pptDecks.length - 1) {
        currentDeckIndex++;
        currentSlideIndex = 0;
        updateSlideModalUI();
    }
};

window.prevSlide = function() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateSlideModalUI();
    } else if (currentDeckIndex > 0) {
        currentDeckIndex--;
        currentSlideIndex = pptDecks[currentDeckIndex].slides.length - 1;
        updateSlideModalUI();
    }
};

function updateSlideModalUI() {
    var deck = pptDecks[currentDeckIndex];
    var slide = deck.slides[currentSlideIndex];

    var titleEl = document.getElementById('ppt-modal-deck-title');
    var badgeEl = document.getElementById('ppt-slide-badge');
    var headingEl = document.getElementById('ppt-slide-heading');
    var bulletsEl = document.getElementById('ppt-slide-bullets');
    var codeEl = document.getElementById('ppt-slide-code-box');

    if (titleEl) titleEl.textContent = deck.number + ': ' + deck.title;
    if (badgeEl) badgeEl.textContent = deck.number + ' - Slide ' + (currentSlideIndex + 1) + ' of ' + deck.slides.length;
    if (headingEl) headingEl.textContent = slide.heading;

    if (bulletsEl) {
        bulletsEl.innerHTML = slide.bullets.map(function(b) {
            return '<p>' + b + '</p>';
        }).join('');
    }

    if (codeEl) codeEl.textContent = slide.code;

    for (var i = 0; i < 6; i++) {
        var dot = document.getElementById('deck-dot-' + i);
        if (!dot) continue;
        if (i === currentDeckIndex) {
            dot.className = 'deck-dot active';
        } else {
            dot.className = 'deck-dot';
        }
    }
}

