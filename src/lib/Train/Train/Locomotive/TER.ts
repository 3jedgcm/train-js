import AbstractLocomotive from "./AbstractLocomotive";
import Position from "../../Util/Position";
import World from "../../Map/World";

class TER extends AbstractLocomotive {

    constructor(world: World, id: Number, start: Position) {
        super(world, 'TER', id, start)
    }

}

export default TER