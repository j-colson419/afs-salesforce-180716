/**
 * I got help on creating the masonry style card layout from this article on medium.
 * It utilizes a combination of css styling and javascript code to dynamically update
 * the location and grid-row-end properties of the cards.
 * 
 * @source https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
 */

function resizeGridCard(card){
    grid = document.getElementsByClassName("grid")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil(
        (card.querySelector('.card-content').getBoundingClientRect().height + 4 * rowGap) / 
        (rowHeight + rowGap)
    );
    card.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridCards(){
    allCards = document.getElementsByClassName("card");
    for(x=0;x<allCards.length;x++){
        resizeGridCard(allCards[x]);
    }
    console.log("Resizing...");
}

window.onload = resizeAllGridCards();

window.addEventListener("resize", resizeAllGridCards);

allCards = document.getElementsByClassName("card");
for(x=0;x<allCards.length;x++){
    imagesLoaded( allCards[x], resizeInstance);
}

function resizeInstance(instance){
    card = instance.elements[0];
    resizeGridCard(card);
}