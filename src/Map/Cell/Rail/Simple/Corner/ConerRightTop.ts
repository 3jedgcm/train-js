import Rail from '../../AbstractRail'

class CornerRightTop extends Rail {

    constructor() {
        super(new Array(
            {in:"TOP",out:"RIGHT"},
            {in:"RIGHT",out:"TOP"}
        ), 'RAIL_CORNER_RIGHT_TOP')
    }

    toString() {
        return '┗'
    }

}

export default CornerRightTop