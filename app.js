/*var userName = prompt("ENTER YOUR NAME");

alert("Welcome " + userName);*/

// var buttonTranslate = document.getElementById("translate");           //THIS IS BETTER if you know the ID, just type in the ID name and vaila!!

var buttonTranslate = document.querySelector("#translate");           //ALWAYS USE " # " before ID name when using querySelector

var textInput = document.querySelector("#text-input");

var outputText = document.querySelector("#output");

// outputText.innerText = "Perseus Nathaniel Lucifer Orion Auditorre..."     //".innerText" allows us to enter texts directly from a javascript file

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text)
{
    return serverURL + "?" + "text=" + text
}

function errorHandler(error)
{
    console.log("Something went wrong, please try again after some time", error);
    alert("Something went wrong, please try again after some time");
}

function clickHandler()
{
    var inputText = textInput.value;    //taking input

    fetch(getTranslationURL(inputText))    //calling server for processing
        .then(response => response.json())
        .then(json => 
            {
                var translatedText = json.contents.translated;
                outputText.innerText = translatedText;
            })
            .catch(errorHandler)
}

buttonTranslate.addEventListener('click', clickHandler)
