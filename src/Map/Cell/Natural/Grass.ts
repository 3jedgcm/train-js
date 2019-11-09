import AbstractCell from '../AbstractCell'

class Grass extends AbstractCell {

    constructor() {
        super('VOID','GRASS')
    }

    toString() {
        return ' '
    }

}

export default Grass