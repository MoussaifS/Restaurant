import homePg from "./module/homePg"
import foodMenu from "./module/menu.js"
import navbar from "./module/nav.js"

let divCon = document.querySelector('#content')
divCon.appendChild(navbar())
divCon.appendChild(homePg())

let nav = document.querySelectorAll('a')

nav[0].onclick = function () { 
    divCon.lastChild.remove();
    divCon.appendChild(homePg())
}

nav[1].onclick = function () { 
    divCon.lastChild.remove();
    divCon.appendChild(foodMenu())
}
