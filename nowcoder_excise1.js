
/*牛牛想对一个数做若干次变换，直到这个数只剩下一位数字。
 变换的规则是：将这个数变成 所有位数上的数字的乘积。比如285经过一次变换后转化成2*8*5=80.
 问题是，要做多少次变换，使得这个数变成个位数。*/
var n = 0;
function k(a) {
    var s = 1;
    a.toString().split('').map((v,i) => {
        s =s*v;
})
    n++;
    if (s.toString().split('').length !== 1) {
        k(s);
    }
    return n;
}
k(333);
console.log(n);
