const toggle = document.getElementById("toggle");
isMenuHide = true;
toggle.onclick = function () {
    toggle.classList.toggle("active");
    if (isMenuHide == true) {
        document.getElementById("menu_options").classList.add("show-menu");
        // document.getElementById("secondSection").style.marginTop = '150px';
        isMenuHide = false;
    } else if (isMenuHide == false) {
        document.getElementById("menu_options").classList.remove("show-menu");
        // document.getElementById("secondSection").style.marginTop = '0';
        isMenuHide = true;
    }
}
openDropdownMenu = () => {
    document.getElementById("divisionDropDown").classList.toggle("show-dropdown")
}
