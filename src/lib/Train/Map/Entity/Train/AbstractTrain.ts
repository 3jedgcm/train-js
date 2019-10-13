import Position from "../../../Util/Position";
import World from "../../World";
import AbstractEntity from "../AbstractEntity";


class AbstractTrain extends AbstractEntity {

    protected model: String
    protected trainId: Number

    constructor(model: String, trainId: Number) {
        super(
            new Array('RAIL')
        )
        this.model = model
        this.trainId = trainId
    }

}

export default AbstractTrain