

var count = 0;

var value = document.querySelector('#count');
var btns = document.querySelectorAll('.btn');

btns.forEach(function (btn){

    btn.addEventListener("click",function (e) {
        e.currentTarget.classList.contains("Incre")
        count++;
        value.textContent = count;
    });

    }


)



