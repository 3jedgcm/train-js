import UniqueID from 'uniqid'
import * as Type from '../../Interface/Type'

class AbstractEntity {

    public id: String
    private acceptedType: Array<Type.CellType>
    protected travelFunction: Function

    constructor(acceptedType : Array<Type.CellType>) {
        this.id = UniqueID('entity-')
        this.acceptedType = acceptedType
        this.travelFunction = () => {}
    }

    public isAcceptedType(type: Type.CellType) {
        return this.acceptedType.indexOf(type) != -1
    }

    public setTravelFunction(func : Function) {
        this.travelFunction = func
    }
    
}

export default AbstractEntity