// Kiểm tra một chuỗi là một palindrome được chia thành hai bài toán con
//
// (1) Kiểm tra xem ký tự đầu tiên và ký tự cuối cùng của chuỗi có bằng nhau.
//
// (2) Bỏ qua hai ký tự đầu và cuối, kiểm tra xem phần còn lại của chuỗi con là một palindrome.
//
//     Bài toán con thứ hai (2) giống như vấn đề ban đầu nhưng nhỏ hơn về kích thước.


let str = "123321";
let arr1 = str.split("");

function check(arr) {
    function isPalindrome(arr) {
        let n = arr.length;
        let n2 = n / 2;
        for (let i = 0; i < n2; i++) {
            if (arr[i] != arr[n - i - 1]) {
                return -1;
                break;
            }
        }
        return 1;
    }
    if (isPalindrome(arr) == -1) {
        document.write("khong doi xung");
    }else if (isPalindrome(arr) == 1) {
        document.write("doi xung");
    }
}

check(arr1);