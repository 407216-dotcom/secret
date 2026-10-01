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


const messages = [
    "ACCESSING CASE FILE...",
    "CHECKING CREDENTIALS...",
    "USER DETECTED.",
    "NODE 002 ACCESSED",
    "TIME SPENT: 00:07",
    "...",
    "WHY ARE YOU STILL HERE?"
];


caseFileButton.addEventListener("click", () => {

    // Hide the Node 002 file
    node002Window.classList.remove("show");

    // Start loading screen
    setTimeout(() => {

        caseAccessScreen.classList.add("show");

        let index = 0;

        function showMessage() {

            if (index >= messages.length) {

                setTimeout(() => {

                    caseAccessScreen.classList.remove("show");

                    setTimeout(() => {

                        caseOptions.classList.add("show");

                    }, 500);

                }, 1200);

                return;
            }

            caseAccessText.textContent = messages[index];

            index++;

            setTimeout(showMessage, 1200);

        }

        showMessage();

    }, 400);

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


const file003Window = document.getElementById("file003Window");
const closeFile003 = document.getElementById("closeFile003");


closeFile003.addEventListener("click", () => {

    file003Window.classList.remove("show");

});


const file003Clue = document.getElementById("file003Clue");
const file003Result = document.getElementById("file003Result");
const resultText = document.getElementById("resultText");


file003Clue.addEventListener("click", () => {

    file003Result.classList.add("show");

    resultText.textContent = "REFERENCE ACCEPTED";

    setTimeout(() => {

        resultText.textContent = "SEARCHING ARCHIVE...";

        setTimeout(() => {

            resultText.textContent = "RESULT FOUND";

        }, 2500);

    }, 2000);
});


const caseOptions = document.getElementById("caseOptions");

const lastSeenOption = document.getElementById("lastSeenOption");
const dateOption = document.getElementById("dateOption");
const fileStatusOption = document.getElementById("fileStatusOption");
const record002Option = document.getElementById("record002Option");


const caseBackButton = document.getElementById("caseBackButton");


caseBackButton.addEventListener("click", () => {

    caseOptions.classList.remove("show");

    setTimeout(() => {

        node002Window.classList.add("show");

    }, 500);

});


lastSeenOption.addEventListener("click", () => {

    caseOptions.classList.remove("show");

    setTimeout(() => {

        caseAccessScreen.classList.add("show");

        caseAccessText.textContent = "LAST SEEN: NODE 001";

        setTimeout(() => {

            caseAccessText.textContent = "TIME:03:17";

            setTimeout(() => {

                caseAccessText.textContent = "NO EXIT RECORD FOUND";

                setTimeout(() => {

                    caseAccessText.textContent = "LAST SIGNAL: NODE 002";

                }, 1800);

            }, 1800);

        }, 1800);

    }, 500);

});



dateOption.addEventListener("click", () => {

    caseOptions.classList.remove("show");

    setTimeout(() => {

        caseAccessScreen.classList.add("show");

        caseAccessText.textContent = "DATE: UNKNOWN";

        setTimeout(() => {

            caseAccessText.textContent = "RECORD CORRUPTED";

        }, 2000);

    }, 500);

});



fileStatusOption.addEventListener("click", () => {

    caseOptions.classList.remove("show");

    setTimeout(() => {

        caseAccessScreen.classList.add("show");

        caseAccessText.textContent = "STATUS: INCOMPLETE";

        setTimeout(() => {

            caseAccessText.textContent = "MISSING DATA";

            setTimeout(() => {

                caseAccessText.textContent = "RECOVERED: 49%";

                setTimeout(() => {

                    caseAccessText.textContent = "ONE RECORD WAS REMOVED";

                }, 1800);

            }, 1800);

        }, 1800);

    }, 500);

});



record002Option.addEventListener("click", () => {

    caseOptions.classList.remove("show");

    setTimeout(() => {

        caseAccessScreen.classList.add("show");

        caseAccessText.textContent = "RECORD 002";

        setTimeout(() => {

            caseAccessText.textContent = "REFERENCE VERIFIED";

            setTimeout(() => {

                caseAccessText.textContent = "REFERENCE ACCEPTED";


            }, 1800);

        }, 1800);


    }, 500);
    
});


const optionBackButton = document.getElementById("optionBackButton");


optionBackButton.addEventListener("click", () => {

    caseAccessScreen.classList.remove("show");

    setTimeout(() => {

        caseOptions.classList.add("show");
        optionBackButton.style.display = "block";

    }, 500);

});