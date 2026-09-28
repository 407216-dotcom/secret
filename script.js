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