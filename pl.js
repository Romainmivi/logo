    let whale_left = -900;
    let logo_top = 355;
    let logo_left = 800;

    let im1 = document.getElementById("logo");
    let im2 = document.getElementById("whale");
    let img3 = document.getElementById("shark");

    im1.addEventListener("click", emptyFunction);
    let shark_left = document.documentElement.scrollWidth;
    img3.style.left = shark_left + "px";
    img3.style.top = logo_top + "px";

    function emptyFunction() {
        im2.style.left = whale_left + "px";
        im2.style.display = "block";
        moveImage();
    }

    let rot = 0.3;

    async function moveImage() {
        for (let i = 0; i < 110; i++) {
            await delay(1);
            whale_left += 10;
            im2.style.left = whale_left + "px";
        }
        createRotationAnimation(rot, 'linear', 360);
        im1.classList.add("rotate");

        for (let i = 0; i < 110; i++) {
            await delay(10);
            logo_top -= 10;
            logo_left += 10;
            im1.style.top = logo_top + "px";
            im1.style.left = logo_left + "px";
            if (logo_top < 10) break;
        }
        for (let i = 0; i < 110; i++) {
            await delay(10);
            logo_top += 10;
            logo_left += 10;
            im1.style.top = logo_top + "px";
            im1.style.left = logo_left + "px";
            if (logo_top >= 400) break;
        }
        img3.style.display = "block";
        for (let i = 0; i < 110; i++) {
            await delay(10);
            logo_left -= 11;
            whale_left -= 11;
            shark_left -= 15;
            im1.style.left = logo_left + "px";
            im2.style.left = whale_left + "px";
            img3.style.left = shark_left + "px";
            if (logo_top < 10) break;
            rot += 0.01;
            createRotationAnimation(rot, 'linear', 360);
            im1.classList.add("rotate");
        }
        createRotationAnimation(0, 'linear', 0);
        explosion("shark_e.png");
    }

    function explosion(s){
        document.getElementById("shark").src=s;
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function createRotationAnimation(duration, timingFunction, angle) {
        const style = document.createElement("style");
        document.head.appendChild(style);
    
        const keyframes = `
            @keyframes rotateLogo {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(${angle}deg);
                }
            }
        `;
        
        style.sheet.insertRule(keyframes, 0);
    
        im1.style.animation = `rotateLogo ${duration}s ${timingFunction} infinite`;
    }
    

