window.onscroll = function() {showarrow()}

function showarrow(){
    if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
}

