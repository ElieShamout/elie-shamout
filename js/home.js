document.querySelector('.btn').addEventListener('click',function(){
    console.log(document.body.clientHeight);
    scrollTo(0,document.body.clientHeight);
})
