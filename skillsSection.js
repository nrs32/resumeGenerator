const generateSkillsSection = (skills) => {
    let skillsSection = document.getElementById('skillsSection');
    const { sectionTitle, skillPoints } = skills;
    skillsSection.innerHTML +=
        `<div style="clear:both; height: 0.916666666666667em;"></div>
        <div class="sectionHeader"><span>${sectionTitle}</span></div>
        <div class="singleUnderline"></div>
        <div>
            <ul style="padding-left: 28px; margin: 0;">
            ${skillPoints.map(skill => `<li>${skill}</li>`).join("")}
            </ul>
        </div>`
}