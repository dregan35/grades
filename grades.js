// var grades = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
// var failF = [50,51,52,53,54,55,56,57,58,59,60];
// var failD = [61,62,63,64,65,66,67,68,69,70];
// var passC = [71,72,73,74,75,76,77,78,79,80];
// var passB = [81,82,83,84,85,86,87,88,89,90];
// var passA = [91,92,93,94,95,96,97,98,99,100];
// started out doing it the long harder way until Jon helped me understand a more stright forward path

// scores is the array to pull the scores  
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 61, 10, 100];
var countA = 0;
var countB = 0;
var countC = 0;
var countD = 0;
var countF = 0;


// loops thru scores and adds to the countA-F the number of scores that match the if statements 

for (var i = 0; i < scores.length; i++) {
    if (scores[i] > 90 && scores[i] < 101) {
        countA++;

    } else if (scores[i] > 80 && scores[i] < 91) {
        countB++;
    } else if (scores[i] > 70 && scores[i] < 81) {
        countC++;
    } else if (scores[i] > 60 && scores[i] < 71) {
        countD++;
    } else {
        (scores[i] > 0 && scores[i] < 61)
        countF++;
    }
}
// logs the number of scores that fall in the range of each count

console.log("Number of A's in class", countA);
console.log("Number of B's in class", countB);
console.log("Number of C's in class", countC);
console.log("Number of D's in class", countD);
console.log("Number of F's in class", countF);

// finds the highest and lowest scores in the scores array

bottom = Math.min.apply(null, scores);
high = Math.max.apply(null, scores);

// logs the highest and lowest scores

console.log("lowest score in the class", bottom);
console.log("highest score in the class", high);
