function resizeGridCard(card){
    grid = document.getElementsByClassName("grid")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil(
        (card.querySelector('.card-content').getBoundingClientRect().height + rowGap) / 
        (rowHeight + rowGap)
    );
    console.log(rowSpan);
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