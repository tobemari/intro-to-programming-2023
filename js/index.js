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

copyright.innerHTML = `Mariia Domarkas ${thisYear}`;
footer.appendChild(copyright);

const messageForm = document.getElementsByName('leave_message')[0];
const messageSection = document.getElementById('messages');

messageSection.style.display = 'none';

const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement('li');
newMessage.className = 'list__item';


    
messageForm.addEventListener( 'submit', (e) => {
    e.preventDefault();
    
    messageSection.style.display = '';
    
    const userName = e.target.usersName.value;
    const userEmail =  e.target.usersEmail.value;
    const userMessage =  e.target.usersMessage.value;
   
    newMessage.innerHTML = `<a href="mailto:${userEmail}"> ${userName}</a> wrote: <span>${userMessage} </span>`;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.type = 'button';
    removeButton.className = 'remove';

    removeButton.addEventListener( 'click', (e) => { 
        const entry = e.target.parentNode;
        entry.remove();
        if (!messageList.contains(newMessage)){
            messageSection.style.display = "none";
        }
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();

});


