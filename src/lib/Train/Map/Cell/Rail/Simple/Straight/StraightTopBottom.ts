import Rail from '../../Rail'

class StraightTopBottom extends Rail {

    constructor() {
        let links = new Array(
            {in:'TOP',out:'BOTTOM'},
            {in:'BOTTOM',out:'TOP'}
        )
        super(links)
    }

    toString() {
        return '┃'
    }

}

export default StraightTopBottom