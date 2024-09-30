
let arr = ["+/-", "C", "AC", "/", "7", "8", "9", "*", "4", "5", "6", "+", 
              "1", "2", "3", "-", "0", ".", "="];

const grid = document.querySelector("#squares");
let count = 0;
let val1;
let val2;
let val3;
let op;
let len;

function solve() {
    if (op == "*") {
        return val1 * val2;
    } else if (op == "+") {
        return val1 + val2;
    } else if (op == "-") {
        return val1 - val2;
    } else {
        if (val2 == 0) {
            return "Cannot divide by 0";
        }
        return val1/val2;
    }
}

for (let i=0; i<4; i++) {
    for (let j=0; j<5;j++) {
        let sq = document.createElement("button");
        sq.textContent = arr[count];
        sq.classList.add("square")

        if (arr[count] == "0")  {
            j++;
            sq.style.width = "198px";
        }

        sq.addEventListener("click", function() {
            let tex = document.querySelector("#t");
            if (sq.textContent == "C") {
                let str = new String(tex.value);
                tex.value = str.substring(0,str.length-1);
            } else if (sq.textContent == "AC") {
                tex.value = "";
            } else if (sq.textContent == "=") {
                let st = new String(tex.value);
                val2 = parseFloat(st.substring(len+1, st.length));
                console.log("val3 = " + val2);
                tex.value = solve();
            }
            else if (sq.textContent == "+" || sq.textContent == "-" || sq.textContent == "*" || sq.textContent == "/") {
                val1 = parseFloat(tex.value);
                op = sq.textContent;
                len = new String(tex.value).length;
                console.log("val1= " + val1);
                console.log("op" + op);
                tex.value = tex.value + sq.textContent;
            } else {
                tex.value = tex.value + sq.textContent;
            }
        });

        count++;
        grid.appendChild(sq);
    }
}










