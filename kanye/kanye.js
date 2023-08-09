function loadKanye(){
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayData(data))
}

// loadKanye()

function displayData(quoteObject){
    console.log(quoteObject);
    document.getElementById('quote').innerText=quoteObject.quote;
}