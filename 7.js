/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x == 1) return 1;
    if(x == 0) return 0;
    var og = x;
    var xrev = x.toString();
    var sign = xrev[0] == '-' ? -1 : 1;
    xrev = xrev.split("")
    if(xrev[0] == '-') xrev.splice(0, 1);
    xrev = xrev.reverse()
    while(xrev[0] == '0') xrev.splice(0, 1);
    xrev = parseInt(xrev.join(""));
    if ((xrev == 1 && og % 10 != 0) || xrev > 2147483648) return 0;
    return xrev * sign;
};
