import Rail from '../../Rail'

class CornerRightTop extends Rail {

    constructor() {
        let links = new Array(
            {in:'TOP',out:'RIGHT'},
            {in:'RIGHT',out:'TOP'}
        )
        super(links)
    }

    toString() {
        return '┗'
    }

}

export default CornerRightTop