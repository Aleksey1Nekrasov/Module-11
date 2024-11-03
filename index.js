module.exports = evenorodd;

function evenorodd(N) {
   if (N % 2 === 0) {
      result = `Число ${N} четное!`;
   } else {
      result = `Число ${N} нечетное!`;
   }
   return result;
}