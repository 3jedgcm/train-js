import AbstractCell from '../AbstractCell'

class Grass extends AbstractCell {

    constructor() {
        super('VOID')
    }

    toString() {
        return ' '
    }

}

export default Grass