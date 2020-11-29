/*
1. how many words can be put in same line?

2. Modify the spaces betweent he words
    |__ not the last line
    |_____ last line / one word a line
*/
let fullJustify = function(words, maxWidth, align) {
    let k = 0;
    let lines = []; // if ask to return array
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
        for (let i = idx; i < last; i++) {
            str += (words[i] + ' ');
        }
        //if last line or 1 word -> left justify
        if (align[k] == 'left') {
            // str = str.substring(0, n-1); //rmv last space
            // str.substring(0, n-1); //rmv last space
            for (let j = str.length; j < maxWidth; j++) {
                str += ' ';//add remaining spaces
            }
        // right justify
        } else {
            str.substring(0, n-1); //rmv last space
            let spaces = '';
            for (let j = str.length; j < maxWidth; j++) {
                spaces += ' ';//add remaining spaces
            }
            str = spaces + str;
        }
        lines.push(str);
        idx = last;
        k++;
    }
    return lines;
}
let words = ['I','got','my','first','offer!'];
let align = ['left','right','left']
console.log(fullJustify(words, 10, align));