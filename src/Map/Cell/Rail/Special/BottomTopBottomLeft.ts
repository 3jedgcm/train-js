import AbstractSpecial from './AbstractSpecial'

class BottomTopBottomLeft extends AbstractSpecial {

    constructor() {
        super(new Array(
            {
                id: 1,
                on: { in: 'BOTTOM', out: 'LEFT' },
                off: { in: 'BOTTOM', out: 'TOP' },
            },
            { in: 'TOP', out: 'BOTTOM' },
            { in: 'LEFT', out: 'BOTTOM' }
        ),'RAIL_BOTTOM_TOP_BOTTOM_LEFT')
    }

    toString() {
        return '┫'
    }

}

export default BottomTopBottomLeft