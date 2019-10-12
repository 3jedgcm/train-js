import Position from "../Util/Position";
import World from "../Map/World";

class AbstractTrain {

    protected position: Position
    protected model: String
    protected id: Number
    protected world: World

    constructor(world: World, model: String, id: Number, start: Position) {
        this.model = model
        this.id = id
        this.position = start
        this.world = world
    }

    getPosition() {
        return this.position
    }

}

export default AbstractTrain