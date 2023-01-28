var stored_value = 0;
var last_func = "";
var signtoggle = "+";
function addnum(n){
    current_value = document.getElementById("num_input").value;
    document.getElementById("num_input").value = current_value + n;
}




function addFunc(){
    stored_value = stored_value + parseFloat(document.getElementById("num_input").value);
    document.getElementById("num_input").value = "";
    last_func = "+";

}

function subFunc(){
    if (stored_value == 0){
        stored_value = stored_value + parseFloat(document.getElementById("num_input").value);
    }
    else{
        stored_value = stored_value - parseInt(document.getElementById("num_input").value);
    }
    document.getElementById("num_input").value = "";
    last_func = "-";
    console.log(stored_value)
    
}

function multiFunc(){
    if (stored_value == 0){
        stored_value = parseFloat(document.getElementById("num_input").value);
    }
    else{
        stored_value = stored_value * parseFloat(document.getElementById("num_input").value);
        console.log("test")
    }
    document.getElementById("num_input").value = "";
    last_func = "*";
}

function divFunc(){
    if (stored_value == 0){
        stored_value = parseFloat(document.getElementById("num_input").value);
    }
    else{
        stored_value = stored_value / parseFloat(document.getElementById("num_input").value);
        console.log("test")
    }
    document.getElementById("num_input").value = "";
    last_func = "/";

}
function equalFunc(){
    switch (last_func) {
        case "+":
            stored_value = stored_value + parseFloat(document.getElementById("num_input").value);
            document.getElementById("num_input").value = stored_value;
            last_func = "";
            stored_value = 0;
            console.log("+");
            break;
        case "-":
            stored_value = stored_value - parseFloat(document.getElementById("num_input").value);
            document.getElementById("num_input").value = stored_value;
            last_func = "";
            stored_value = 0;
            console.log("-");
            break;
        case "*":
            stored_value = stored_value * parseFloat(document.getElementById("num_input").value);
            document.getElementById("num_input").value = stored_value;
            last_func = "";
            stored_value = 0;
            console.log("*");
            break;
        case "/":
            stored_value = stored_value / parseFloat(document.getElementById("num_input").value);
            document.getElementById("num_input").value = stored_value;
            last_func = "";
            stored_value = 0;
            console.log("/");
            break;

    }
}
function CEFunc(){
    document.getElementById("num_input").value = "";
}

function CFunc(){
    stored_value = 0;
    document.getElementById("num_input").value = "";

}

function deciFunc(){
    current_value = document.getElementById("num_input").value;
    document.getElementById("num_input").value = current_value + ".";    
}

function signFunc(){
    if (signtoggle == "+"){
        signtoggle = "-";
        document.getElementById("num_input").value = document.getElementById("num_input").value * -1 ;
    }
    else if (signtoggle == "-"){
        signtoggle = "+";
        document.getElementById("num_input").value = document.getElementById("num_input").value * -1 ;
    }
}