const spinButton = document.getElementById("spin");
const reelOne = document.getElementById("reelOne");
const reelTwo = document.getElementById("reelTwo");
const reelThree = document.getElementById("reelThree");
const reelFour = document.getElementById("reelFour");
const reelFive = document.getElementById("reelFive");
const reelSix = document.getElementById("reelSix");
const reelSeven = document.getElementById("reelSeven");
const reelEight = document.getElementById("reelEight");
const reelNine = document.getElementById("reelNine");

const outcome = document.getElementById("outcome"); 
const creditsBlock = document.getElementById("credits");
let credits = 10;
creditsBlock.innerHTML = `${credits}`

const spinReel = () => {
   let randomNumber = Math.floor(Math.random()*10);
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
    case 7:
        return "games";
        break;
    case 8:
        return "chainsaw";
        break;
    case 9:
        return "fairy";
        break;
   }
}

spinButton.onclick = function() {
    let win = 0;
    reelOne.style.border = "1px solid black";
    reelTwo.style.border = "1px solid black";
    reelThree.style.border = "1px solid black";
    reelFour.style.border = "1px solid black";
    reelFive.style.border = "1px solid black";
    reelSix.style.border = "1px solid black";
    reelSeven.style.border = "1px solid black";
    reelEight.style.border = "1px solid black";
    reelNine.style.border = "1px solid black";
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
                    win += 50; 
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
                    win += 10;
                    credits += 10;
                    break;
                case "games":
                    win += 10;
                    credits += 10;
                    break;
                case "chainsaw":
                    win += 5;
                    credits += 5;
                    break;
                    case "fairy":
                    win += 5;
                    credits += 5;
                    break;
            }
        } else {
            document.getElementById("outcome").innerHTML = "Try Again"
        };
    };    
         
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
            case "games":
                reelOne.innerHTML = '<img id="gamesPic1" src="./games.jpg">';
                document.getElementById("gamesPic1").style.width = "100%";
                break;
            case "chainsaw":
                reelOne.innerHTML = '<img id="chainsawPic1" src="./chainsaw.jpg">';
                document.getElementById("chainsawPic1").style.width = "100%";
                break;
            case "fairy":
                reelOne.innerHTML = '<img id="fairyPic1" src="./fairy.jpg">';
                document.getElementById("fairyPic1").style.width = "100%";
                break;
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
            case "games":
                reelTwo.innerHTML = '<img id="gamesPic2" src="./games.jpg">';
                document.getElementById("gamesPic2").style.width = "100%";
                break;
            case "chainsaw":
                reelTwo.innerHTML = '<img id="chainsawPic2" src="./chainsaw.jpg">';
                document.getElementById("chainsawPic2").style.width = "100%";
                break;
            case "fairy":
                reelTwo.innerHTML = '<img id="fairyPic2" src="./fairy.jpg">';
                document.getElementById("fairyPic2").style.width = "100%";
                break;
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
            case "games":
                reelThree.innerHTML = '<img id="gamesPic3" src="./games.jpg">';
                document.getElementById("gamesPic3").style.width = "100%";
                break;
            case "chainsaw":
                reelThree.innerHTML = '<img id="chainsawPic3" src="./chainsaw.jpg">';
                document.getElementById("chainsawPic3").style.width = "100%";
                break;
            case "fairy":
                reelThree.innerHTML = '<img id="fairyPic3" src="./fairy.jpg">';
                document.getElementById("fairyPic3").style.width = "100%";
                break;
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
            case "games":
                reelFour.innerHTML = '<img id="gamesPic4" src="./games.jpg">';
                document.getElementById("gamesPic4").style.width = "100%";
                break;
            case "chainsaw":
                reelFour.innerHTML = '<img id="chainsawPic4" src="./chainsaw.jpg">';
                document.getElementById("chainsawPic4").style.width = "100%";
                break;
            case "fairy":
                reelFour.innerHTML = '<img id="fairyPic4" src="./fairy.jpg">';
                document.getElementById("fairyPic4").style.width = "100%";
                break;
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
            case "games":
                reelFive.innerHTML = '<img id="gamesPic5" src="./games.jpg">';
                document.getElementById("gamesPic5").style.width = "100%";
                break;
            case "chainsaw":
                reelFive.innerHTML = '<img id="chainsawPic5" src="./chainsaw.jpg">';
                document.getElementById("chainsawPic5").style.width = "100%";
                break;
            case "fairy":
                reelFive.innerHTML = '<img id="fairyPic5" src="./fairy.jpg">';
                document.getElementById("fairyPic5").style.width = "100%";
                break;
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
            case "games":
                reelSix.innerHTML = '<img id="gamesPic6" src="./games.jpg">';
                document.getElementById("gamesPic6").style.width = "100%";
                break;
            case "chainsaw":
                reelSix.innerHTML = '<img id="chainsawPic6" src="./chainsaw.jpg">';
                document.getElementById("chainsawPic6").style.width = "100%";
                break;
            case "fairy":
                reelSix.innerHTML = '<img id="fairyPic6" src="./fairy.jpg">';
                document.getElementById("fairyPic6").style.width = "100%";
                break;
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
            case "games":
                reelSeven.innerHTML = '<img id="gamesPic7" src="./games.jpg">';
                document.getElementById("gamesPic7").style.width = "100%";
                break;
            case "chainsaw":
                reelSeven.innerHTML = '<img id="chainsawPic7" src="./chainsaw.jpg">';
                document.getElementById("chainsawPic7").style.width = "100%";
                break;
            case "fairy":
                reelSeven.innerHTML = '<img id="fairyPic7" src="./fairy.jpg">';
                document.getElementById("fairyPic7").style.width = "100%";
                break;
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
            case "games":
                reel.Eight.innerHTML = '<img id="gamesPic8" src="./games.jpg">';
                document.getElementById("gamesPic8").style.width = "100%";
                break;
            case "chainsaw":
                reelEight.innerHTML = '<img id="chainsawPic8" src="./chainsaw.jpg">';
                document.getElementById("chainsawPic8").style.width = "100%";
                break;
            case "fairy":
                reelEight.innerHTML = '<img id="fairyPic8" src="./fairy.jpg">';
                document.getElementById("fairyPic8").style.width = "100%";
                break;
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
            case "games":
                reelNine.innerHTML = '<img id="gamesPic" src="./games.jpg">';
                document.getElementById("gamesPic").style.width = "100%";
                break;
            case "chainsaw":
                reelNine.innerHTML = '<img id="chainsawPic" src="./chainsaw.jpg">';
                document.getElementById("chainsawPic").style.width = "100%";
                break;
            case "fairy":
                reelNine.innerHTML = '<img id="fairyPic9" src="./fairy.jpg">';
                document.getElementById("fairyPic9").style.width = "100%";
                break;
        };
           
     
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
   // styling for winnings should go here
   if (reelOneOutcome === reelTwoOutcome && reelTwoOutcome === reelThreeOutcome) {
    reelOne.style.border = "3px solid red";
    reelTwo.style.border = "3px solid red";
    reelThree.style.border = "3px solid red";
       /* setInterval(function() {
           reelOne.style.border = (reelOne.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
        }, 1);
        setInterval(function() {
            reelTwo.style.border = (reelTwo.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
         }, 1);
         setInterval(function() {
            reelThree.style.border = (reelThree.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
         }, 1);*/
        };
   if (reelFourOutcome === reelFiveOutcome && reelFiveOutcome === reelSixOutcome) {
    reelFour.style.border = "3px solid red";
    reelFive.style.border = "3px solid red";
    reelSix.style.border = "3px solid red";
    /*setInterval(function() {
        reelFour.style.border = (reelFour.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
     }, 1);
     setInterval(function() {
         reelFIve.style.border = (reelFive.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
      }, 1);
      setInterval(function() {
         reelSix.style.border = (reelSix.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
      }, 1);*/
    };
   if (reelSevenOutcome === reelEightOutcome && reelEightOutcome === reelNineOutcome) {
    reelSeven.style.border = "3px solid red";
    reelEight.style.border = "3px solid red";
    reelNine.style.border = "3px solid red";
    /*setInterval(function() {
        reelSeven.style.border = (reelSeven.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
     }, 1);
     setInterval(function() {
         reelEight.style.border = (reelEight.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
      }, 1);
      setInterval(function() {
         reelNine.style.border = (reelNine.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
      }, 1);*/
   };
   if (reelOneOutcome === reelFourOutcome && reelFourOutcome === reelSevenOutcome) {
    reelOne.style.border = "3px solid red";
    reelFour.style.border = "3px solid red";
    reelSeven.style.border = "3px solid red";
    /*setInterval(function() {
        reelOne.style.border = (reelOne.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
     }, 1);
     setInterval(function() {
         reelFour.style.border = (reelFour.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
      }, 1);
      setInterval(function() {
         reelSeven.style.border = (reelSeven.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
      }, 1);*/
   };
   if (reelTwoOutcome === reelFiveOutcome && reelFiveOutcome === reelEightOutcome) {
    reelTwo.style.border = "3px solid red";
    reelFive.style.border = "3px solid red";
    reelEight.style.border = "3px solid red";
    /*setInterval(function() {
        reelTwo.style.border = (reelTwo.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
     }, 1);
     setInterval(function() {
         reelFive.style.border = (reelFive.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
      }, 1);
      setInterval(function() {
         reelEight.style.border = (reelEight.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
      }, 1);*/
   };
   if (reelThreeOutcome === reelSixOutcome && reelSixOutcome === reelNineOutcome) {
    reelThree.style.border = "3px solid red";
    reelSix.style.border = "3px solid red";
    reelNine.style.border = "3px solid red";
    /*setInterval(function() {
        reelThree.style.border = (reelThree.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
     }, 1);
     setInterval(function() {
         reelSix.style.border = (reelSix.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
      }, 1);
      setInterval(function() {
         reelNine.style.border = (reelNine.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
      }, 1);*/
   };
   if (reelOneOutcome === reelFiveOutcome && reelFiveOutcome === reelNineOutcome) {
    reelOne.style.border = "3px solid red";
    reelFive.style.border = "3px solid red";
    reelNine.style.border = "3px solid red";
    /*setInterval(function() {
        reelOne.style.border = (reelOne.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
     }, 1);
     setInterval(function() {
         reelFive.style.border = (reelFive.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
      }, 1);
      setInterval(function() {
         reelNine.style.border = (reelNine.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
      }, 1);*/
   };
   if (reelThreeOutcome === reelFiveOutcome && reelFiveOutcome === reelSevenOutcome) {
    reelThree.style.border = "3px solid red";
    reelFive.style.border = "3px solid red";
    reelSeven.style.border = "3px solid red";
    /*setInterval(function() {
        reelThree.style.border = (reelThree.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
     }, 1);
     setInterval(function() {
         reelFive.style.border = (reelFive.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
      }, 1);
      setInterval(function() {
         reelSeven.style.border = (reelSeven.style.border == '10px solid yellow' ? '10px solid orange' : '10px solid yellow');
      }, 1);*/
   };
   if (credits >= 500) {
    document.getElementById("hidden75").style.display = 'flex';
   }
   if (credits === 0) {
    document.getElementById("spin-container").style.display = 'none';
    document.getElementById("outcome").innerHTML = 'Out of Credits';
   }
}; 
