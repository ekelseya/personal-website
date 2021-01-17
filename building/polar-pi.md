---
layout: article.njk
title: Polar Pi
date: 2021-01-16
tags: ['build']
---

Pi is a very fun number to play with. In this project, I used the Nilakantha Series to calculate the first 1000 digits of pi, then mapped those digits as polar coordinates into an HTML canvas.

<!-- excerpt -->

---
# Polar Pi

*Added January 16, 2021*

I'm always fascinated by using paths to represent numbers. I decided to see what the digits of pi would look like mapped to polar coordinates.

## Stats

### Stack

JavaScript<br>

### Repo

[Polar Pi](https://github.com/ekelseya/polar-pi)

### Demos

<img src="/img/polar-pi.png" loading="lazy" alt="A screenshot of Polar Pi" />

## Goals

### Calculate Pi

JavaScript has ~Math.PI~, but it doesn't have as many digits as I wanted. I found the Nilakantha Series and [Andrew Jennings's](http://ajennings.net/blog/a-million-digits-of-pi-in-9-lines-of-javascript.html) implementation with big integers. Using his method, I was able to create an array with the first 1000 digits of pi.

### Convert to Polar and Cartesian Coordinates

Polar coordinates seemed perfect for this problem. Each polar coordinate is a distance from the origin ~r~ and an angle of rotation from the origin. For the angle of rotation, I multiplied the digit by 36 (10 digits possible and 360 degrees in a circle gave me a factor of 36). This angle was then converted to radians:

    const radCalc = degrees => (degrees)*Math.PI/180;

For each digit, I calculated a polar coordinate (r, theta) as ~(digit, radCalc(digit * 36))~. These polar coordinates were then converted to Cartesian coordinates:

    const xConvert = (r, theta) => (r * Math.cos(theta));
    const yConvert = (r, theta) => (r * Math.sin(theta));

### Canvas

Putting it all together, I used ~lineTo() to draw it on a massive HTML canvas. I added a short interval, because why not?

    let count = 0;

    if (count < 1001){
        setInterval(render, 200);
    }

    function render() {
        let r = piArray[count];
        let theta = radCalc(r*36);
        let x = -(xConvert(r, theta)) * 10;
        let y = -(yConvert(r, theta)) * 10;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.translate(x, y);
        count++;
    }

## To Do

Next I think I'll convert the digits to base four and map a path where North = 0, East = 1, South = 2, and West = 3. I also played around a bit with ~arcTo~; it makes LSD inspired spider-webs. Definitely something worth exploring.

## Would I do it again?

Of course! This was a fun little project combining a bunch of different techniques. Maybe Planck's constant next?