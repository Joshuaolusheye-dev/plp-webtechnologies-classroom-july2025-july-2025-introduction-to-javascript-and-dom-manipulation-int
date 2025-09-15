// ==========================================
        // PART 1: JAVASCRIPT BASICS
        // Variables, Data Types, Operators, Conditionals
        // ==========================================

        // Global variables to demonstrate different data types
        let userName = "JavaScript Learner"; // String
        let currentYear = 2025; // Number
        let isLearning = true; // Boolean
        let skills = ["HTML", "CSS", "JavaScript"]; // Array
        let userProfile = { // Object
            name: "Student",
            level: "Beginner",
            projects: 0
        };

        console.log("🎯 Part 1: JavaScript Basics initialized");
        console.log("User Profile:", userProfile);

        /**
         * Function to check age status using conditionals
         * Demonstrates: variables, conditionals (if/else), operators
         */
        function checkAgeStatus() {
            // Get user input and convert to number
            const ageInput = document.getElementById('userAge');
            const ageOutput = document.getElementById('ageOutput');
            const age = parseInt(ageInput.value);
            
            // Input validation
            if (!age || age < 0 || age > 150) {
                ageOutput.innerHTML = "❌ Please enter a valid age between 0 and 150!";
                ageOutput.classList.remove('hidden');
                return;
            }
            
            // Conditional logic using if/else statements
            let status = "";
            let category = "";
            let privileges = [];
            
            if (age < 13) {
                category = "Child";
                status = "🧒 You're still a kid! Enjoy your childhood!";
                privileges = ["Play games", "Watch cartoons", "Learn new things"];
            } else if (age >= 13 && age < 18) {
                category = "Teenager";
                status = "🧑‍🎓 You're a teenager! Time to explore and learn!";
                privileges = ["Join clubs", "Start coding", "Plan your future"];
            } else if (age >= 18 && age < 65) {
                category = "Adult";
                status = "👨‍💼 You're an adult! Time to build your career!";
                privileges = ["Vote", "Work", "Travel independently", "Start a business"];
            } else {
                category = "Senior";
                status = "👴 You're a senior! Time to enjoy life and share wisdom!";
                privileges = ["Mentoring", "Traveling", "Hobbies", "Grandparenting"];
            }
            
            // Calculate birth year using arithmetic operators
            const birthYear = currentYear - age;
            
            // Display results using template literals
            ageOutput.innerHTML = `
                <h4>Age Analysis Results:</h4>
                <p><strong>Age:</strong> ${age} years old</p>
                <p><strong>Category:</strong> ${category}</p>
                <p><strong>Birth Year:</strong> ${birthYear}</p>
                <p><strong>Status:</strong> ${status}</p>
                <p><strong>Your Privileges:</strong></p>
                <ul>
                    ${privileges.map(privilege => `<li>${privilege}</li>`).join('')}
                </ul>
            `;
            
            ageOutput.classList.remove('hidden');
            ageOutput.classList.add('fade-in');
            
            console.log(`Age check completed for ${age} year old user`);
        }

        /**
         * Function to calculate grade using conditionals and operators
         * Demonstrates: conditionals, comparison operators, string interpolation
         */
        function calculateGrade() {
            const scoreInput = document.getElementById('studentScore');
            const gradeOutput = document.getElementById('gradeOutput');
            const score = parseFloat(scoreInput.value);
            
            // Validation using logical operators
            if (isNaN(score) || score < 0 || score > 100) {
                gradeOutput.innerHTML = "❌ Please enter a valid score between 0 and 100!";
                gradeOutput.classList.remove('hidden');
                return;
            }
            
            // Grade calculation using complex conditionals
            let letterGrade = "";
            let description = "";
            let gpa = 0;
            
            if (score >= 90) {
                letterGrade = "A";
                description = "Excellent! 🌟";
                gpa = 4.0;
            } else if (score >= 80) {
                letterGrade = "B";
                description = "Good work! 👍";
                gpa = 3.0;
            } else if (score >= 70) {
                letterGrade = "C";
                description = "Average performance 📚";
                gpa = 2.0;
            } else if (score >= 60) {
                letterGrade = "D";
                description = "Below average 📉";
                gpa = 1.0;
            } else {
                letterGrade = "F";
                description = "Needs improvement 💪";
                gpa = 0.0;
            }
            
            // Calculate percentage and determine pass/fail
            const percentage = score;
            const isPassing = score >= 60;
            
            gradeOutput.innerHTML = `
                <h4>Grade Calculation Results:</h4>
                <p><strong>Score:</strong> ${score}/100 (${percentage}%)</p>
                <p><strong>Letter Grade:</strong> ${letterGrade}</p>
                <p><strong>GPA:</strong> ${gpa}</p>
                <p><strong>Status:</strong> ${isPassing ? '✅ Passing' : '❌ Failing'}</p>
                <p><strong>Description:</strong> ${description}</p>
                <p><strong>Next Steps:</strong> ${isPassing ? 'Keep up the great work!' : 'Consider additional study time.'}</p>
            `;
            
            gradeOutput.classList.remove('hidden');
            gradeOutput.classList.add('fade-in');
            
            console.log(`Grade calculated: ${score} -> ${letterGrade}`);
        }

        // ==========================================
        // PART 2: JAVASCRIPT FUNCTIONS
        // Function declarations, parameters, return values
        // ==========================================

        console.log("❤️ Part 2: JavaScript Functions initialized");

        /**
         * Temperature conversion functions
         * Demonstrates: function parameters, return values, mathematical operations
         */
        function celsiusToFahrenheit(celsius) {
            return (celsius * 9/5) + 32;
        }

        function fahrenheitToCelsius(fahrenheit) {
            return (fahrenheit - 32) * 5/9;
        }

        /**
         * Main temperature conversion function
         * Demonstrates: function calls, conditional logic, user input processing
         */
        function convertTemperature() {
            const tempInput = document.getElementById('temperature');
            const unitSelect = document.getElementById('tempUnit');
            const tempOutput = document.getElementById('tempOutput');
            
            const inputTemp = parseFloat(tempInput.value);
            const unit = unitSelect.value;
            
            // Validation
            if (isNaN(inputTemp)) {
                tempOutput.innerHTML = "❌ Please enter a valid temperature!";
                tempOutput.classList.remove('hidden');
                return;
            }
            
            let result = 0;
            let fromUnit = "";
            let toUnit = "";
            
            // Function calls based on user selection
            if (unit === 'celsius') {
                result = celsiusToFahrenheit(inputTemp);
                fromUnit = "°C";
                toUnit = "°F";
            } else {
                result = fahrenheitToCelsius(inputTemp);
                fromUnit = "°F";
                toUnit = "°C";
            }
            
            // Round to 2 decimal places
            result = Math.round(result * 100) / 100;
            
            tempOutput.innerHTML = `
                <h4>Temperature Conversion Result:</h4>
                <p><strong>Original:</strong> ${inputTemp}${fromUnit}</p>
                <p><strong>Converted:</strong> ${result}${toUnit}</p>
                <p><strong>Formula Used:</strong> ${unit === 'celsius' ? '(C × 9/5) + 32' : '(F - 32) × 5/9'}</p>
            `;
            
            tempOutput.classList.remove('hidden');
            tempOutput.classList.add('fade-in');
            
            console.log(`Temperature converted: ${inputTemp}${fromUnit} -> ${result}${toUnit}`);
        }

        /**
         * String manipulation functions
         * Demonstrates: string methods, function parameters, different return types
         */
        function capitalizeString(str) {
            return str.split(' ')
                     .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                     .join(' ');
        }

        function reverseString(str) {
            return str.split('').reverse().join('');
        }

        function countWords(str) {
            return str.trim().split(/\s+/).length;
        }

        /**
         * String formatter function with multiple operations
         * Demonstrates: function parameters, switch statements, function calls
         */
        function formatString(operation) {
            const textInput = document.getElementById('userText');
            const stringOutput = document.getElementById('stringOutput');
            const inputText = textInput.value.trim();
            
            if (!inputText) {
                stringOutput.innerHTML = "❌ Please enter some text first!";
                stringOutput.classList.remove('hidden');
                return;
            }
            
            let result = "";
            let operationName = "";
            
            // Using switch statement to handle different operations
            switch(operation) {
                case 'capitalize':
                    result = capitalizeString(inputText);
                    operationName = "Capitalized";
                    break;
                case 'reverse':
                    result = reverseString(inputText);
                    operationName = "Reversed";
                    break;
                case 'count':
                    result = `Word count: ${countWords(inputText)} words`;
                    operationName = "Word Count";
                    break;
                default:
                    result = inputText;
                    operationName = "No Change";
            }
            
            stringOutput.innerHTML = `
                <h4>String Formatting Result:</h4>
                <p><strong>Original:</strong> "${inputText}"</p>
                <p><strong>Operation:</strong> ${operationName}</p>
                <p><strong>Result:</strong> "${result}"</p>
                <p><strong>Length:</strong> Original: ${inputText.length} chars</p>
            `;
            
            stringOutput.classList.remove('hidden');
            stringOutput.classList.add('fade-in');
            
            console.log(`String operation ${operation} performed on: "${inputText}"`);
        }

        // ==========================================
        // PART 3: JAVASCRIPT LOOPS
        // for loops, while loops, forEach loops
        // ==========================================

        console.log("🔁 Part 3: JavaScript Loops initialized");

        /**
         * Generate dynamic list using for loop
         * Demonstrates: for loops, DOM element creation, array manipulation
         */
        function generateList() {
            const countInput = document.getElementById('listCount');
            const listContainer = document.getElementById('dynamicList');
            const count = parseInt(countInput.value);
            
            if (!count || count < 1 || count > 20) {
                listContainer.innerHTML = "<p>❌ Please enter a number between 1 and 20!</p>";
                return;
            }
            
            // Array of sample data for dynamic generation
            const sampleItems = [
                "🚀 Learn JavaScript fundamentals",
                "📚 Practice coding daily",
                "💻 Build awesome projects",
                "🎯 Master DOM manipulation",
                "🔧 Debug code effectively",
                "📱 Create responsive designs",
                "🌐 Understand web APIs",
                "⚡ Optimize performance",
                "🎨 Design beautiful UIs",
                "🧪 Write clean code",
                "📊 Work with data",
                "🔄 Use version control",
                "🚀 Deploy applications",
                "🤝 Collaborate with others",
                "💡 Solve complex problems",
                "🏆 Celebrate achievements",
                "📈 Track progress",
                "🎓 Keep learning",
                "🔍 Research solutions",
                "💪 Stay motivated"
            ];
            
            listContainer.innerHTML = `
                <h4>🎯 Generated Items (${count} items):</h4>
                <div id="generatedItems"></div>
            `;
            
            const itemsContainer = document.getElementById('generatedItems');
            
            // Using for loop to generate items
            for (let i = 0; i < count; i++) {
                const item = document.createElement('div');
                item.className = 'student-item fade-in';
                item.style.animationDelay = `${i * 0.1}s`;
                
                // Select item from array using modulo to cycle through if needed
                const selectedItem = sampleItems[i % sampleItems.length];
                
                item.innerHTML = `
                    <span>${i + 1}. ${selectedItem}</span>
                    <span style="font-size: 0.9em; color: #666;">Item #${i + 1}</span>
                `;
                
                itemsContainer.appendChild(item);
            }
            
            console.log(`Generated ${count} list items using for loop`);
        }

        // Global countdown variables
        let countdownTimer = null;
        let countdownActive = false;

        /**
         * Countdown timer using while loop concept
         * Demonstrates: setInterval (while loop simulation), global variables
         */
        function startCountdown() {
            const startInput = document.getElementById('countdownStart');
            const display = document.getElementById('countdownDisplay');
            const startValue = parseInt(startInput.value);
            
            if (!startValue || startValue < 1 || startValue > 60) {
                display.innerHTML = "❌ Enter a number between 1 and 60!";
                return;
            }
            
            // Stop any existing countdown
            if (countdownTimer) {
                clearInterval(countdownTimer);
            }
            
            let currentValue = startValue;
            countdownActive = true;
            
            // Display initial value
            display.innerHTML = `⏰ ${currentValue}`;
            
            // Using setInterval to simulate while loop behavior
            countdownTimer = setInterval(() => {
                currentValue--;
                
                if (currentValue > 0) {
                    display.innerHTML = `⏰ ${currentValue}`;
                    
                    // Change color as countdown progresses
                    if (currentValue <= 3) {
                        display.style.color = '#e74c3c';
                        display.style.fontSize = '2.5em';
                    } else if (currentValue <= 5) {
                        display.style.color = '#f39c12';
                    }
                } else {
                    // Countdown finished
                    display.innerHTML = "🎉 Time's Up!";
                    display.style.color = '#27ae60';
                    display.style.fontSize = '2.5em';
                    clearInterval(countdownTimer);
                    countdownActive = false;
                    
                    // Reset styles after 3 seconds
                    setTimeout(() => {
                        display.style.color = '#e74c3c';
                        display.style.fontSize = '2em';
                    }, 3000);
                }
            }, 1000);
            
            console.log(`Countdown started from ${startValue}`);
        }

        /**
         * Stop countdown function
         */
        function stopCountdown() {
            if (countdownTimer) {
                clearInterval(countdownTimer);
                countdownTimer = null;
                countdownActive = false;
                
                const display = document.getElementById('countdownDisplay');
                display.innerHTML = "⏹️ Countdown Stopped";
                display.style.color = '#6c757d';
                display.style.fontSize = '2em';
                
                console.log("Countdown stopped by user");
            }
        }

        /**
         * Process student data using forEach loop
         * Demonstrates: forEach loop, array of objects, complex data processing
         */
        function processStudentGrades() {
            const resultsContainer = document.getElementById('studentResults');
            
            // Sample student data (array of objects)
            const students = [
                { name: "Alice Johnson", scores: [95, 87, 92, 88, 94], subject: "Mathematics" },
                { name: "Bob Smith", scores: [78, 82, 75, 80, 85], subject: "Science" },
                { name: "Carol Davis", scores: [88, 90, 85, 92, 89], subject: "English" },
                { name: "David Wilson", scores: [72, 68, 74, 70, 76], subject: "History" },
                { name: "Eva Brown", scores: [96, 94, 98, 92, 95], subject: "Art" },
                { name: "Frank Miller", scores: [83, 86, 81, 88, 84], subject: "Music" }
            ];
            
            let resultsHTML = `
                <h4>📊 Student Grade Processing Results:</h4>
                <p><em>Processing ${students.length} students using forEach loop...</em></p>
            `;
            
            let totalClassAverage = 0;
            let processedStudents = [];
            
            // Using forEach loop to process each student
            students.forEach((student, index) => {
                // Calculate student's average using reduce
                const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
                
                // Determine letter grade
                let letterGrade = '';
                if (average >= 90) letterGrade = 'A';
                else if (average >= 80) letterGrade = 'B';
                else if (average >= 70) letterGrade = 'C';
                else if (average >= 60) letterGrade = 'D';
                else letterGrade = 'F';
                
                // Find highest and lowest scores
                const highestScore = Math.max(...student.scores);
                const lowestScore = Math.min(...student.scores);
                
                // Store processed data
                processedStudents.push({
                    ...student,
                    average: Math.round(average * 100) / 100,
                    letterGrade,
                    highestScore,
                    lowestScore
                });
                
                totalClassAverage += average;
            });
            
                // Calculate class average
                const classAverage = Math.round((totalClassAverage / students.length) * 100);
    
                // Display processed student results
                resultsHTML += `<p><strong>Class Average:</strong> ${classAverage}%</p>`;
                resultsHTML += `<ul>`;
                processedStudents.forEach(student => {
                    resultsHTML += `
                        <li>
                            <strong>${student.name}</strong> (${student.subject}): 
                            Avg: ${student.average}, Grade: ${student.letterGrade}, 
                            High: ${student.highestScore}, Low: ${student.lowestScore}
                        </li>
                    `;
                });
                resultsHTML += `</ul>`;
    
                resultsContainer.innerHTML = resultsHTML;
                resultsContainer.classList.remove('hidden');
                resultsContainer.classList.add('fade-in');
    
                console.log("Student grades processed and displayed.");
            }