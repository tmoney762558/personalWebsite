const lightDark = document.querySelector("#lightDark");

lightDark.onclick = changeState;

let state = "light";

function changeState() {
    if (state === "light") {
        document.body.style.backgroundColor = "#191919";
        welcome.style.color = "white";
        aboutText.style.color ="white";
        state = "dark";
    }
    else {
        document.body.style.backgroundColor = "white";
        welcome.style.color = "black"
        aboutText.style.color = "black"
        state = "light";
    }
}