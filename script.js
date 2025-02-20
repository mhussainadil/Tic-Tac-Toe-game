let boxes = document.querySelectorAll(".box");
let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let b4 = document.querySelector(".b4");
let b5 = document.querySelector(".b5");
let b6 = document.querySelector(".b6");
let b7 = document.querySelector(".b7");
let b8 = document.querySelector(".b8");
let b9 = document.querySelector(".b9");
let i = 0;
//players names
p1name = document.querySelector(".p1name");
p2name = document.querySelector(".p2name");

let detailsofp1 = document.querySelector(".detailsplayer1");
let detailsofp2 = document.querySelector(".detailsplayer2");
let resetbtn = document.querySelector(".reset");
let originalcontent = document.body.innerHTML;
resetbtn.addEventListener("click", function () {
    location.reload();
    
})
//to make change on clicked box {add css }
function cssonclick(element) {
    element.classList.add("flashbox");
    setTimeout(function () {
        element.classList.remove("flashbox");
    }, 250)
}
//terminating condition when tie  
function gameover() {
    let dynamicDiv = document.createElement("div");
    dynamicDiv.innerText = `It's Draw !  Restart Game`;
    dynamicDiv.classList.add("displaywinner");
    document.body.appendChild(dynamicDiv);


}
let clickedCount = 0; // to map each click , such that at last click i.e; 9th click terminating game (win/tie)
document.addEventListener("click", function (event) {
    let clickeditem = event.target;
    if (clickeditem.classList.contains("box")) {
        clickedCount++;
        checktochange(clickeditem);
        cssonclick(clickeditem);
        changecontentofbox(clickeditem);
        crosscheckingeachboxforX();
        crosscheckingeachboxforO();
        if (clickedCount == 9) {
            let i = clickedCount;
            if (i == 9) {
                let j;
                let redclassexist = false;
                for (j = 0; j < boxes.length; j++) {
                    if (boxes[j].classList.contains("red")) {
                        redclassexist = true;
                    }

                }
                if (redclassexist == false) {
                    gameover();
                }
            }
        }
    }

})

//to store the clicked box in array to manage sequence
function checktochange(ele) {
    ele.classList.remove("box");

}
//if box is not yet clicked then add x or O as text based on clicks first or second
function changecontentofbox(ele) {
    if (i % 2 == 0) {
        ele.innerText = "X";
    }
    else {
        ele.innerText = "O";
    }
    i++;
}
function imageForWinner(winner) {
    let img = document.createElement("img");
    img.setAttribute("src", "woncup.png");
    img.classList.add("cup");
    winner.append(img);
}
let boxValueXorO;
function triggeringGame() {
    for (let eachbox of boxes) {
        if (!(eachbox.classList.contains("red"))) {
            eachbox.classList.remove("box");
        }
        let count = 1;
        if (eachbox.classList.contains("red")) {
            if (count > 0) {
                boxValueXorO = eachbox.innerHTML;
                count--;
            }
        }
    }
    if (boxValueXorO == "X") {
        imageForWinner(detailsofp1);
        let dynamicDiv = document.createElement("div");
        dynamicDiv.innerText = `${p1name.innerText}  Won ! `;
        dynamicDiv.classList.add("displaywinner");
        document.body.appendChild(dynamicDiv);
    }
    else {
        imageForWinner(detailsofp2);

        let dynamicDiv = document.createElement("div");
        dynamicDiv.innerText = `${p2name.innerText} Won !`;
        dynamicDiv.classList.add("displaywinner");
        document.body.appendChild(dynamicDiv);
    }
}
function crosscheckingeachboxforX() {
    if (b1.innerText == "X" && b2.innerText == "X" && b3.innerText == "X") {
        b1.classList.add("red");
        b2.classList.add("red");
        b3.classList.add("red");
        triggeringGame();

    }
    else if (b1.innerText == "X" && b4.innerText == "X" && b7.innerText == "X") {
        b1.classList.add("red");
        b4.classList.add("red");
        b7.classList.add("red");
        triggeringGame();
    }
    else if (b1.innerText == "X" && b5.innerText == "X" && b9.innerText == "X") {
        b1.classList.add("red");
        b5.classList.add("red");
        b9.classList.add("red");
        triggeringGame();
    }
    else if (b2.innerText == "X" && b5.innerText == "X" && b8.innerText == "X") {
        b2.classList.add("red");
        b5.classList.add("red");
        b8.classList.add("red");
        triggeringGame();
    }
    else if (b3.innerText == "X" && b6.innerText == "X" && b9.innerText == "X") {
        b3.classList.add("red");
        b6.classList.add("red");
        b9.classList.add("red");
        triggeringGame();

    }
    else if (b3.innerText == "X" && b5.innerText == "X" && b7.innerText == "X") {
        b3.classList.add("red");
        b5.classList.add("red");
        b7.classList.add("red");
        triggeringGame();

    }
    else if (b4.innerText == "X" && b5.innerText == "X" && b6.innerText == "X") {
        b4.classList.add("red");
        b5.classList.add("red");
        b6.classList.add("red");
        triggeringGame();
    }
    else if (b7.innerText == "X" && b8.innerText == "X" && b9.innerText == "X") {
        b7.classList.add("red");
        b8.classList.add("red");
        b9.classList.add("red");
        triggeringGame();
    }
}

