import CellAbstract from '../CellAbstract'
import AbstractTrain from '../../../Train/AbstractTrain'

interface Link {
    out: String,
    in: String
}

interface ConditionalLink {
    id: Number,
    on: Link,
    off: Link
}

abstract class Rail extends CellAbstract {

    protected links: Array<Link | ConditionalLink>
    private onEnterFunc: Function
    private onOutFunc: Function
    private occupant: AbstractTrain | undefined


    constructor(links: Array<Link | ConditionalLink>) {
        super(true)
        this.links = links
        this.onEnterFunc = () => { }
        this.onOutFunc = () => { }
        this.occupant = undefined
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

    public setOccupant(train :AbstractTrain) {
        if(this.occupant == undefined) {
            this.occupant = train
        } else {
            throw 'Error'
        }
    }

    public unsetOccupant() {
        if(this.occupant == undefined) {
            throw 'Error'
        } else {
            this.occupant = undefined
        }
    }

    public getNextPoint(point: String) {
        let find : Link = {in:point, out:point}
        this.links.forEach(it => {
            let temp = <Link>it
            if(temp.in == point) {
                find = temp
            }
        })
        return find.out
    }

}


export default Rail