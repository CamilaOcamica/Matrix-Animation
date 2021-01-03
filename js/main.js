let elemento = document.getElementById('matrix')
let ctx = elemento.getContext('2d')
let width = document.body.clientWidth
let height = document.body.clientHeight

elemento.width = width
elemento.height = height

let position = Array(300).join(0).split('')

function initMatrix(){
    ctx.fillStyle = "rgba(0, 30, 1, 0.5)"
    ctx.fillRect(0, 0, width, height)
    ctx.fillStyle = "#37CC05"

    ctx.font = "11px arial"

    position.map(function(y, index){
        let texto = String.fromCharCode(1e2 + Math.random() * 30)
        let x = (index * 15) + 15

        matrix.getContext('2d').fillText(texto, x, y)

        if(y > 100 + Math.random() * 1e5){
            position[index] = 0
        } else{
            position[index] = y + 15
        }
    })
}

setInterval(initMatrix, 50)