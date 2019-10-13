import Rail from "../../AbstractRail"

class StraightReverse extends Rail {

    constructor() {
        super(new Array(
            {in:"LEFT",out:"RIGHT"},
            {in:"RIGHT",out:"LEFT"}
        ))
    }

    toString() {
        return "━"
    }
    
}

export default StraightReverse