const arrayColor =['green','red','yellow','brown'];
const colovay = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

document.querySelector('#clickme').addEventListener('click',changebc);


function changebc() {
    let randomcolo = genandom();
    document.body.style.backgroundColor = arrayColor[randomcolo];
    document.querySelector('.colorName').textContent = arrayColor[randomcolo];

}
function genandom() {
    return Math.floor(Math.random()* arrayColor.length);

}

