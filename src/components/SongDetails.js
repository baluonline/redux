import React, {Component} from 'react';
import {connect} from "react-redux";

class SongDetails extends React.Component {
    renderSongsDetail() {

        if (!this.props.selectedSong) {
            return (
                <div>
                    please select song
                </div>
            )
        }
        return (
            <div>
                <p>
                    Title : {this.props.selectedSong.title}
                    <br/>
                    duration : {this.props.selectedSong.duration}
                </p>
            </div>
        )
    }

    render() {
        console.log('song details' + this.props);
        return (
            <div>Song details {this.renderSongsDetail()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {selectedSong: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails);