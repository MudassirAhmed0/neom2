const toggle = document.getElementById("toggle");
isMenuHide = true;
toggle.onclick = function () {
    toggle.classList.toggle("active");
    if (isMenuHide == true) {
        document.getElementById("menu_options").classList.add("show-menu");
        isMenuHide = false;
    } else if (isMenuHide == false) {
        document.getElementById("menu_options").classList.remove("show-menu");
        isMenuHide = true;
    }
}
openDropdownMenu = () => {
    document.getElementById("divisionDropDown").classList.toggle("show-dropdown")
}