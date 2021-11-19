document.addEventListener('DOMContentLoaded', () => {
    var main_paginator = document.getElementById('donate-paginator');
    for (let i = 0; i < main_paginator.children.length; i++){
        main_paginator.children[i].addEventListener('click', function(){
            selectServerForDonateGroups(i)
        })
    }
})

function selectServerForDonateGroups(index){
    for (let i = 0; i < document.getElementById('global-donate-container').children.length; i++){
        document.getElementById('global-donate-container').children[i].classList.remove('visible');
        document.getElementById('donate-paginator').children[i].classList.remove('selected');
        if (index === i) {
            document.getElementById('global-donate-container').children[i].classList.add('visible');
            document.getElementById('donate-paginator').children[i].classList.add('selected');
        }
    }
}