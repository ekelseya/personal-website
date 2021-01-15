---
layout: article.njk
title: Two Sum with Brute Force
date: 2020-09-04
tags: ['write', 'js']
---

I'm starting my LeetCode review with one of the easy questions: if I have an array of integers how do I find the two elements that add up to a target number? Today I am going to go through the brute force method (in excruciating detail).  

Never discount a brute force answer: sometimes it's the best choice!

<!-- excerpt -->

---

The [Two Sum](https://leetcode.com/problems/two-sum/) problem on [LeetCode](https://leetcode.com/) states: 

---

Given an array of integers nums and and integer target, return the indices of the two numbers such that they add up to target.  
You may assume that each input would have exactly one solution, and you  may not use the same element twice.  
You can return the answer in any order.  
Example 1:  
Input: nums = [2,7,11,15], target = 9  
Output: [0,1]  
Output: Because nums[0] + nums[1] == 9, we return [0, 1]  

Example 2:  
Input: nums = [3,2,4], target = 6  
Output: [1,2]  

Example 3:  
Input: nums = [3,3], target = 6  
Output: [0,1]  

---

## Brute force

The easiest way to solve this problem is by brute force. Step through the array and check the sum of each element added to each of the other eleents. Since I know that there will only be one solution, and that I can't use an element twice, when I find a match I return it.  

    function twoSumBruteForce(nums, target) {
        for (let i = 0; i < (nums.length - 1); i++) {
            for (let j = 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    }  
  
Let's look more closely at this function.  

### Breaking it down line by line

First I declare the function. JavaScript gives me a number of ways to do that:  

Function Statement  

    function foo(bar){
        bar = bar * 10;
    }  

Function Expression  

    const foo = function(bar) {
        bar = bar * 10;
    }  

Arrow Function  

    const foo = (bar) => bar * 10  

See the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) for more details on each.  

Arrow functions are sexy as hell, but if I am writing a function longer than one line, I prioritize readability with a function statement. However, that is just a personal choice: you do you, boo-boo!  

Next, I'm going to start my for loops and initialize variables to count through each element in my array. Since array indices start with 0, I initialize i to 0. Because I don't need to check if <code>nums[0] + nums[0] = target</code>, I initialize j to 1. The same logic holds for the upper bounds of my index counters: I don't need to add the last element to itself, therefore I stop the outer for loop after I've checked the sum of the last two elements.  

Now that I've got everything started, let's actually look for valid sums! I start with <code>i = 0</code> and <code>j = 1</code>. I add them together and compare the sum to <code>target</code>. If they match, yay! that was the shortest loop ever. If not, I increment <code>j</code> and compare the next element to <code>nums[i]</code>, in this case the first element of the array. I keep incrementing <code>j</code> until I reach the end of the array when <code>j</code> is no longer less than <code>nums.length</code>. If I set that conditional as <code>j = nums.length</code> I would get an overflow error: if the array length is 4, what element is at <code>array[4]</code>? See the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) on arrays for more information.  

When I've checked the sums of the first element and each of the others, it's time to exit the inner for loop and increment <code>i</code>. That resets <code>j</code> back to 0, so I get to loop through the array again. See the [MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code) on loops.  

I keep looping and looping until one of my conditions is met: Either I check through to the end of the array, or I find a match and exit with my return statement <code>return [i, j]</code>. Because order doesn't matter, I don't care if <code>j</code> is less than <code>i</code>. Remember, a function can only return once. If I had more than one potential match, I would have to change the code.  

### Complexity Analysis

The brute force method works, but it's slow. Imagine the difference between using an axe to chop down a tree and using a chainsaw. The tree gets cut down either way, but one method takes more time.  

Looping through an array of length *n* takes O(n) time. I do it twice (O(n) * O(n)) for a time complexity of O(n<sup>2</sup>).  

However, if time isn't a worry but space is, brute force might be the way to go! I don't copy the array and I only create tiny incrementing variables, giving the brute force method a space complexity of O(1), and you can't get better than that!  

If you want a refresher on Big O notation and complexity analysis, there are a million books, blogs, and videos on the internet. If you just want a good reference, I like the aptly named [Big-O Cheat Sheet](https://www.bigocheatsheet.com/).  

Next I'll look at optimizing this algorithm by using <code>Map()</code> as a hash table.  
