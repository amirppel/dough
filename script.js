function calculateVolume() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(length) || isNaN(width) || isNaN(height)) {
        document.getElementById("volume").innerText = "0";
        return;
    }

    const volume = length * width * height;
    document.getElementById("volume").innerText = roundToFive(volume);
}

function calculateFlourWeight() {
    const volume = parseFloat(document.getElementById("volume").innerText);
    const panType = document.getElementById("panType").value;
    const breadType = document.getElementById("breadType").value;

    if (isNaN(volume) || volume === 0) {
        alert("אנא הכנס ערכים תקינים לכל המידות");
        return;
    }

    // אחוזי קמח לפי סוג תבנית וסוג לחם
    let flourPercentage;
    if (panType === "open") {
        flourPercentage = (breadType === "yeast") ? 0.30 : 0.35;
    } else {
        flourPercentage = (breadType === "yeast") ? 0.21 : 0.22;
    }

    const flourWeight = volume * flourPercentage;
    document.getElementById("flourWeight").innerText = roundToFive(flourWeight);
}

function roundToFive(value) {
    return Math.round(value / 5) * 5;
}

let clickCount = 0;

function trackClick() {
    clickCount++;

    // שליחת הנתונים ל-Google Sheets
    fetch('https://script.google.com/macros/library/d/1tiTdHyIMfFgywAM9pYI2b4HelRF2Ymr_FTet2mfa3SoYh41nPSg1ct2i/1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ clickCount: clickCount })
    })
    .then(response => response.text())
    .then(data => console.log('Response from server:', data))
    .catch(error => console.error('Error:', error));


    calculateFlourWeight(); // קריאה לפונקציה המקורית
}
