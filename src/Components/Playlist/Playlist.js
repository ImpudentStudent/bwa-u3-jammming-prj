import React, {Component} from 'react';
import './Playlist.css';

class Playlist extends Component{
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(even){

  }

  render(){

    return(
      <div className="Playlist">
  <input defaultValue={"New Playlist"}/>
  <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove}/>
  // <a className="Playlist-save">SAVE TO SPOTIFY</a>
  <a className='Playlist-save' onClick=this.props.onSave>SAVE TO SPOTIFY</a>
</div>
    );
  }
}

export default Playlist;
