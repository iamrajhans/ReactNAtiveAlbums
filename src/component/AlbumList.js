import React,{Component} from 'react';
import {View,Text} from 'react-native';
import axios from 'axios';

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
       <Text key={key}>{album.title}</Text>
     )
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
};
