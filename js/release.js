import { individualReleaseTemplate } from "./templates.mjs";
import { releases } from "./releases.mjs";

let releaseContainer = document.querySelector("#release-container")

function getParam(param) {
    let query = location.search;
    const urlParam = new URLSearchParams(query);
    return urlParam.get(param)
}

function renderIndiviudalRelease(release) {
    let individual = [release]

    let html = individual.map(individualReleaseTemplate)
    releaseContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function getRelease(releaseParam) {
    let release = releases.find((release) => release.title === releaseParam);
    return release
}

const releaseParam = getParam("release");
const release = getRelease(releaseParam);
renderIndiviudalRelease(release);