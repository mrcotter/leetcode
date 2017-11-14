/*
Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

Usage:
    node add_two_numbers.js, use default numbers to calculate;
    node add_two_numbers.js 1920 385, the numbers will be parsed as two linked list for calculation.
*/

// Constructor for singly-linked list
function Node(value) {
    this.value = value;
    this.next = null;
}

function linkedList() {
    this.head = null;
}

linkedList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;

    // 1st use-case: an empty list 
    if (!currentNode) {
        this.head = node;
        return node;
    }

    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;
    return node;
};

linkedList.prototype.build = function(num) {
    while (num > 0) {
        this.add(num % 10);
        num = parseInt(num / 10);
    }

    return this;
}

linkedList.prototype.print = function() {
    var output = "";
    var current = this.head;

    while (current) {
        if (current.next != null) {
            output += current.value + " -> ";
        } else {
            output += current.value;
        }
        
        current = current.next;
    }

    console.log(output);
}

/**
 * @param {linkedList} l1
 * @param {linkedList} l2
 */
var addTwoNumbers = function(l1, l2) {
    var list, last, addedList = new linkedList();
    var value = 0;
    var node1 = l1.head, node2 = l2.head;

    while (node1 || node2) {
        if (node1) {
            value += node1.value;
            node1 = node1.next;
        }
        if (node2) {
            value += node2.value;
            node2 = node2.next;
        }

        if (last) {
            last.next = new Node(value % 10);
            last = last.next;
            addedList.add(last.value);
        } else {
            list = new Node(value % 10);
            last = list;
            addedList.add(last.value);
        }

        value = value / 10 | 0;
    }

    if (value) {
        last.next = new Node(value);
    }

    addedList.print();
};


let numArgs = process.argv.slice(2).map(parseFloat);
let l1 = new linkedList(), l2 = new linkedList();

if (numArgs.length > 0) {
    l1.build(numArgs[0]);
    l2.build(numArgs[1]);
} else {
    l1.build(243);
    l2.build(564);
}

l1.print();
l2.print();
addTwoNumbers(l1, l2);