/*
Two Sum

Given an array of integers, return indices of the two numbers such that 
they add up to a specific target. You may assume that each input would have
exactly one solution, and you may not use the same element twice.

Example:
    Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].

Usage:
    node two_sum.js, use default numbers and target;
    node two_sum.js 2 7 11 15 9, the last number is parsed as the target number.
*/

function twoSum(nums, target) {
    var map = new Map();
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    for (let keyNum of map.keys()) {
        var complement = target - keyNum;
        if (map.has(complement) && complement != keyNum) {
            result.push(map.get(keyNum));
        }
    }

    if (result.length > 0) {
        console.log(result);
    } else {
        console.log("No two sum solution");
    }
}

let defaultNums = [3, 2, 4, 8, 1];
let target = 9;
let numArgs = process.argv.slice(2).map(parseFloat);

if (numArgs.length > 0) {
    target = numArgs.pop();
    twoSum(numArgs, target);
} else {
    twoSum(defaultNums, target);
}

