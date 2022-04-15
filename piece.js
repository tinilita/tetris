//ГЕНЕРИРОВАНИЕ ФИГУР
class Piece {
    constructor(shape, ctx) {
        this.shape = shape 
        this.ctx = ctx 
        this.y = 0 
        this.x = Math.floor(COLS / 2) // Math.floor ВЫЧИСЛЯЕТ И ВОЗВРАЩАЕТ НАИБОЛЬШЕЕ ЦЕЛОЕ ЧИСЛО, КОТОРОЕ МЕНЬШЕ ИЛИ РАВНО ПЕРЕДАННОМУ ЧИСЛУ (ОКРГУГЛЯЕТ К МЕНЬШЕМУ)
    }
    //this. ПОМОГАЕТ СОЗДАТЬ ОБЬЕКТЫ,СОСТАВ СВОЙСТВ  И МЕТОДОВ КОТОРЫХ ОПРЕДЕЛЕН НАМИ

    renderPiece() {
        this.shape.map((row, i) => {
            row.map((cell, j) => {
                if (cell > 0) {
                    this.ctx.fillStyle = COLORS[cell] 
                    this.ctx.fillRect(this.x + j, this.y + i, 1, 1)
                }
            })
        })
    }
}