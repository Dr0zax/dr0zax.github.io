export function releaseTemplate(release) {
    let spotifyLink = release.links[0];
    let bandcampLink = release.links[1];
    let youtubeLink = release.links[2];

    let link = spotifyLink;

    if (spotifyLink == "") {
        link = bandcampLink;

        if (bandcampLink == "") {
            link = youtubeLink;
        }
    }

    return `
        <div class="release">
            <div class="cover-art">
                <a href="./release?title=${release.title}">
                    <img src="images/cover-art/${release.image}" alt="${release.title}">
                </a>
            </div>
        </div>
    `;
}

function releaseLinkTemplate(link) {
    let spotifyImg = "images/spotify.png";
    let bandcampImg = "images/bandcamp.png";
    let youtubeImg = "images/youtube.png";

    let img = "";

    if (link.search("spotify") != -1) {
        img = spotifyImg;
    }

    if (link.search("bandcamp") != -1) {
        img = bandcampImg;
    }

    if (link.search("youtu.be") != -1) {
        img = youtubeImg;
    }

    return `
        <a class="release-link" href="${link}"><img src="${img}"></img></a>
    `;
}

export function latestReleaseTemplate(release) {
    let links = []

    for (let i = 0; i < 3; i++) {
        if (release.links[i] != "") {
            links.push(release.links[i])
        }
    }

    let linksHtml = links.map(releaseLinkTemplate).join("")

    return `
    <div class="release latest">
        <div class="cover-art">
            <a href="./release?title=${release.title}">
                <img src="images/cover-art/${release.image}" alt="${release.title}">
            </a>
        </div>
        <div class="release-info">
            <div class="bar"></div>
            <p class="release-title">${release.title}</p>
            <p class="release-date">${release.releaseDate}</p>
        </div>
        <div class="release-links">
            ${linksHtml}
        </div>
    </div>
`;
}

export function individualReleaseTemplate(release) {
    let links = []

    for (let i = 0; i < 3; i++) {
        if (release.links[i] != "") {
            links.push(release.links[i])
        }
    }

    let linksHtml = links.map(releaseLinkTemplate).join("")

    return `
    <div class="release individual">
        <div class="cover-art">
            <img src="images/cover-art/${release.image}" alt="${release.title}">
        </div>
        <div class="info">
            <div>
                <h2 class="title">${release.title} - ${release.type}</h2>
                <p class="date"> ${release.releaseDate}</p>
                <p class="description">${release.description}</p>
            </div>
            <div class="links">
                ${linksHtml}
            </div>
        </div>
    </div>
    `;
}