var show_more_flag = false;

var project_image = [
    "GitHub Eagle Eye.png",
    "conference-booking.png"
];

var project_title = [
    "GitHub Eagle Eye",
    "Conference Room Booking Application"
];

var github_links = [
    "#",
    "https://github.com/RushabhGajab2605/Conferenece-Booking-Application"
]

var demo_links = [
    "https://github-eagle-eye.netlify.app/",
    "https://drive.google.com/drive/u/2/folders/1AcOpg5d0d0Tj0wqkVZABn5e1XjIrcwt6"
]

var project_description = [
    "Prepared a small React project to demonstrate the use of the React framework.The project uses the GitHub API to fetch and display GitHub information different GitHub users.The users of the application get data visualization of the GitHub users whose GitHub handles are searched for.",
    "Prepared the UI/UX design for the Conference Room Booking Application screenshot.A Conference Room Booking Application that allows employees to book conference rooms for the day or even in advance."
]

let project_section = document.getElementById("project-container");
let show_more_button = document.getElementById("show-more-projects");
console.dir(show_more_button);

show_more_button.addEventListener("click", ()=>{
    console.log("Reaching here")
    if (show_more_flag === false)
        {
            show_more_flag = true;
            for (let i=0; i < 2; i++)
            {
                project_section.innerHTML += 
                `
                <div class="project">
                <img src="${project_image[i]}" class="project-img" alt="">
                <h2 class="project-title">${project_title[i]}</h2>
                <div class="project-buttons">
                    <a href="${github_links[i]}" target="_blank"><button class="github-button"><img class="github-image" src="./GitHub_Invertocat_Logo.png" alt=""></button></a>
                    <a href="${demo_links[i]}" target="_blank"><button class="github-button"><img class="demo-image" src="./demo.png" alt=""></button></a>
                </div>
                <p class="project-description">${project_description[i]}</p>

                </div>

                `
                show_more_button.innerText = "Show Less";
            }
        
        }

        else if (show_more_flag === true)
        {
            show_more_flag = false;
                
            project_section.innerHTML = 
            `
                        <div class="project">
                <img src="Three.js Tutorial.png" class="project-img" alt="">
                <h2 class="project-title">2D/3D Rendering on the Web Tutorial</h2>
                <div class="project-buttons">
                    <a href="https://github.com/RushabhGajab2605" target="_blank"><button class="github-button"><img class="github-image" src="./GitHub_Invertocat_Logo.png" alt=""></button></a>
                    <a href="https://ser-421.vercel.app/threejs" target="_blank"><button class="github-button"><img class="demo-image" src="./demo.png" alt=""></button></a>
                </div>
                <p class="project-description">This is a 2D/3D Web Rendering tutorial web application with a stepwise approach to teach anyone who wants to learn 2D/3D rendering on the web. This tutorial mainly focuses on mainly three technologies namely - WebGL, Three.js and Babylon. The end goal of the tutorial is that students using the platform successfully differentiates between different 2D/3D rendering technologies and is able to decide the technology that is best for their requirement.</p>
                
            </div>
            <div class="project">
                <img src="CentsRents Renting Portal.png" class="project-img" alt="">
                <h2 class="project-title">CentsRents Renting Portal</h2>
                <div class="project-buttons">
                    <a href="https://github.com/RushabhGajab2605/rentcents" target="_blank"><button class="github-button"><img class="github-image" src="./GitHub_Invertocat_Logo.png" alt=""></button></a>
                    <a href="https://www.youtube.com/watch?v=Qszd2FkYzZQ" target="_blank"><button class="github-button"><img class="demo-image" src="./demo.png" alt=""></button></a>
                </div>
                <p class="project-description">CentsRents is a platform for people who want to put an item on rent or want an item on rent.Major aim of the project was to provide an online platform which connects people over requirements and availability, to set in motion a rent contract.</p>
                
            </div>
            <div class="project">
                <img src="SanSkript.png" class="project-img" alt="">
                <h2 class="project-title">SanSkript - Programming Language</h2>
                <div class="project-buttons">
                    <a href="https://github.com/rgajab/SER502-SanSkript-Team25" target="_blank"><button class="github-button"><img class="github-image" src="./GitHub_Invertocat_Logo.png" alt=""></button></a>
                    <a href="https://www.youtube.com/watch?v=AKYJ-KSg5kY" target="_blank"><button class="github-button"><img class="demo-image" src="./demo.png" alt=""></button></a>
                </div>
                <p class="project-description">Built a programming language inspired from the Indian language Sanskrit. Datatypes and Supported Functionalities – Datatypes: int,float,boolean,string ; Functionalities: Arithmetic, Boolean and Logical operations, Looping and Printing.Used Python for the purpose of tokenization, lexical analysis and compilation.Used SWI Prolog for the purpose of parsing and evaluation.</p>

            </div>
            `
            show_more_button.innerText = "Show More";
        }
});

document.querySelector('a[href="#project-section"]').addEventListener('click', function (event) {
    event.preventDefault(); 
    document.getElementById('project-section').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#about"]').addEventListener('click', function (event) {
    event.preventDefault(); 
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#experiences-section"]').addEventListener('click', function (event) {
    event.preventDefault(); 
    document.getElementById('experiences-section').scrollIntoView({ behavior: 'smooth' });
});

const textArray = ["a front-end developer"," a back-end developer","a game-developer","an app-developer"];
const typingSpeed = 150;
const delayBetweenTexts = 2000;
let textIndex = 0;
let charIndex = 0;
const typedTextElement = document.getElementById("typed-text");

function typeText(){
    if(charIndex < textArray[textIndex].length)
    {
        typedTextElement.textContent +=textArray[textIndex].charAt(charIndex);
        charIndex++
        setTimeout(typeText,typingSpeed);
    }
    else
    {
        setTimeout(deleteText,delayBetweenTexts)
    }
}

function deleteText(){
    if(charIndex > 0)
    {
        typedTextElement.textContent = textArray[textIndex].substring(0,charIndex - 1);
        charIndex--;
        setTimeout(deleteText, typingSpeed/2);
    }
    else
    {
        textIndex = (textIndex + 1)% textArray.length;
        setTimeout(typeText,typingSpeed);
    }


}

typeText()

const hamburgerIcon = document.querySelector("#hamburger-icon");
const responsiveNavigation = document.querySelector("#link_section-responsive")
let responsiveNavigationFlag = false;
hamburgerIcon.addEventListener('click',()=>{
    
    if(responsiveNavigationFlag == false && responsiveNavigation.style.minWidth < 767)
    {
        responsiveNavigation.style.display = "flex"
        responsiveNavigationFlag = true
    }

    else
    {
        responsiveNavigation.style.display = "none"
        responsiveNavigationFlag = false
    }

    if (responsiveNavigation.style.minWidth > 767)
    {
        responsiveNavigation.style.display = "none";
    }
    
})







