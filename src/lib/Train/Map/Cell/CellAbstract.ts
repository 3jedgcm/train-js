abstract class CellAbstract {
    
    private usable: Boolean

    constructor(usable: Boolean) {
        this.usable = usable
    }

    public isUsable() {
        return this.usable
    }
}

export default CellAbstract