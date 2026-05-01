// Seed Kindergarten Lessons to Firebase
// Run this once to populate the database with sample lessons

import { db } from './firebase-config.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

const kindergartenLessons = [
    {
        title: "Letter A - A is for Apple",
        subject: "Reading & Phonics",
        grade: "Kindergarten",
        gradeCode: "K",
        duration: "30 minutes",
        objectives: [
            "Recognize and write the letter A (uppercase and lowercase)",
            "Identify the /a/ sound in words",
            "Build vocabulary with A words"
        ],
        content: `
            <h2>Introduction (5 minutes)</h2>
            <p>Today we're learning about the letter A! The letter A makes the /a/ sound like in "apple." Let's practice saying /a/ together.</p>
            
            <h2>Letter Recognition (10 minutes)</h2>
            <p>Show your child the uppercase A and lowercase a. Trace the letters with your finger while saying the letter name. Practice writing A and a on paper or with finger paint.</p>
            
            <h2>Sound Practice (10 minutes)</h2>
            <p>Say these words together and listen for the /a/ sound: apple, ant, alligator, astronaut. Can you think of other words that start with A?</p>
            
            <h2>Review (5 minutes)</h2>
            <p>Review what we learned: What letter did we learn today? What sound does it make? Can you name an A word?</p>
        `,
        activities: [
            {
                title: "Letter Tracing",
                description: "Use the printable worksheet to trace uppercase A and lowercase a. Practice writing them on your own.",
                duration: "10 minutes"
            },
            {
                title: "A is for Apple Craft",
                description: "Cut out an apple shape from red paper. Write the letter A on it and decorate with apple seeds (dried beans).",
                duration: "15 minutes"
            },
            {
                title: "A Sound Hunt",
                description: "Walk around your house and find 5 things that start with the letter A. Draw pictures of what you find.",
                duration: "10 minutes"
            }
        ],
        materials: [
            "Paper and pencil",
            "Crayons or markers",
            "Red construction paper",
            "Scissors (adult supervision)",
            "Glue",
            "Dried beans or small pom-poms"
        ],
        order: 1
    },
    {
        title: "Counting to 10",
        subject: "Mathematics",
        grade: "Kindergarten",
        gradeCode: "K",
        duration: "25 minutes",
        objectives: [
            "Count from 1 to 10 in order",
            "Recognize numbers 1-10",
            "Count objects accurately"
        ],
        content: `
            <h2>Introduction (5 minutes)</h2>
            <p>Let's learn to count to 10! Counting helps us know how many things we have. We'll practice counting together and learn to recognize the numbers.</p>
            
            <h2>Number Recognition (10 minutes)</h2>
            <p>Show your child number cards 1-10. Say each number together. Point to the number and count out that many objects (blocks, toys, snacks).</p>
            
            <h2>Counting Practice (10 minutes)</h2>
            <p>Count everyday objects: How many fingers do you have? How many toys? How many chairs? Practice counting slowly and touching each object as you count.</p>
        `,
        activities: [
            {
                title: "Number Line Walk",
                description: "Create a number line on the floor with tape (1-10). Walk along it, stepping on each number and saying it out loud.",
                duration: "10 minutes"
            },
            {
                title: "Counting Collections",
                description: "Gather small objects (buttons, blocks, crackers). Practice counting groups of 1-10 objects.",
                duration: "15 minutes"
            },
            {
                title: "Number Writing",
                description: "Practice writing numbers 1-10 on paper. Trace dotted numbers first, then try on your own.",
                duration: "10 minutes"
            }
        ],
        materials: [
            "Number cards 1-10 (printable or handmade)",
            "Small counting objects (blocks, buttons, toys)",
            "Paper and pencil",
            "Masking tape (for number line)",
            "Crayons or markers"
        ],
        order: 2
    },
    {
        title: "Colors All Around Us",
        subject: "Science",
        grade: "Kindergarten",
        gradeCode: "K",
        duration: "30 minutes",
        objectives: [
            "Identify basic colors (red, blue, yellow, green, orange, purple)",
            "Find colors in the environment",
            "Understand that colors can be mixed"
        ],
        content: `
            <h2>Introduction (5 minutes)</h2>
            <p>Colors are everywhere! Today we'll learn about different colors and where we can find them. Can you name some colors you see right now?</p>
            
            <h2>Color Exploration (15 minutes)</h2>
            <p>Show your child objects in different colors. Name each color together. Talk about things that are usually that color (red apple, blue sky, yellow sun, green grass).</p>
            
            <h2>Color Mixing (10 minutes)</h2>
            <p>If you have paint or colored water, show how mixing colors makes new colors: red + yellow = orange, blue + yellow = green, red + blue = purple.</p>
        `,
        activities: [
            {
                title: "Color Hunt",
                description: "Go on a color hunt around your home or outside. Find one object for each color of the rainbow.",
                duration: "15 minutes"
            },
            {
                title: "Color Sorting",
                description: "Gather toys or objects and sort them by color. Make piles of red things, blue things, etc.",
                duration: "10 minutes"
            },
            {
                title: "Rainbow Art",
                description: "Create a rainbow using crayons, markers, or paint. Practice making stripes of each color in order.",
                duration: "15 minutes"
            }
        ],
        materials: [
            "Colored objects or toys",
            "Crayons, markers, or paint",
            "Paper",
            "Optional: food coloring and water for color mixing",
            "Small containers for sorting"
        ],
        order: 3
    },
    {
        title: "Letter B - B is for Ball",
        subject: "Reading & Phonics",
        grade: "Kindergarten",
        gradeCode: "K",
        duration: "30 minutes",
        objectives: [
            "Recognize and write the letter B (uppercase and lowercase)",
            "Identify the /b/ sound in words",
            "Build vocabulary with B words"
        ],
        content: `
            <h2>Introduction (5 minutes)</h2>
            <p>Today we're learning about the letter B! The letter B makes the /b/ sound like in "ball." Let's practice saying /b/ together. Feel how your lips come together when you make the sound.</p>
            
            <h2>Letter Recognition (10 minutes)</h2>
            <p>Show your child the uppercase B and lowercase b. Notice how both have a straight line and bumps. Trace the letters with your finger, then practice writing them.</p>
            
            <h2>Sound Practice (10 minutes)</h2>
            <p>Say these words together and listen for the /b/ sound: ball, bear, banana, butterfly, book. Can you think of other words that start with B?</p>
            
            <h2>Review (5 minutes)</h2>
            <p>What letter did we learn today? What sound does it make? Can you name three B words?</p>
        `,
        activities: [
            {
                title: "Letter B Tracing",
                description: "Practice writing uppercase B and lowercase b. Trace them with your finger in sand, shaving cream, or on paper.",
                duration: "10 minutes"
            },
            {
                title: "B is for Ball Game",
                description: "Bounce a ball while saying B words. Each time you catch it, say a new word that starts with B.",
                duration: "10 minutes"
            },
            {
                title: "B Word Book",
                description: "Create a mini book of B words. Draw or cut out pictures of things that start with B and label them.",
                duration: "15 minutes"
            }
        ],
        materials: [
            "Paper and pencil",
            "Crayons or markers",
            "Ball (any size)",
            "Magazines for cutting (optional)",
            "Scissors and glue",
            "Stapler for book binding"
        ],
        order: 4
    },
    {
        title: "Shapes: Circle and Square",
        subject: "Mathematics",
        grade: "Kindergarten",
        gradeCode: "K",
        duration: "30 minutes",
        objectives: [
            "Identify circles and squares",
            "Understand the properties of each shape",
            "Find shapes in the environment"
        ],
        content: `
            <h2>Introduction (5 minutes)</h2>
            <p>Shapes are all around us! Today we'll learn about two special shapes: circles and squares. A circle is round with no corners. A square has 4 equal sides and 4 corners.</p>
            
            <h2>Shape Exploration (15 minutes)</h2>
            <p>Show your child examples of circles (plate, coin, ball) and squares (cracker, book, window). Trace around the shapes with your finger. Count the corners on a square (4) and show that a circle has no corners.</p>
            
            <h2>Shape Hunt (10 minutes)</h2>
            <p>Walk around your home looking for circles and squares. Point them out and name them. "I see a square window!" "That clock is a circle!"</p>
        `,
        activities: [
            {
                title: "Shape Tracing",
                description: "Trace circles and squares using stencils or household objects. Practice drawing them freehand.",
                duration: "10 minutes"
            },
            {
                title: "Shape Collage",
                description: "Cut out circles and squares from colored paper. Glue them onto a larger paper to create a shape picture.",
                duration: "15 minutes"
            },
            {
                title: "Shape Sorting Game",
                description: "Gather objects from around the house. Sort them into two groups: circles and squares.",
                duration: "10 minutes"
            }
        ],
        materials: [
            "Paper and pencil",
            "Circular objects for tracing (cup, lid, coin)",
            "Square objects for tracing (box, book)",
            "Colored construction paper",
            "Scissors",
            "Glue stick",
            "Various household objects for sorting"
        ],
        order: 5
    }
];

// Function to seed lessons
async function seedLessons() {
    console.log('Starting to seed kindergarten lessons...');
    
    try {
        for (const lesson of kindergartenLessons) {
            const docRef = await addDoc(collection(db, 'lessons'), lesson);
            console.log(`Added lesson: ${lesson.title} with ID: ${docRef.id}`);
        }
        
        console.log('✅ All kindergarten lessons added successfully!');
        alert('Lessons added to database! You can now close this page.');
        
    } catch (error) {
        console.error('Error adding lessons:', error);
        alert('Error adding lessons: ' + error.message);
    }
}

// Auto-run when page loads
window.addEventListener('load', () => {
    if (confirm('This will add 5 kindergarten lessons to your database. Continue?')) {
        seedLessons();
    }
});
