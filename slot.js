const spinButton = document.getElementById("spin");
const reelOne = document.getElementById("reelOne");
const reelTwo = document.getElementById("reelTwo");
const reelThree = document.getElementById("reelThree");
const outcome = document.getElementById("outcome");
const creditsBlock = document.getElementById("credits");
let credits = 10;
creditsBlock.innerHTML = `${credits}`

const spinReel = () => {
   let randomNumber = Math.floor(Math.random()*7);
   switch (randomNumber) {
    case 0:
        return "andy";
        break;
    case 1:
        return "kelly";
        break;
    case 2:
        return "ryder";
        break;
    case 3:
        return "new baby";
        break;
    case 4:
        return "nala";
        break;
    case 5:
        return "mufasa";
        break;
    case 6:
        return "pizza";
        break;
    /*case 7:
        return "games";
        break;
    case 8:
        return "chainsaw";
        break;
    case 9:
        return "fairy";
        break;*/
   }
}

spinButton.onclick = function() {
    //test below
    let win = 0;
    const winnings = (slotOne, slotTwo, slotThree) => {
        
        if (slotOne === slotTwo && slotTwo === slotThree) {
            switch (slotOne) {
                case "andy":
                    win += 100;
                    credits += 100;
                    break;
                case "kelly":
                    win += 75;
                    credits += 75;
                    break;
                case "ryder":
                    win += 50;
                    credits += 50;
                    break;
                case "new baby":
                    //document.getElementById("outcome").innerHTML = "New Baby Name"  .......uncomment this for baby gender name
                    win += 50; // comment this out for baby gender name
                    credits += 50;
                    break;
                case "nala":
                    win += 25;
                    credits += 25;
                    break;
                case "mufasa":
                    win += 25;
                    credits += 25;
                    break;
                case "pizza":
                    win += 20;
                    credits += 20;
                    break;
            }
            //document.getElementById("outcome").innerHTML = `YOU WIN ${win}!!!`; //comment this out for baby gender game
        }/* else if (slotOne === "pizza") {
            if (slotOne === "pizza") {
                win += 2;
                credits += 2;
            };
            if (slotTwo === "pizza" && slotOne === "pizza") {
                win += 2;
                credits += 2;
            };
            document.getElementById("outcome").innerHTML = `YOU WIN ${win}!!!`
        }*/ else {
            document.getElementById("outcome").innerHTML = "Try Again"
        };
    };    
       
 // test above    
    credits -= 1;
    const reelOneOutcome = spinReel();
    const reelTwoOutcome = spinReel();
    const reelThreeOutcome = spinReel();
    const reelFourOutcome = spinReel();
    const reelFiveOutcome = spinReel();
    const reelSixOutcome = spinReel();
    const reelSevenOutcome = spinReel();
    const reelEightOutcome = spinReel();
    const reelNineOutcome = spinReel();


    if (credits >= 0) {
        
        switch (reelOneOutcome) {
            case "andy":
                reelOne.innerHTML = '<img id="andyPic1" src="./andy.jpg">';
                document.getElementById("andyPic1").style.width = "100%";
                break;
            case "kelly":
                reelOne.innerHTML = '<img id="kellyPic1" src="./kelly.jpg">';
                document.getElementById("kellyPic1").style.width = "100%";
                break;
            case "ryder":
                reelOne.innerHTML = '<img id="ryderPic1" src="./ryder.jpg">';
                document.getElementById("ryderPic1").style.width = "100%";
                break;
            case "new baby":
                reelOne.innerHTML = '<img id="newBabyPic1" src="./newBaby.jpg">';
                document.getElementById("newBabyPic1").style.width = "100%";
                break;
            case "nala":
                reelOne.innerHTML = '<img id="nalaPic1" src="./nala.jpg">';
                document.getElementById("nalaPic1").style.width = "100%";
                break;
            case "mufasa":
                reelOne.innerHTML = '<img id="fasPic1" src="./fas.jpg">';
                document.getElementById("fasPic1").style.width = "100%";
                break;
            case "pizza":
                reelOne.innerHTML = '<img id="pizzaPic1" src="./pizza.jpg">';
                document.getElementById("pizzaPic1").style.width = "100%";
                break;
            /*case "games":
                reelOne.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "chainsaw":
                reelOne.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "fairy":
                reelOne.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;*/
        };


        switch (reelTwoOutcome) {
            case "andy":
                reelTwo.innerHTML = '<img id="andyPic2" src="./andy.jpg">';
                document.getElementById("andyPic2").style.width = "100%";
                break;
            case "kelly":
                reelTwo.innerHTML = '<img id="kellyPic2" src="./kelly.jpg">';
                document.getElementById("kellyPic2").style.width = "100%";
                break;
            case "ryder":
                reelTwo.innerHTML = '<img id="ryderPic2" src="./ryder.jpg">';
                document.getElementById("ryderPic2").style.width = "100%";
                break;
            case "new baby":
                reelTwo.innerHTML = '<img id="newBabyPic2" src="./newBaby.jpg">';
                document.getElementById("newBabyPic2").style.width = "100%";
                break;
            case "nala":
                reelTwo.innerHTML = '<img id="nalaPic2" src="./nala.jpg">';
                document.getElementById("nalaPic2").style.width = "100%";
                break;
            case "mufasa":
                reelTwo.innerHTML = '<img id="fasPic2" src="./fas.jpg">';
                document.getElementById("fasPic2").style.width = "100%";
                break;
            case "pizza":
                reelTwo.innerHTML = '<img id="pizzaPic2" src="./pizza.jpg">';
                document.getElementById("pizzaPic2").style.width = "100%";
                break;
            /*case "games":
                reelTwo.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "chainsaw":
                reelTwo.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "fairy":
                reelTwo.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;*/
        };


        switch (reelThreeOutcome) {
            case "andy":
                reelThree.innerHTML = '<img id="andyPic3" src="./andy.jpg">';
                document.getElementById("andyPic3").style.width = "100%";
                break;
            case "kelly":
                reelThree.innerHTML = '<img id="kellyPic3" src="./kelly.jpg">';
                document.getElementById("kellyPic3").style.width = "100%";
                break;
            case "ryder":
                reelThree.innerHTML = '<img id="ryderPic3" src="./ryder.jpg">';
                document.getElementById("ryderPic3").style.width = "100%";
                break;
            case "new baby":
                reelThree.innerHTML = '<img id="newBabyPic3" src="./newBaby.jpg">';
                document.getElementById("newBabyPic3").style.width = "100%";
                break;
            case "nala":
                reelThree.innerHTML = '<img id="nalaPic3" src="./nala.jpg">';
                document.getElementById("nalaPic3").style.width = "100%";
                break;
            case "mufasa":
                reelThree.innerHTML = '<img id="fasPic3" src="./fas.jpg">';
                document.getElementById("fasPic3").style.width = "100%";
                break;
            case "pizza":
                reelThree.innerHTML = '<img id="pizzaPic3" src="./pizza.jpg">';
                document.getElementById("pizzaPic3").style.width = "100%";
                break;
            /*case "games":
                reelThree.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "chainsaw":
                reelThree.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "fairy":
                reelThree.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;*/
        };

        switch (reelFourOutcome) {
            case "andy":
                reelFour.innerHTML = '<img id="andyPic4" src="./andy.jpg">';
                document.getElementById("andyPic4").style.width = "100%";
                break;
            case "kelly":
                reelFour.innerHTML = '<img id="kellyPic4" src="./kelly.jpg">';
                document.getElementById("kellyPic4").style.width = "100%";
                break;
            case "ryder":
                reelFour.innerHTML = '<img id="ryderPic4" src="./ryder.jpg">';
                document.getElementById("ryderPic4").style.width = "100%";
                break;
            case "new baby":
                reelFour.innerHTML = '<img id="newBabyPic4" src="./newBaby.jpg">';
                document.getElementById("newBabyPic4").style.width = "100%";
                break;
            case "nala":
                reelFour.innerHTML = '<img id="nalaPic4" src="./nala.jpg">';
                document.getElementById("nalaPic4").style.width = "100%";
                break;
            case "mufasa":
                reelFour.innerHTML = '<img id="fasPic4" src="./fas.jpg">';
                document.getElementById("fasPic4").style.width = "100%";
                break;
            case "pizza":
                reelFour.innerHTML = '<img id="pizzaPic4" src="./pizza.jpg">';
                document.getElementById("pizzaPic4").style.width = "100%";
                break;
            /*case "games":
                reelFour.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "chainsaw":
                reelFour.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "fairy":
                reelFour.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;*/
        };

        switch (reelFiveOutcome) {
            case "andy":
                reelFive.innerHTML = '<img id="andyPic5" src="./andy.jpg">';
                document.getElementById("andyPic5").style.width = "100%";
                break;
            case "kelly":
                reelFive.innerHTML = '<img id="kellyPic5" src="./kelly.jpg">';
                document.getElementById("kellyPic5").style.width = "100%";
                break;
            case "ryder":
                reelFive.innerHTML = '<img id="ryderPic5" src="./ryder.jpg">';
                document.getElementById("ryderPic5").style.width = "100%";
                break;
            case "new baby":
                reelFive.innerHTML = '<img id="newBabyPic5" src="./newBaby.jpg">';
                document.getElementById("newBabyPic5").style.width = "100%";
                break;
            case "nala":
                reelFive.innerHTML = '<img id="nalaPic5" src="./nala.jpg">';
                document.getElementById("nalaPic5").style.width = "100%";
                break;
            case "mufasa":
                reelFive.innerHTML = '<img id="fasPic5" src="./fas.jpg">';
                document.getElementById("fasPic5").style.width = "100%";
                break;
            case "pizza":
                reelFive.innerHTML = '<img id="pizzaPic5" src="./pizza.jpg">';
                document.getElementById("pizzaPic5").style.width = "100%";
                break;
            /*case "games":
                reelFive.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "chainsaw":
                reelFive.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "fairy":
                reelFive.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;*/
        };

        switch (reelSixOutcome) {
            case "andy":
                reelSix.innerHTML = '<img id="andyPic6" src="./andy.jpg">';
                document.getElementById("andyPic6").style.width = "100%";
                break;
            case "kelly":
                reelSix.innerHTML = '<img id="kellyPic6" src="./kelly.jpg">';
                document.getElementById("kellyPic6").style.width = "100%";
                break;
            case "ryder":
                reelSix.innerHTML = '<img id="ryderPic6" src="./ryder.jpg">';
                document.getElementById("ryderPic6").style.width = "100%";
                break;
            case "new baby":
                reelSix.innerHTML = '<img id="newBabyPic6" src="./newBaby.jpg">';
                document.getElementById("newBabyPic6").style.width = "100%";
                break;
            case "nala":
                reelSix.innerHTML = '<img id="nalaPic6" src="./nala.jpg">';
                document.getElementById("nalaPic6").style.width = "100%";
                break;
            case "mufasa":
                reelSix.innerHTML = '<img id="fasPic6" src="./fas.jpg">';
                document.getElementById("fasPic6").style.width = "100%";
                break;
            case "pizza":
                reelSix.innerHTML = '<img id="pizzaPic6" src="./pizza.jpg">';
                document.getElementById("pizzaPic6").style.width = "100%";
                break;
            /*case "games":
                reelSix.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "chainsaw":
                reelSix.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "fairy":
                reelSix.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;*/
        };

        switch (reelSevenOutcome) {
            case "andy":
                reelSeven.innerHTML = '<img id="andyPic7" src="./andy.jpg">';
                document.getElementById("andyPic7").style.width = "100%";
                break;
            case "kelly":
                reelSeven.innerHTML = '<img id="kellyPic7" src="./kelly.jpg">';
                document.getElementById("kellyPic7").style.width = "100%";
                break;
            case "ryder":
                reelSeven.innerHTML = '<img id="ryderPic7" src="./ryder.jpg">';
                document.getElementById("ryderPic7").style.width = "100%";
                break;
            case "new baby":
                reelSeven.innerHTML = '<img id="newBabyPic7" src="./newBaby.jpg">';
                document.getElementById("newBabyPic7").style.width = "100%";
                break;
            case "nala":
                reelSeven.innerHTML = '<img id="nalaPic7" src="./nala.jpg">';
                document.getElementById("nalaPic7").style.width = "100%";
                break;
            case "mufasa":
                reelSeven.innerHTML = '<img id="fasPic7" src="./fas.jpg">';
                document.getElementById("fasPic7").style.width = "100%";
                break;
            case "pizza":
                reelSeven.innerHTML = '<img id="pizzaPic7" src="./pizza.jpg">';
                document.getElementById("pizzaPic7").style.width = "100%";
                break;
            /*case "games":
                reelSeven.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "chainsaw":
                reelSeven.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "fairy":
                reelSeven.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;*/
        };

        switch (reelEightOutcome) {
            case "andy":
                reelEight.innerHTML = '<img id="andyPic8" src="./andy.jpg">';
                document.getElementById("andyPic8").style.width = "100%";
                break;
            case "kelly":
                reelEight.innerHTML = '<img id="kellyPic8" src="./kelly.jpg">';
                document.getElementById("kellyPic8").style.width = "100%";
                break;
            case "ryder":
                reelEight.innerHTML = '<img id="ryderPic8" src="./ryder.jpg">';
                document.getElementById("ryderPic8").style.width = "100%";
                break;
            case "new baby":
                reelEight.innerHTML = '<img id="newBabyPic8" src="./newBaby.jpg">';
                document.getElementById("newBabyPic8").style.width = "100%";
                break;
            case "nala":
                reelEight.innerHTML = '<img id="nalaPic8" src="./nala.jpg">';
                document.getElementById("nalaPic8").style.width = "100%";
                break;
            case "mufasa":
                reelEight.innerHTML = '<img id="fasPic8" src="./fas.jpg">';
                document.getElementById("fasPic8").style.width = "100%";
                break;
            case "pizza":
                reelEight.innerHTML = '<img id="pizzaPic8" src="./pizza.jpg">';
                document.getElementById("pizzaPic8").style.width = "100%";
                break;
            /*case "games":
                reelEight.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "chainsaw":
                reelEight.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "fairy":
                reelEight.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;*/
        };

        switch (reelNineOutcome) {
            case "andy":
                reelNine.innerHTML = '<img id="andyPic9" src="./andy.jpg">';
                document.getElementById("andyPic9").style.width = "100%";
                break;
            case "kelly":
                reelNine.innerHTML = '<img id="kellyPic9" src="./kelly.jpg">';
                document.getElementById("kellyPic9").style.width = "100%";
                break;
            case "ryder":
                reelNine.innerHTML = '<img id="ryderPic9" src="./ryder.jpg">';
                document.getElementById("ryderPic9").style.width = "100%";
                break;
            case "new baby":
                reelNine.innerHTML = '<img id="newBabyPic9" src="./newBaby.jpg">';
                document.getElementById("newBabyPic9").style.width = "100%";
                break;
            case "nala":
                reelNine.innerHTML = '<img id="nalaPic9" src="./nala.jpg">';
                document.getElementById("nalaPic9").style.width = "100%";
                break;
            case "mufasa":
                reelNine.innerHTML = '<img id="fasPic9" src="./fas.jpg">';
                document.getElementById("fasPic9").style.width = "100%";
                break;
            case "pizza":
                reelNine.innerHTML = '<img id="pizzaPic9" src="./pizza.jpg">';
                document.getElementById("pizzaPic9").style.width = "100%";
                break;
            /*case "games":
                reelNine.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "chainsaw":
                reelNine.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;
            case "fairy":
                reelNine.innerHTML = '<img src="./andy.jpg">';
                document.getElementById("kellyPic").style.width = "100%";
                break;*/
        };
                //everything under this to the next point is test
     //
        winnings(reelOneOutcome, reelTwoOutcome, reelThreeOutcome);
        winnings(reelFourOutcome, reelFiveOutcome, reelSixOutcome);
        winnings(reelSevenOutcome, reelEightOutcome, reelNineOutcome);
        winnings(reelOneOutcome, reelFourOutcome, reelSevenOutcome);
        winnings(reelTwoOutcome, reelFiveOutcome, reelEightOutcome);
        winnings(reelThreeOutcome, reelSixOutcome, reelNineOutcome);
        winnings(reelOneOutcome, reelFiveOutcome, reelNineOutcome);
        winnings(reelThreeOutcome, reelFiveOutcome, reelSevenOutcome);
        creditsBlock.innerHTML = `${credits}`;
        if (win > 0) {
            document.getElementById("outcome").innerHTML = `YOU WIN ${win}!!!`;
        }else {
            document.getElementById("outcome").innerHTML = `Try Again`;
        }
    } else {
        document.getElementById("outcome").innerHTML = `No More Credits.`;
    }
}; //

 
















































            // everything above this is test.

    /*    if (reelOneOutcome === reelTwoOutcome && reelTwoOutcome === reelThreeOutcome) {
            switch (reelOneOutcome) {
                case "andy":
                    win += 100;
                    credits += 100;
                    break;
                case "kelly":
                    win += 75;
                    credits += 75;
                    break;
                case "ryder":
                    win += 50;
                    credits += 50;
                    break;
                case "new baby":
                    //document.getElementById("outcome").innerHTML = "New Baby Name"  .......uncomment this for baby gender name
                    win += 50; // comment this out for baby gender name
                    credits += 50;
                    break;
                case "nala":
                    win += 25;
                    credits += 25;
                    break;
                case "mufasa":
                    win += 25;
                    credits += 25;
                    break;
                case "pizza":
                    win += 20;
                    credits += 20;
                    break;
            }
            document.getElementById("outcome").innerHTML = `YOU WIN ${win}!!!` //comment this out for baby gender game
        } else if (reelOneOutcome === "pizza") {
            if (reelOneOutcome === "pizza") {
                win += 2;
                credits += 2;
            };
            if (reelTwoOutcome === "pizza" && reelOneOutcome === "pizza") {
                win += 2;
                credits += 2;
            };
            document.getElementById("outcome").innerHTML = `YOU WIN ${win}!!!`
        } else {
            document.getElementById("outcome").innerHTML = "Try Again"
        };
        creditsBlock.innerHTML = `${credits}`
    }
    else {
        document.getElementById("outcome").innerHTML = "No more Credits.";
    };
}*/