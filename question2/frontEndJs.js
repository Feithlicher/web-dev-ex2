window.addEventListener('load', (loadEvent) => {
    console.log("Document has been loaded", loadEvent);

    const currentValue = document.getElementById("currentValueDiv"); 

    // Start button Functionality
    const startButton = document.getElementById("startButton");
    startButton.addEventListener('click', async (clickEvent) => {
        console.log("start button has been clicked");
        let response = await fetch('http://localhost:5000/start', {method: 'POST'});
        if(response.ok){
            let val = await response.text();
            console.log("the val is: " + val)
            currentValue.innerHTML = 0
        }else{
            alert("HTTP-Error: " + response.status);
        }
    })

    // Add button Functionality
    const addButton = document.getElementById("addButton");
    addButton.addEventListener('click', async (clickEvent) => {
        const inputFieldValue = document.getElementById("inputField");
        console.log("add button has been clicked");
        let response = await fetch(`http://localhost:5000/calc/add/${inputFieldValue}`, {method: 'POST'});
        if(response.ok){
            let val = await response.text();
            console.log("the val is: " + val);
            val = parseInt(val);
            currentValue.innerHTML = val;
        }else{
            alert("HTTP-Error: " + response.status);
        }
    })





})