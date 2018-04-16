import React, {Component} from 'react';
import './SeacrhBar.css';

class SearchBar extends Component{
  constructor(props){
    this.state ={ searchTerm: '' };
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(term){
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event){
    const newTerm = event.target.value
    this.setState({this.state.searchTerm: newTerm});
  }

  render(){
    return(
      <div className="SearchBar">
  <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
  <a>SEARCH</a>
</div>
    );
  }
}

export default SeacrhBar;
