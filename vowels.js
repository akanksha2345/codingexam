// program to count the number of vowels in a string

function getVowels(string) {
  var Vowels = 'aAeEiIoOuU';
  var vowelsCount = 0;
  for(var i = 0; i < string.length ; i++) {
     if (Vowels.indexOf(string[i]) !== -1) {
        vowelsCount += 1;
    }
  }
return vowelsCount;
}
console.log("The Number of vowels in -"+
" A Computer Science Portal for Geeks:" 
+ getVowels("hello world"));