import React, {Component} from 'react';
import './TrackList.css';

class TrackList extends Component{
  render(){
    return(
      <div className="TrackList">
    <!-- You will add a map method that renders a set of Track components  -->
   this.props.tracks.map(track => {return
     <Track track={track} key={track.id} onRemove={this.props.onRemove} onAdd={this.props.onAdd}/>
   })
   }
</div>
    );
  }
}

export default TrackList;
