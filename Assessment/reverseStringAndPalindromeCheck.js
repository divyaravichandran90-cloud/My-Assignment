
function reverseString(data) {
    let reverseData = ""
    for (let x = data.length - 1; x >= 0; x--) {
        reverseData = reverseData.concat(data[x])
    }
    return reverseData
}

function isPalindrome(data) {
    let reversed = reverseString(data)
    if (reversed === data) {
        console.log("yes it is palindrome");
    }
    else {
        console.log("no it is not palindrome");
    }
}
let data = "level"
console.log("Reverse string is :", reverseString(data))
isPalindrome(data)