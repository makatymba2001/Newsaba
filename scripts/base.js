function showMobileMenu(){
    document.getElementById('mobile-menu').classList.toggle('visible')
}

document.addEventListener('click', function(e){
    var mobile_menu = document.getElementById('mobile-menu');
    if (mobile_menu.classList.contains('visible') && !e.path.includes(mobile_menu) && !e.path.includes(document.getElementById('menu-button'))) mobile_menu.classList.remove('visible');
})

function closeLoginMenu(){
    document.getElementById('login-panel').classList.remove('visible')
}

function showLoginMenu(){
    document.getElementById('login-panel').classList.add('visible')
}