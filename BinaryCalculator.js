function process(id) {
    if (id == "btn0") {
        document.getElementById("res").innerHTML += "0";
    }

    if (id == "btn1") {
        document.getElementById("res").innerHTML += "1";
    }

    if (id == "btnClr") {
        document.getElementById("res").innerHTML = "";
    }

    if (id == "btnSum") {
        document.getElementById("res").innerHTML += "+";
    }

    if (id == "btnSub") {
        document.getElementById("res").innerHTML += "-";
    }

    if (id == "btnMul") {
        document.getElementById("res").innerHTML += "*";
    }

    if (id == "btnDiv") {
        document.getElementById("res").innerHTML += "/";
    }

    if (id == "btnEql") {
        let operand1 = "";
        let operand2 = "";
        let operator = "";

        for (let c of document.getElementById("res").innerHTML) {
            if (c == "+" || c == "-" || c == "*" || c == "/"){
                operator = c;
                continue;
            }
            
            if (operator == "") {
                operand1 += c;
            } else {
                operand2 += c;
            }

        }

        let decimal = 0;
        if(operator == "+"){decimal = parseInt(operand1,2) + parseInt(operand2,2);}
        if(operator == "-"){decimal = Math.abs(parseInt(operand1,2) - parseInt(operand2,2));}
        if(operator == "*"){decimal = parseInt(operand1,2) * parseInt(operand2,2);}
        if(operator == "/"){decimal = parseInt((parseInt(operand1,2) / parseInt(operand2,2)),10);}
        
        document.getElementById("res").innerHTML = decimal.toString(2);
    }
}