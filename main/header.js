
var Nav = document.querySelector('#nav');
var NavContent = document.querySelectorAll('#nav .nav-content');
var MbMenu = document.querySelector('#mobile-menu');
var ListMore = document.querySelectorAll('.list-items');
var NavLength = NavContent.length;

console.log(Nav.clientWidth);
if(Nav.clientWidth < '750'){

    MbMenu.onclick = function(){
        if(Nav.clientHeight == '48'){
            for(var i=0; i < NavLength; i++){
                NavContent[i].style.display = 'inline-block'; 
             }
        }
        else if(Nav.clientHeight != '48'){
            for(var i=0; i < NavLength; i++){
                NavContent[i].style.display = 'none !important'; 
             }
        }

    }
        for(var i=0; i < NavLength; i++){
            var NavC = NavContent[i];
            NavC.onclick = function(){
                for(var j=0; j < NavLength; j++){
                    NavContent[j].style.display = 'none'; 
                }
                
            }
        }
}
