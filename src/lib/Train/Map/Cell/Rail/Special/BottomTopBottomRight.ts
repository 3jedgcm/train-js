import AbstractSpecial from './AbstractSpecial'

class BottomTopBottomRight extends AbstractSpecial {

    constructor() {
        let links = new Array(
            {
                id: 1,
                on: { in: 'BOTTOM', out: 'TOP' },
                off: { in: 'BOTTOM', out: 'RIGHT' },
            },
            { in: 'TOP', out: 'BOTTOM' },
            { in: 'RIGHT', out: 'BOTTOM' }
        )
        super(links)
    }

    toString() {
        return '┣'
    }

}

export default BottomTopBottomRight