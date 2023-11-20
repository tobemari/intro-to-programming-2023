const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
const skills = ['JavaScript Basics', 'Git', 'HTML Basics', 'The DOM'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for ( i = 0; i < skills.length; i ++ ) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
};

copyright.innerHTML = `Mariia Domarkas ${thisYear}`;
footer.appendChild(copyright);