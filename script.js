let storiyan = document.querySelector("#container");
let fullscreen = document.querySelector("#full-screen");
let im = document.querySelector(".image");
let icon = document.querySelector("#ico");
let btn = document.querySelector("#btn");

let array = [
    { dp : "Images/dp1.jpg",story:"Images/1.jpg"},
    { dp : "Images/dp2.jpg",story:"Images/2.jpg"},
    { dp : "Images/dp3.jpg",story:"Images/3.jpg"},
    { dp : "Images/dp4.jpg",story:"Images/4.jpg"},
    { dp : "Images/dp5.jpg",story:"Images/5.jpg"},
    { dp : "Images/dp6.jpg",story:"Images/6.jpg"},
    { dp : "Images/dp7.jpg",story:"Images/7.jpeg"},
]

var clutter = "";
array.forEach((elem,idx) => {
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}">
            </div>`
});


storiyan.innerHTML = clutter;

    storiyan.addEventListener("click",function(dets){
   if(dets.target.tagName === "IMG"){
    let index = (dets.target.id);
    fullscreen.style.display="block";
    fullscreen.style.backgroundImage=`url(${array[index].story})`;
    fullscreen.style.zIndex="10";
   }

   setTimeout(() => {
     fullscreen.style.display="none";
   }, 3000);
})

im.addEventListener("click",function(){
    icon.style.transform= "translate(-50%,-50%) scale(1)";
     icon.style.opacity = 0.8;

     setTimeout(() => {
        icon.style.opacity = 0;
     }, 1000);

       setTimeout(() => {
         icon.style.transform= "translate(-50%,-50%) scale(0)";
     }, 2000);
})

btn.addEventListener("click",function(){
    icon.style.transform= "translate(-50%,-50%) scale(1)";
     icon.style.opacity = 0.8;

     setTimeout(() => {
        icon.style.opacity = 0;
     }, 1000);

       setTimeout(() => {
         icon.style.transform= "translate(-50%,-50%) scale(0)";
     }, 2000);
})
