function getRandomColor(){
    let col1=Math.ceil(0+Math.random()*255);
    let col2=Math.ceil(0+Math.random()*255);
    let col3=Math.ceil(0+Math.random()*255);
    return `rgb(${col1},${col2},${col3})`
}

setInterval(() => {
    document.querySelector(".navbar").style.background = getRandomColor()
}, 2000);

setInterval(() => {
    document.querySelector(".navbar").style.color = getRandomColor()
}, 2000);

