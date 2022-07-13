// creatiing responsive menu
const navbar = document.querySelector('.navbar');
const menuWrapper = document.querySelector('.menuWrapper');
const menuItems = document.querySelector('.menuItems');
const navContainer = document.querySelector('.navContainer');

menuWrapper.addEventListener('click', () => {
    menuWrapper.classList.toggle('menuBtnOpen');
    navbar.classList.toggle('navOpen');
    menuItems.classList.toggle('menuItemsOpen');
    navContainer.classList.toggle('navContainerOpen');
})
