function generateContent() {
    const { name, phone, email, addrLine1, addrLine2, education, experience, skills, achievements } = data;
    generateHeader(name, phone, email, addrLine1, addrLine2);
    generateEducationSection(education);
    generateExperienceSection(experience);
    generateSkillsSection(skills);
    generateAchievementSection(achievements);
}