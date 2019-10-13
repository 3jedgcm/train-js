import Train from './lib/Train/index'
import Position from './lib/Train/Util/Position'
import Clear from 'clear'

const matrix = {
    height: 8,
    lines: [
        {
            width: 3,
            cell: [
                new Train.Rail.CornerRightBottom(),
                new Train.Rail.SpecialLeftBottomLeftRight(),
                new Train.Rail.CornerLeftBottom()
            ]
        },
        {
            width: 3,
            cell: [
                new Train.Rail.StraightTopBottom(),
                new Train.Rail.StraightTopBottom(),
                new Train.Rail.StraightTopBottom()
            ]
        },
        {
            width: 3,
            cell: [
                new Train.Rail.StraightTopBottom(),
                new Train.Rail.StraightTopBottom(),
                new Train.Rail.StraightTopBottom()
            ]
        },
        {
            width: 3,
            cell: [
                new Train.Rail.StraightTopBottom(),
                new Train.Rail.SpecialTopBottomTopRight(),
                new Train.Rail.SpecialBottomTopBottomLeft()
            ]
        },
        {
            width: 3,
            cell: [
                new Train.Rail.StraightTopBottom(),
                new Train.Rail.StraightTopBottom(),
                new Train.Rail.StraightTopBottom()
            ]
        },
        {
            width: 3,
            cell: [
                new Train.Rail.StraightTopBottom(),
                new Train.Rail.SpecialBottomTopBottomRight(),
                new Train.Rail.SpecialTopBottomTopLeft()
            ]
        },
        {
            width: 3,
            cell: [
                new Train.Rail.StraightTopBottom(),
                new Train.Rail.StraightTopBottom(),
                new Train.Rail.StraightTopBottom()
            ]
        },
        {
            width: 3,
            cell: [
                new Train.Rail.CornerRightTop(),
                new Train.Rail.SpecialLeftTopLeftRight(),
                new Train.Rail.CornerLeftTop()
            ]
        }
    ]
}



const world = new Train.World(matrix)
const train = new Train.Train.Ter(17001)
world.setEntity(train, new Position(0,0),'RIGHT')

setInterval(() => {
    Clear()
    world.display()
},200)


train.toggleStateEngine()
