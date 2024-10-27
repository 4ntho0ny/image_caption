function createWrapper() {
    let wrapper = document.createElement('figure');
    return wrapper;
};

function createFigCaption() {
    let figCap = document.createElement('figcaption');
    return figCap
};

window.addEventListener("load", function (event) {
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const figCap = createFigCaption();
        const alt = image.alt;
        const wrapper = createWrapper();
        image.parentNode.insertBefore(wrapper, image);
        wrapper.appendChild(image);
        figCap.innerHTML = alt;
        wrapper.appendChild(figCap);
    }
});
