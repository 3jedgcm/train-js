import AbstractSpecial from './AbstractSpecial'

class RightBottomRightLeft extends AbstractSpecial {

    constructor() {
        super(new Array(
            {
                id: 1,
                on: { in: 'RIGHT', out: 'BOTTOM' },
                off: { in: 'RIGHT', out: 'LEFT' },
            },
            { in: 'BOTTOM', out: 'RIGHT' },
            { in: 'LEFT', out: 'RIGHT' }
        ))
    }

    toString() {
        return '┳'
    }

}

export default RightBottomRightLeft