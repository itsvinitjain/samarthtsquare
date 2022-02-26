// Get the modal
var modal = document.getElementById("myModal");

console.log(modal);

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

window.addEventListener("click", (event) => {
    let clickableElement =event.srcElement;
    
    if(clickableElement.tagName==='IMG'){
         modal.style.display= "block";
         modalImg.src = clickableElement.src;
        captionText.innerHTML = clickableElement.alt;
    }
    else{
        modal.style.display = "none"; 
    }
    
});
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}