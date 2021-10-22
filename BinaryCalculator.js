function process(id) {
    if (id == "btn0") {
        if (document.getElementById("res").innerHTML == "") {
            document.getElementById("btnClr").disabled = false;
            document.getElementById("btnSum").disabled = false;
            document.getElementById("btnSub").disabled = false;
            document.getElementById("btnMul").disabled = false;
            document.getElementById("btnDiv").disabled = false;

            document.getElementById("btnClr").style.border = "5px solid red";
            document.getElementById("btnSum").style.border = "5px solid red";
            document.getElementById("btnSub").style.border = "5px solid red";
            document.getElementById("btnMul").style.border = "5px solid red";
            document.getElementById("btnDiv").style.border = "5px solid red";
        } else {
            index = document.getElementById("res").innerHTML.length - 1;
            if (document.getElementById("res").innerHTML.charAt(index) == "+" ||
                document.getElementById("res").innerHTML.charAt(index) == "-" ||
                document.getElementById("res").innerHTML.charAt(index) == "*" ||
                document.getElementById("res").innerHTML.charAt(index) == "/") {
                    document.getElementById("btnEql").disabled = false;
                    document.getElementById("btnEql").style.border = "5px solid red";
            }
        }
        document.getElementById("res").innerHTML += "0";
    }

    if (id == "btn1"){
        if (document.getElementById("res").innerHTML == "") {
            document.getElementById("btnClr").disabled = false;
            document.getElementById("btnSum").disabled = false;
            document.getElementById("btnSub").disabled = false;
            document.getElementById("btnMul").disabled = false;
            document.getElementById("btnDiv").disabled = false;

            document.getElementById("btnClr").style.border = "5px solid red";
            document.getElementById("btnSum").style.border = "5px solid red";
            document.getElementById("btnSub").style.border = "5px solid red";
            document.getElementById("btnMul").style.border = "5px solid red";
            document.getElementById("btnDiv").style.border = "5px solid red";
        }else {
            index = document.getElementById("res").innerHTML.length - 1;
            if (document.getElementById("res").innerHTML.charAt(index) == "+" ||
                document.getElementById("res").innerHTML.charAt(index) == "-" ||
                document.getElementById("res").innerHTML.charAt(index) == "*" ||
                document.getElementById("res").innerHTML.charAt(index) == "/") {
                    document.getElementById("btnEql").disabled = false;
                    document.getElementById("btnEql").style.border = "5px solid red";
            }
        }
        document.getElementById("res").innerHTML += "1";
    }

    if (id == "btnClr") {
        document.getElementById("res").innerHTML = "";
        document.getElementById("btn0").disabled = false;
        document.getElementById("btn1").disabled = false;
        document.getElementById("btnClr").disabled = true;
        document.getElementById("btnSum").disabled = true;
        document.getElementById("btnSub").disabled = true;
        document.getElementById("btnMul").disabled = true;
        document.getElementById("btnDiv").disabled = true;
        document.getElementById("btnEql").disabled = true;
        document.getElementById("btnClr").disabled = true;

        document.getElementById("btn0").style.border = "5px solid red";
        document.getElementById("btn1").style.border = "5px solid red";
        document.getElementById("btnClr").style.border = "0px solid";
        document.getElementById("btnSum").style.border = "0px solid";
        document.getElementById("btnSub").style.border = "0px solid";
        document.getElementById("btnMul").style.border = "0px solid";
        document.getElementById("btnDiv").style.border = "0px solid";
        document.getElementById("btnEql").style.border = "0px solid";
        document.getElementById("btnClr").style.border = "0px solid";
    }

    if (id == "btnSum") {
        document.getElementById("res").innerHTML += "+";
        document.getElementById("btnSum").disabled = true;
        document.getElementById("btnSub").disabled = true;
        document.getElementById("btnMul").disabled = true;
        document.getElementById("btnDiv").disabled = true;
        document.getElementById("btnEql").disabled = true;

        document.getElementById("btnSum").style.border = "0px solid";
        document.getElementById("btnSub").style.border = "0px solid";
        document.getElementById("btnMul").style.border = "0px solid";
        document.getElementById("btnDiv").style.border = "0px solid";
        document.getElementById("btnEql").style.border = "0px solid";
    }

    if (id == "btnSub") {
        document.getElementById("res").innerHTML += "-";
        document.getElementById("btnSum").disabled = true;
        document.getElementById("btnSub").disabled = true;
        document.getElementById("btnMul").disabled = true;
        document.getElementById("btnDiv").disabled = true;
        document.getElementById("btnEql").disabled = true;

        document.getElementById("btnSum").style.border = "0px solid";
        document.getElementById("btnSub").style.border = "0px solid";
        document.getElementById("btnMul").style.border = "0px solid";
        document.getElementById("btnDiv").style.border = "0px solid";
        document.getElementById("btnEql").style.border = "0px solid";
    }

    if (id == "btnMul") {
        document.getElementById("res").innerHTML += "*";
        document.getElementById("btnSum").disabled = true;
        document.getElementById("btnSub").disabled = true;
        document.getElementById("btnMul").disabled = true;
        document.getElementById("btnDiv").disabled = true;
        document.getElementById("btnEql").disabled = true;

        document.getElementById("btnSum").style.border = "0px solid";
        document.getElementById("btnSub").style.border = "0px solid";
        document.getElementById("btnMul").style.border = "0px solid";
        document.getElementById("btnDiv").style.border = "0px solid";
        document.getElementById("btnEql").style.border = "0px solid";
    }

    if (id == "btnDiv") {
        document.getElementById("res").innerHTML += "/";
        document.getElementById("btnSum").disabled = true;
        document.getElementById("btnSub").disabled = true;
        document.getElementById("btnMul").disabled = true;
        document.getElementById("btnDiv").disabled = true;
        document.getElementById("btnEql").disabled = true;

        document.getElementById("btnSum").style.border = "0px solid";
        document.getElementById("btnSub").style.border = "0px solid";
        document.getElementById("btnMul").style.border = "0px solid";
        document.getElementById("btnDiv").style.border = "0px solid";
        document.getElementById("btnEql").style.border = "0px solid";
    }

    if (id == "btnEql") {
        let operand1 = "";
        let operand2 = "";
        let operator = "";

        for (let c of document.getElementById("res").innerHTML) {
            if (c == "+" || c == "-" || c == "*" || c == "/") {
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
        if (operator == "+") { decimal = parseInt(operand1, 2) + parseInt(operand2, 2); }
        if (operator == "-") { decimal = Math.abs(parseInt(operand1, 2) - parseInt(operand2, 2)); }
        if (operator == "*") { decimal = parseInt(operand1, 2) * parseInt(operand2, 2); }
        if (operator == "/") { decimal = parseInt((parseInt(operand1, 2) / parseInt(operand2, 2)), 10); }

        document.getElementById("res").innerHTML = decimal.toString(2);

        document.getElementById("btnSum").disabled = true;
        document.getElementById("btnSub").disabled = true;
        document.getElementById("btnMul").disabled = true;
        document.getElementById("btnDiv").disabled = true;
        document.getElementById("btnEql").disabled = true;
        document.getElementById("btn0").disabled = true;
        document.getElementById("btn1").disabled = true;
        document.getElementById("btnClr").disabled = false;

        document.getElementById("btnSum").style.border = "0px solid";
        document.getElementById("btnSub").style.border = "0px solid";
        document.getElementById("btnMul").style.border = "0px solid";
        document.getElementById("btnDiv").style.border = "0px solid";
        document.getElementById("btnEql").style.border = "0px solid";
        document.getElementById("btn0").style.border = "0px solid";
        document.getElementById("btn1").style.border = "0px solid";
        document.getElementById("btnClr").style.border = "5px solid red";
    }
}