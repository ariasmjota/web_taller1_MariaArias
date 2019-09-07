function handLoad(){


    var buttons = document.querySelectorAll('.')
    var button = document.querySelector('button');
    var slider = document.querySelector('.gallery');
    var tape = slider.querySelector('.gallery__tape');
    var count = 0;
    
    var first = tape.querySelector('.gallery__img');
    var newLast = document.createElement('img');
    newLast.setAttribute('src', first.getAttribute('src'));
    //newLast.setAttribute('class', first.getAttribute('class'));
    newLast.classList.add('gallery__img');
    tape.append(newLast);
    

    function 
    function handleLast(){
        console.log('cambio');
        tape.classList.add('gallery__tape--inactive');
        tape.style.transform = 'translate(0px, 0px)';
    }
    
    function handleClick(event) {
        count++;
    
        if(count == 1){
            tape.classList.remove('gallery__tape--inactive');
        }
    
        var mov = slider.offsetWidth * -1 * count;
        tape.style.transform = 'translate(' + mov + 'px, 0px)';
        
        if(count > tape.childElementCount - 2){
            setTimeout(handleLast, 300);
            count = 0;
        }
    }
    
    button.addEventListener('click', handleClick);
}
window.addEventListener('load', handLoad);