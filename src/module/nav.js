export default navbar;

function navbar() {
    let nav = document.createElement('nav');
    nav.classList.add('navContent');
    
    let aHome = document.createElement('a');
    let aMenu = document.createElement('a');
    
    aHome.innerHTML = `<img src="../image/small-duck-svgrepo-com.svg" style="width:  50px; height : 50px" alt="Company logo">`
    aHome.getAttribute('home');
    
    aMenu.innerHTML = '<span> MENU</span>'
    aMenu.getAttribute('menu');

    nav.appendChild(aHome)
    nav.appendChild(aMenu)

    return nav;
}
