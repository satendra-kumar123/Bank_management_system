let card = document.querySelector('.card')
card.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    console.log(e.timeStamp)
    console.log(e.clientX)
})