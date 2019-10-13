import * as Type from '../Interface/Type'

class Position {

    private x: number
    private y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    toString() {
        return 'x:' + this.x + ' y:' + this.y
    }
}

export default Position