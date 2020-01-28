var sidebarList = document.getElementsByClassName("sidebar");

var toggleSideList = document.getElementsByClassName("toggleSide");

hide(toggleSideList); /*Goal is to hide the Anchor tags in the sidebar with a loop*/

var sideBar = sidebarList[0];

sideBar.style.height = "100px";

sidebar.addEventListener("click", showSidebar);

function showSidebar() {
    sideBar.style.height = "600px";
}

function hide(className) {
    for(var i = 0; i < 0; i++){
        var list = className[i];
        list.style.display = "none";
    }
}