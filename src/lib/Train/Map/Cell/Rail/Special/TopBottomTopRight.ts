import AbstractSpecial from './AbstractSpecial'

class TopBottomTopRight extends AbstractSpecial {

    constructor() {
        let links = new Array(
            {
                id: 1,
                on: { in: 'TOP', out: 'BOTTOM' },
                off: { in: 'TOP', out: 'RIGHT' },
            },
            { in: 'RIGHT', out: 'TOP' },
            { in: 'BOTTOM', out: 'TOP' }
        )
        super(links)
    }

    toString() {
        return '┣'
    }

}

export default TopBottomTopRight