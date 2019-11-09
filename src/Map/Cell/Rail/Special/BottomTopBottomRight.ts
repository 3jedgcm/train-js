import AbstractSpecial from './AbstractSpecial'

class BottomTopBottomRight extends AbstractSpecial {

    constructor() {
        super(new Array(
            {
                id: 1,
                on: { in: 'BOTTOM', out: 'RIGHT' },
                off: { in: 'BOTTOM', out: 'TOP' },
            },
            { in: 'TOP', out: 'BOTTOM' },
            { in: 'RIGHT', out: 'BOTTOM' }
        ),'RAIL_BOTTOM_TOP_BOTTOM_RIGHT')
    }

    toString() {
        return '┣'
    }

}

export default BottomTopBottomRight