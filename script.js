
let arr = ["+/-", "C", "AC", "/", "7", "8", "9", "*", "4", "5", "6", "+", 
              "1", "2", "3", "-", "0", ".", "="];

const grid = document.querySelector("#squares");
let count = 0;

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
            tex.value = tex.value + sq.textContent;
        });

        count++;
        grid.appendChild(sq);
    }
}










