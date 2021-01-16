---
layout: article.njk
title: Personal Website with Eleventy
date: 2021-01-11
tags: ['build']
---

I'm building this website with Eleventy, a static site generator. I am using nunjucks for templating and markdown and yaml for data. Eleventy automatically generates the static html/css/js pages.

<!-- excerpt -->

---

# Personal website with Eleventy (11ty)

*Added January 11, 2021*

I had already created a simple blog with Eleventy, but I knew it could do so much more! I used this project to stretch my skills with both [Eleventy](https://www.11ty.dev/) and [Nunjucks](https://mozilla.github.io/nunjucks/).

## Stats

### Stack
Eleventy<br>
Nunjucks<br>
Yaml<br>
Markdown<br>
CSS<br>
JavaScript<br>
HTML<br>

### Repo
[Personal Website on GitHub](https://www.github.com/ekelseya/personal-website)

### Demos

[You are already here!](https://ekelseya.dev/)

Normally I'd post screenshots here, but instead I'll just encourage you to explore the site.

## Goals

### Accessibility

When I decided to redesign my site to showcase more than just projects, I knew accessibility would be my number one priority. Eleventy became the obvious choice, because it makes accessibility easy: even the documentation places a priority on the best accessibility practices. You can see this in the template code for my main menu:

{%raw%}
    <nav class="main-menu" aria-label="Main Menu" role="navigation">
        <ul class="nav-items"> 
            <li>
                <a class="nav__item {{ 'current' if '/writing' in page.url }}" 
                   aria-current="{{ 'true' if '/writing' in page.url else 'false' }}" 
                   href="/writing">writing</a>
            </li>
        </ul>
    </nav>
{%endraw%}

When Eleventy is compiling the source data, it automatically applies the appropriate `current` class and `aria-current` property.  

### Consistency

I used Nunjucks to create layout templates to keep the design consistent and easily updatable. The breadcrumb navigation in this site is created with a Nunjucks `for` loop with a sprinkle of regular expressions. In the "Listening" playlist, the decorative icons are randomly chosen from a yaml data file with Nunjucks' `random` key word.

### Prefers Dark Mode

I wanted the viewers to be able to toggle between light and dark mode, while also respecting the system settings. I followed [this](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#combining) article from CSS Tricks to create a toggle and save the user's preference to local storage.

### Pagination

I know infinite scroll is all the rage, but I wanted pagination. Eleventy has pagination built in!

### Tags

I wanted to be able to sort content by tags, without having to keep track of what goes where. Eleventy already sorts content by tag; with a few extra steps, I can have navigable tags for all content.

## To Do

Although this site is going live, I still have a few things left to do.

### Responsiveness and Styling

I need to make some tweaks to the media queries to improve the mobile site and I'm not 100% satisfied with the useability and styling.

### Tags

I need to add the [zero maintenance tag page](https://www.11ty.dev/docs/quicktips/tag-pages/) to the site.

### Pagination

While the main page has pagination, I still need to apply it to all the content collections. 

### Prefers Reduced Motion

I would like to showcase many of my projects as gifs, but still respect prefers reduced motion. I plan to use the `<picture>` tag with the appropriate media tag.

### Add all of my projects!

Luckily Eleventy makes it a joy to keep things updated!

## Would I do it again?

I would 100% use Eleventy again. I'm already thinking about using it for my Star Trek Timeline project that stalled last year.
