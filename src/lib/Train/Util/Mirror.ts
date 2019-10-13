import Position from "./Position"
import * as Type from "../Interface/Type"

class Mirror {
    public getMirror(position: Position, target: Type.Extremity): Type.Border {
        switch (target) {
            case "TOP":
                return {
                    position: new Position(position.getX() - 1,position.getY()),
                    extremity: 'BOTTOM'
                }
            case "BOTTOM":
                return {
                    position: new Position(position.getX() + 1,position.getY()),
                    extremity: "TOP"
                }

            case "LEFT":
                return {
                    position: new Position(position.getX(),position.getY() - 1),
                    extremity: "RIGHT"
                }
            case "RIGHT":
                return {
                    position: new Position(position.getX(), position.getY() + 1),
                    extremity: "LEFT"
                }
        }
        return {
            position: new Position(0,0),
            extremity: "TOP"
        }
    }
}

export default new Mirror()