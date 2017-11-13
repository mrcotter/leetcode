/*
Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

// Constructor for singly-linked list
function listNode(value) {
    this.value = value;
    this.next = null;
}

listNode.prototype.add = function(value) {
    var node = new listNode(value),
        currentNode = this;

    // 1st use-case: an empty list 
    if (!currentNode) {
        this = node;
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
    var digits = [];
    while (num > 0) {
        digits.push = num % 10;
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var list, last;
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
        } else {
            list = new Node(value % 10);
            last = list;
        }

        value = value / 10 | 0;
    }

    if (value) {
        last.next = new Node(value);
    }

    console.log(JSON.stringify(list, 0, 4));
    return list;
};

let l1 = new linkedList(), l2 = new linkedList();
l1.build(3421);
l2.build(456);
l1.print();
l2.print();
addTwoNumbers(l1, l2);