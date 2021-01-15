---
layout: article.njk
title: Reverse String
date: 2020-09-08
tags: ['write', 'js']
---

Today I'm going to work through the Reverse String problem: Write a function that reverses a string. JavaScript has many built in string and array methods, but what if we can't use them? What if we have space contraints? I will try to cover the most common variations.

<!-- excerpt -->

---

The [Reverse String](https://leetcode.com/problems/reverse-string/) problem on [LeetCode](https://leetcode.com/) states: 

--- 

Write a function that reverses a string. The input string is given as an array of characters char[].  
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.  
You may assume all the characters consist of printable ascii characters.  

Example 1:  
Input: ["h","e","l","l","o"]  
Output: ["o","l","l","e","h"]  
Example 2:  
Input: ["H","a","n","n","a","h"]  
Output: ["h","a","n","n","a","H"]  

---

## Built In Methods

This question is trivial if you can use JavaScript's built in methods.  According to the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse), Array.prototype.reverse() method reverses an array in place, thus no extra space is allocated. This answer is so easy that I would use an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions):

    let reverseStringBuiltIn = (charArray) => charArray = charArray.reverse();

### Breaking it down line by line

There's only one line, so... Refer to the MDN docs for a detailed explanation of arrow functions. Briefly, reverseStringBuiltIn is a **named function** where the arrow expression is treated as a variable. With an arrow function, the brackets and "return" of function statements and expressions are implied, so I don't include them. <aside>Note: if the body of the function needed additional lines of processing, I would have to include both the brackets and the "return".</aside>

For the built in magic, I use the reverse method. Reverse transposes elements in place and is generic: it can be applied to array-like objects. A string is **not** an array-like object, so a common variation of this question in JavaScript is to change the given to a string, rather than an array.

### Complexity Analysis

Time complexity: O(n)  
Space complexity: O(1)  

## Built In Methods Given a String

If you need to reverse a string, but can still use built in methods, this is still trivial:

    let reverseStringBuiltIn = (str) => str = str.split("").reverse().join("");

I declare the arrow function as before, but this time I split the string on the empty character, reverse it, then join it back into a string.

### Breaking it down line by line

The [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) give a concise definition of the spit method: <q cite="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split">The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.</q>

In this case the pattern is the empty string. If that is hard to wrap your head around, ask yourself, what is between the letters of a word? What seperates a sentence and its punctuation? It can't be nothing, so it must be the empty string.

We've already talked about the reverse method, so what about join()? It's just the reverse of split(). Again I turn to the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) for the most succinct definition: <q cite="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join">The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.</q>

## Restrictions on Built In Methods

Interviewers love to put restrictions on built-in methods, because your job will never let you use the reverse method. Just kidding. They like to put those restrictions on these questions to explore your understanding of the underlying data structures. I hate it, but it's all part of the dog and pony show. Let's look at a cool little ES6 trick possible through [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

    function reverseStringSwap(charArray) {
        if (charArray.length < 2) return;
        
        let start = 0, end = s.length - 1;

        while (end > start) {
            [charArray[start], charArray[end]] = [charArray[end], charArray[start]];
            end--;
            start++;
        }
    };

Without the destructuring assignment, I would have to use a temporary variable to hold a value when swapping.

### Breaking it down line by line

I declare the function through a function statement:

    function reverseStringSwap(charArray) {
    };

Next, I check the length of the char array. If it's only a single element, there's nothing else to do.

    if (charArray.length < 2) return;

If my char array is longer than a single character, I set some variables to track my place in the array.

    let start = 0, end = s.length - 1;

Now I get into the while loop. I move outside in, element by element, swapping each in place. When the end variable is no longer greater than the start variable, I exit the loop. Because the changes happen in place, there is nothing to return.

### Complexity Analysis

Time complexity: O(n)  
Space complexity: O(1)

## Recursion to Reverse Strings

Everyone loves to show off recursion, and for very short strings it can be better than the built in methods. This function does not answer the original leet code question, but it is a fun function for reversing a string.

    function reverseStringRecursion(s) {
        if (s === "")
            return "";
        else
            return reverseStringRecursion(s.substr(1)) + s.charAt(0);
    }

### Breaking it down line by line

In recursion, I start with the base case-- what will be the exit condition? In this case when s is an empty string, it can't be reversed anymore. Next, I think about a string that has characters to be swapped; how would I do that? Here I use the [substr](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr) method to slice the string at the second character (index 1). The substr method returns the portion of the string from the index given through either a specified number of characters or to the end. I can then concatenate the first character: s.charAt(0) to the end of the substring. This gives me the recursive method: I can repeat those steps on each subsequent substring until the last substring is empty. 

## Live Examples

You can find examples of each of these methods, plus speed tests, on my [Reverse String repl](https://repl.it/@ekelseya/ReverseString#index.js). In each case, I am doing the string variation of the question. As always, I would love to see your optimizations on Twitter: [@ekelseya](https://twitter.com/ekelseya).