const menuEmail = document.querySelector(".email img");
const desktopMenu= document.querySelector(".desktop-menu");
menuEmail.addEventListener('click',toggledesktopMenu)
function toggledesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}