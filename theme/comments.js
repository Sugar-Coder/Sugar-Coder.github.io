'use strict';

function loadComments() {
    // console.log("loading comments.");
    const page = document.querySelector(".page");

    const isLight = document.querySelector('html').getAttribute('class').indexOf('light') != -1;

    const commentScript = document.createElement('script')
    const commentsTheme = isLight ? 'github-light' : 'github-dark'
    commentScript.async = true
    commentScript.src = 'https://utteranc.es/client.js'
    commentScript.setAttribute('repo', 'Sugar-Coder/Sugar-Coder.github.io')
    commentScript.setAttribute('issue-term', 'pathname')
    commentScript.setAttribute('id', 'utterances')
    commentScript.setAttribute('label', 'comment')
    commentScript.setAttribute('theme', commentsTheme)
    commentScript.setAttribute('crossorigin', 'anonymous')

    page.appendChild(commentScript);
}

function removeComments() {
    const page = document.querySelector(".page");
    page.removeChild(page.lastChild);
}

loadComments();

(function observeChange() {
    const html=document.querySelector('html')
    const options={
        attributes:true,//观察node对象的属性
        attributeFilter:['class']//只观察class属性
    }
    let prevIsLight = document.querySelector('html').getAttribute('class').indexOf('light') != -1;
    var mb=new MutationObserver(function(mutationRecord,observer){
        let isLight = document.querySelector('html').getAttribute('class').indexOf('light') != -1;
        // console.log(`prevIsLight:${prevIsLight}, isLight:${isLight}`)
        if (prevIsLight != isLight) {
            removeComments();
            loadComments();
            prevIsLight = isLight;
        }
    })
    mb.observe(html,options)
})();