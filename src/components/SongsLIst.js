import React, {Component} from "react";
import {connect} from 'react-redux';

import { selectSong } from '../actions';

class SongsList extends Component {
/*   constructor(props) {
    super(props);
    this.state = {
      songs: ''
    }
  } */

  renderSongsLIst() {
    return (this.props.songs.map(song => {
      return (
        <div className="list-group-item" key={song.title}>
         
          <div className="content col col-lg-6">
            {song.title}</div>
            <div className="float-right">
            <button className="ui btn-primary col-4 col col-lg-6 float-right"
              onClick={()=> this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
        </div>
      )
    }))

  }
  render() {
    console.log(this.props);
    return (
      <div className="ui list divider">
        Songs list {this.renderSongsLIst()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {songs: state.song}
}

export default connect(mapStateToProps,{selectSong})(SongsList);
