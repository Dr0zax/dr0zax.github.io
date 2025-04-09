import { releaseTemplate } from "./templates.mjs";
import { releases } from "./releases.mjs";

const allReleases = document.querySelector(".all");

function renderAllReleases(releases) {
    let html = releases.map(releaseTemplate);
    allReleases.insertAdjacentHTML("beforeend", html.join(""))
}

renderAllReleases(releases);
const release = document.querySelectorAll(".release");

release.forEach(release => {
    let imageContainer = release.querySelector(".cover-art");
    let image = release.querySelector("img");
    
    imageContainer.addEventListener("mousemove", (e) => {
        let imageRect = image.getBoundingClientRect();
        let x = e.clientX - imageRect.left;
        let y = e.clientY - imageRect.top;
        let xPercent = (x/imageRect.width - 0.5) * 2;
        let yPercent = (y/imageRect.height - 0.5) * 2;

        let xAngle = xPercent * 25;
        let yAngle = yPercent * -25;

        image.style.transform = `rotateY(${xAngle}deg) rotateX(${yAngle}deg)`;
    })

    release.addEventListener("mouseout", () => {
        image.style.transform = 'rotate3d(0, 0, 0, 0deg)';
    })
})

const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();