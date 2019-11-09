import AbstractSpecial from './AbstractSpecial'

class LeftTopLeftRight extends AbstractSpecial {

    constructor() {
        super(new Array(
            {
                id: 1,
                on: { in: 'LEFT', out: 'TOP' },
                off: { in: 'LEFT', out: 'RIGHT' },
            },
            { in: 'TOP', out: 'LEFT' },
            { in: 'RIGHT', out: 'LEFT' }
        ),'RAIL_LEFT_TOP_LEFT_RIGHT')
    }

    toString() {
        return '┻'
    }

}

export default LeftTopLeftRight