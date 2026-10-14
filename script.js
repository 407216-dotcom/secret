const enterButton = document.getElementById("enterButton");
const secretDot = document.getElementById("secretDot");
const message = document.getElementById("homeMessage");

/* ----- ENTER BUTTON ----- */
enterButton.addEventListener("click", () => {
    message.textContent = "ACCESSING ARCHIVE...";

    setTimeout(() => {

        message.textContent = "ACCESS DENIED.";

    }, 1500);

}
);

/* ----- SECRET DOT ----- */

secretDot.addEventListener("click", () => {

   window.location.href = "secret.html";

});



const subtitle = document.querySelector(".subtitle");
const subtitleText = "You weren't supposed to find this.";

if (subtitle) {
    subtitle.textContent = "";

    let letterIndex = 0;

    function typeSubtitle() {
        if (letterIndex < subtitleText.length) {
            subtitle.textContent += subtitleText[letterIndex];

            letterIndex++;

            setTimeout(typeSubtitle, 95);

        }
    }

    typeSubtitle();

}