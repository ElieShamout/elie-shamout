var skillsContent=document.querySelector(".skills .skills-content .scroll-x");
let pos={left:0,x:0}

const mouseDown=function (){
    skillsContent.style.cursor="grabbing";
    skillsContent.addEventListener('mousemove', mouseMoveHandler); 
    skillsContent.style.scrollBehavior='initial';
}

const mouseUp=function (){
    skillsContent.removeEventListener('mousemove', mouseMoveHandler);   
    skillsContent.style.cursor="grab";
    skillsContent.style.userSelect="none";
    skillsContent.style.scrollBehavior='smooth';
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



var controllLeft=document.querySelector(".skills .skills-content .controll-left");
var controllRight=document.querySelector(".skills .skills-content .controll-right");
controllLeft.addEventListener('click',function(){
    skillsContent.scrollLeft-=250;
});
controllRight.addEventListener('click',function(){
    skillsContent.scrollLeft+=250;
});