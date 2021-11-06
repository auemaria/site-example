// var link = document.querySelector(".pop-activator");
var popupWindow = document.querySelector(".container1");
var closePopupWindow = document.querySelector(".cross-container");
var layer = document.querySelector(".layer");
// link.addEventListener("click", (event)=>{
//     event.preventDefault(); // отключает обычное поведение формы
//     popupWindow.classList.remove("popup-transform");
// });
closePopupWindow.addEventListener("click", ()=>{
    popupWindow.classList.remove("popup-transform");
    layer.classList.remove("layer-opacity");
});
setTimeout(showPopup, 300);
function showPopup() {
    popupWindow.classList.add("popup-transform");
    popupWindow.classList.add('layer-opacity')
}