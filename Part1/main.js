// 1
{
  function findMaxAndMin() {
    let num1 = parseInt(prompt("Enter the first integer:"));
    let num2 = parseInt(prompt("Enter the second integer:"));
    let num3 = parseInt(prompt("Enter the third integer:"));

    let max = Math.max(num1, num2, num3);

    let min = Math.min(num1, num2, num3);

    console.log("Maximum number: " + max);
    console.log("Minimum number: " + min);
  }

  findMaxAndMin();
}
//2
{
  function checkVowelOrConsonant() {
    let character = prompt("Enter a character:");

    character = character.toLowerCase();

    if (
      (character === "a",
      character === "e",
      character === "i",
      character === "o",
      character === "u")
    ) {
      console.log("Vowel");
    } else {
      console.log("Consonant");
    }
  }

  checkVowelOrConsonant();
}
// 3
{
  function printMultiplicationTable() {
    let number = parseInt(prompt("Enter an integer:"));

    let result = "";
    for (let i = 1; i <= 12; i++) {
      result += number * i + " ";
    }
    console.log(result.trim());
  }

  printMultiplicationTable();
}
// 4
{
  function printEvenNumbers() {
    let number = parseInt(prompt("Enter a number:"));

    let result = "";
    for (let i = 2; i <= number; i += 2) {
      result += i + " ";
    }
    console.log(result.trim());
  }

  printEvenNumbers();
}
// 5
function calculateTotal(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return total;
}

function calculateAverage(marks) {
  return calculateTotal(marks) / marks.length;
}

function calculatePercentage(totalMarks, totalPossibleMarks) {
  return (totalMarks / (totalPossibleMarks * 5)) * 100;
}

function main() {
  const marks = prompt("Enter Marks of five subjects (separated by space): ")
    .split(" ")
    .map(Number);
  const totalMarks = calculateTotal(marks);
  const averageMarks = calculateAverage(marks);
  const totalPossibleMarks = 100; // Assuming each subject has a maximum of 100 marks

  console.log("Total marks =", totalMarks);
  console.log("Average Marks =", averageMarks);
  console.log(
    "Percentage =",
    calculatePercentage(totalMarks, totalPossibleMarks).toFixed(2) + "%"
  );
}

main();

// 6

function calculatePercentage(totalMarks, totalPossibleMarks) {
  return (totalMarks / (totalPossibleMarks * 5)) * 100;
}

function assignGrade(percentage) {
  if (percentage >= 90) {
    return "Grade A";
  } else if (percentage >= 80) {
    return "Grade B";
  } else if (percentage >= 70) {
    return "Grade C";
  } else if (percentage >= 60) {
    return "Grade D";
  } else if (percentage >= 40) {
    return "Grade E";
  } else {
    return "Grade F";
  }
}

function main() {
  const subjects = [
    "Physics",
    "Chemistry",
    "Biology",
    "Mathematics",
    "Computer",
  ];
  let totalMarks = 0;

  for (let subject of subjects) {
    const marks = parseFloat(prompt(`Enter marks for ${subject}:`));
    totalMarks += marks;
  }

  const totalPossibleMarks = 100;
  const percentage = calculatePercentage(totalMarks, totalPossibleMarks);

  console.log("Percentage =", percentage.toFixed(2) + "%");
  console.log("Grade =", assignGrade(percentage));
}

main();
// The end
