var currp=0;

function scrollfor(clicked_id){

    var ele =document.getElementById(clicked_id)
    var pos = ele.getBoundingClientRect();
    var jump =pos.top;
    var idop= setInterval(function(){

    

    if(currp==jump){
    
        clearInterval(idop)
        return
    }
    else{
        window.scrollby(0,50);
        currp=currp+50;
    }
    
    },50);
    

}