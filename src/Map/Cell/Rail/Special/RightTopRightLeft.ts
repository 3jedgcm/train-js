import AbstractSpecial from './AbstractSpecial'

class RightTopRightLeft extends AbstractSpecial {

    constructor() {
        super(new Array(
            {
                id: 1,
                on: { in: 'RIGHT', out: 'TOP' },
                off: { in: 'RIGHT', out: 'LEFT' },
            },
            { in: 'TOP', out: 'RIGHT' },
            { in: 'LEFT', out: 'RIGHT' }
        ),'RAIL_RIGHT_TOP_RIGHT_LEFT')
    }

    toString() {
        return '┻'
    }

}

export default RightTopRightLeft