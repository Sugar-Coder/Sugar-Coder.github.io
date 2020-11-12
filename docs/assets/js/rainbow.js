var loadhtml = '<div class="loader"><div class="loader-inner"><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div></div></div>'
document.write(loadhtml)

document.onreadystatechange = completeLoading;

function completeLoading(){
    if (document.readyState == "complete") {
        setTimeout(function(){
            $(".loader").remove();
        }, 2000);
    }
}