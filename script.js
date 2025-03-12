const openList = document.getElementById("open-list");
const list = document.getElementById("list");
const closeList = document.getElementById("close-list");
const navStudies = document.getElementById("nav-studies");
const registrationMenuBtn = document.getElementById("registration-menu-btn");
const menuWindow = document.getElementById("menu-window");
const header = document.getElementById("header");
const closeLink = document.querySelectorAll(".close-link");


if (openList) {
    openList.addEventListener("click", function () {
        console.log("Кнопка нажата"); // Добавим для отладки
        console.log("Текущий display:", list.style.display); // Добавим для отладки

        if (list.style.display !== "block") {
            list.style.display = "block";
            closeList.style.display = "inline-block";
            openList.style.display = "none";
            navStudies.style.marginBottom = "15px";
            header.style.paddingTop = "182px";
        } else {
        }
    });
}

if (closeList) {
    closeList.addEventListener("click", function () {
        console.log("Кнопка нажата"); // Добавим для отладки
        console.log("Текущий display:", list.style.display); // Добавим для отладки

        if (list.style.display !== "none") {
            list.style.display = "none";
            closeList.style.display = "none";
            openList.style.display = "inline-block";
            navStudies.style.marginBottom = "0";
            header.style.paddingTop = "63px";
        } else {
        }
    });
}

if (registrationMenuBtn) {
    registrationMenuBtn.addEventListener("click", function () {
        console.log("Кнопка нажата"); // Добавим для отладки
        console.log("Текущий display:", menuWindow.style.display); // Добавим для отладки

        if (menuWindow.style.display !== "block") {
            menuWindow.style.display = "block";
        } else {
            menuWindow.style.display = "none";
        }
    });
}

if (closeLink) {
    closeLink.forEach(element => {
        element.addEventListener("click", function () {
            console.log("Кнопка нажата"); // Добавим для отладки
            console.log("Текущий display:", menuWindow.style.display); // Добавим для отладки

            if (menuWindow.style.display !== "none") {
                menuWindow.style.display = "none";
            } else {
                menuWindow.style.display = "block";
            }
        });
    });
}