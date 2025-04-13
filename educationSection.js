const generateEducationSection = (education) => {
    let educationSection = document.getElementById('educationSection');

    // Add header
    educationSection.innerHTML +=
        `<div style="clear:both; height: 0.916666666666667em;"></div>
        <div>
            <div class="sectionHeader"><span>Education</span></div>
            <div class="singleUnderline"></div>`

    // Add edu content
    education.forEach((edu, i) => {
        const { school, location, major, minor, graduation, gpa, other, releventCoursework } = edu;
        educationSection.innerHTML +=
            `<div style="${i > 0 ? "padding-top: 40px;" : ""}">
                <span>
                    <b>${school}</b> - <b>${location}</b> <br>
                    ${major} <br>
                    ${minor ? `Minor in ${minor} <br>` : ""}
                    ${graduation ? `Graduated: ${graduation} <br>` : ""  }
                    ${gpa ? `GPA: ${gpa} <br>` : "" }
                    <br>
                    ${other} <br>
                    ${releventCoursework 
                    ? `<br>
                       <b>Relevant Coursework: </b> ${releventCoursework}`
                    : ""}
                </span>
                <div style="display:none;"></div>
            </div>`
    })

    // end edu
    educationSection.innerHTML += `</div>`;
}