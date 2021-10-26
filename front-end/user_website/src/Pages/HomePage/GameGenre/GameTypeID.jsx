import React from 'react';

class GameTypeID extends React.Component {
    constructor(props) {
      super(props);

      const  GenreID =
        [
          { key: 'RG', display: 'Racing Game' },
          { key: 'AG', display: 'Action Game' },
          { key: 'FPSG', display: 'FPS Game' },
        ];
    }
  
    render() {
      return (
        <button className="GameType" onClick={() => console.log('click')}>
          {this.props.value}
        </button>
      );
    }
  }

  export default GameTypeID;