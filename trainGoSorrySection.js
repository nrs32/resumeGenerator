const generateTGSSection = (tgs) => {
    console.log("TGS", tgs)
    let tgsSection = document.getElementById('tgsSection');
    const sectionTitle = "Personal Project";
    tgsSection.innerHTML +=
        `<div style="clear:both; height: 0.916666666666667em;"></div>
            <div class="sectionHeader"><span>${sectionTitle}</span></div>
            <div class="singleUnderline"></div>
            <div>
                <p><a href="https://train-go-sorry.com">TRAIN GO SORRY </a>${tgs.desc}</p>
                <ul style="padding-left: 28px; margin: 0;">
                    ${tgs.milestones.map(achievement => `<li>
                    <div style="float: left; max-width: 5.8in">${achievement.description}</div>
                    <div style="float: right;"> ${achievement.date}</div>
                    </li>`).join("")}
                </ul>
            </div>`
}