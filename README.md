# Tetmon Website

This is a static site using [Jekyll](https://jekyllrb.com/)

### Development

Setup:

```bash
nix-shell
```

To rebuild css/js files:

``` bash
npm run build
```

To develop with live preview:

``` bashbash
npm start & jekyll serve --livereload
```

### Content

- Content for careers and founders are in markdown files located in the `collections` folder.
- All other content is included as metadata in `pages` folder

### Static Files

This site uses [Gulp](https://gulpjs.com/) to compile the [Sass](https://sass-lang.com/) files located in the `_sass` to css and to concatenate and minify javascript files defined in `Gulpfile.js`. 

Static files are located in the `assets` folder

### Deployment

- This repository contains a Github workflow for building and deploying the site to github pages. This is located in the `.github/workflows` folder and uses an action from [](https://github.com/joshlarsen/jekyll4-deploy-gh-pages).

- Builds will be triggered any time you push to the `master` branch. 
