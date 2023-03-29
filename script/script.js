$(function () {
    const tileContainer = $("#tile-wrapper");
    for (let i = 0; i < 7; i++) {
        const tile = $(`<div class="tile">
       <h3>${data[i].title}</h3>
       <div class="tile-content">
           <p>${data[i].short_explanation}</p>
           <div class="tile-tags">
               <ul>
                   
               </ul>
           </div>
       </div>
       </div>`);

        const tagList = tile.find(".tile-tags ul");
        let currentData = data[i];
        for (let j = 0; j < currentData.tags.length; j++) {
            let currentTag = currentData.tags[j];
            tagList.append($(`<li>${currentTag}</li>`));
        }
        tileContainer.append(tile);
    }
})