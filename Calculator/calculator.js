inp = document.getElementById('output')
// console.log(inp)


function one(){
    get = document.getElementById('One').value;
    // a = inp.value
    // a +=get
    inp.value = inp.value+get
    // inp.value = as
    
    // console.log(get)
    // console.log(inp)

    
}
function two(){
    get = document.getElementById('Two').value;
    inp.value = inp.value + get
}
function three(){
    get = document.getElementById('Three').value;
    inp.value = inp.value + get

}
function plus(){
    get = document.getElementById('Plus').value;
    inp.value = inp.value + get
}
function four(){
    get = document.getElementById('Four').value;
    inp.value = inp.value + get
}
function five(){
    get = document.getElementById('Five').value;
    inp.value = inp.value + get
}
function six(){
    get = document.getElementById('Six').value;
        inp.value = inp.value + get

}
function minus(){
    get = document.getElementById('Minus').value;
        inp.value = inp.value + get

}
function seven(){
    get = document.getElementById('Seven').value;
        inp.value = inp.value + get

}
function eight(){
    get = document.getElementById('Eight').value;
        inp.value = inp.value + get

}
function nine(){
    get = document.getElementById('Nine').value;
        inp.value = inp.value + get

}
function divide(){
    get = document.getElementById('Divide').value;
        inp.value = inp.value + get

}
function point(){
    get = document.getElementById('Point').value;
        inp.value = inp.value + get

}
function zero(){
    get = document.getElementById('Zero').value;
        inp.value = inp.value + get

}
function percent(){
    get = document.getElementById('Percent').value;
        inp.value = inp.value + get

}
function star(){
    get = document.getElementById('Star').value;
        inp.value = inp.value + get

}

function Calculate(){
    an = eval(inp.value)
    inp.value = an

}

function del(){
    inp.value = ''
}