let shareWindow = document.getElementById('share-Window')

document.getElementById('share').addEventListener('click', ()=>{
    if(shareWindow.style.display==="flex"){
        shareWindow.style.display="none";
    }
    else{
        shareWindow.style.display="flex";
    }
    
})