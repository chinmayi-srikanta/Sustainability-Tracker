const facts = [
    "A plastic fork takes 200-500 years to decompose.",
    "Packaging waste makes up 40% of global plastic waste.",
    "A single plastic bag is used for 12 minutes but takes 500+ years to degrade.",
    "Public transport reduces carbon emissions by 45%.",
    "A leaking tap can waste over 3,000 liters of water yearly.",
    "Producing one cotton t-shirt requires 2,700 liters of water.",
    "Over 91% of plastic waste is never recycled.",
    "Switching to LED bulbs can cut energy use by 80%."
];

const challenges = [
    "Avoid single-use plastics",
    "Use public transport",
    "Reduce water consumption",
    "Say no to fast fashion",
    "Carry reusable bags",
    "Avoid packaged foods"
];

let completedDays = 0;
let totalDays = 7;
let skipDays = Math.floor(totalDays / 10);

function showFact() {
    document.getElementById("fact").innerText = facts[Math.floor(Math.random() * facts.length)];
}

function startChallenge() {
    let challengeSelect = document.getElementById("challengeSelect");
    let durationSelect = document.getElementById("duration");

    totalDays = parseInt(durationSelect.value);
    completedDays = 0;
    skipDays = Math.floor(totalDays / 10);

    document.getElementById("selectedChallenge").innerText = challengeSelect.options[challengeSelect.selectedIndex].text;
    
    updateUI();
}

function markCompleted() {
    if (completedDays < totalDays) {
        completedDays++;
        checkCompletion();
    }
    updateUI();
}

function markSkipped() {
    if (skipDays > 0) {
        skipDays--;  
    } else {
        alert("Challenge Reset! You missed too many days.");
        startChallenge();
    }
    updateUI();
}

function checkCompletion() {
    if (completedDays >= totalDays) {
        alert("Challenge Completed! 🎉");
    }
}

function updateUI() {
    document.getElementById("daysCompleted").innerText = completedDays;
    document.getElementById("skipDays").innerText = skipDays;
    document.getElementById("selectedChallenge").innerText = document.getElementById("challengeSelect").value;
}

showFact();
