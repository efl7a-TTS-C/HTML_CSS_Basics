const detailWindows = document.getElementsByClassName("detailWindow");
const container = document.querySelector(".container");

function popup (e) {
    e.currentTarget.className = "detailWindow highlight";
    e.currentTarget.childNodes[7].className = "open";
    let closeOut = document.createElement("div");
    closeOut.className = "closeOut";
    closeOut.onclick = closePopup;
    e.currentTarget.appendChild(closeOut);
    e.currentTarget.onclick = null;
}

function closePopup (e) {
    let parent = e.currentTarget.parentElement;
    parent.className = "detailWindow";
    parent.childNodes[7].className = "description";
    parent.removeChild(e.currentTarget);
    // resetOnClick(parent);
}

function resetOnClick(parent) {
    console.log("in reset", parent);
    parent.onclick = popup;
}

console.log(detailWindows);
for (let element in detailWindows) {
    detailWindows[element].onclick = popup;
};


