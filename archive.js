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



const unknownFile = document.querySelector(".unknown-file");

const unknownWindow = document.getElementById("unknownWindow");
const closeUnknown = document.getElementById("closeUnknown");


unknownFile.addEventListener("click", () => {

    unknownWindow.classList.add("show");

});


closeUnknown.addEventListener("click", () => {

    unknownWindow.classList.remove("show");

});

const passwordRequired = document.getElementById("passwordRequired");

const secretUnlocked = document.getElementById("secretUnlocked");
const nodeButton = document.getElementById("nodeButton");

const node002Window = document.getElementById("node002Window");
const closeNode002 = document.getElementById("closeNode002");

nodeButton.addEventListener("click", () => {

    lockedWindow.classList.remove("show");

    setTimeout(() => {

        node002Window.classList.add("show");

    }, 400);
});

closeNode002.addEventListener("click", () => {

    node002Window.classList.remove("show");
});


const caseFileButton = document.getElementById("caseFileButton");
const caseAccessScreen = document.getElementById("caseAccessScreen");
const caseAccessText = document.getElementById("caseAccessText");


caseFileButton.addEventListener("click", () => {

    caseAccessScreen.classList.add("show");

    const messages = [
        "ACCESSING CASE FILE...",
        "CHECKING CREDENTIALS...",
        "USER DETECTED.",
        "NODE 002 ACCESSED",
        "TIME SPENT: 00:07",
        "...",
        "WHY ARE YOU STILL HERE?"
    ];

    let index = 0;

    function showMessage() {

        if (index >= messages.length) {
            return;
        }

        caseAccessText.textContent = messages[index];

        index++;

        setTimeout(showMessage, 2300);

    }

    showMessage();

});


secretUnlocked.style.display = "none";

function checkPassword() {

    const password = passwordInput.value.trim();

    if (password === "0376") {

        passwordMessage.textContent = "ACCESS GRANTED.";

        passwordInput.style.display = "none";
        accessButton.style.display = "none";
        passwordRequired.style.display = "none";

        setTimeout(() => {

            passwordMessage.style.display = "none";
            secretUnlocked.style.display = "block";

        }, 1200);

    } else {

        passwordMessage.textContent = "ACCESS DENIED.";

        passwordInput.value = "";
        
    }
}


