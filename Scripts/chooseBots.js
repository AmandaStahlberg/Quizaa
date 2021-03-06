window.addEventListener("load", start);

const playersArray = ["player"];

function start() {
  if (localStorage.getItem("loggedIn") !== "yes") {
    location.href = "./login.html";
  } else {
    const bot1Button = document.getElementById("bot1");
    const bot2Button = document.getElementById("bot2");
    const bot3Button = document.getElementById("bot3");

    const bot1 = "silly-bot";
    const bot2 = "hardcore-bot";
    const bot3 = "dumb-bot";

    bot1Button.addEventListener("click", () => {
      selectedBot(bot1Button, bot1);
    });
    bot2Button.addEventListener("click", () => {
      selectedBot(bot2Button, bot2);
    });
    bot3Button.addEventListener("click", () => {
      selectedBot(bot3Button, bot3);
    });

    const continueButton = document.getElementById("startGameContinue");
    continueButton.addEventListener("click", saveArrayToLS);
  }
}

function selectedBot(botButton, bot) {
  if (botButton.classList.contains("bot-box-selected")) {
    botButton.classList.remove("bot-box-selected");
    const objectToRemove = playersArray.indexOf(bot);
    playersArray.splice(objectToRemove, 1);
  } else {
    botButton.classList.add("bot-box-selected");
    playersArray.push(bot);
  }
}

function saveArrayToLS() {
  if (playersArray.length > 1) {
    localStorage.setItem("chosenPlayers", JSON.stringify(playersArray));
    location.href = "./game.html";
  } else {
    const errorText = document.getElementById("pickBot");
    errorText.style.visibility = "visible";
  }
}
