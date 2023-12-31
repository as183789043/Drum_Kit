

var num=document.querySelectorAll("button").length


for ( var x=0 ;x<num ;x++){
    document.querySelectorAll("button")[x].addEventListener('click',function() {
        makesound(this.innerHTML);
        flask(this.innerHTML)
        }
        );

document.addEventListener('keydown',function(e){
    makesound(e.key);
    flask(e.key)
})


function makesound(key){
        switch (key) {
            case 'w':
                var crash = new Audio('./sounds/crash.mp3');
                crash.play();
                break;
    
            case 'a':
                var kicks = new Audio('./sounds/kick-bass.mp3');
                kicks.play();
                break;
    
            case 's':
                var snare = new Audio('./sounds/snare.mp3');
                snare.play();
                break;
    
            case 'd':
                var tom1 = new Audio('./sounds/tom-1.mp3');
                tom1.play();
                break;
    
            case 'j':
                var tom2 = new Audio('./sounds/tom-2.mp3');
                tom2.play();
                break;
    
            case 'k':
                var tom3 = new Audio('./sounds/tom-3.mp3');
                tom3.play();
                break;
    
            case 'l':
                var tom4 = new Audio('./sounds/tom-4.mp3');
                tom4.play();
                break;
        
            default:
                alert('you press: '+key+' not anything')
                break;
        }
        ;};
    
}

function flask(key){
    document.querySelector('.'+key).classList.toggle('pressed')
    setTimeout(() => {
        document.querySelector('.'+key).classList.toggle('pressed');
      }, 100);
}
