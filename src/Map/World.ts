import AbstractCell from './Cell/AbstractCell'
import Position from '../Util/Position'
import AbstractEntity from './Entity/AbstractEntity'
import * as Type from '../Interface/Type'
import Mirror from '../Util/Mirror'
import AbstractRail from './Cell/Rail/AbstractRail'
import Clear from 'clear'

class World {

    private matrix: Type.Matrix

    constructor(matrix: Type.Matrix) {
        this.matrix = matrix
    }

    public setEntity(entity: AbstractEntity, position: Position, extremity: Type.Extremity): Boolean {
        let cell = this.getCell(position)
        entity.setTravelFunction(this.travel.bind(this))
        return cell.setEntity({ entity: entity, extremity: extremity })
    }

    public getEntity(id: String): AbstractEntity | null {
        let arrEntity = new Array()
        this.getAllCell().forEach(cell => {
            let result = cell.searchEntity(id)
            if (result) {
                arrEntity.push(result)
            }
        })
        if (arrEntity.length == 1) {
            return arrEntity[0]
        } else if (arrEntity.length == 0) {
            return null
        } else {
            throw 'Error entity is an multiple cell'
        }
    }

    private getCellByEntity(entity: AbstractEntity): AbstractCell | null {
        let arrEntity = new Array()
        this.getAllCell().forEach(cell => {
            let result = cell.searchEntity(entity.id)
            if (result) {
                arrEntity.push(cell)
            }
        })
        if (arrEntity.length == 1) {
            return arrEntity[0]
        } else if (arrEntity.length == 0) {
            return null
        } else {
            throw 'Error entity is an multiple cell'
        }
    }

    private getAllCell(): Array<AbstractCell> {
        let allCell = new Array()
        this.matrix.lines.forEach(line => {
            line.cell.forEach(cell => {
                allCell.push(cell)
            })
        })
        return allCell
    }

    public getPositionCell(id: String) {
        let x = 0
        let y = 0
        this.matrix.lines.forEach((line, indexX) => {
            line.cell.forEach((cell, indexY) => {
                if (cell.id == id) {
                    x = indexX
                    y = indexY
                }
            })
        })
        return new Position(x, y)
    }

    private getCell(position: Position): AbstractCell {
        if (position.getX()+1 > this.matrix.height) {
            throw 'Error outmap x ' + position.getX()
        }
        if (position.getY()+1 > this.matrix.lines[0].width) {
            throw 'Error outmap y ' + position.getY()
        }
        return this.matrix.lines[position.getX()].cell[position.getY()]
    }

    private travel(entity: AbstractEntity, direction: Type.Extremity | null): Boolean {
        let cell = this.getCellByEntity(entity)
        if (cell == null) {
            throw "Entity n°" + entity.id + " travel without an world"
        }
        if (direction == null) {
            //Its automatic so cast in abstract rail//
            let rail = <AbstractRail>cell
            let packageEntity = <Type.PackageEntity>cell.searchEntity(entity.id)
            let border = Mirror.getMirror(this.getPositionCell(rail.id), rail.getNextPoint(packageEntity.extremity))
            rail.unsetEntity(entity.id)
            let currentPosition = this.getPositionCell(rail.id)
            let newCell = this.getCell(border.position)
            newCell.setEntity({ entity: entity, extremity: border.extremity })


        } else {
            //TODO 
        }
        return false
    }

    public display() {
        this.matrix.lines.forEach(line => {
            let str = ""
            line.cell.forEach(cell => {
                let arr = cell.getAllEntity()
                let rail = <AbstractRail>cell
                if(arr.length == 0) {
                    str = str + rail.toString()
                } else {
                    str = str + "X"
                }
            })
            console.log(str)
        })
    }



}

export default World