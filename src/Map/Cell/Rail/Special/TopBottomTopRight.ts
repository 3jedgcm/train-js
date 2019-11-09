import AbstractSpecial from './AbstractSpecial'

class TopBottomTopRight extends AbstractSpecial {

    constructor() {
        super(new Array(
            {
                id: 1,
                on: { in: 'TOP', out: 'RIGHT' },
                off: { in: 'TOP', out: 'BOTTOM' },
            },
            { in: 'RIGHT', out: 'TOP' },
            { in: 'BOTTOM', out: 'TOP' }
        ),'RAIL_TOP_BOTTOM_TOP_RIGHT')
    }

    toString() {
        return '┣'
    }

}

export default TopBottomTopRight