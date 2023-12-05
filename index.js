const cards=document.querySelectorAll(".card");
// console.log(cards)

let matchedCard=0;
let cardOne,cardTwo;
let disableDeck=false;

function flipCard(e){
    // console.log(e.target)
    let clickedCard=e.target;
    if(clickedCard!==cardOne && !disableDeck){
        clickedCard.classList.add("flip");
        if(!cardOne){
            return cardOne=clickedCard
        }
        // cardOne=clickedCard;
        cardTwo=clickedCard;
        // console.log(cardOne,cardTwo)
        let cardOneImg=cardOne.querySelector("img").src;
        let cardTwoImg=cardTwo.querySelector("img").src;
        matchCards(cardOneImg,cardTwoImg)
    }
}

function matchCards(img1,img2){
    // console.log(img1,img2)
    if(img1==img2){
        matchedCard++;
        if(matchedCard==10){
            setTimeout(()=>{
                return shuffleCard();
            },1000);
            // return shuffleCard();
        }
        if(matchCard)
        cardOne.removeEventListener("click",flipCard);
        cardTwo.removeEventListener("click",flipCard);
        cardOne="";
        cardTwo=""; 
        return disableDeck=false;
        // return console.log("Card Matched")
    }
    // return console.log("Card not Matched")
    
    setTimeout(()=>{
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");    
    },400)

    setTimeout(()=>{
        cardOne.classList.remove("shake","flip");
        cardTwo.classList.remove("shake","flip");  
        cardOne="";
        cardTwo="";
        disableDeck=false;

    },1200)
}

function shuffleCard(){
    matchCard=0;
    cardOne="";
    cardTwo="";
    let arr=[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
    arr.sort(() => Math.random() > 0.5 ? 1: -1);
    cards.forEach((card,index) =>{
        card.classList.remove("flip");
        let imgTag=card.querySelector("img");
        imgTag.src=`images/img${arr[index]}.jpg`;
        card.addEventListener("click",flipCard)
    });
}

shuffleCard();

cards.forEach(card =>{
    // console.log(card)
    // card.classList.add("flip");
    card.addEventListener("click",flipCard)
});