import AbstractCell from '../AbstractCell'
import * as Type from '../../../Interface/Type'


abstract class AbstractRail extends AbstractCell {

    protected links: Array<Type.Link | Type.ConditionalLink>
    private onEnterFunc: Function
    private onOutFunc: Function
    constructor(links: Array<Type.Link | Type.ConditionalLink>,texture: String) {
        super('RAIL',texture)
        this.links = links
        this.onEnterFunc = () => { }
        this.onOutFunc = () => { }
    }

    public setOnEnter(func: Function) {
        this.onEnterFunc = func
    }

    public onEnter() {
        this.onEnterFunc()
    }

    public setOnOut(func: Function) {
        this.onOutFunc = func
    }

    public onOut() {
        this.onOutFunc()
    }

    public getNextPoint(point: Type.Extremity) {
        let find : Type.Link = {in:point, out:point}
        this.links.forEach(it => {
            let temp = <Type.Link>it
            if(temp.in == point) {
                find = temp
            }
        })
        return find.out
    }

}


export default AbstractRail