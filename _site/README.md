# Tetmon Website


This is a static site using [Jekyll](https://jekyllrb.com/)



### Development

Installation:

1. Clone this repo
2. `gem install bundler jekyll`
3. `bundle install`

If you need to edit css/js files:

4. `npm install` (if you need to edit css/js files) (note that Jekyll does not work with pnpm due to a bug in Jekyll’s handling of symlinks)

To start a local server: 

1. `bundle exec jekyll serve --livereload`
2. Navigate to `http://localhost:4000/` for a live preview.



### Content

- Content for careers and founders are in markdown files located in the `collections` folder.
- All other content is included as metadata in `pages` folder



### Static Files

This site uses [Gulp](https://gulpjs.com/) to compile the [Sass](https://sass-lang.com/) files located in the `_sass` to css and to concatenate and minify javascript files defined in `Gulpfile.js`. 

To edit and compile the scss files, run `gulp` in a seperate terminal. 

Static files are located in the `assets` folder



### Deployment

- This repository contains a Github workflow for building and deploying the site to github pages. This is located in the `.github/workflows` folder and uses an action from [](https://github.com/joshlarsen/jekyll4-deploy-gh-pages).

- Builds will be triggered any time you push to the `master` branch. 
