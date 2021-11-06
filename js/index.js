var themeToggler = document.querySelector(".checkmark");
var bodyElement = document.querySelector("body");
var checkboxTheme = document.getElementById("checkbox")
themeToggler.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode");
    // var checkboxTheme = document.getElementById("checkbox")
    // var checkedBool = checkboxTheme.checked;
    // localStorage.setItem("theme", checkedBool);

});

