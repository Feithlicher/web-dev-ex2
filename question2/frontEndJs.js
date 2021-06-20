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
        const inputFieldValue = document.getElementById("inputField").value;
        console.log("add button has been clicked and inputFieldValue=" + inputFieldValue);
        if(inputFieldValue.trim()){
            let response = await fetch(`http://localhost:5000/calc/add/${inputFieldValue}`, {method: 'POST'});
            if(response.ok){
                console.log("response is: " + response)
                let val = await response.text();
                console.log("the val is: " + val);
                currentValue.innerHTML = val;
            }else{
                let val = await response.text();
                alert("HTTP-Error: " + response.status);
                console.log("the val is: " + val);
            }
        }else{
            alert("Please insert a valid input :)");
        }
    })

    // Sub Button Functionality
    const subButton = document.getElementById("subButton");
    subButton.addEventListener('click', async (clickEvent) => {
        const inputFieldValue = document.getElementById("inputField").value;
        if(inputFieldValue.trim()){
            let response = await fetch(`http://localhost:5000/calc/sub/${inputFieldValue}`, {method: 'POST'});
            if(response.ok){
                let val = await response.text();
                console.log("the val is: " + val);
                currentValue.innerHTML = val;
            }else{
                alert("HTTP-Error: " + response.status);
            }
        }else{
            alert("Please insert a valid input :)");
        }
    })

    // Mult Button Functionality
    const multButton = document.getElementById("multButton");
    multButton.addEventListener('click', async (clickEvent) => {
        const inputFieldValue = document.getElementById("inputField").value;
        if(inputFieldValue.trim()){
            let response = await fetch(`http://localhost:5000/calc/multiply/${inputFieldValue}`, {method: 'PUT'});
            if(response.ok){
                let val = await response.text();
                console.log("the val is: " + val);
                currentValue.innerHTML = val;
            }else{
                alert("HTTP-Error: " + response.status);
            }
        }else{
            alert("Please insert a valid input :)");
        }
    })

    // Divide Button Functionality
    const divideButton = document.getElementById("divButton");
    divideButton.addEventListener('click', async (clickEvent) => {
        const inputFieldValue = document.getElementById("inputField").value;
        if(inputFieldValue.trim()){
            let response = await fetch(`http://localhost:5000/calc/divide/${inputFieldValue}`, {method: 'PUT'});
            if(response.ok){
                let val = await response.text();
                console.log("the val is: " + val);
                currentValue.innerHTML = val;
            }else{
                alert("HTTP-Error: " + response.status);
            }
        }else{
            alert("Please insert a valid input :)");
        }
    })

    // Clear Button Functionality
    const clearButton = document.getElementById("clearButton");
    clearButton.addEventListener('click', async (clickEvent) => {
        document.getElementById("inputField").value = 0;
        let response = await fetch(`http://localhost:5000/calc/reset`, {method: 'POST'});
        if(response.ok){
            let val = await response.text();
            console.log("the val is: " + val);
            currentValue.innerHTML = val;
        }else{
            alert("HTTP-Error: " + response.status);
        }
    })
    
    // Equals Button Functionality
    const equalsButton = document.getElementById("equalsButton");
    equalsButton.addEventListener('click', async (clickEvent) => {
        let response = await fetch(`http://localhost:5000/calc/M`, {method: 'GET'});
        if(response.ok){
            let val = await response.text();
            console.log("the val is: " + val);
            currentValue.innerHTML = val;
            document.getElementById("inputField").value = val;
        }else{
            alert("HTTP-Error: " + response.status);
        }
    })

})