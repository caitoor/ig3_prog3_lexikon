const subfolders = [
    '_abgabe',
];

let data = [];
let loaded = 0;

function loadTileJson(folderName) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../' + folderName + '/tile.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const tileJson = JSON.parse(this.responseText);
            data.push(tileJson);
            loaded++;
            if (loaded >= subfolders.length) onRdy();
        }
    };
    xhr.send();
}

for (let i = 0; i < subfolders.length; i++) {
    loadTileJson(subfolders[i]);
}
function onRdy() {
    console.log(loaded + " tiles loaded.");
    console.log(data);
}
