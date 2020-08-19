const detailWindows = document.getElementsByClassName("detailWindow");

function expandDetailWindow(e) {
    switch (e.currentTarget.className) {
        case "detailWindow highlight": 
            e.currentTarget.className = "detailWindow";
            e.currentTarget.childNodes[7].className = "description";
            let element = document.querySelector("div.closeOut");
            e.currentTarget.removeChild(element);
            break;
        
        case "detailWindow":
            e.currentTarget.className = "detailWindow highlight";
            e.currentTarget.childNodes[7].className = "open";
            let closeOut = document.createElement("div");
            closeOut.className = "closeOut";
            e.currentTarget.appendChild(closeOut);
            break;
        
        default:
            console.log("Error occurred")
            break;
    }
}

function setEventListeners() {
    for (let element in detailWindows) {
        detailWindows[element].onclick = expandDetailWindow;
    }
}

setEventListeners();

