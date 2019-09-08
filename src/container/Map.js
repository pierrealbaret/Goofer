import React, {Component} from 'react';

class Map extends Component {
  state = {
    colors: ['#b6bbc2', '#ebeced'],
  };

  componentDidMount() {
    this.updateCanvas();
  }

  setColumns(ctx, index) {
    const itemHeight = this.props.width / this.props.nbCase;
    const itemWidth  = this.props.height / this.props.nbCase;
    console.log('setIndex', index * itemWidth);
    for(let Yindex = 0; Yindex <= this.props.nbCase; Yindex++) {
    ctx.fillStyle =  (index + Yindex) % 2 ? 'black' : 'red';
    ctx.fillRect(index * itemWidth, Yindex*itemHeight, itemWidth, itemHeight);
    }
  }

  updateCanvas() {
    console.log(this.props);
    const ctx = this.refs.canvas.getContext('2d');
    for(let index = 0; index <= this.props.nbCase; index ++) {
      this.setColumns(ctx, index)
    }

  }

  render() {
    return (
      <canvas ref="canvas" width={this.props.width} height={this.props.height} />
    );
  }

}

export default Map;
