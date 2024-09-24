const footer = document.createElement('footer');
document.body.appendChild(footer);

let today = new Date();

let thisYear = today.getFullYear();


const copyright = document.createElement('p');

copyright.innerHTML = `Joel DeLeon ${thisYear}`;

footer.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];

let skillsSection = document.querySelector("#Skills");

let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);

}

const messageForm = document.querySelector('form[name="Leave_message"]');

messageForm.addEventListener('submit', function (event) {

    event.preventDefault();


    let usersName = document.querySelector('input[name="usersName"]').value;
    let usersEmail = document.querySelector('input[name="usersEmail"]').value;
    let usersMessage = document.querySelector('textarea[name="usersMessage"]').value;


    console.log(usersName);
    console.log(usersEmail);
    console.log(usersMessage);

    const messageSection = document.getElementById('Message');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function (event) {
        let entry = removeButton.parentNode;

        entry.remove()
    })

    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);

    messageForm.reset();
});

fetch('https://api.github.com/users/JGDel24/repos')
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
    })

    .then(function (repository) {
        console.log(repository);

        const projectSection = document.getElementById('Projects');

        const projectList = projectSection.querySelector('ul');

        for (let i = 0; i < repository.length; i++) {
            let project = document.createElement('li');
            project.innerText = repository[i].name;

            projectList.appendChild(project);
        }
    })

    .catch(function (error) {
        console.error('Error', error);
    })
