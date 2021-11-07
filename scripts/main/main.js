Math.clamp = function(min, value, max){
    return Math.max(min, Math.min(max, value));
}

var news_page, max_page_count;
window.onload = function(){
    news_page = 1;
    var news_item = document.getElementById('news');
    max_page_count = Math.ceil(news_item.childElementCount / Math.floor(news_item.scrollWidth / news_item.children[0].scrollWidth));
    document.getElementById('news-max-page').innerText = max_page_count.toString().padStart(2, 0)
}

window.addEventListener('resize', function(){
    var news_item = document.getElementById('news');
    max_page_count = Math.ceil(news_item.childElementCount / Math.floor(news_item.scrollWidth / news_item.children[0].scrollWidth));
    document.getElementById('news-max-page').innerText = max_page_count.toString().padStart(2, 0);
    selectNewsPage();
})

function selectNewsPage(i){
    news_page = Math.clamp(1, news_page + (i ? i : 0), max_page_count)
    document.getElementById('news').style.top = -100 * (news_page - 1) + '%';
    document.getElementById('news-page').innerText = news_page.toString().padStart(2, 0)
}

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