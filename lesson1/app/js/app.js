// $(document).foundation();
// function isCheck() {
//     var chBox;
//     chBox = document.getElementById('box');
//     if (chBox.checked) {
//         alert('true');
//     }
//     else {
//         alert('false');
//     }
//     }

function fun1(){
    var radBtn = document.getElementsByName('r1');
    var range = document.getElementById('range');
    var div = document.getElementById('test');
    var p = document.getElementById('valRange');
    for(var i = 0; i < radBtn.length; i++){
        if (radBtn[i].checked){
            console.log('Выбран '+i+' element');
            console.log(radBtn[i].value);
            range.value = radBtn[i].value;

            div.style.width = range.value + 'px';
            div.innerText = range.value + 'px';
            p.innerText = range.value;
        }
    }
}

var offer = document.getElementById('select');
function selectPhone() {
    var select = document.getElementById('myPhone').selectedIndex;
    var options = document.getElementById('myPhone').options;
    console.log(options[select].text);
    offer.innerText = options[select].text;
}

function input() {
    var range = document.getElementById('range');
    var p = document.getElementById('valRange');
    var div = document.getElementById('test');
    div.style.width = range.value + 'px';
    div.innerText = range.value + 'px';
    p.innerText = range.value;
}
