import Rail from "../../AbstractRail"

class CornerLeftTop extends Rail {

    constructor() {
        super(new Array(
            {in:"LEFT",out:"TOP"},
            {in:"TOP",out:"LEFT"}
        ))
    }

    toString() {
        return "┛"
    }

}

export default CornerLeftTop