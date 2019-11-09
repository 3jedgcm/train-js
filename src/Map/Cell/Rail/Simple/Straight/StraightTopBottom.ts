import Rail from "../../AbstractRail"

class StraightTopBottom extends Rail {

    constructor() {
        super(new Array(
            {in:"TOP",out:"BOTTOM"},
            {in:"BOTTOM",out:"TOP"}
        ), 'RAIL_STRAIGHT_TOP_BOTTOM')
    }

    toString() {
        return "┃"
    }

}

export default StraightTopBottom