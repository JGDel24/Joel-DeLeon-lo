const footerChild = document.createElement('footer');
document.body.appendChild(footerChild);

let today = new Date();
let thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Joel DeLeon ${thisYear}`;
document.body.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
let skillsSection = document.querySelector("#skills");
let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);

}




