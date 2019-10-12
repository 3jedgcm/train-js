import AbstractSpecial from './AbstractSpecial'

class RightTopRightLeft extends AbstractSpecial {

    constructor() {
        let links = new Array(
            {
                id: 1,
                on: { in: 'RIGHT', out: 'TOP' },
                off: { in: 'RIGHT', out: 'LEFT' },
            },
            { in: 'TOP', out: 'RIGHT' },
            { in: 'LEFT', out: 'RIGHT' }
        )
        super(links)
    }

    toString() {
        return '┻'
    }

}

export default RightTopRightLeft