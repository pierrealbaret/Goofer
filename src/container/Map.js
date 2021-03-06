import React, {Component} from 'react';

import Goofer from '../factory/Goofer';

class Map extends Component {
  state = {
    colors: ['#b6bbc2', '#ebeced'],
    gooferList: [],
  };

  componentDidMount() {
    for(let i=0; i<this.props.numberOfGoofer; i+=1) {
        this.addGoofer(0, this.props.nbCase - 1);
    }
    setInterval(this.updateCanvas.bind(this), 3000);
  }

  addGoofer(rangeMin, rangeMax) {
    const goofer = new Goofer(rangeMin, rangeMax);
    const newGooferList = this.state.gooferList;
    newGooferList.push(goofer);
    this.setState({ gooferList: newGooferList });
  }

  setColumns(ctx, index) {
    const itemHeight = this.props.width / this.props.nbCase;
    const itemWidth  = this.props.height / this.props.nbCase;
    for(let Yindex = 0; Yindex <= this.props.nbCase; Yindex++) {
    ctx.fillStyle =  (index + Yindex) % 2 ? 'black' : 'red';
    ctx.fillRect(index * itemWidth, Yindex*itemHeight, itemWidth, itemHeight);
    }
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    for(let index = 0; index <= this.props.nbCase; index ++) {
      this.setColumns(ctx, index)
    }
    const newGooferList = this.state.gooferList.map((Goofer) => {
      const newDirection = this.outOfBoundary(Goofer);
      Goofer.direction = newDirection;
      Goofer.movePosition();
      this.moveGoofer(ctx, Goofer.x, Goofer.y);
      return Goofer;
    });
    this.setState({gooferList: newGooferList});
  }

  outOfBoundary(Goofer) {
    let direction = { up: 'up', down: 'down', left: 'left', right: 'right' };
    if(Goofer.x === 0) {
      delete direction.left;
    }
    if(Goofer.x === 9) {
      delete direction.right;
    }
    if(Goofer.y === 0) {
      delete direction.up;
    }

    if(Goofer.y === 9) {
      delete direction.down;
    }
    const keys = Object.keys(direction);
    return direction[keys[ keys.length * Math.random() << 0]];
  }

  moveGoofer(ctx, x, y) {
    const itemHeight = this.props.width / this.props.nbCase;
    const itemWidth  = this.props.height / this.props.nbCase;
    const imageObj1 = new Image();
    imageObj1.src = 'data:image/jpeg;base64,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';
    imageObj1.onload = function() {
      ctx.drawImage(imageObj1, x*itemHeight, y*itemWidth, itemHeight, itemWidth);
    };
  }

  render() {
    return (
      <canvas ref="canvas" width={this.props.width} height={this.props.height} />
    );
  }

}

export default Map;
