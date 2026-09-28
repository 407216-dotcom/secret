const message = document.getElementById("secretMessage");
const blackScreen = document.getElementById("blackScreen");
const archive = document.getElementById("archive");

setTimeout(() => {

    message.style.opacity = "0";

    setTimeout(() => {

        blackScreen.classList.add("show");

        setTimeout(() => {

            archive.classList.add("show");

            blackScreen.classList.remove("show");

        }, 900);

    }, 700);

}, 3000);
