import Rail from "../../AbstractRail"

class CornerLeftBottom extends Rail {

    constructor() {
        super(new Array(
            {in:"LEFT",out:"BOTTOM"},
            {in:"BOTTOM",out:"LEFT"}
        ))
    }

    toString() {
        return "┓"
    }

}

export default CornerLeftBottom