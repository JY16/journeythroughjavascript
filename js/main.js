/**
 * Created by Jamie on 5/11/2017.
 */

// Mobile Navigation
let toggleMenu = document.querySelectorAll(".menu-toggle")[0];
toggleMenu.addEventListener("click", menu, false);
function menu() {
    document.querySelector("body").classList.toggle("open");
}