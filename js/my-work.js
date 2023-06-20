var skillsContent=document.querySelector(".skills .skills-content");
let pos={left:0,x:0}

const mouseDown=function (){
    skillsContent.style.cursor="grabbing";
    skillsContent.addEventListener('mousemove', mouseMoveHandler);  
}

const mouseUp=function (){
    skillsContent.removeEventListener('mousemove', mouseMoveHandler);   
    skillsContent.style.cursor="grab";
    skillsContent.style.userSelect="none";
}
var dd=0;
const mouseDownHandle=function (e) {
    pos={
        left:skillsContent.scrollLeft,
        x:e.screenX,
    };
}

const mouseMoveHandler=function(e) {
    dx=e.screenX-pos.x;
    val=pos.left-dx;
    skillsContent.scrollLeft=val;
}
skillsContent.addEventListener("mousedown",mouseDownHandle);
skillsContent.addEventListener("mousedown",mouseDown);
skillsContent.addEventListener("mouseup",mouseUp);


let projects=[
    {
        id:0,
        type:'website',
        title:'MyHouse',
        desc:'A site for selling and renting homes where anyone can register a new account and publish a house in order to sell it. The site also includes the feature of predicting the price of a house depending on the characteristics of the house, and the customer can also view the house on maps.',
        date:'2020-10-05',
        imageUrl:'myhouse.png',
        link:'https://github.com/ElieShamout/myhouse.git',
        technologies:['html5','css3','javascript','bootstrap','jquery','mapbox','python','prediction','Multi languages (En,ar)'],
        note:''
    },
    {
        id:1,
        type:'website',
        title:'GreatCo',
        desc:'Website for Construction company in Canada where you can view their services and part of the work they have achieved.',
        date:'2020-10-05',
        imageUrl:'greateco.png',
        link:'https://elieshamout.github.io/greatco/',
        technologies:['html5','css3','javascript','bootstrap','jquery'],
        note:''
    },
    {
        id:2,
        type:'website',
        title:'Make It International',
        desc:'Campaign Website which is part of a project that helps creatives find ideas based on international days in the year and check on the days that have passed the current date.',
        imageUrl:'international-days.png',
        link:'https://elieshamout.github.io/international-days',
        date:'',
        technologies:['html5','css3','javascript','bootstrap','jquery'],
        note:''
    },
    {
        id:3,
        type:'System managment',
        title:'Doctor appointment booking system',
        desc:'A site for organizing medical clinic reservations, where users can book through the site and choose the required doctor and the exact time',
        imageUrl:'doctor-appointment-booking -system.png',
        date:'',
        link:'https://github.com/ElieShamout/doctor-appointment-booking-system.git',
        technologies:['html5','css3','javascript','bootstrap','jquery','laravel','mysql'],
        note:''
    },
    {
        id:4,
        type:'website',
        title:'Treebox',
        desc:'A postal and money transfer site where the user can register within the site and send parcels and money transfers to the company\'s centers and regions.',
        imageUrl:'treebox.png',
        date:'',
        link:'https://github.com/ElieShamout/treebox.git',
        technologies:['html5','css3','javascript','bootstrap','jquery','laravel','mysql'],
        note:''
    },
    {
        id:5,
        type:'Game',
        title:'Number guessing game',
        desc:'A game of guessing the random number that the computer will produce.',
        imageUrl:'number-guessing-game.png',
        date:'',
        link:'https://elieshamout.github.io/Number-guessing-game',
        technologies:['html5','css3','javascript'],
        note:''
    },
    {
        id:6,
        type:'Game',
        title:'XO Game',
        desc:'XO Game.',
        imageUrl:'xo-game.png',
        date:'',
        link:'https://elieshamout.github.io/xo-game/',
        technologies:['html5','css3','javascript'],
        note:''
    },
    {
        id:7,
        type:'Website',
        title:'Bootcam Website',
        desc:'An introductory site to display the services and projects of a development team or company, where details of the company and employees can be listed, and statistics about the work can be listed.',
        imageUrl:'bootcam.png',
        date:'',
        link:'https://elieshamout.github.io/bootcam-website/',
        technologies:['html5','css3','javascript'],
        note:''
    },
    {
        
        id:8,
        type:'System managment',
        title:'Call Center',
        desc:'An introductory site to display the services and projects of a development team or company, where details of the company and employees can be listed, and statistics about the work can be listed.',
        imageUrl:'call-center.png',
        date:'',
        link:'https://github.com/ElieShamout/call-center.git',
        technologies:['html5','css3','javascript','php','mysql','laravel'],
        note:''
    },
    {
        
        id:9,
        type:'System managment',
        title:'Fullmark Institute',
        desc:'An application for managing and organizing lessons, as it enables the principal to register teachers and students and make two reservations through the site..',
        imageUrl:'fallmark-institute.png',
        date:'',
        link:'https://github.com/ElieShamout/fullmark-institute.git',
        technologies:['html5','css3','javascript','php','mysql','laravel'],
        note:''
    },
    {
        
        id:10,
        type:'System managment',
        title:'village data automation system',
        desc:'The application of managing and automating the data of individuals and families in the town of Kafarbohm. The application contains filters to filter the data, in addition to many advantages such as the relationships between individuals and families. It also includes exporting the data of individuals in PDF formats.',
        imageUrl:'csdm.png',
        date:'',
        link:'https://github.com/ElieShamout/village-data-automation-system.git',
        technologies:['html5','css3','javascript','php','mysql','laravel','vuejs','export pdf & excel'],
        note:''
    },
    {
        
        id:11,
        type:'website',
        title:'company portfolio',
        desc:'An introductory website for a company and the services provided by the company. The website displays details of the services and statistics about the company, in addition to the company\'s projects.',
        imageUrl:'company-portfolio.png',
        date:'',
        link:'https://elieshamout.github.io/Porofolio',
        technologies:['html5','css3','javascript','Bootstrap','Jquery'],
        note:''
    },
    {
        id:12,
        type:'website',
        title:'Blog',
        desc:'An electronic blog that enables users to publish articles or review and evaluate articles, as there are three types of users: manager, publisher, and reader The administrator can view the user accounts and can manage the articles and accept or reject them It also enables the publisher to write a new article, edit an old article, and review his articles The reader can also review and rate the articles.',
        imageUrl:'blog.png',
        date:'',
        link:'https://github.com/ElieShamout/blog',
        technologies:['html5','css3','javascript','Bootstrap','Jquery','Laravel','mysql','laravel/permissions'],
        note:''
    }
];




projects.forEach((project,i) => {

    let technologies=``,line=``;

    project.technologies.forEach(tech=>{
        technologies+=`<div class="project-technologies-tech">${tech}</div>`;
    });

    (i<projects.length-1) ? line=`<div class="line"></div>` : '';

    let projectTemplate=`
            <div class="project-item" id="project-${project.id}">
                <div class="project-item-image">
                    <a href="./images/work/${project.imageUrl}" target="_blank">
                        <img src="./images/work/${project.imageUrl}" alt="" srcset="">
                    </a>
                </div>
                <div class="project-info">
                    <div class="title">${project.title}</div>
                    <div class="desc">${project.type}</div>
                    <!-- <div class="date">${project.date}</div> -->
                    <p class="body">
                        ${project.desc} 
                    </p>
                    <div class="project-technologies">
                        ${technologies}
                    </div>
                    <div class="link-icon"><a href="${project.link}">Visit</a></div>
                </div>
                </div>
                ${line}
        `;
        document.getElementById('my-work-content').innerHTML+=projectTemplate;
});
