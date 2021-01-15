---
layout: article.njk
title: Two Sum with Map
date: 2020-09-05
tags: ['write', 'js']
---

In my last post, I explored the brute force answer to the Two Sum problem. That wasn't a terrible solution, but it would be very costly with large datasets. Today I am going to optimize the solution with JavaScript's Map() object to give us a time and space complexity of O(n).

<!-- excerpt -->

---

The [Two Sum](https://leetcode.com/problems/two-sum/) problem on [LeetCode](https://leetcode.com/) states: given array of integers how do I find the two elements that add up to a target number? I can assume there is only one solution and I can't use the same element twice.

Start with the [Brute Force solution](/blog/posts/2020/post-2) for a refresher on the problem, and more details on functions, loops, and conditionals.

## Map

According to the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), the <code>Map</code> class stores key-value pairs *and remembers the insertion order*. <code>Map</code> performs better when frequently adding key-value pairs. These two properties help optimize the code.

    function twoSumMap(nums, target) {
        const map = new Map()
        
        for(let i = 0; i < nums.length; i++){
            if(map.get(target - nums[i]) >= 0){
                return [i, map.get(target - nums[i])]
            } else {
                map.set(nums[i], i)
            }
        }
    }

### Breaking it down line by line

As before, I declare the function. I prefer function statements for readability:

    function twoSumMap(nums, target) {

    }

Next I initialize a map object:

    const map = new Map()

Then I step through the array <code>nums</code> with a for loop.

    for(let i = 0; i < nums.length; i++)

Now it's finally time for some <code>Map</code> magic! The if statement looks rather threatening, but I promise it's not!

    if(map.get(target - nums[i]) >= 0){
        return [i, map.get(target - nums[i])]
    }

 Each time I increment through the num array, I start by looking in my <code>Map</code> for the *complement* of the value. A complement in math is "the amount you must add to something to make it 'whole'" [Math Open Reference](https://www.mathopenref.com/complement.html#:~:text=The%20complement%20is%20the%20amount,is%20the%20complement%20of%20PQR.). In this case the complement equals the target minus the value. If my target is 9, and the value of the current element is 4, I use the <code>myMap.get(key)</code> method where key = 5, the complement of 4 (4 + 5 = 9). If that key exists and is greater than or equal to 0, I have found my solution and return the indices:

    return [i, map.get(target - nums[i])]

If the key does not exist, the <code>else</code> statement adds the element's value and index with the <code>map.set(key, value)</code> method:

    else {
        map.set(nums[i], i)
    }

Note the order: the value of the array element becomes the key in the map object. This is the magic that makes finding the complement trivial!

### Complexity Analysis

Looping through an array length *n* takes O(n) time, and each look up in the map takes O(1) time. The code loops through the array once, so the time complexity for this solution is O(n).

The map solution does worse than brute force in space requirements. I am creating an object of *n* elements (where n is the length of the array). That increases space complexity to O(n).

I created a [Repl.it](https://repl.it/@ekelseya/TwoSums#index.js) to show the two different methods and their speed tests. Copy it, fork it, play with it! Let me know your optimizations on Twitter: [@ekelseya](https://twitter.com/ekelseya).

If you want a refresher on Big O notation and complexity analysis, there are a million books, blogs, and videos on the internet. If you just want a good reference, I like the aptly named [Big-O Cheat Sheet](https://www.bigocheatsheet.com/).