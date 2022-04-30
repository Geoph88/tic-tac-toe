var singleBoxes = document.querySelector('section')
var box0 = document.querySelector('span', '.0')
var box1 = document.querySelector('span', '.1')
var box2 = document.querySelector('span', '.2') 
var player1 = 'x'
var player2 = 'o'

var singleBoxes = document.querySelector('section')
singleBoxes.addEventListener('click', function(event){
    if(event.target.tagName === 'SPAN') {
        event.target.className = 'playing' 
    }
    if(document.querySelectorAll('.playing').length === 3) {
        var allSpanElements = document.querySelectorAll('.playing')
        for(i=0; i < allSpanElements.length; i++){
            allSpanElements[i].className = 'winner'
        }
    }
}) 
