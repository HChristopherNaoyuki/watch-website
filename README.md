# Digital Watch

## Overview

This project represents a digital watch interface created with HTML, CSS, and JavaScript. 
It displays a digital clock that updates every minute, mimicking the appearance of a modern 
digital watch with an elegant design and animated transitions.

## Features

* **Digital Time Display:** Shows hours and minutes with automatic updates every minute.
* **Responsive Design:** The watch interface adapts to the browser's window size.
* **Button Aesthetics:** Includes visual elements such as side buttons and a power button, styled for a realistic watch-like interface.
* **Animation and Styling:** Advanced CSS styling with gradients, shadows, and transitions that give the clock a polished and sleek look.

## File Structure

```
/watch-website
│
├── index.html         # Main HTML structure
├── watch.css          # Styling for the digital watch
└── watch.js           # JavaScript logic for the clock functionality
```

## Requirements

* A modern web browser that supports CSS and JavaScript (e.g., Chrome, Firefox, Edge).
* No external libraries are required; the project relies on native JavaScript and CSS.

## How to Use

1. **Clone or Download:**

   * Clone this repository or download the zip file to your local machine.

2. **Open the HTML File:**

   * Open the `index.html` file in any modern web browser.

3. **View the Watch:**

   * The digital clock should be displayed immediately. The clock will update the time every minute, reflecting the current local time (or UTC if the local time is unavailable).

4. **Customization:**

   * You can customize the clock appearance by modifying the `watch.css` file.
   * The time format can be adjusted in the `watch.js` file if necessary.

## Code Explanation

### HTML (index.html)

* The HTML file contains the structure of the digital watch, including the clock display, buttons, and dots that mimic the aesthetic of a real-world watch.
* The time is displayed within two `<div>` elements, one for hours and one for minutes.

### CSS (watch.css)

* The CSS file defines the visual appearance of the watch. It uses gradients, shadows, and flexbox for layout.
* The `.watch` class defines the overall appearance of the watch, while the `.frame` class handles the styling of the watch face.
* `.sideBtn` and `.powerBtn` define the appearance of the buttons on the watch.

### JavaScript (watch.js)

* The JavaScript file contains the `updateClock` function, which retrieves the current time and updates the time display every minute.
* The time is formatted with leading zeros (e.g., `09:05` instead of `9:5`).
* The clock updates every 60 seconds using the `setInterval` function.

## Customization and Troubleshooting

* **Change Time Format:**

  * Modify the `updateClock` function in `watch.js` to adjust the time format.

* **Improve Responsiveness:**

  * Adjust the `transform: scale(0.7)` property in the `.watch` class for different screen sizes.

* **Error Handling:**

  * If the time is not displaying correctly, check that your browser supports JavaScript
    and that there are no errors in the developer console (right-click on the page and select "Inspect" > "Console").

## DISCLAIMER

UNDER NO CIRCUMSTANCES SHOULD IMAGES OR EMOJIS BE INCLUDED DIRECTLY 
IN THE README FILE. ALL VISUAL MEDIA, INCLUDING SCREENSHOTS AND IMAGES 
OF THE APPLICATION, MUST BE STORED IN A DEDICATED FOLDER WITHIN THE 
PROJECT DIRECTORY. THIS FOLDER SHOULD BE CLEARLY STRUCTURED AND NAMED 
ACCORDINGLY TO INDICATE THAT IT CONTAINS ALL VISUAL CONTENT RELATED TO 
THE APPLICATION (FOR EXAMPLE, A FOLDER NAMED IMAGES, SCREENSHOTS, OR MEDIA).

I AM NOT LIABLE OR RESPONSIBLE FOR ANY MALFUNCTIONS, DEFECTS, OR ISSUES 
THAT MAY OCCUR AS A RESULT OF COPYING, MODIFYING, OR USING THIS SOFTWARE. 
IF YOU ENCOUNTER ANY PROBLEMS OR ERRORS, PLEASE DO NOT ATTEMPT TO FIX THEM 
SILENTLY OR OUTSIDE THE PROJECT. INSTEAD, KINDLY SUBMIT A PULL REQUEST 
OR OPEN AN ISSUE ON THE CORRESPONDING GITHUB REPOSITORY, SO THAT IT CAN 
BE ADDRESSED APPROPRIATELY BY THE MAINTAINERS OR CONTRIBUTORS.

---
