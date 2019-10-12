import Rail from '../../Rail'

class CornerLeftBottom extends Rail {

    constructor() {
        let links = new Array(
            {in:'LEFT',out:'BOTTOM'},
            {in:'BOTTOM',out:'LEFT'}
        )
        super(links)
    }

    toString() {
        return '┓'
    }

}

export default CornerLeftBottom