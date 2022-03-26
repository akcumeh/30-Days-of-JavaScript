/*
Day 2 - Level 3

'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

Clean the following text and find the most frequent word (hint, use replace and regular expressions):
"    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; && mo@re rewarding than educa@ting &and& @emp%o@weri@ng peo@ple. ;I find tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching' "

Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
*/

// Question 1 //
let loveStr = "Love is the best thing in this world. Some found their love and some are still looking for their love.", lovePat = /love/gi, loveArr = loveStr.match(lovePat);

console.log(loveArr.length);

//Question 2//
let becStr = "You cannot end a sentence with because because because is a conjunction", becPat = /because/gi, becArr = becStr.match(becPat);

console.log(becArr.length);

//Question 3//

//25-03-2022 11:00:00 Update! After 2 days I still can't find a simple way to do this -_- I am going to ask on Stack Overflow

//25-03-2022 14:07 update I've decided to accept the following answer from Stack Overflow. Let me quickly check if it works before my laptop dies! TT

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; && mo@re rewarding than educa@ting &and& @emp%o@weri@ng peo@ple. ;I find tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching', sentReg = /\W(?<!1)/g, sent = sentence.replace(/ /g, "1");
let word = sentence.replace(/[^\w\s]/g, "")
            .match(/\w+/g)
            .reduce((acc, word) => {
                acc[word] = (acc[word] || 0) + 1;
                if (!(acc[word] < acc[acc.$])) acc.$ = word;
                return acc;
            }, {}).$;
            
console.log(word);

//25-03-2022 14:08 update!!! It workeddddd!!! Finally!

//Question 4//
const incomeStatement = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
var income = incomeStatement.match(/\d+/g);
let salary = ((12*parseInt(income[0])) + parseInt(income[1]) + (12*parseInt(income[2])));
console.log(salary);