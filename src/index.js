module.exports = function multiply(first, second) {
 var first = first.split('').reverse();
 var second = second.split('').reverse();
 var result = [];
 for (var i = 0; i < first.length; i++) {
   for (var a = 0; a < second.length; a++) {
     var b = i + a;
     result[b] = first[i] * second[a] + (b >= result.length ? 0 : result[b]);
     if (result[b] > 9) {
       result[b + 1] = Math.floor(result[b] / 10) + (b + 1 >= result.length ? 0 : result[b + 1]);
       result[b] -= Math.floor(result[b] / 10) * 10;
     }
   }
 }
 return result.reverse().join('');
}