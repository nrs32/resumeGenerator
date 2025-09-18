/**
 * Hides buttons and shadows so they do not appear on print
 * Opens print dialog to use to save PDF or print resume
 * Restores buttons and shadows
 */
function savePDF() {
    // Temporary styles for PDF export or print
    let page = document.getElementById('paper');
    page.style.boxShadow = "none";
    page.style.border = "none";

    let saveButton = document.getElementById('saveButton');
    saveButton.style.display = "none";

    let changeLayout = document.getElementById('changeLayout');
    changeLayout.style.display = "none";

    let currentLayout = document.getElementById('currentLayout');
    currentLayout.style.display = "none";

    print();

    // Restore to defaults defined elseware
    page.style.boxShadow = "";
    page.style.border = "";
    saveButton.style.display = "";
    changeLayout.style.display = "";
}

/**
 * Toggles between condensed and default layouts which affects various aspects of spacing and font-size
 */
function changeLayout() {
    let changeLayout = document.getElementById('changeLayout');
    let currentLayout = document.getElementById('currentLayout');

    currentLayout.textContent == "Default Layout" ? middleDisplay(currentLayout, changeLayout) : 
    currentLayout.textContent == "Middle Layout" ?  condensedDisplay(currentLayout, changeLayout) :
    defaultDisplay(currentLayout, changeLayout);
}

/**
 * Sets condensed layout by adjusting relevent html elements
 * Updates changeLayout to have value "condensed"
 * @param currentLayout the div responsible for knowing which layout is currently being used
 * @param changeLayout the div responsible for knowing which layout is currently being used
 */
function condensedDisplay(currentLayout, changeLayout) {
    currentLayout.textContent = "Condensed Layout";
    changeLayout.textContent = "Default Layout";

    let body = document.getElementById('body');
    body.style.fontSize = "0.84em"

    let experienceSection = document.getElementById('experienceSection');
    experienceSection.style.marginBottom = "0";

    var elements = document.querySelectorAll('#sectionDivider');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    var elements = document.querySelectorAll('.singleUnderline');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.marginBottom = "1em";
    }
}

/**
 * Sets condensed layout by adjusting relevent html elements
 * Updates changeLayout to have value "condensed"
 * @param currentLayout the div responsible for knowing which layout is currently being used
 * @param changeLayout the div responsible for knowing which layout is currently being used
 */
function middleDisplay(currentLayout, changeLayout) {
    currentLayout.textContent = "Middle Layout";
    changeLayout.textContent = "Condensed Layout";

    let body = document.getElementById('body');
    body.style.fontSize = "0.89em"

    let experienceSection = document.getElementById('experienceSection');
    experienceSection.style.marginBottom = "10px";

    var elements = document.querySelectorAll('#sectionDivider');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    var elements = document.querySelectorAll('.singleUnderline');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.marginBottom = "1.5em";
    }
}

/**
 * Sets default layout by adjusting relevent html elements
 * Updates changeLayout to have value "default"
 * @param currentLayout the div responsible for knowing which layout is currently being used
 * @param changeLayout the div responsible for knowing which layout is currently being used
 */
function defaultDisplay(currentLayout, changeLayout) {
    currentLayout.textContent = "Default Layout";
    changeLayout.textContent = "Middle Layout";

    let body = document.getElementById('body');
    body.style.fontSize = "0.91666em"

    let experienceSection = document.getElementById('experienceSection');
    experienceSection.style.marginBottom = "0";

    var elements = document.querySelectorAll('#sectionDivider');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "";
    }

    var elements = document.querySelectorAll('.singleUnderline');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.marginBottom = "1.5em";
    }
}