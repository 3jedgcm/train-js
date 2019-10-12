import Rail from '../Rail'

interface Link {
    out: String,
    in: String
}

interface ConditionalLink {
    id: Number,
    on: Link,
    off: Link
}

abstract class AbstractSpecial extends Rail {


    protected state: Map<Number, Boolean>

    constructor(links: Array<Link | ConditionalLink>) {
        super(links)
        this.state = new Map()
    }

    public toggleState(id: Number) {
        this.links.forEach(it => {
            let temp = <ConditionalLink>it
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
    public getNextPoint(point: String) {
        let find : Link = {in:'', out:''}
        this.links.forEach(it => {
            let temp = <Link>it
            let temp2 = <ConditionalLink>it
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
        this.toggleState(1)
        return find.out
    }

}

export default AbstractSpecial