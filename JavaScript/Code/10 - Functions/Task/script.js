let words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function findLongestWord(words) {
    let = oneWord = '';
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > oneWord.length) {
            oneWord = words[i];
        }
    }
        return oneWord;
        }


console.log(findLongestWord(words));