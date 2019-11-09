import AbstractCell from '../Map/Cell/AbstractCell'
import Position from '../Util/Position'
import AbstractEntity from '../Map/Entity/AbstractEntity'

export type CellType = "RAIL" | "STATION" | "VOID"
export type Extremity = "TOP" | "BOTTOM" | "LEFT" | "RIGHT"

export interface Link {
    out: Extremity,
    in: Extremity
}

export interface ConditionalLink {
    id: Number,
    on: Link,
    off: Link
}

export interface Border {
    position: Position
    extremity: Extremity
}

export interface PackageEntity {
    entity: AbstractEntity,
    extremity: Extremity
}
 
export interface Matrix {
    height: Number,
    lines: Array<Line>
}

export interface Line {
    width: Number,
    cell: Array<AbstractCell>
}

