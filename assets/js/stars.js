function stars(){
    const count = 200;
    const section = document.querySelector('.stars');
    var i = 0;
    while (i < count){
        const star = document.createElement('i');
        const size = Math.random() * 4;
        const x = Math.floor(Math.random() * window.innerWidth-20) 
        const y = Math.floor(Math.random() * window.innerHeight-20)

        star.style.width = 1+size+'px';
        star.style.height = 1+size+'px';
        star.style.left = x+'px';
        star.style.top = y+'px';
        const duration = Math.random() * 8;
        star.style.animationDuration = 10+duration+'s';
        star.style.animationDelay = duration+'s';
        section.appendChild(star);
        i++
        }
}
stars();
