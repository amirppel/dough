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
    fetch('YOUR_GOOGLE_SCRIPT_URL', {
    method: 'POST',
    mode: 'no-cors', // ביטול אימות CORS
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ clickCount: clickCount })
    })
    .then(() => console.log('Data sent successfully'))
    .catch(error => console.error('Error:', error));



    calculateFlourWeight(); // קריאה לפונקציה המקורית
}
