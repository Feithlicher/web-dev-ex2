// (a) qSyntax function      START
let qSyntax = function(){
    return {
        doSomething: function(){
            class Person {
                constructor(name){
                    this.name = name
                    this.enlightment = null
                }
            }
            function checkNum() {
                let numbers = document.getElementById("inputId").value;
                numbersArray = numbers.split(" ");
                numbersArray = numbersArray.map(num => parseInt(num))
                return new Promise((resolve, reject) => {
                    if(numbersArray.length != 5){
                        reject(new Error("you must insert 5 numbers!"))
                    }
                    for(const num of numbersArray){
                        if(num > 99 || num < 0){
                            reject(new Error("number must be in the reange: 0-99"))
                        }
                    }
                    if(numbersArray.includes(42)){
                        resolve(1)
                    }
                    else{
                        reject(0)
                    }
                })
            }
            async function checkNumAsync(){
                try{
                    const response = await checkNum()
                    userName = document.getElementById("nameInputId").value
                    currentUser = new Person(userName)
                    alert(`congratulations ${currentUser.name}! you found the meaning of life!`)
                    currentUser.buddha = () => {
                        alert("I am a buddha :)")
                    }
                    let row, col
                    if((numbersArray[0] > 9) && (numbersArray[1] > 9)){
                        row = 9
                        col = 9
                    }
                    else{
                        row = numbersArray[0]
                        col = numbersArray[1]
                    }
                    let pageCheck = document.getElementById("pageCheck")
                    let j = 1
                    let output = "<table class=tableClass' border='1' width='500' cellspacing='0'cellpadding='5'>"
                    for(i = 1; i <= row ;i++)
                    {
                        output = output + "<tr>"
                        while(j <= col)
                        {
                        output = output + "<td>" + (i * j) + "</td>"
                        j = j + 1
                        }
                        output = output + "</tr>"
                        j = 1
                    }
                    output = output + "</table>";
                    pageCheck.innerHTML += output
                }
                catch(err){
                    if(typeof(err) === "number"){
                        alert("soryy, it appears you haven't found the meaning of life")
                    }else{
                        alert(err)
                    }
                }
                finally{
                    currentUser?.buddha()
                }
            }
            checkNumAsync()
            let welcome = document.getElementById("welcome")
            welcome.style.color = "#ff0000"
            let pageCheck = document.getElementById("pageCheck")
            pageCheck.style.color = "magenta"
            let htmlToInsert = `<div class="insertDiv">
            <span class="redClass">1</span>
            <span class="greenClass">0</span>
            <span class="redClass">1</span>
            <span class="greenClass">0</span>
            <span class="redClass">1</span>
            <span class="greenClass">0</span>
            <span class="greenClass">=</span>
            <span class="greenClass">42</span>
            </div>`
            document.getElementById("mainDiv2").innerHTML = htmlToInsert
        },
        desc: `this function checks if the user can guess the number 42 (the true meaning of life).
        after checking for the correctness of the input, if 42 was one of the numbers inserted,
        the function would depict the multiplication table  of the dimensions of the first and second inserted number,
        and display the binary value of 42.`
    }
}
// (a) qSyntax function      END






// (b) qObj function      START
let qObj = () => {
    return {
        creteObjects: function(){
            let map = new Map()

            let obj1 = {nate1: "same object"}
            map.set("object literal", obj1) //first way

            
            function obj2(val){this.nate2 = val}
            map.set("Constructor", new obj2("same object")) //second way


            let obj3 = Object.create({})
            obj3.nate3 = "same object"
            map.set("Object.create", obj3) //third way


            let obj4 = function(val){return {nate4: val}}
            map.set("Object Factory", obj4("same object")) //fourth way
            

            class obj5{constructor(val){this.nate5 = val}}
            map.set("JavaScript Class", new obj5("same object")) //fifth way


            return map
        },

        chain: function(){
            let objMap = this.creteObjects()
            obj1 = objMap.get("object literal")
            obj2 = objMap.get("Constructor")
            obj3 = objMap.get("Object.create")
            obj4 = objMap.get("Object Factory")
            obj5 = objMap.get("JavaScript Class")
            obj5.__proto__ = obj4
            obj4.__proto__ = obj3
            obj3.__proto__ = obj2
            obj2.__proto__ = obj1
            return obj5
        },

        desc: `b.i.1 generates the same object in 5 different ways and depicts them on test.html
        b.i.2 sets the the objects __proto__ to get the following chain: "JavaScript Class -> Object Factory -> Object.create -> Constructor -> object literal"
        and depicts the chain in test.html`
    }
}
// (b) qObj function      END





// (c) qCalc function      START
function qCalc(){
    let val = 0
    this.calcFactory = () => {
        return {
            getValue: () => {return val},
            add: (num) => {val += num},
            sub: (num) => {val -= num}
        }
    }
    this.desc = `qCalc depicts on test.html a simple calculator that holds the initial value of 0. the user can choose to add/subtract a value from "current value"`
}
// (c) qCalc function      END



    


// (d) qAsync function      START
function qAsync(){
    this.doAsync = function(){
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("qAsync function works :)"), 11500)
          });
        return promise
    }
    this.exec = async function(){
        let result = await this.doAsync()
        alert(result)
    }
    this.desc = "'doAsync' function returns a Promise, while 'exec' fucntion waits for it to resolve and executes it."
}
// (d) qAsync function      END