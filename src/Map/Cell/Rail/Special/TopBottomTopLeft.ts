import AbstractSpecial from './AbstractSpecial'

class TopBottomTopLeft extends AbstractSpecial {

    constructor() {
        super(new Array(
            {
                id: 1,
                on: { in: 'TOP', out: 'LEFT' },
                off: { in: 'TOP', out: 'BOTTOM' },
            },
            { in: 'LEFT', out: 'TOP' },
            { in: 'BOTTOM', out: 'TOP' }
        ),'RAIL_TOP_BOTTOM_TOP_LEFT')
    }

    toString() {
        return '┫'
    }
}

export default TopBottomTopLeft