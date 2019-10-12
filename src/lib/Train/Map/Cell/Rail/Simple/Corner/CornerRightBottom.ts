import Rail from '../../Rail'

class CornerRightBottom extends Rail {

    constructor() {
        let links = new Array(
            {in:'RIGHT',out:'BOTTOM'},
            {in:'BOTTOM',out:'RIGHT'}
        )
        super(links)
    }

    toString() {
        return '┏'
    }

}

export default CornerRightBottom