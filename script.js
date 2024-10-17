function calculateFriendship() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const interests = parseInt(document.getElementById("interests").value);
    const trust = parseInt(document.getElementById("trust").value);
    const time = parseInt(document.getElementById("time").value);
    
    if (name1 === "" || name2 === "" || isNaN(interests) || isNaN(trust) || isNaN(time)) {
        alert("Please fill out all fields.");
        return;
    }

    const compatibilityScore = Math.min(100, (interests * 4) + (trust * 5) + (time / 2));
    
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

    document.getElementById("friendshipScore").textContent = `${Math.floor(compatibilityScore)}%`;
    document.getElementById("friendshipMessage").textContent = message;
    updateMeter(compatibilityScore);
}

function updateMeter(score) {
    const meterFill = document.getElementById("meter-fill");
    meterFill.style.width = `${score}%`;
}

function updateTrustValue(value) {
    document.getElementById("trustValue").textContent = value;
}
