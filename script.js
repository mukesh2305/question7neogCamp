const val1 = document.querySelector(".value");
const result = document.querySelector("#result");
const btn = document.querySelector("#btn");

const Url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text) {
  return Url + "?" + "text=" + text;
}

function clickEventHandler() {
  const inputText = val1.value;
  console.log(inputText);
  fetch(getTranslationURL(inputText))
    .then((res) => res.json())
    .then((json) => {
      var translateText = json.contents.text;
      result.innerText = translateText;
      result.style.textTransform = "uppercase";
    });
}
btn.addEventListener("click", clickEventHandler);
