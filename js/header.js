let moreItem=document.querySelector('.more-item');
let itemBox=document.querySelector('.item-box');
let line1=document.querySelector('.line-1');
let line2=document.querySelector('.line-2');
let line3=document.querySelector('.line-3');
let iconList=document.querySelector('.icon-list');
let iconLines=document.querySelectorAll('.icon-lines');
let headerBox=document.querySelector('#header');
let navbarItem=document.querySelectorAll('.navbar-item');

console.log(document.querySelector(".home-page").offsetHeight);

const iconListSwep=function iconListSwep(){
    if (itemBox.style.visibility=="hidden"){
        iconList.style.transform="scale(1.2)";
        line2.style.transform="scale(1,1)";
        line1.setAttribute("x2","23")
        line3.setAttribute("x2","23")
        line1.style.transform="rotate(0deg)";
        line3.style.transform="rotate(0deg)";
    }else{
        line2.style.transform="scale(0,1)";
        iconList.style.transform="scale(1.2)";
        line1.setAttribute("x2","21")
        line3.setAttribute("x2","21")
        line1.style.transform="rotate(45deg)";
        line3.style.transform="rotate(-45deg)";
        iconLines.forEach(ele=>ele.style.transition="transform 0s");
        itemBox.style.transition="opacity 0s,visibility 0s";
    }
}
const boxListSwep=function boxListSwep(){
    if(itemBox.style.visibility=="visible"){
        itemBox.style.visibility="hidden";
        itemBox.style.opacity="0";
        headerBox.style.opacity="0.95";
        iconListSwep();
    }else{
        itemBox.style.visibility="visible";
        itemBox.style.opacity="1";
        headerBox.style.opacity="1";
        iconListSwep();
    }
}

const transListIcon=function trans(){
    iconLines.forEach(ele=>ele.style.transition="transform 0.5s");
    itemBox.style.transition="opacity 0.5s,visibility 0.5s";
}

moreItem.addEventListener('click',boxListSwep);
moreItem.addEventListener('click',transListIcon);


window.addEventListener("resize",function(){
    if (window.innerWidth>=1050){
        itemBox.style.visibility="hidden";
        boxListSwep();
    }else{
        itemBox.style.visibility="visible";
        boxListSwep();
    }
});


window.addEventListener("scroll",function(){
    scrollVal=window.scrollY;
    navItem=this.document.querySelectorAll("header .navbar a");
    if (scrollVal>20){
        headerBox.style.background="#1F203C";
        headerBox.style.opacity="0.95";
        headerBox.style.padding="10px 0px";
    }else if (window.innerWidth>742){
        headerBox.style.background="initial";
        headerBox.style.opacity="1";
        headerBox.style.padding="30px 0px";
    }

    // Home
    if (scrollVal<document.querySelector(".home-page").offsetHeight/2){
        TargetLine(0);
    }else if (
        scrollVal<
        (
            document.querySelector(".home-page").offsetHeight+
            document.querySelector(".about-me").offsetHeight
        )
        ){
        TargetLine(1);
    }else if (
        scrollVal<
        (
            document.querySelector(".home-page").offsetHeight+
            document.querySelector(".about-me").offsetHeight+
            document.querySelector(".skills").offsetHeight
        )
        ){
        TargetLine(2);
    }else if (
        scrollVal<
        (
            document.querySelector(".home-page").offsetHeight+
            document.querySelector(".about-me").offsetHeight+
            document.querySelector(".skills").offsetHeight+
            document.querySelector(".my-work").offsetHeight
        )
        ){
        TargetLine(3);
    }else if (
        scrollVal<
        (
            document.querySelector(".home-page").offsetHeight+
            document.querySelector(".about-me").offsetHeight+
            document.querySelector(".skills").offsetHeight+
            document.querySelector(".my-work").offsetHeight+
            document.querySelector(".interests").offsetHeight
        )
        ){
        TargetLine(4);
    }else if (
        scrollVal<
        (
            document.querySelector(".home-page").offsetHeight+
            document.querySelector(".about-me").offsetHeight+
            document.querySelector(".skills").offsetHeight+
            document.querySelector(".my-work").offsetHeight+
            document.querySelector(".interests").offsetHeight+
            document.querySelector(".contact").offsetHeight
        )
        ){
        TargetLine(5);
    }

    function TargetLine(i){
        navItem.forEach((ele)=>{
            ele.style.borderBottom="0px";
        });
        navItem[i].style.borderBottom="2px solid white";
    }
});

if (window.innerWidth<742){
    headerBox.style.background="#1F203C";
    headerBox.style.opacity="1";
    headerBox.style.padding="10px 0px";
}else{
    headerBox.style.background="initial";
    headerBox.style.opacity="0.95";
    headerBox.style.padding="30px 0px";
}

const closeList=function () {
    if (window.innerWidth<=1050){
        itemBox.style.visibility="hidden";
        itemBox.style.opacity="0";
        iconListSwep();
    }
}
navbarItem.forEach((element,i) => {
    if (i){
        element.addEventListener("click",closeList);
    }
});