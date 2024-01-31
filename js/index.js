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

fetch('https://api.github.com/users/tobemari/repos') 
    .then(response => response.json())
    .then(data => {
        const projectSection = document.querySelector('#projects');
        const projectList = projectSection.querySelector('ul');
        for (let i=0; i<data.length; i += 1) {
            const project = document.createElement('li');
        project.innerHTML = `<a class="link link--no-decor underline-one" href=${data[i].html_url}>${data[i].name}</a>`;
        projectList.appendChild(project);
        }
    })
    .catch(error => console.log('Looks like there was a problem!', error));