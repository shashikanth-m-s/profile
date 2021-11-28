const navBtn = document.querySelector('#navbar-toggle');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click',()=>{
    navDiv.classList.toggle('showNav');
});


let resizeTimer;
window.addEventListener('resize',()=>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(()=>{
        document.body.classList.remove('resize-animation-stopper');},400);
    })
let img = document.getElementById('home-img');
img.addEventListener('mouseover',function(){
    
        img.src = "images/colour.jpg"
    
})
img.addEventListener('mouseout',function(){
    
    img.src = "images/baw.png"

})
//about

// remember
