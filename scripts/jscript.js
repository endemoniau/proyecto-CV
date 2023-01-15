function myFunction() {
    let x = document.getElementById("barratop");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

let acc = document.getElementsByClassName("accordion");
let i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    console.clear();

    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    let panel2 =this.previousElementSibling;

    for (i = 0; i < acc.length; i++){
        console.log(acc[i].nextElementSibling); 
        acc[i].style.display="";            
    }
    this.style.display="block";

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}