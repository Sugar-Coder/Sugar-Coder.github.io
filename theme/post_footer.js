// import React, { useEffect } from 'react';
'use strict';

const Comment = React.forwardRef((props, commentBox) => {
    return <div ref={commentBox} className="comments" />
});

const PostFooter = () => {
    const commentBox = React.createRef();
    // const { theme } = default_theme;  // default_theme is defined in the index.hbs
    const isLight = document.getElementsByTagName('html')[0].getAttribute('class').indexOf('light') != -1;
    // console.log(isLight);
    React.useEffect(() => {
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
      if (commentBox && commentBox.current) {
        commentBox.current.appendChild(commentScript)
      } else {
        console.log(`Error adding utterances comments on: ${commentBox}`)
      }

      const removeScript = () => {
        commentScript.remove();
        document.querySelectorAll(".utterances").forEach(el => el.remove());
      };
      return () => {
        removeScript();
      };
    }, [isLight])
    return (
      <>
        <Comment ref={commentBox} />
      </>
    )
}

const e = React.createElement;

const domContainer = document.querySelector('#react-app');
const root = ReactDOM.createRoot(domContainer);
root.render(e(PostFooter));