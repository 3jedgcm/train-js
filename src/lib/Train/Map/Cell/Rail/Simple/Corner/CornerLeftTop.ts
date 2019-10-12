import Rail from '../../Rail'

class CornerLeftTop extends Rail {

    constructor() {
        let links = new Array(
            {in:'LEFT',out:'TOP'},
            {in:'TOP',out:'LEFT'}
        )
        super(links)
    }

    toString() {
        return '┛'
    }

}

export default CornerLeftTop