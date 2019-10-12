import AbstractTrain from "../AbstractTrain";
import Position from "../../Util/Position";
import World from "../../Map/World";
import Rail from "../../Map/Cell/Rail/Rail";
import Mirror from "../../Util/Mirror";

const MAX_LEVEL = 5
const MIN_LEVEL = 0
const MAX_TRAVEL = 10

class AbstractLocomotive extends AbstractTrain {

    private stateEngine: Boolean
    private speedLevel: number
    private traveling: number
    private intEngine: NodeJS.Timeout | undefined

    constructor(world: World, model: String, id: Number, start: Position) {
        super(world, model, id, start)
        this.stateEngine = false
        this.speedLevel = 0
        this.traveling = 0
        this.intEngine = undefined
        let tempCell = <Rail>this.world.getCell(this.position)
        tempCell.setOccupant(this)
    }

    public toggleStateEngine() {
        if (this.stateEngine) {
            this.stateEngine = false
            this.speedLevel = 0
            clearInterval(<NodeJS.Timeout>this.intEngine)
        } else {
            this.stateEngine = true
            this.intEngine = setInterval(() => {
                this.cross(this.speedLevel)
            }, 1000)
        }
    }

    public accelerate() {
        if (this.speedLevel <= MAX_LEVEL && this.stateEngine) {
            this.speedLevel = this.speedLevel + 1
        }
    }

    public decelerate() {
        if (this.speedLevel > MIN_LEVEL && this.stateEngine) {
            this.speedLevel = this.speedLevel - 1
        }
    }

    private cross(speed: number) {
        this.traveling = this.traveling + speed
        if (this.traveling >= MAX_TRAVEL) {
            this.travel()
            this.traveling = this.traveling - MAX_TRAVEL
        }
        //console.log(this.position.toString() + " vitesse->" + speed + " " + this.traveling + "/10" )
    }

    private travel() {
        let tempCell = <Rail>this.world.getCell(this.position)
        tempCell.unsetOccupant()
        if (tempCell) {
            this.position = Mirror.getMirror(this.position, tempCell.getNextPoint(this.position.getPoint()))
            tempCell = <Rail>this.world.getCell(this.position)
            tempCell.setOccupant(this)
        }
    }

}

export default AbstractLocomotive