// (c) qCalc function testing      START
let calc = new qCalc().calcFactory()
function addFunc(){
    arg = document.getElementById("arg").value
    calc.add(parseInt(arg))
    document.getElementById("numberValue").innerHTML = calc.getValue()
}
function subFunc(){
    arg = document.getElementById("arg").value
    calc.sub(parseInt(arg))
    document.getElementById("numberValue").innerHTML = calc.getValue()
}
// (c) qCalc function testing      END


// (d) qAsync function testing      START
function testAsyncFunc(){
    document.getElementById("aSyncDiv").innerHTML += "<br>plese wait 11.5 seconds"
    new qAsync().exec()
}
// (d) qAsync function testing      END


// (b) qObj function testing      START
let objMap = qObj().creteObjects()
document.getElementById("literal").innerHTML += JSON.stringify(objMap.get("object literal"))
document.getElementById("Constructor").innerHTML += JSON.stringify(objMap.get("Constructor"))
document.getElementById("Object.create").innerHTML += JSON.stringify(objMap.get("Object.create"))
document.getElementById("Object Factory").innerHTML += JSON.stringify(objMap.get("Object Factory"))
document.getElementById("JavaScript Class").innerHTML += JSON.stringify(objMap.get("JavaScript Class"))

let objChain = qObj().chain()
document.getElementById("literalProto").innerHTML += JSON.stringify(objChain.__proto__.__proto__.__proto__.__proto__.__proto__)
document.getElementById("ConstructorProto").innerHTML += JSON.stringify(objChain.__proto__.__proto__.__proto__.__proto__)
document.getElementById("Object.createProto").innerHTML += JSON.stringify(objChain.__proto__.__proto__.__proto__)
document.getElementById("Object FactoryProto").innerHTML += JSON.stringify(objChain.__proto__.__proto__)
document.getElementById("JavaScript ClassProto").innerHTML += JSON.stringify(objChain.__proto__)


// (b) qObj function testing      END
