$(document).ready(function() {

    var delay = 4000; // milliseconds
    var cookie_expire = 0; // days
    
    var cookie = localStorage.getItem("list-builder");
    if(cookie == undefined || cookie == null) {
        cookie = 0;
    }
    
    if(((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
        $("#list-builder").delay(delay).fadeIn("fast", () => {
            $(".st-show").fadeIn("fast", () => {});
        });

        $("#popup-close").click(() => {
            $(".st-show").hide();
            localStorage.setItem("list-builder", (new Date()).getTime());
        });
    }
    
});


const form = document.getElementById('newsletter-form')

/* const button = document.getElementById('buttonModal')


button.addEventListener('click', function(){
    const modal = document.getElementById('myModal')
    $('#myModal').modal();
}) */



form.addEventListener('submit',function(event){
    event.preventDefault();
    alert("hello");
    window.location.href = 'files/test.xlsx';
    const entireBody = document.querySelector('.main-container-wrap');
    entireBody.style.filter="blur(2px)";   
    const formData =  new FormData(this);
    
    const obj ={};
    for (let data of formData.entries())
    {
        obj[data[0]]=data[1];
    }

    fetch('https://samarthtsquare.com/contact',{
        headers:{'Content-Type':'application/json'},
        method:'POST',
        body: JSON.stringify(obj)
    })
    .then(res=> res.json())
    .then(data=>
        setTimeout(()=>{displayModel(data,entireBody,loaderDiv)},2000))
        
   
})

function displayModel(data,entireMainContainer,loader){
    entireMainContainer.style.filter="none";
    loader.style.visibility = "hidden"; 
     if(data.dataObject){
        const modal = document.getElementById('myModal')
        $('#myModal').modal();
    }

}