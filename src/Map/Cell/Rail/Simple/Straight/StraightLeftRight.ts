import Rail from "../../AbstractRail"

class StraightLeftRight extends Rail {

    constructor() {
        super(new Array(
            {in:"LEFT",out:"RIGHT"},
            {in:"RIGHT",out:"LEFT"}
        ), 'RAIL_STRAIGHT_REVERSE')
    }

    toString() {
        return "━"
    }
    
}

export default StraightLeftRight