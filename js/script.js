var portraitsTab = document.querySelector(".portraits-tab");
var paintingsTab = document.querySelector(".paintings-tab");
var portraitsList = document.querySelector(".portraits-list");
var paintingsList = document.querySelector(".paintings-list");
var menuIcon = document.querySelector(".menu-icon");
var navList = document.querySelector(".nav-list");


portraitsTab.addEventListener("click",displayPortraitsList);
paintingsTab.addEventListener("click",displayPaintingsList);
menuIcon.addEventListener("click", toogleNavMenu);


function displayPortraitsList(){
    paintingsList.style.display ="none";
    portraitsList.style.display ="flex";
    portraitsTab.classList.add("active-tab");
    paintingsTab.classList.remove("active-tab");
}

function displayPaintingsList(){
   portraitsList.style.display ="none";
   paintingsList.style.display ="flex";
   paintingsTab.classList.add("active-tab");
   portraitsTab.classList.remove("active-tab");
}

function toogleNavMenu(){
    navList.classList.toggle("active-nav");
}

var fullImageModal = document.querySelector(".full-image-modal");

//loop images in gallery

var portraitItem = document.querySelectorAll(".portrait-item");
var paintingItem = document.querySelectorAll(".painting-item");

portraitItem.forEach(function(element,index,array){

    element.addEventListener("click",arrow =>{
            fullImageModal.innerHTML ="";
            showfullImage(index,"portrait");
        });
    
   
});

paintingItem.forEach(function(element,index,array){

    element.addEventListener("click",arrow =>{
            fullImageModal.innerHTML ="";
            showfullImage(index,"painting");
        });
    
   
});


function showfullImage(i, s){
    var fullImageContainer = document.createElement("img");
    
    if(s == "portrait"){
        fullImageContainer.setAttribute("src", portraitItem[i].children[0].src);
    }
    else if(s == "painting"){
        fullImageContainer.setAttribute("src", paintingItem[i].children[0].src);
    }
   
    fullImageContainer.className = "full-image";
    fullImageModal.appendChild(fullImageContainer);

}

   

//Get the button
var goUpBtn = document.getElementById("go--up-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goUpBtn.style.display = "block";
  } else {
    goUpBtn.style.display = "none";
  }
}

goUpBtn.addEventListener("click",goTopFunction);

// When the user clicks on the button, scroll to the top of the document
function goTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}