---
layout: article.njk 
title: Valid Parentheses
date: 2020-10-08
tags: ['write', 'js']
---
How do you know ([()]{}()) is valid, but ({)}) is not? Can you write a function that can tell the difference? Let's use a stack!

<!-- excerpt -->

---

The [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) problem on [LeetCode](https://leetcode.com/) states: 

---

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.<br>
Open brackets must be closed in the correct order.<br>
 

Example 1:

    Input: s = "()"
    Output: true

Example 2:

    Input: s = "()[]{}"
    Output: true

Example 3:

    Input: s = "(]"
    Output: false

Example 4:

    Input: s = "([)]"
    Output: false

Example 5:

    Input: s = "{[]}"
    Output: true
 

Constraints:

    1 <= s.length <= 104<br>
    s consists of parentheses only '()[]{}'

---

## Stack

You might be tempted to start at each end of the string and move inwards, maybe even with a little fancy recursion. That would work on strings like ({[()]}), but it wouldn't catch the equally valid {[()[]{()}]}. A better idea is to use a stack.

A stack is a First In Last Out - <abbr>FILO</abbr> - data structure. Think of it like a stack of papers. You can only add and remove papers from the top of the stack. We can use a stack to store the opening half of the parenthesis pair and remove it when we find the closing half. When we reach the end of a valid string, the stack should be empty.

    function isValid(s) {
        const map = new Map();

        map.set('{','}');
        map.set('(',')');
        map.set('[',']');
        
        const stack = [];

        for(let i = 0; i < s.length; i++){
            if (map.has(s[i])) {
                stack.push(s[i]);
            }
            else {
                const pop = stack.pop();
                if (map.get(pop) !== s[i]){
                    return false;
                }
            }
        }
        return stack.length === 0;
    }

### Breaking it down line by line

I start with a function declaration:

    function isValid(s) {

    }

I could use a function expression or even an arrow function, but a function declaration is the easiest to read and is hoisted to the top.

Next I create a <code>Map</code> object and set each left bracket as a key and the right bracket as its corresponding value.

    const map = new Map();

    map.set('{','}');
    map.set('(',')');
    map.set('[',']');

I want to use map's built in functions, so it's important to use the set method. Otherwise I would just have an object.

Next I create an empty array for my stack:

    const stack = [];

What I want to do is load the stack with the appropriate map key every time I read an opening bracket. Then every time I find a closing bracket, it should match the value associated with the top of the stack.

I want to read through each character of the string, so I set up a standard for loop.

    for(let i = 0; i < s.length; i++){

    }

Now we get to the meat of the function:

    if (map.has(s[i])) {
        stack.push(s[i]);
    }

Map.prototype.has() returns true if the element is a key in the map. Here I want to know if the character is an opening bracket, which I set as keys. If it is, I push the corresponding closing bracket to my stack. Array.prototype.push() appends an element to the end of the array. If my array is my stack of papers, the end of the array is the top of the papers.

But what if that character is a closing bracket? The the else statement runs.

    else {
        const pop = stack.pop();
        if (map.get(pop) !== s[i]){
            return false;
        }
    }

Array.prototype.pop() removes the last element of the array, or the first sheet of paper in my stack. The value associated with that key should match the character of the string. If not, the string is not valid and I return false.

If I have successfully traversed through the string, my stack should be empty. 

    return stack.length === 0;

You can see the function in action on my [repl](https://repl.it/@ekelseya/LongestCommonPrefix#index.js).

### Complexity Analysis

Time complexity: O(n)  
Space complexity: O(n)
