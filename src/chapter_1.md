# 2022/10/28
我的新博客从这里开始

## 安装mdbook
参考[mdbook](官方文档
```shell
$cargo install mdbook
$mdbook init my_mdbook_blog
$mdbook serve --open
$cd my_mdbook_blog
$git init
$git checkout -b mdbook
$git remote add githubpage git@github.com:Sugar-Coder/Sugar-Coder.github.io.git
$git push githubpage mdbook 
```
仍然用原站点仓库作为远端仓库

## 使用github-action来发布
[参考](https://github.com/rust-lang/mdBook/wiki/Automated-Deployment%3A-GitHub-Actions)
设置我的仓库的default branch为mdbook