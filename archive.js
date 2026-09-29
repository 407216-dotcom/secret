const message = document.getElementById("secretMessage");
const blackScreen = document.getElementById("blackScreen");
const archive = document.getElementById("archive");

const systemLogWindow = document.getElementById("systemLogWindow");
const closeLog = document.getElementById("closeLog");
const logText = document.getElementById("logText");

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


const systemLog = document.querySelector(".file:nth-child(2)");

systemLog.addEventListener("click", () => {

    systemLogWindow.classList.add("show");

    logText.textContent = "";

    const lines = [

        "SYSTEM INITIALIZING...",
        "-----------------------",
        "NODE: 001",
        "STATUS: ONLINE",
        "",
        "12:04:76 LOOK LOOK CONNECTION",
        "12:04:19 USER IDENTIFIED: UNKNOWN",
        "12:04:22 ACCSS LEVEL: UNKNOWN",
        "",
        "12:05:03 WARNING...",
        "12:05:04 UNAUTHORIZED ACCESS DETECTED",
        "",
        "12:05:07 ARCHIVE LOCK ENGAGED",
        "12:05:09 SECURITY PROTOCOL: ACTIVE",
        "",
        "12:05:13 ...",
        "",
        "12:05:14 SOMEONE IS STILL HERE."
     ];


     let lineIndex = 0;
     function typeLine() {

        if (lineIndex >= lines.length) {
            return;
        }

        logText.textContent += lines[lineIndex] + "\n";

        lineIndex++;

        setTimeout(typeLine, 250);

     }

     typeLine();

});


closeLog.addEventListener("click", () => {

    systemLogWindow.classList.remove("show");

});


const imageFile = document.querySelector(".file:nth-child(3)");

const imageWindow = document.getElementById("imageWindow");
const closeImage = document.getElementById("closeImage");
const hiddenClue = document.getElementById("hiddenClue");


imageFile.addEventListener("click", () => {

    imageWindow.classList.add("show");
    hiddenClue.textContent = "...";

    setTimeout(() => {

        hiddenClue.textContent = "RECOVERY COMPLETE.";

    }, 1500);

    setTimeout(() => {

        hiddenClue.textContent = "SOURCE: UNKNOWN";

    }, 3000);

});



closeImage.addEventListener("click", () => {

    imageWindow.classList.remove("show");

});



const lockedFile = document.querySelector(".locked-file");

const lockedWindow = document.getElementById("lockedWindow");

const closeLocked = document.getElementById("closeLocked");

const passwordInput = document.getElementById("passwordInput");

const accessButton = document.getElementById("accessButton");

const passwordMessage = document.getElementById("passwordMessage");


lockedFile.addEventListener("click", () => {

    lockedWindow.classList.add("show");

    passwordInput.value = "";

    passwordMessage.textContent = "";

});


closeLocked.addEventListener("click", () => {

    lockedWindow.classList.remove("show");

});


accessButton.addEventListener("click", checkPassword);


passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        checkPassword();


    }
});


function checkPassword() {

    const password = passwordInput.value.trim();

    if (password === "0376") {

        passwordMessage.textContent = "ACCESS GRANTED.";

    } else {

        passwordMessage.textContent = "ACCESS DENIED.";
         passwordInput.value = "";
         
    }
}