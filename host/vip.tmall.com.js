(function() {

    if (location.pathname=='/') {
        document.querySelector('.answerArea').onclick=function(){
            var ans = window.prompt("输入答案");
            if(!ans) return;
            var boxs = document.querySelectorAll('div.optionsArea .optionBox');
            for (var i = boxs.length - 1; i >= 0; i--) {
                if(ans.indexOf(boxs[i].innerText)>=0){
                    boxs[i].style.color='red';
                }
            }
        };
    }
})();
