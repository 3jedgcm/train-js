import Rail from "../../AbstractRail"

class CornerLeftTop extends Rail {

    constructor() {
        super(new Array(
            {in:"LEFT",out:"TOP"},
            {in:"TOP",out:"LEFT"}
        ), 'RAIL_CORNER_RAIL_LEFT_TOP')
    }

    toString() {
        return "┛"
    }

}

export default CornerLeftTop