---
layout: article.njk
title: Data Visualization with Plotly
date: 2021-01-02
tags: ['build', 'python']
---

I am fascinated with data visualization. This project was a quick exploration of Python's Plotly library.

<!-- excerpt -->

---

## Stats

### Stack
Python<br>
Pandas<br>
Numpy<br>
Plotly<br>
Jupyter Notebook

### Repo
[Python Practice on GitHub](https://github.com/ekelseya/pypractice)

### Demo

I started with a simple scatterplot of Attack and Defense points.

![To access the interactive chart, please fork the repo.](/img/scatter1.png "A basic scatterplot")

I defined a few extra parameters to add even more information to the plot.

![To access the interactive chart, please fork the repo.](/img/scatter3.png "Scatter plot with color values")

Plotly makes violin charts easy.

![To access the interactive chart, please fork the repo.](/img/violin.png "A color-coded violin chart")

One of the most useful charts to me is the correlation heat map.  

![To access the interactive chart, please fork the repo.](/img/corr.png "A correlation heatmap")

Plotly creates this correlation map with only a few lines of code:

    corr = df.corr() # calculate correlation from the pandas dataframe (df)

    labels = list(df)
    fig = px.imshow(corr, x=labels, y=labels) # chart the correlation into a heatmap
    fig.show()

## Goals

I wanted to learn some of the basic features of Plotly, as well as practice with Pandas and Numpy. It also seemed like a good time to start using Jupyter Notebooks, too. I can't believe I waited so long! Jupyter makes everything so easy and streamlined.

The internet being the internet, it was easy to find data to play with: Pokemon statistics!

## To Do

This was just a brief dip into data viz and Plotly. I plan to find more data repositories and play around with different visualizations.