function crosscheckingeachboxforO() {
    if (b1.innerText == "O" && b2.innerText == "O" && b3.innerText == "O") {
        b1.classList.add("red");
        b2.classList.add("red");
        b3.classList.add("red");
        triggeringGame();
    }
    else if (b1.innerText == "O" && b4.innerText == "O" && b7.innerText == "O") {
        b1.classList.add("red");
        b4.classList.add("red");
        b7.classList.add("red");
        triggeringGame();
    }
    else if (b1.innerText == "O" && b5.innerText == "O" && b9.innerText == "O") {
        b1.classList.add("red");
        b5.classList.add("red");
        b9.classList.add("red");
        triggeringGame();
    }
    else if (b2.innerText == "O" && b5.innerText == "O" && b8.innerText == "O") {
        b2.classList.add("red");
        b5.classList.add("red");
        b8.classList.add("red");
        triggeringGame();
    }
    else if (b3.innerText == "O" && b6.innerText == "O" && b9.innerText == "O") {
        b3.classList.add("red");
        b6.classList.add("red");
        b9.classList.add("red");
        triggeringGame();

    }
    else if (b3.innerText == "O" && b5.innerText == "O" && b7.innerText == "O") {
        b3.classList.add("red");
        b5.classList.add("red");
        b7.classList.add("red");
        triggeringGame();

    }
    else if (b4.innerText == "O" && b5.innerText == "O" && b6.innerText == "O") {
        b4.classList.add("red");
        b5.classList.add("red");
        b6.classList.add("red");
        triggeringGame();
    }
    else if (b7.innerText == "O" && b8.innerText == "O" && b9.innerText == "O") {
        b7.classList.add("red");
        b8.classList.add("red");
        b9.classList.add("red");
        triggeringGame();
    }
}


function disableBoxes() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
      // Prevent click events
      box.addEventListener("click", preventClick, true);
    });
  }

  function enableBoxes() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
      // Remove the listener so that clicks work as expected
      box.removeEventListener("click", preventClick, true);
    });
  }
  
  function preventClick(e) {
    e.stopPropagation();
    e.preventDefault();
  }

document.addEventListener("DOMContentLoaded", () => {
    disableBoxes();
    let popup1 = document.querySelector(".popup1");
    let popup2 = document.querySelector(".popup2");
  
    setTimeout(() => {
      takeUserInput(popup1)
        .then(() => {
          return takeUserInput(popup2);
        }).then(()=>{
            enableBoxes();
        })
        .catch((err) => {
          console.log("error: " + err);
        });
    }, 500);
  });
  
  let count = 0; // to know whether first user's turn or second user's
  
  function takeUserInput(popup) {
    return new Promise((resolve, reject) => {
      if (!popup) {
        reject("Popup div not found!");
        return;
      }
      
      // Show the popup by removing the 'display' class
      popup.classList.remove("display");
      
      let btn = popup.querySelector(".btn");
      let inp = popup.querySelector(".inpname");
  
      // Define a function that will dismiss the popup and cleanup event listeners
      function dismissPopup() {
        // Remove keydown listener
        document.removeEventListener("keydown", keyHandler);
        // Remove click listener on button (cleanup)
        btn.removeEventListener("click", clickHandler);
  
        // Process the input
        let value = inp.value.trim();
        console.log("Input: ", value);
        if (count === 0) {
          count++;
          if (value !== "") {
            p1name.innerHTML = value;
          } else {
            p1name.innerText = "Player 1";
          }
        } else {
          if (value !== "") {
            p2name.innerHTML = value;
          } else {
            p2name.innerText = "Player 2";
          }
        }
        // Hide the popup
        popup.classList.add("display");
        console.log("Popup dismissed successfully");
        resolve();
      }
  
      // Handler for Enter key
      function keyHandler(e) {
        if (e.keyCode === 13) { // Enter key
          dismissPopup();
        }
      }
  
      // Handler for button click
      function clickHandler() {
        dismissPopup();
      }
  
      // Attach event listeners
      document.addEventListener("keydown", keyHandler);
      btn.addEventListener("click", clickHandler);
    });
  }
  
  