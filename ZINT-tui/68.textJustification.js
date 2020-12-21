/*
1. how many words can be put in same line?

2. Modify the spaces betweent the words
    |__ not the last line
    |_____ last line / one word a line
*/
let fullJustify = function(words, maxWidth) {
    let lines = []; // if ask to return array
    // let lines = ''; // if ask to return str
    let n = words.length;
    let idx = 0;
    while (idx < n) {
        let totalChars = words[idx].length;
        let last = idx + 1;
        while (last < n) {// maximize words we can fit in oen line by going as far as n which is length of given words.
            if (totalChars + 1 + words[last].length > maxWidth) break;
            totalChars += 1 + words[last].length;
            last++;
        }
        let str = '';
        let gaps = last - idx - 1; //last = 3, idx = 0
        //if last line or 1 word -> left justify
        if (last == n || gaps == 0) {
            for (let i = idx; i < last; i++) {
                str += (words[i] + ' ');
            }
            str.substring(0, n-1); //rmv last space
            for (let j = str.length; j < maxWidth; j++) {
                str += ' ';//add remaining spaces
            }
        //middle justify
        } else {
            let spaces = (maxWidth - totalChars) / gaps;
            let res =  (maxWidth - totalChars) % gaps;
            for (let i = idx; i < last; i++) {
                str += words[i];
                if (i < last - 1) {//# of gaps to fill
                    for (let j = 0; j <= spaces + ((i - idx) < res ? 1 : 0); j++) {
                        str += ' ';
                    }
                }
            }
        }
        lines.push(str);
        // lines += str + '\n';
        idx = last;
    }
    return lines;
}
let words = ['I','got','my','first','offer!'];

console.log(fullJustify(words, 10));