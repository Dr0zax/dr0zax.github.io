import { latestReleaseTemplate } from "./templates.mjs";
import { releases } from "./releases.mjs";

const latestReleases = document.querySelector("#latest-container");

function renderLatestRelease(releases) {
    let latest = [releases[0]];
    
    let html = latest.map(latestReleaseTemplate);
    latestReleases.insertAdjacentHTML("beforeend", html.join(""));
}

renderLatestRelease(releases);
