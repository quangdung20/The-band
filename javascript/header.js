var Nav = document.querySelector('#nav');
var NavContent = document.querySelectorAll('#nav .nav-content');
var MbMenu = document.querySelector('#mobile-menu');
var ListMore = document.querySelectorAll('.list-items');
var NavLength = NavContent.length;
MbMenu.onclick = function(){
    if(Nav.clientHeight == '48'){
        for(var i=0; i < NavLength; i++){
            NavContent[i].style.display = 'inline-block'; 
            }
        }
        
    else {
        for(var i=0; i < NavLength; i++){
            NavContent[i].style.display = ''; 
        }
    }
}

for(var i=0; i < NavLength; i++){
     var NavC = NavContent[i];
     NavC.onclick = function(){
        var NavWidth = Nav.clientWidth;
        if(NavWidth < '750'){
            for(var j=0; j < NavLength; j++){
                NavContent[j].style.display = 'none'; 
            }
        }
         
    }
}