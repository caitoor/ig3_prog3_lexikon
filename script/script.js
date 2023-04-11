$(function () {
    const tileContainer = $("#tile-wrapper");
    for (let i = 0; i < data.length; i++) {
        const tile = $(`
       
        <div class="tile">
        <a href="${data[i].folder}/index.html"><h3>${data[i].title}</h3></a>
        <div class="tile-content">
           <p>${data[i].description}</p>
           
           <div class="tile-tags">
               <ul>
                   
               </ul>
           </div>
        </div>
        </div>
        `);

        const tagList = tile.find(".tile-tags ul");
        let currentData = data[i];
        for (let j = 0; j < currentData.tags.length; j++) {
            let currentTag = currentData.tags[j];
            tagList.append($(`<li>${currentTag}</li>`));
        }
        tileContainer.append(tile);
    }

})