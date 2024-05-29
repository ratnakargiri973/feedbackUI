let mainContainer = document.getElementById("container");
let ratingEle = document.querySelectorAll(".rating");
let  btn = document.getElementById("btn");



let selectRating=" ";
ratingEle.forEach(function(r1){
    r1.addEventListener("click", (event) =>{
        removeActive();
         selectRating = event.target.innerText;
         event.target.classList.add("active");
    });
});

btn.addEventListener("click" , () =>{
    if(selectRating != " "){
        mainContainer.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
    }
});

function removeActive() {
    ratingEle.forEach((rat) => {
      rat.classList.remove("active");
    });
  }