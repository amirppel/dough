function calculateVolume() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    
    if (isNaN(length) || isNaN(width) || isNaN(height)) {
        alert("אנא הכנס ערכים תקינים");
        return;
    }
    
    const volume = length * width * height;
    document.getElementById("volume").innerText = volume.toFixed(2);
}

function calculateFlourWeight() {
    const volume = parseFloat(document.getElementById("volume").innerText);
    const panType = document.getElementById("panType").value;
    const breadType = document.getElementById("breadType").value;

    if (isNaN(volume) || volume === 0) {
        alert("אנא חשב תחילה את נפח התבנית");
        return;
    }

    // הגדר מקדם אחוזים לפי סוג תבנית וסוג לחם
    let flourPercentage;
    if (panType === "open") {
        flourPercentage = (breadType === "yeast") ? 0.30 : 0.35;
    } else { // תבנית קסטן סגורה
        flourPercentage = (breadType === "yeast") ? 0.21 : 0.22;
    }

    // חישוב משקל הקמח
    const flourWeight = volume * flourPercentage;
    document.getElementById("flourWeight").innerText = flourWeight.toFixed(2);
}
