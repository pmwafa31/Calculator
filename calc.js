function display(num){
    result.value += num
}

function allClear(){
    result.value = ""
}

function equal(){
    result.value = eval(result.value)
}

function deleteDigit(){
    result.value = result.value.slice(0,-1)
}