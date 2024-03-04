targetStrings = ["indie web developer", "award-winning creatives", "student-founded studio"]
targetString = 0
frame = 0
direction = 1
setInterval(() => {
    document.getElementById("description").innerText = targetStrings[targetString].substring(0, Math.max(0, Math.min(targetStrings[targetString].length, frame))) + "‎"
    frame += direction
    if (frame >= targetStrings[targetString].length + 10) {
        direction = -1
    } else if (frame <= -2) {
        direction = 1
        targetString = (targetString + 1) % targetStrings.length
    }
}, 50)