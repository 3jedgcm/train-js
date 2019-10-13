import Rail from "../../AbstractRail"

class CornerRightBottom extends Rail {

    constructor() {
        super(new Array(
            {in:"RIGHT",out:"BOTTOM"},
            {in:"BOTTOM",out:"RIGHT"}
        ))
    }

    toString() {
        return "┏"
    }

}

export default CornerRightBottom