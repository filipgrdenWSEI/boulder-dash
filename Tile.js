class Tile {
    constructor(type) {
      if (!type) {
        throw new Error('You must provide a Tile Type')
      }
      this.type = type
      this.setSpritePosition(type)
    }
  
    setSpritePosition(type) {
      this.spriteXPos = TilesProperties[type].spriteXPos
      this.spriteYPos = TilesProperties[type].spriteYPos
    }
  }