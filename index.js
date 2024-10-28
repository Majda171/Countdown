
/*const email = prompt("Zadejte váš e-mail:");


const msgElement = document.querySelector(".msg");


if (validator.isEmail(email)) {
 
  msgElement.textContent = "E-mail v pořádku";
  msgElement.classList.add("msg--valid");
} else {

  msgElement.textContent = "Neplatný e-mail";
  msgElement.classList.add("msg--invalid");
}

const card = prompt("Zadejte číslo kreditní karty:");
const msgCard = document.querySelector(".msgCard");


if(validator.isCreditCard(card)){
    msgCard.textContent = "Platné číslo kreditní karty.";
    msgCard.classList.add("msgCard--valid");
} else {
    msgCard.textContent = "Neplatné číslo kreditní karty.";
    msgCard.classList.add("msgCard--invalid");
}*/
dayjs.extend(dayjs_plugin_duration);

/* druhý úkol*/

const christmas = dayjs("2024-12-24");
const currentDate = dayjs();

const countdownElement = document.querySelector("#countdown");
const result = document.querySelector("#result");
const message = document.querySelector(".message");

if (currentDate.isBefore(christmas)) {
    result.textContent = "ANO";
    message.textContent = "Štědrý den 2024 ještě nenastal!";
} else {
    result.textContent = "NE";
    message.textContent = "Štědrý den 2024 již nastal!";
}

function updateCountdown() {
    const now = dayjs();
    const duration = dayjs.duration(christmas.diff(now));

    
    if (duration.asMilliseconds() <= 0) {
        countdownElement.textContent = "Štědrý den již nastal!";
        clearInterval(timer); 
        return;
    }

    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    countdownElement.textContent = `${days} dní, ${hours} hodin, ${minutes} minut, ${seconds} sekund`;
}

const timer = setInterval(updateCountdown, 1000);


updateCountdown();