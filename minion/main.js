var balls = document.getElementsByClassName("ball");
document.onmousemove = function(){
    var x= event.clientX * 100 / window.outerWidth + "%";
    var y = event.clientY * 100 / window.outerHeight + "%";
    for (var i = 0; i<balls.length; i++){
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = "translate(-"+x+",-"+y+")";
    }
}
document.getElementById("eyes").addEventListener("click",function(){
    document.querySelector(".w-ball").classList.toggle("ball-active")

})


// document.querySelector('#mini-body').addEventListener('mousemove', Eyeball);
// function Eyeball (){
//     var Eye = document.querySelectorAll('.ball');
//     Eye.forEach(function(Eye){
//         var x = (Eye.getBoundingClientRect().left) +(Eye.clientWidth/2);
//         var y = (Eye.getBoundingClientRect().top) +(Eye.clientHeight/2);
//         var radian = Math.atan2(event.pageX -x, event.pageY-y);
//         var rot = (radian*(180/Math.PI)*-1)+0;
//         Eye.style.transform = "rotate("+rot+"deg)";
//     })
// }