---
layout: article.njk
title: RESTful Routing Blog
date: 2020-07-20
tags: ['build']
---

RESTful routes map HTTP verbs (get, post, put, delete, and patch) to their CRUD actions (create, read, update, delete). The RESTful Routing Blog is a Node.js, Express, and MongoDB project to practice this mapping.

<!-- excerpt -->

---
# RESTful Routing Blog

*Added July 20, 2020*

Representational State Transfer (REST) is the standard for interactive applications. The client (frontend) and the server (backend) are implemented independently and communicate through well defined routes. I built this project to better understand the REST architectural style.

## Stats

### Stack

Node.js<br>
Express<br>
MongoDB<br>
Passport<br>
Semantic UI

### Repo

[RESTful Routing on GitHub](https://github.com/ekelseya/restfulRoutingBlog)

### Demos

[Heroku Deployment](https://agile-spire-54463.herokuapp.com/posts)<br>

<img src="/img/rest-blog.png" loading="lazy" alt="A screenshot of the RESTful Routing Blog" />

## Goals

### RESTful routing

[REST routes](https://dev.to/rajatm544/what-are-restful-routes-and-how-to-use-them-1a28) match HTTP verbs to CRUD actions:

| Name    | Path            | HTTP Verb | Purpose                                          |
|---------|-----------------|-----------|--------------------------------------------------|
| Index   | /posts          | GET       | List all posts                                   |
| New     | /posts/new      | GET       | Show new post form                               |
| Create  | /posts          | POST      | Create a new post, then redirect to the index    |
| Show    | /posts/:id      | GET       | Show one specific post                           |
| Edit    | /posts/:id/edit | GET       | Show the edit form for one post                  |
| Update  | /posts/:id      | PUT       | Update particular post, then redirect to index   |
| Destroy | /posts/:id      | DELETE    | Delete a particular post, then redirect to index |

### Non-relational database

Relational databases are tabular (built on tables), whereas [non-relational databases](https://docs.microsoft.com/en-us/azure/architecture/data-guide/big-data/non-relational-data#:~:text=A%20non%2Drelational%20database%20is,type%20of%20data%20being%20stored.) are optimized for the specific data needs. In this project, I used MongoDB with a well-defined schema to store users, posts, and their comments.

### Semantic UI

I used [Fomantic UI](https://fomantic-ui.com/), the community fork for Semantic UI, for styling. It has tons of fun options right out of the box and is easy to configure for each project.

### Authentication and Authorization

I used [Passport.js](http://www.passportjs.org/) for authentication. Anyone can create a user account and comment on posts. Users can edit and delete their own comments, but only admin users can delete or edit any comment.

### Code Sanitization

HTML mark up is allowed in new posts, but it is sanitized before being saved to the MongoDB database. 

## Would I do it again?

This project gave me a deeper understanding of RESTful routing, but with so many frameworks that automatically create routes, I don't know that I would write them myself again.