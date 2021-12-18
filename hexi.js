document.querySelector('#clico').addEventListener('click',variouschange);
function variouschange() {
    let col = '#' ;

    for (let i=0 ; i<6 ; i++){
        col += colovay[0];
    }
    document.body.style.backgroundColor = col;




}