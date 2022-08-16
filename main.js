const divCube = document.querySelector("div.cube");
const spanAdviceId = document.querySelector("p.advice-id span");
const pAdviceText = document.querySelector("p.advice-text");

let advices = {
  advice: pAdviceText.textContent,
  idAdvice: spanAdviceId.textContent,
};

const randomAdvices = () => {
  const url = `https://api.adviceslip.com/advice`;

  fetch(url, {
    cache: "no-cache",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Invalid url adress");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      showAdvice(data.slip);
    })
    .catch((err) => console.log(err));
};

const showAdvice = (randomAdvice) => {
  advices.idAdvice = randomAdvice.id;
  advices.advice = randomAdvice.advice;
  spanAdviceId.textContent = advices.idAdvice;
  pAdviceText.textContent = advices.advice;
};

divCube.addEventListener("click", randomAdvices);
