var link = document.querySelector(".pop-activator");
var popupWindow = document.querySelector(".container");
var closePopupWindow = document.querySelector(".cross-container")
link.addEventListener("click", (event)=>{
    event.preventDefault(); // отключает обычное поведение формы
    popupWindow.classList.remove("popup-transform");
});
closePopupWindow.addEventListener("click", ()=>{
    popupWindow.classList.add("popup-transform");
});
setTimeout(showPopup, 300);
function showPopup() {
    popupWindow.classList.remove("popup-transform");
}