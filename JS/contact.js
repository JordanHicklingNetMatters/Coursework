const fullName = document.querySelector('#name');
const companyName = document.querySelector('#company-name');
const email = document.querySelector('#email'); 
const telephone = document.querySelector('#telephone'); 
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    if (fullName.value === "" || fullName.value == null) {
        e.preventDefault();
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("name-warning").style.display="block";
    } else {
        document.getElementById("name").style.borderColor = "green";
        document.getElementById("name-warning").style.display="none";
    }
})

const regex = /(^(?!.*__.*)[a-z0-9]{4,253}(_?)[a-z0-9]+(?:\.[a-z0-9!#$%&*+\/=?^`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?$)/;

form.addEventListener('submit', (e) => {
    if(email.value === "" || email.value === null) {
        e.preventDefault();
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email-warning").style.display="block";
    } else if (email.value.match(regex)) {
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("email-warning").style.display="none";
    } else {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("regex-warning").style.display="inline"
    }
})

form.addEventListener('submit', (e) => {
    if(telephone.value === "" || telephone.value === null) {
        e.preventDefault();
        document.getElementById("telephone").style.borderColor = "red";
        document.getElementById("telephone-warning").style.display="block";
    } else {
        document.getElementById("telephone").style.borderColor = "green";
        document.getElementById("telephone-warning").style.display="none";
    }
})

form.addEventListener('submit', (e) => {
    if(subject.value === "" || subject.value === null) {
        e.preventDefault();
        document.getElementById("subject").style.borderColor = "red";
        document.getElementById("subject-warning").style.display="block";
    } else {
        document.getElementById("subject").style.borderColor = "green";
        document.getElementById("subject-warning").style.display="none";
    }
})

form.addEventListener('submit', (e) => {
    if(message.value === "" || message.value === null) {
        e.preventDefault();
        document.getElementById("message").style.borderColor = "red";
        document.getElementById("message-warning").style.display="block";
    } else {
        document.getElementById("message").style.borderColor = "green";
        document.getElementById("message-warning").style.display="none";
    }
})


// const hiddenText = document.querySelector('.hidden-information-text')

// hiddenText.addEventListener("click", displayInformation)
// function displayInformation() {
//     document.getElementsByClassName('dropdown-information')[0].style.display="block";
// }