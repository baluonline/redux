import React, {Component} from 'react';
import SongsList from './SongsLIst';
import SongDetails from "./SongDetails";

class App extends Component {
  render() {
    return (
      <div className="col-6">
        <div className="ui list-group">
          <div className="col-6">
            <SongsList/>
          </div>
          <SongDetails />
        </div>

      </div>
    );
  }
}

export default App;
