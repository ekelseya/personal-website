---
layout: article.njk
title: Cage Rage Rater
date: 2020-07-17
tags: ['build']
---

Did you know Nicolas Cage made 29 Direct-To-Video movies in the 2010s? I made an app with React.js and Django to rate them all. Now I just have to watch them all...

<!-- excerpt -->

---
# Cage Rage Rater

*Added July 17, 2020*

Built as part of a class project, this application incorporates Styled Components, React hooks and functional components, and user authentication and authorization.

## Stats

### Stack

React<br>
Django Rest Framework

### Repo

[The Cage Rager on GitHub](https://github.com/ekelseya/movieRater)

### Demos

[Firebase deployment](https://cage-rage-rater-13e45.web.app/)<br>
[DRF API on Heroku](https://cage-rater-api.herokuapp.com/api/)

Note: Due to the nature of free-tier hosting plans, please give the servers a moment to wake up.

<img src="/img/cage-rage.png" loading="lazy" alt="A screenshot of the Cage Rager" />

## Goals

### React hooks

I had dabbled with React before, but I hadn't used hooks or functional components. They became the main focus in this project. As an example, to rate movies, users click on the number of stars and a hook does the rest:

    const [ highlighted, setHighlighted ] = useState(-1);

    const highlightRate = high => evt => {
        setHighlighted(high)
    }

I also made liberal use of my personal favorite, the ternary operator:

    {Math.round(mv.avg_rating * 10) / 10} out of 10 stars from {mv.num_ratings === 1 ?
                `${mv.num_ratings} rating` :
                `${mv.num_ratings} ratings`}

### Cookies

I used the react-cookie library to track if users are currently logged in when rating a movie. Again, I used hooks to implement it:

    const [ token ] = useCookies(['mr-token']);

    const rateClicked = rate => evt => {
        fetch(`http://${src}/api/movies/${mv.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`
            },
            body: JSON.stringify( {stars: rate + 1} )
        })
            .then( () => getDetails())
            .catch( error => console.log(error))
    }

### Django Rest Framework

Django Rest Framework may be my favorite for RESTful APIs, because it does all the work for you. Since the focus of this project was React, the backend is pretty basic, although I did create methods to retrieve rating data from the Movie class:

    class Movie(models.Model):
        
        ...

        def num_ratings(self):
            ratings = Rating.objects.filter(movie=self)
            return len(ratings)

        def avg_rating(self):
            sum = 0
            ratings = Rating.objects.filter(movie=self)
            for rating in ratings:
                sum += rating.stars
            if len(ratings) > 0:
                return sum / len(ratings)
            else:
                return 0

All in all, it was a fun project, and I learned a lot.

## To do

### Loading indicator

I plan to add a loading screen, especially as the API server takes a minute to wake up.

### Accessibility

This app is probably the least accessible app in existance. At a bare minimum, I need to add keyboard navigation and functionality.

### Comments

I would love to give users the ability to post comments.

## Would I do it again?

Absolutely. I'm already planning another, more ambitious project to apply everything I learned here.