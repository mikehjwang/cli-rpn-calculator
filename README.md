# CLI RPN Calculator

A command-line reverse polish notation (RPN) calculator built with Javascript.

# Assessment Specs

## Specifications

1. The calculator should use standard input and standard output
2. It should implement the four standard arithmetic operators
3. The calculator should handle errors and recover gracefully
4. The calculator should exit when it receives a `q` command or an end of input
   indicator (EOF / Ctrl+D)

## Example Input/Output

Use your best judgment as far as the format is concerned, as long as it makes sense to the end user. Your calculator should at the minimum handle the following examples.

    > 5
    5
    > 8
    8
    > +
    13

---

    > 5 5 5 8 + + -
    -13.0
    > 13 +
    0.0

---

    > -3
    -3.0
    > -2
    -2.0
    > *
    6.0
    > 5
    5.0
    > +
    11.0

---

    > 5
    5
    > 9
    9
    > 1
    1
    > -
    8
    > /
    0.625

# Solution

## Prerequisites

You need to install [node](https://nodejs.org/) to run this project.

## How to run?

Run the following command inside the project directory:

```
node index
```

## General idea of the solution

**Stack** is used as for the data structure to implement the calculator as the calculation is done step by step.

Added error handlings for the following cases:

- Division by zero
- Invalid input like non-numeric input
