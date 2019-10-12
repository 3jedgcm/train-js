import Position from "./Position";
import CellAbstract from '../Map/Cell/CellAbstract'
import Train from "../Train/AbstractTrain";
import World from "../Map/World";




class Console {
    display(world: World, train: Train) {
        let matrix = world.getMatrix()
        let height = matrix.height
        let width = matrix.lines[0].width
        let position = train.getPosition()
        console.log(position.toString())
        for (let index = 0; index < height; index++) {
            let str = ""
            for (let sIndex = 0; sIndex < width; sIndex++) {
                
                if(sIndex == position.getY() && index == position.getX()) {
                    str = str + "X"
                } else {
                    str = str + matrix.lines[index].cell[sIndex].toString()
                }
            }
            console.log(str)
        }
    }
}

export default new Console()