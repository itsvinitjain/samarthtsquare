
const form = document.getElementById('contact-form')

/* const button = document.getElementById('buttonModal')


button.addEventListener('click', function(){
    const modal = document.getElementById('myModal')
    $('#myModal').modal();
}) */



form.addEventListener('submit',function(event){
    event.preventDefault();
    /* alert("hello"); */
    const entireBody = document.querySelector('.main-container-wrap');
    entireBody.style.filter="blur(2px)";   
    const loaderDiv= document.querySelector("#contactLoader");
    loaderDiv.style.visibility = "visible"; 
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