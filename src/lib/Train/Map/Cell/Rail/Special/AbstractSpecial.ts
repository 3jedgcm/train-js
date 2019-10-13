import Rail from '../AbstractRail'
import * as Type from '../../../../Interface/Type'

abstract class AbstractSpecial extends Rail {


    protected state: Map<Number, Boolean>

    constructor(links: Array<Type.Link | Type.ConditionalLink>) {
        super(links)
        this.state = new Map()
    }

    public toggleState(id: Number) {
        this.links.forEach(it => {
            let temp = <Type.ConditionalLink>it
            if (temp.id == id) {
                if(this.state.has(id)) {
                    let last = this.state.get(id)
                    this.state.set(id,!last)
                } else {
                    this.state.set(id,true)
                }
            }
        })
    }

    //Overide for special Rail
    public getNextPoint(point: Type.Extremity) {
        let find : Type.Link = {in:"TOP", out:"TOP"}
        this.links.forEach(it => {
            let temp = <Type.Link>it
            let temp2 = <Type.ConditionalLink>it
            if(temp.in == point) {
                find = temp
            }
            if(this.state.has(temp2.id)) {
                if(this.state.get(temp2.id)) {
                    find = temp2.on
                } else {
                    find = temp2.off
                }
            } else {
                if(temp2.off) {
                    find = temp2.off
                }
            }
        })
        return find.out
    }

}

export default AbstractSpecial