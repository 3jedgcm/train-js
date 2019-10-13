import AbstractEntity from '../Entity/AbstractEntity'
import * as Type from '../../Interface/Type'
import UniqueID from 'uniqid'

abstract class AbstractCell {

    private type: Type.CellType
    private mapEntity: Map<String, Type.PackageEntity>
    public id: String

    constructor(type: Type.CellType) {
        this.mapEntity = new Map()
        this.type = type
        this.id = UniqueID(type + "-")
    }


    public setEntity(packageEntity: Type.PackageEntity): Boolean {
        if (this.mapEntity.has(packageEntity.entity.id)) {
            this.mapEntity.delete(packageEntity.entity.id)
        }
        if (packageEntity.entity.isAcceptedType(this.type)) {
            this.mapEntity.set(packageEntity.entity.id,packageEntity)
            return true
        } else {
            throw "Entity dosn't allow the cell type"
        }
    }

    public getAllEntity() : Array<Type.PackageEntity> {
        let arrEntity = new Array()
        Array.from(this.mapEntity).forEach(entity => {
            arrEntity.push(entity[1])
        })
        return arrEntity
    }

    public searchEntity(id: String) : Boolean | Type.PackageEntity {
        let result = this.mapEntity.get(id)
        if (result) {
            return result
        } else {
            return false
        }
    }

    public unsetEntity(idEntity: String) {
        if (this.mapEntity.has(idEntity)) {
            this.mapEntity.delete(idEntity)
        } else {
            throw 'Unset entity'
        }
    }
}

export default AbstractCell