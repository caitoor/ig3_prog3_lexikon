const subfolders = [
    '_abgabe',
];

let data = [];

function loadTileJson(folderName) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../' + folderName + '/tile.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const tileJson = JSON.parse(this.responseText);
            data.push(tileJson);
        }
    };
    xhr.send();
}

for (let i = 0; i < subfolders.length; i++) {
    loadTileJson(subfolders[i]);
}

console.log(data);