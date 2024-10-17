function calculateFriendship() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const interests = parseInt(document.getElementById("interests").value);
    const trust = parseInt(document.getElementById("trust").value);
    const time = parseInt(document.getElementById("time").value);
    
    if (name1 === "" || name2 === "" || isNaN(interests) || isNaN(trust) || isNaN(time)) {
        animateText("friendshipScore", "❌ Please fill out all fields!");
        animateText("friendshipMessage", "");
        return;
    }

    // Calculate friendship score based on weighted factors
    const compatibilityScore = Math.min(100, (interests * 4) + (trust * 5) + (time / 2));
    
    // Fun messages based on the score
    let message = "";
    if (compatibilityScore > 80) {
        message = "🌟 Best Friends Forever! 🎉";
    } else if (compatibilityScore > 50) {
        message = "🤗 You two are great friends! 😊";
    } else if (compatibilityScore > 30) {
        message = "👍 You have a friendly bond, keep it growing! 🌱";
    } else {
        message = "😢 Friendship needs a bit more nurturing. 💧";
    }
    
    animateText("friendshipScore", `👫 ${Math.floor(compatibilityScore)}% 👫`);
    animateText("friendshipMessage", message);
    updateMeter(compatibilityScore);
}

// Function to dynamically update the trust slider value
function updateTrustValue(value) {
    document.getElementById("trustValue").textContent = value;
}

// Function to animate the result text
function animateText(id, text) {
    const element = document.getElementById(id);
    element.style.opacity = "0";
    setTimeout(() => {
        element.innerHTML = text;
        element.style.opacity = "1";
        element.style.transition = "opacity 0.8s ease, transform 0.5s ease";
        element.style.transform = "translateY(0)";
    }, 200);
}

// Function to update the visual meter based on the score
function updateMeter(score) {
    const meterFill = document.getElementById("meter-fill");
    meterFill.style.width = `${score}%`;
}
