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
        "12:04:17 CONNECTION ESTABLISHED",
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
