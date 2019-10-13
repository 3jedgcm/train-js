import AbstractSpecial from './AbstractSpecial'

class LeftBottomLeftRight extends AbstractSpecial {

    constructor() {
        super(new Array(
            {
                id: 1,
                on: { in: 'LEFT', out: 'BOTTOM' },
                off: { in: 'LEFT', out: 'RIGHT' },
            },
            { in: 'BOTTOM', out: 'LEFT' },
            { in: 'RIGHT', out: 'LEFT' }
        ))
    }

    toString() {
        return '┳'
    }

}

export default LeftBottomLeftRight