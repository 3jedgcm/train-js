import AbstractSpecial from './AbstractSpecial'

class BottomTopBottomRight extends AbstractSpecial {

    constructor() {
        super(new Array(
            {
                id: 1,
                on: { in: 'BOTTOM', out: 'TOP' },
                off: { in: 'BOTTOM', out: 'RIGHT' },
            },
            { in: 'TOP', out: 'BOTTOM' },
            { in: 'RIGHT', out: 'BOTTOM' }
        ))
    }

    toString() {
        return '┣'
    }

}

export default BottomTopBottomRight