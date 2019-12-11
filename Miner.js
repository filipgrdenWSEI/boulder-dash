class Miner extends Tile {
    constructor() {
        super(TilesProperties.miner.type);
        this.xPos = 0;
        this.yPos = 0;
    }

    move(xBias, yBias) {
        this.xPos += xBias;
        this.yPos += yBias; 
    }
}