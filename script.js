const navbarLinks = document.querySelector('.navbar .links');
const toggleMenuBtn = document.querySelector('.navbar .toggle-menu');
const toggleMenuIcon = document.querySelector('.navbar .toggle-menu i');
const navbarLinkItems = document.querySelectorAll('.navbar .links li a');
const navBar = document.querySelector('.navbar');

// Function for toggle links
const toggleLinks = () => {
    navbarLinks.classList.toggle("show");
    toggleMenuIcon.classList.toggle("fa-xmark");

}

//Toggle Menu button Event Click
toggleMenuBtn.addEventListener('click',toggleLinks);

// Navbar link items event click
navbarLinkItems.forEach((link)=>{
    link.addEventListener("click", toggleLinks);
});

// window scroll

window.addEventListener('scroll', ()=>{
    if (window.scrollY >20) {
        navBar.classList.add("active-bg");
        return;
    }
    navBar.classList.remove("active-bg");
})