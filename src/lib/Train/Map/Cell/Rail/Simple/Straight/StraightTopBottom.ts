import Rail from "../../AbstractRail"

class StraightTopBottom extends Rail {

    constructor() {
        super(new Array(
            {in:"TOP",out:"BOTTOM"},
            {in:"BOTTOM",out:"TOP"}
        ))
    }

    toString() {
        return "┃"
    }

}

export default StraightTopBottom