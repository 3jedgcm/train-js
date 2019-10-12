import AbstractSpecial from './AbstractSpecial'

class RightBottomRightLeft extends AbstractSpecial {

    constructor() {
        let links = new Array(
            {
                id: 1,
                on: { in: 'RIGHT', out: 'BOTTOM' },
                off: { in: 'RIGHT', out: 'LEFT' },
            },
            { in: 'BOTTOM', out: 'RIGHT' },
            { in: 'LEFT', out: 'RIGHT' }
        )
        super(links)
    }

    toString() {
        return '┳'
    }

}

export default RightBottomRightLeft