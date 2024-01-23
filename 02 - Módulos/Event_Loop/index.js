function a() {
    console.log("Executando função a")
}

function b() {
    console.log("Executando função b")
}

function c() {
    console.log("Executando função c")
    a()
    b()
}

c()
