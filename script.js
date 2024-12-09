import { usefulSites, copyrightFree, streaming, webDev, npmPackages, editors, learning, html, css, javaScriptTools, ui, ai, other, cyberSecurity } from "./data.js"

function individualResourceContainer(val) {
    const container = document.createElement('div');
    container.classList.add("space");
    const description = document.createElement('p');
    description.textContent = val.description;
    const title = document.createElement('p');
    title.textContent = val.title;
    const link = document.createElement('a');
    link.href = val.link;

    link.append(title);
    container.append(description, link);
    return container;
}

function usefulSitesCarousel() {
    const carousel = document.getElementById("usefulSitesContainer");
    usefulSites.map(individualResourceContainer).forEach(container => carousel.append(container));
}

function copyrightFreeCarousel() {
    const carousel = document.getElementById("copyrightFreeContainer");
    copyrightFree.map(individualResourceContainer).forEach(container => carousel.append(container));
}

function streamingCarousel() {
    const carousel = document.getElementById("streamingContainer");
    streaming.map(individualResourceContainer).forEach(container => carousel.append(container));
}

function webDevCarousel() {
    const carousel = document.getElementById("webDevContainer");
    webDev.map(individualResourceContainer).forEach(container => carousel.append(container));
}

function npmPackagesCarousel() {
    const carousel = document.getElementById("npmPackagesContainer");
    npmPackages.map(individualResourceContainer).forEach(container => carousel.append(container));
}

function editorsCarousel() {
    const carousel = document.getElementById("editorsContainer");
    editors.map(individualResourceContainer).forEach(container => carousel.append(container));
}

function learningCarousel() {
    const carousel = document.getElementById("learningContainer");
    learning.map(individualResourceContainer).forEach(container => carousel.append(container));
}

function htmlCarousel() {
    const carousel = document.getElementById("htmlContainer");
    html.map(individualResourceContainer).forEach(container => carousel.append(container));
}

function cssCarousel() {
    const carousel = document.getElementById("cssContainer");
    css.map(individualResourceContainer).forEach(container => carousel.append(container));
}

function javaScriptToolsCarousel() {
    const carousel = document.getElementById("javaScriptToolsContainer");
    javaScriptTools.map(individualResourceContainer).forEach(container => carousel.append(container));
}

function uiCarousel() {
    const carousel = document.getElementById("uiContainer");
    ui.map(individualResourceContainer).forEach(container => carousel.append(container));
}

function aiCarousel() {
    const carousel = document.getElementById("aiContainer");
    ai.map(individualResourceContainer).forEach(container => carousel.append(container));
}

function otherCarousel() {
    const carousel = document.getElementById("otherContainer");
    other.map(individualResourceContainer).forEach(container => carousel.append(container));
}

function cyberSecurityCarousel() {
    const carousel = document.getElementById("cyberSecurityContainer");
    cyberSecurity.map(individualResourceContainer).forEach(container => carousel.append(container));
}

cyberSecurityCarousel()
otherCarousel()
aiCarousel()
uiCarousel()
javaScriptToolsCarousel()
cssCarousel()
htmlCarousel()
learningCarousel()
editorsCarousel()
npmPackagesCarousel()
webDevCarousel()
streamingCarousel();
copyrightFreeCarousel();
usefulSitesCarousel();