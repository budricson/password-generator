const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let button = document.getElementById("button-el");
button.addEventListener("click", function() {
    let output = document.getElementById("output");
    output.textContent = start();
});

function start() {
    let result = "";
    for (let i = 0; i < 16; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    let output = document.getElementById("output");
    output.textContent = result;
    output.addEventListener("click", function() {
        navigator.clipboard.writeText(result);
        output.textContent = "Copied!";
    });

    return result;
}
