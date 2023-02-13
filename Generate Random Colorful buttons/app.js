const div = document.querySelector('div');
const makeRandColor = () => {
    const r = Math.floor(Math.random() *255);
    const g = Math.floor(Math.random() *255);
    const b = Math.floor(Math.random() *255);
    return `rgb(${r}, ${g}, ${b})`;
}
for(let i=0; i<105; i++){
    const b = document.createElement('button');
    b.style.width = '100px';
    b.style.height = '100px';
    b.style.fontSize = '20px';
    b.style.margin = '10px';
    b.addEventListener('click', function(){
        b.style.backgroundColor = makeRandColor();
    })
    div.append(b);
}
