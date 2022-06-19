"use script";
document.querySelector("#menu-button").onclick = () => {
    let menuList = document.querySelector("#menu-list").classList;
    let menuBtn = document.querySelector("#menu-button").classList;
    if (menuList.contains("active")) {
        menuList.remove("active");
        menuBtn.remove("active");
    } else {
        menuList.add("active");
        menuBtn.add("active");
    }
}