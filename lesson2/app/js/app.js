; $(document).foundation();

/*
* defind variables for DOM elements Range tlr=top left range.
* Same for input[type=text]
* */
var tlr = document.getElementById('tlr'),
    trr = document.getElementById('trr'),
    brr= document.getElementById('brr'),
    blr= document.getElementById('blr');

var tli = document.getElementById('tli'),
    tri = document.getElementById('tri'),
    bri = document.getElementById('bri'),
    bli = document.getElementById('bli');

var block = document.getElementById('block-result'),
    code = document.getElementById('code-result');
/*
* defind function for change value text input, when change range`s value
* */


function setBorderRad() {
    tli.value = tlr.value;
    tri.value = trr.value;
    bri.value = brr.value;
    bli.value = blr.value;
    block.style.borderRadius = tli.value + 'px ' +
                                tri.value + 'px ' +
                                bri.value + 'px ' +
                                bli.value + 'px';
};
function printCode() {
    code.innerHTML = 'border-radius: ' + tli.value + 'px ' +
        tri.value + 'px ' +
        bri.value + 'px ' +
        bli.value + 'px';
}

tlr.addEventListener('input', function () {
    setBorderRad();
    printCode();
});
trr.addEventListener('input', function () {
    setBorderRad();
    printCode();
});
brr.addEventListener('input', function () {
    setBorderRad();
    printCode();
});
blr.addEventListener('input', function () {
    setBorderRad();
    printCode();
});



