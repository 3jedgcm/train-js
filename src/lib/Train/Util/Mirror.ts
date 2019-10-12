import Position from "./Position"

class Mirror {
    public getMirror(position: Position, target: String) {
        switch (target) {
            case "TOP":
                return new Position(
                    position.getX() - 1,
                    position.getY() ,
                    "BOTTOM"
                )
            case "BOTTOM":
                return new Position(
                    position.getX() + 1,
                    position.getY() ,
                    "TOP"
                )
            case "LEFT":
                return new Position(
                    position.getX() ,
                    position.getY() - 1,
                    "RIGHT"
                )
            case "RIGHT":
                return new Position(
                    position.getX() ,
                    position.getY() + 1,
                    "LEFT"
                )
        }
        return new Position(0,0,"TOP")
    }
}

export default new Mirror()