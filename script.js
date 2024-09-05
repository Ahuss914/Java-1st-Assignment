// JavaScript Fundamentals Assignment

// 1. Variables and Data Types
let courseTitle = "JavaScript Fundamentals"; 
const studentLimit = 15; 
let isBeginnerFriendly = true; 
let courseFee = 199.99; 
let courseOverview = null;  // Currently not in use

// 2. Strings
console.log("Length of course title:", courseTitle.length); 
console.log("Course title in uppercase:", courseTitle.toUpperCase()); 

// 3. Template Literals
let courseDetails = `The "${courseTitle}" course allows up to ${studentLimit} students.`; 
console.log(courseDetails); 

// 4. Arrays
let courseTopics = ["Variables", "Strings", "Arrays", "Objects", "Loops", "Functions"]; 
courseTopics.push("Conditionals"); 
console.log("Current course topics:", courseTopics);

// 5. Objects
let trainer = {
    fullName: "John Doe", 
    age: 35, 
    skills: ["JavaScript", "Python", "C++"]
};

// 6. Destructuring
let { fullName, age: instructorAge } = trainer; 
console.log(`Instructor ${fullName} is ${instructorAge} years old.`);

// 7. Loops - Iterating over courseTopics array
console.log("Course topics list:"); 
for (let i = 0; i < courseTopics.length; i++) {
    console.log(`Topic ${i + 1}: ${courseTopics[i]}`);
}

// 8. Conditionals - Check if courseFee qualifies for a discount
let discountMessage = courseFee > 200 ? "Discount of 10% available!" : "No discount available."; 
console.log(discountMessage);

// 9. Functions - Calculate the total cost including materials fee
function calculateTotalFee(baseFee, materialFee) {
    return baseFee + materialFee; 
}

// 10. Arrow Functions - Apply discount on the total cost
const applyCourseDiscount = (totalAmount, discountRate) => {
    return totalAmount - (totalAmount * discountRate / 100);
};

// 11. Using functions
let overallCost = calculateTotalFee(courseFee, 50);  // Includes a $50 materials fee
let finalCost = applyCourseDiscount(overallCost, 10);  // Apply 10% discount

console.log(`Total fee: $${overallCost}`); 
console.log(`Fee after applying 10% discount: $${finalCost}`);

// 12. Array Methods - Concatenating advanced topics with existing topics
let advancedModules = ["Promises", "Async/Await", "Modules"]; 
let completeTopics = courseTopics.concat(advancedModules);

console.log("Complete list of topics including advanced topics:");
completeTopics.forEach(topic => console.log(`- ${topic}`));

// 13. Conditional Statements - Determine if the course is large and beginner-friendly
if (isBeginnerFriendly && studentLimit > 25) {
    console.log("This is a large course suitable for beginners.");
} else if (isBeginnerFriendly) {
    console.log("This course is designed for beginners.");
} else {
    console.log("This is an advanced course.");
}

// ASSIGNMENT TASKS:

// 1. Add a new property to the trainer object
trainer.country = "United States";
console.log(`Trainer is from ${trainer.country}`);

// 2. Create a function that filters the topics array to only show topics with more than 5 characters
function filterLongTopics(array) {
    return array.filter(topic => topic.length > 5);
}
let longTopics = filterLongTopics(courseTopics);
console.log("Topics with more than 5 characters:", longTopics);

// 3. Use a while loop to simulate a simple quiz game with an exit condition
let attempts = 0;
while (attempts < 3) {  // Limit attempts to 3
    let answer = prompt("What is the capital of Japan? (Type 'exit' to quit)");
    if (answer === "Tokyo") {
        console.log("Correct!");
        break;  // Exit the loop on the correct answer
    } else if (answer.toLowerCase() === "exit") {
        console.log("Quiz exited.");
        break;  // Allow user to exit the quiz
    } else {
        console.log("Wrong answer. Try again.");
        attempts++;
    }
}

// 4. Implement a switch statement to provide different messages based on the number of topics
function evaluateCourseLength(array) {
    switch (true) {
        case array.length <= 3:
            console.log("This is a short course.");
            break;
        case array.length <= 6:
            console.log("This is an average course.");  // Fixed typo
            break;
        default:
            console.log("This is a long course.");
            break;
    }
}
evaluateCourseLength(courseTopics);

// 5. Use the ternary operator to assign a difficulty level to the course
function difficultyLevel(array) {
    return array.length > 5 ? "This is a difficult course." : "This is an easy course.";
}
console.log(difficultyLevel(courseTopics));