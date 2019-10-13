import Rail from '../../AbstractRail'

class CornerRightTop extends Rail {

    constructor() {
        super(new Array(
            {in:"TOP",out:"RIGHT"},
            {in:"RIGHT",out:"TOP"}
        ))
    }

    toString() {
        return '┗'
    }

}

export default CornerRightTop