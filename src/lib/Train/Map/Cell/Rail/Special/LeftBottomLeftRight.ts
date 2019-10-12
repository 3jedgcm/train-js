import AbstractSpecial from './AbstractSpecial'

class LeftBottomLeftRight extends AbstractSpecial {

    constructor() {
        let links = new Array(
            {
                id: 1,
                on: { in: 'LEFT', out: 'BOTTOM' },
                off: { in: 'LEFT', out: 'RIGHT' },
            },
            { in: 'BOTTOM', out: 'LEFT' },
            { in: 'RIGHT', out: 'LEFT' }
        )
        super(links)
    }

    toString() {
        return '┳'
    }

}

export default LeftBottomLeftRight