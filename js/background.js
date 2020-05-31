class Background {
  constructor(ctx){
    this._ctx = ctx

    this.x = 0
    this.y = 0

    this.vx = 0
    this.vy = +3

    this.ax = 0
    this.ay = 0

    this.w = this._ctx.canvas.width
    this.h = this._ctx.canvas.height

    this._img = new Image()
    this._img.src = '../images/road.png'
  }
  draw(){
     // draw image in X
     this._ctx.drawImage(this._img, this.x, this.y, this.w, this.h)
     // draw image again in in X + ¿?
     this._ctx.drawImage(this._img, this.x, this.y - this.h, this.w, this.h)
  }

  
  move(){
    this.vy += this.ay 
    this.vx += this.ax
    this.x += this.vx
    this.y += this.vy

    if( this.y >= this.h  ){
      this.y = 0
    }
  }
}