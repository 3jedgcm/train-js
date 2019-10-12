class Position {

    private x: number
    private y: number
    private point: String

    constructor(x: number, y: number, point: String) {
        this.x = x
        this.y = y
        this.point = point
    }

    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    getPoint() {
        return this.point
    }

    toString() {
        return 'x:' + this.x + ' y:' + this.y
    }
}

export default Position