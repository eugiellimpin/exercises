// Given a number n, write a function to generate all combinations of well-formed parentheses.
//
// Example:
//
// generateParens(3)
// [“((()))”,
//  “(()())”,
//  “(())()”,
//  “()(())”,
//  “()()()”
// ]

// create combinations of numbers
// 1:
// 1 = ()

// 2:
// 1,1 = ()()
// wrapper
// 2 = (())

// 3:
// 1,1,1 = ()()()
// 1,2 = ()(())
// 2,1 = (())()
// wrapper
// 1,1,1 = (()())
// 3 = ((()))

// 4: 
// 1,1,1,1 = ()()()()
// 1,1,2 = ()()(())
// 1,2,1 = ()(())()
// 2,1,1 = (())()()