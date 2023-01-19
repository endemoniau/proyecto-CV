let acc = document.getElementsByClassName("accordion");
let navb = document.getElementById("bottomnav");
let i;


const resizeObserver = new ResizeObserver(entries => {
  let resizeScreen=entries[0].target.clientHeight
  if (resizeScreen > 700) {
    navb.style.display="block";
  } else {
    navb.style.display="none";
  }
})

resizeObserver.observe(document.body)

function abrirmenu() {
  let x = document.getElementById("barratop");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("focus", function() {
    this.classList.toggle("active");   
    let panel = this.nextElementSibling;
    if(panel.style.display==="block"){
      panel.style.display="none";
    } 
    else {
        panel.style.display="block";
    }
    this.blur();
  });
} 