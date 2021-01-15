---
layout: article.njk 
title: Longest Common Prefix
date: 2020-10-07
tags: ['write', 'js']
---

Given an array of strings, like ["concentrate", "concatenate", "conman"], how do you find the longest common prefix, in this case "con"? Let's use ALL THE LOOPS!

<!-- excerpt -->
---

The [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) problem on [LeetCode](https://leetcode.com/) states: 

---

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]<br>
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]<br>
Output: ""<br>
Explanation: There is no common prefix among the input strings.
 

Constraints:

0 <= strs.length <= 200<br>
0 <= strs[i].length <= 200<br>
strs[i] consists of only lower-case English letters.<br>

---

## Slice

This is a pretty straight forward problem when we use JavaScript's built in slice function. 

    function longestCommonPrefix(strs) {
        if (strs.length === 0) return '';
        const first = strs[0];

        for (let i = 0; i < first.length; i++) {
            for (let j = 1; j < strs.length; j++) {
                const next = strs[j];
                if (next[i] !== first[i]) {
                    return next.slice(0, i);
                }
            }
        }

        return first;
    }

### Breaking it down line by line

Wow. That's a lot of loops! 

First I declare the function:

    function longestCommonPrefix(strs) {

    }

I'm using the tried and true function declaration, but this could easily be a function expression. The only real difference is the scope.

Next let's check that edge case: when <code>strs</code> is an empty array:

    if (strs.length === 0) return '';

If <code>strs</code> has no strings to compare, exit the function immediately and return an empty string.

Time to set up the nested loops. First I need something to compare to.

    const first = strs[0];

I assign the first string in <code>strs</code> to a constant imaginatively called <code>first</code>. I think it's important to give variables meaningful names.

#### Const versus Let

Prior to ES6, JavaScript used <code>var</code> to declare variables, whether they were constant or not. ES6 introduced <code>const</code> and <code>let</code>. What's the difference?

Var had function scope - it was available inside the function where it was defined.

Let has block scope. It's similar to function scope but even more narrowly defined - block scope is anything in between curly braces {} - functions, if statements, for loops, et cetera. Let can only be declared once, but it can be reassigned as many times as your heart desires.

Const has block scope too, but it cannot be reassigned. Once it's assigned a value, that value is constant.

Another main difference between the old <code>var</code> and the new <code>const</code> and <code>let</code> are hoisting. It's important to realize JavaScript differentiates between variable assignment and declaration.

    var myVar; // This is the declaration
    
    myVar = "I'm out of date"; // This is the assignment 

    const myConst = "I'm a const"; 
    // This is the declaration and assignment on one line

All three are hoisted at initialization. The old var was initialized at declaration (<code>var</code> was initialized as undefined). Const and let are initialized when assigned a value. In fact a <code>const</code> must be initialized when declared. You cannot use a <code>let</code> variable before its declaration is reached. If you try, you will get a ReferenceError.

Why did I choose to make <code>first</code> a <code>const</code>? Personal choice. I won't be reassigning it, so why not? Would it affect the code if it were a <code>let</code>? No, but I could potentially accidentally reassign it later on, and that could be bad.

#### Nested For Loops

Now that I have everything set up, it's time to start comparing strings. When I first started coding, I had some trouble keeping track of nested for loops. I found talking through what happens at each step helped the most. 

    for (let i = 0; i < first.length; i++) {

    }

First I want to step through each character in the first string. I initialize an index, set its max as the length of <code>first</code>, and then increment through each character.

Now that I have the first string, I need to compare it to the other strings.

    for (let j = 1; j < strs.length; j++) {
        const next = strs[j];
    }

Again, a simple for loop, but this time I am looping through each string in the original array of strings. I initialize a <code>const</code> as the second string in the array <code>strs</code> (note that <code>j</code> is initialized to 1). Because of const's block scope, I can use it here, even though I will be looping through the code multiple times. Every time this block ends, <code>next</code> is reinitialized.

Now I have two strings to compare, I can isolate the first character of each and compare.

    if (next[i] !== first[i]) {
        return next.slice(0, i);
    }

If first[i] and next[i] are equal, I just want to keep looping. If they do not equal each other, I need to exit the entire function. The return statement makes use of JavaScript's slice method.

#### Slice

According to the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice), the slice function slices out a part of a string and returns it as a new string, without modifying the original. The synatx is:

    str.slice(beginIndex[, endIndex])

<code>beginIndex</code> is the (zero-based) index to start the slice. It is inclusive: 

    const str = "string";
    str.slice(2);

    // Returns "ring"

<code>endIndex</code> is optional. It is the (zero-based) index to end the slice. It is **exclusive**: 

    const str = "string";
    str.slice(2, 3);

    // Returns "r"

In my code, 

    return next.slice(0, i);

the slice returns all of the characters prior to the first non-matching character.

Finally we need to catch the other edge case; when all the strings in the array are equal. If we step through every character of every string and never hit the inner return statemnt, we simply return the first string in the array.

#### Stepping through the loops

Let's pretend to be the computer and work through the loops. Our starting array <code>strs</code> will be ["cat", "can", "cool"].

    function longestCommonPrefix(strs) {
        if (strs.length === 0) return '';
        const first = strs[0];

        for (let i = 0; i < first.length; i++) {
            for (let j = 1; j < strs.length; j++) {
                const next = strs[j];
                if (next[i] !== first[i]) {
                    return next.slice(0, i);
                }
            }
        }

        return first;
    }

The first check is for an empty array. This array has three elements, so we move on.

Next we initialize the const <code>first</code> to the first string in our array ("cat").

In our first loop, we need to move through each character of "cat". The index counter, <code>i</code>, is initialized to 0.

Now we step into our second loop. Here we need to grab the next string in the array, "can". We initialize a counter for the index of the array, call it <code>j</code>, to 1. <code>str[1]</code> is "can". We assign it to the const <code>next</code>.

Now we can compare characters in the string. If the first characters match (<code>first[0]</code> and <code>next[0]</code>), we hit the end of the inner loop. Our array index counter is incremented (<code>j++</code>) and we grab the next string in our array, "cool" and compare its first character to the first character of our first string, "cat". They both start with c, so we increment <code>j</code> again. But this time <code>j</code> equals 3, which is no longer less than the length of the array <code>strs</code>. We end the inner loop.

Back to the outer loop, <code>i</code> is incremented to 1. We repeat the same inner loop process as before. "cat" and "can" both have the same second character, but when we get to "cool" the if statement is triggered: "o" is not equal to "a" so we return everything that matched prior: <code>next.slice(0, i)</code>. Remember that the <code>endIndex</code> is exclusive; it is not returned as part of the new string.

You can see the function in action on my [repl](https://repl.it/@ekelseya/LongestCommonPrefix#index.js).

### Complexity Analysis

Time complexity: O(n<sup>2</sup>)  
Space complexity: O(1)

A nested loop is always O(n<sup>2</sup>) (technically it's 1/2 O(n<sup>2</sup>) but we can drop the constant). We only use and reuse a few primitive variables so space complexity is O(1).