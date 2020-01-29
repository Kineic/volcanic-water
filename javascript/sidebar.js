var sideBar = document.getElementsByClassName("sidebar")[0];

sideBar.style.height = "80px";

var count = 0;

sideBar.addEventListener("click", showSidebar);

var toggleSideList = document.getElementsByClassName("toggleSide");

hide(toggleSideList);

function showSidebar() {
    if (count === 0) {
        $(".sidebar").removeClass("vertAnimationReverse");
        $(".sidebar").addClass("vertAnimation");
        sideBar.style.height = "600px";
        var animate = document.getElementsByClassName("vertAnimation")[0];
        animate.addEventListener("animationend", function () {
            if (sideBar.clientHeight > 599) {
                show(toggleSideList);
            }
        })

        count = 1;
    } else {
        hide(toggleSideList);
        $(".sidebar").removeClass("vertAnimation");
        $(".sidebar").addClass("vertAnimationReverse");
        sideBar.style.height = "80px";
        count = 0;
    }
}

function hide(className) {
    for (var i = 0; i < className.length; i++) {
        var list = className[i];
        list.style.display = "none";
    }
}

function show(className) {
    for (var i = 0; i < className.length; i++) {
        var list = className[i];
        list.style.display = "flex";
    }
}
