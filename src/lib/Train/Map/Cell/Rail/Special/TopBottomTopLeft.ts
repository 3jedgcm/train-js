import AbstractSpecial from './AbstractSpecial'

class TopBottomTopLeft extends AbstractSpecial {

    constructor() {
        let links = new Array(
            {
                id: 1,
                on: { in: 'TOP', out: 'BOTTOM' },
                off: { in: 'TOP', out: 'LEFT' },
            },
            { in: 'LEFT', out: 'TOP' },
            { in: 'BOTTOM', out: 'TOP' }
        )
        super(links)
    }

    toString() {
        return '┫'
    }
}

export default TopBottomTopLeft