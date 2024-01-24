const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('div');
const skills = ['JavaScript Basics', 'Git', 'HTML Basics', 'The DOM', 'CSS'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

copyright.className = "container";

for ( i = 0; i < skills.length; i ++ ) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
};

copyright.innerHTML = `&#169 Mariia Domarkas ${thisYear}`;
footer.appendChild(copyright);

const messageForm = document.getElementsByName('leave_message')[0];
const messageSection = document.getElementById('messages');

messageSection.style.display = 'none';

messageForm.addEventListener( 'submit', (e) => {
    e.preventDefault();
    
    messageSection.style.display = '';
    
    const userName = e.target.usersName.value;
    const userEmail =  e.target.usersEmail.value;
    const userMessage =  e.target.usersMessage.value;

    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
  
   
    newMessage.innerHTML += `<div><a class="link link--no-decor underline-one" href="mailto:${userEmail}"> ${userName}</a> wrote: <span>${userMessage} </span></div>`;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.type = 'button';
    removeButton.className = 'remove';

    removeButton.addEventListener('click', (e) => { 
        const entry = e.target.parentNode;
        console.log(entry);
        entry.remove();
        if (messageList.childElementCount == 0){
            messageSection.style.display = "none";
        }
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();

});

let githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/tobemari/repos');
githubRequest.send();

githubRequest.addEventListener("load", (e) => {

    let repositories = JSON.parse(githubRequest.response);
    let projectSection = document.querySelector('#projects');
    let projectList = projectSection.querySelector('ul');
    for (let i=0; i<repositories.length; i += 1) {
        let project = document.createElement('li');
        project.innerHTML = `<a class="link link--no-decor underline-one" href=${repositories[i].html_url}>${repositories[i].name}</a>`;
        projectList.appendChild(project);
    }
    console.log(repositories);
});


   
