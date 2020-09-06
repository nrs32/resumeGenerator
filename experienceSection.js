const generateExperienceSection = (experiences) => {
    let experienceSection = document.getElementById('experienceSection');

    // Add header
    experienceSection.innerHTML +=
        `<div style="clear:both; height: 0.916666666666667em;"></div>
        <div>
            <div class="sectionHeader"><span>Experience</span></div>
            <div class="singleUnderline"></div>`

    // Add experience content
    experiences.forEach((experience, i) => {
        const { position, company, location, startDate, endDate, body } = experience;
        experienceSection.innerHTML +=
            `<div style="${i + 1 < experiences.length ? "padding-bottom: 1.5em;" : ""}">
                <div>
                    <span style="font-weight: bold;">${position}</span>
                    <span style="float:right; text-align:right;">${startDate} - ${endDate}</span>
                </div>
                <div>
                    <i>${company} - ${location}</i>
                    <ul style="padding-left: 28px; margin: 0px;">
                        ${body.map(listItem => `<li>${listItem}</li>`).join("")}
                    </ul>
                </div>
            </div>`
    })

    // end experience
    experienceSection.innerHTML += `</div>`;
}