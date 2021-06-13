window.addEventListener('load', (loadEvent) => {
    console.log("Document has been loaded", loadEvent);

    // write here some desc
    const startButton = document.getElementById("startButton");
    startButton.addEventListener('click', async (clickEvent) => {
        console.log("start button has been clicked");
        let response = await fetch('http://localhost:5000/start', {method: 'POST'});
        if(response.ok){
            let val = await response.text();
            console.log("the val is: " + val)
        }else{
            alert("HTTP-Error: " + response.status);
        }
    })
})