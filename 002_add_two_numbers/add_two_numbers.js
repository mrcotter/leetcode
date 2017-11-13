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
        return node;
    }

    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;
    return node;
};

listNode.prototype.build = function(num) {
    while (num > 0) {
        this.add(num % 10);
        num = parseInt(num / 10);
    }

    return this;
}

listNode.prototype.print = function() {
    var output = "";
    var current = this;

    do {
        if (current.next != null) {
            output += current.value + " -> ";
        } else {
            output += current.value;
        }
        
        current = current.next;
    } while (current.next);

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

    while (l1 || l2) {
        if (l1) {
            value += l1.value;
            l1 = l1.next;
        }
        if (l2) {
            value += l2.value;
            l2 = l2.next;
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

let l1 = new listNode.build(324);
let l2 = new listNode.build(456);
l1.print();
l2.print();
addTwoNumbers(l1, l2);