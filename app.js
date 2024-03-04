setInterval(() => {
    if (window.scrollY > window.innerHeight * 0.3) {
        document.getElementById("nav").style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)"
    } else {
        document.getElementById("nav").style.boxShadow = ""
    }
}, 10)