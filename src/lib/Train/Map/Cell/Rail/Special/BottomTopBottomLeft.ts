import AbstractSpecial from './AbstractSpecial'

class BottomTopBottomLeft extends AbstractSpecial {

    constructor() {
        let links = new Array(
            {
                id: 1,
                on: { in: 'BOTTOM', out: 'TOP' },
                off: { in: 'BOTTOM', out: 'LEFT' },
            },
            { in: 'TOP', out: 'BOTTOM' },
            { in: 'LEFT', out: 'BOTTOM' }
        )
        super(links)
    }

    toString() {
        return '┫'
    }

}

export default BottomTopBottomLeft