import AbstractSpecial from './AbstractSpecial'

class LeftTopLeftRight extends AbstractSpecial {

    constructor() {
        let links = new Array(
            {
                id: 1,
                on: { in: 'LEFT', out: 'TOP' },
                off: { in: 'LEFT', out: 'RIGHT' },
            },
            { in: 'TOP', out: 'LEFT' },
            { in: 'RIGHT', out: 'LEFT' }
        )
        super(links)
    }

    toString() {
        return '┻'
    }

}

export default LeftTopLeftRight