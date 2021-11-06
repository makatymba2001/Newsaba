Math.clamp = function(min, value, max){
    return Math.max(min, Math.min(max, value));
}
var news_page, max_page_count;
document.addEventListener('DOMContentLoaded', function(){
    news_page = 1;
    var news_item = document.getElementById('news');
    max_page_count = Math.ceil(news_item.childElementCount / Math.floor(news_item.scrollWidth / news_item.children[0].scrollWidth));
    document.getElementById('news-max-page').innerText = max_page_count.toString().padStart(2, 0)
})

function incrementNewsPanel(){
    news_page = Math.clamp(1, news_page + 1,  max_page_count)
    selectNewsPage()
}

function decrementNewsPanel(){
    news_page = Math.clamp(1, news_page - 1, max_page_count)
    selectNewsPage()
}

function selectNewsPage(){
    document.getElementById('news').style.top = -100 * (news_page - 1) + '%';
    document.getElementById('news-page').innerText = news_page.toString().padStart(2, 0)
}