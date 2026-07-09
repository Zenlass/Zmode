/* ===========================
   ZMODE - SCRIPT.JS
=========================== */

// Fade la încărcare
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Glow care urmărește mouse-ul
const glow = document.createElement("div");
glow.id = "cursorGlow";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

// Particule
const particles = document.getElementById("particles");

for(let i = 0; i < 60; i++){

    const p = document.createElement("span");

    p.classList.add("particle");

    p.style.left = Math.random()*100+"vw";

    p.style.animationDuration =
        5 + Math.random()*8 + "s";

    p.style.animationDelay =
        Math.random()*5 + "s";

    p.style.opacity =
        Math.random();

    p.style.transform =
        `scale(${Math.random()*2})`;

    particles.appendChild(p);

}

// Hover pe butoane
document.querySelectorAll(".buttons a").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

// Titlu animat
const title = document.querySelector("h1");

setInterval(()=>{

    title.style.textShadow=
    "0 0 15px #b84dff,0 0 45px #7b2cff";

    setTimeout(()=>{

        title.style.textShadow=
        "0 0 8px #9333ea";

    },300);

},2500);

// Download animation
const download = document.querySelector(".buttons a");

download.addEventListener("click",()=>{

    download.innerHTML="Downloading...";

    setTimeout(()=>{

        download.innerHTML="Download CFG";

    },2500);

});

setTimeout(()=>{

    document.getElementById("loader").style.opacity="0";

    setTimeout(()=>{

        document.getElementById("loader").remove();

    },800);

},2200);