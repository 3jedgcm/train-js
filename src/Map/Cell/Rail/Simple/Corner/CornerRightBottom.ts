import Rail from "../../AbstractRail"

class CornerRightBottom extends Rail {

    constructor() {
        super(new Array(
            {in:"RIGHT",out:"BOTTOM"},
            {in:"BOTTOM",out:"RIGHT"}
        ), 'RAIL_CORNER_RIGHT_BOTTOM')
    }

    toString() {
        return "┏"
    }

}

export default CornerRightBottom