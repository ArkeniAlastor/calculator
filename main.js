//alert("Hello")
let input = document.getElementById("input")

function func1() { input.value += "1" }
function func2() { input.value += "2" }
function func3() { input.value += "3" }
function func4() { input.value += "4" }
function func5() { input.value += "5" }
function func6() { input.value += "6" }
function func7() { input.value += "7" }
function func8() { input.value += "8" }
function func9() { input.value += "9" }
function func0() { input.value += "0" }

function funcDot() { input.value += "." }

function funcClear() { input.value = "" }

function funcSum() { input.value += "+" }
function funcMin() { input.value += "-" }
function funcMult() { input.value += "*" }
function funcDiv() { input.value += "/" }

function funcRes() {
    try {
        input.value = eval(input.value)
    } catch (e) {
        input.value = "Error 404"
    }
}

let but1 = document.getElementById("b1")
let but2 = document.getElementById("b2")
let but3 = document.getElementById("b3")
let but4 = document.getElementById("b4")
let but5 = document.getElementById("b5")
let but6 = document.getElementById("b6")
let but7 = document.getElementById("b7")
let but8 = document.getElementById("b8")
let but9 = document.getElementById("b9")
let but0 = document.getElementById("b0")
let butDot = document.getElementById("dot")
let butClear = document.getElementById("clear")

let butSum = document.getElementById("sum")
let butMin = document.getElementById("min")
let butMult = document.getElementById("mult")
let butDiv = document.getElementById("div")
let butRes = document.getElementById("res")

but1.addEventListener("click", func1)
but2.addEventListener("click", func2)
but3.addEventListener("click", func3)
but4.addEventListener("click", func4)
but5.addEventListener("click", func5)
but6.addEventListener("click", func6)
but7.addEventListener("click", func7)
but8.addEventListener("click", func8)
but9.addEventListener("click", func9)
but0.addEventListener("click", func0)

butDot.addEventListener("click", funcDot)
butClear.addEventListener("click", funcClear)

butSum.addEventListener("click", funcSum)
butMin.addEventListener("click", funcMin)
butMult.addEventListener("click", funcMult)
butDiv.addEventListener("click", funcDiv)

butRes.addEventListener("click", funcRes)