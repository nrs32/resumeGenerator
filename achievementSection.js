const generateAchievementSection = (achievements) => {
    let achievementSection = document.getElementById('achievementSection');
    const sectionTitle = "Scholarships And Awards";
    achievementSection.innerHTML +=
        `<div style="clear:both; height: 0.916666666666667em;"></div>
            <div class="sectionHeader"><span>${sectionTitle}</span></div>
            <div class="singleUnderline"></div>
            <div>
                <ul style="padding-left: 28px; margin: 0;">
                    ${achievements.map(achievement => `<li>
                    <div style="float: left;">${achievement.description}</div>
                    <div style="float: right;"> ${achievement.date}</div>
                    </li>`).join("")}
                </ul>
            </div>`
}