import Rail from '../../Rail'

class StraightReverse extends Rail {

    constructor() {
        let links = new Array(
            {in:'LEFT',out:'RIGHT'},
            {in:'RIGHT',out:'LEFT'}
        )
        super(links)
    }

    toString() {
        return '━'
    }
    
}

export default StraightReverse