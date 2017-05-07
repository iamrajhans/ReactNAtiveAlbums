import React ,{ Component } from 'react';
import { Text,View } from 'react-native'; 

export default  class Headers extends Component{
    defaultProps = {
	headerText: 'Albums'
    };	
    render() {
        return (
	<View style={styles.viewStyle}> 
        <Text>{this.props.headerText}</Text> 
	</View>
    );

    }; 
}

const styles = {
     viewStyle: {
	backgroundColor: '#F8F8F8',
	justifyContent: 'center',
	alignItems: 'center',
	height: 60,
	paddingTop: 15,
	shadowColor:'#000',
	shadowOffset: {width:0,height:2},
	shadowOpacity: 0.2,
	elevation: 2,
	position: 'relative'
     }
}
