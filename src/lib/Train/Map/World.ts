import CellAbstract from './Cell/CellAbstract'
import Position from '../Util/Position'

interface Matrix {
    height: Number,
    lines: Array<Line>
}

interface Line {
    width: Number,
    cell: Array<CellAbstract>
}

class World {

    private matrix : Matrix

    constructor(matrix: Matrix) {
        this.matrix = matrix
    }
    
    getMatrix() {
        return this.matrix
    }

    getCell(position: Position) {
        return this.matrix.lines[position.getX()].cell[position.getY()]
    }

}

export default World