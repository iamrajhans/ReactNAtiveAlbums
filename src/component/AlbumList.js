import React,{Component} from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail.js';

export default class AlbumList extends Component {

  state = {
    albums:[]
  };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(resp => { this.setState({albums:resp.data})})
  }

  renderAlbums() {
    return this.state.albums.map((album,key)=>
       <AlbumDetail key={key} album={album} />
     )
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
};
