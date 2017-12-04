import {View ,Text, Image, Dimensions, BackAndroid, TouchableOpacity} from 'react-native';
import React ,{Component} from 'react';
import {Icon }from 'react-native-elements';
const {height} = Dimensions.get('window');

class MovieItem extends Component {

    

    render(){
        const {movie} = this.props;
        const {movieId, movieTitle , movieRating ,movieYear, movieImage} = movie;

        return (
            <View style={{flex:1}}>
            <TouchableOpacity
                activeOpacity={.5}
                onPress={()=>null}
            >
            <Image
                style={{height:height*.3,flex:1}}
                source={{uri:movieImage}}
            />
         <View style={styles.innerView}>
   
                <View style={styles.opacityStyle}/>
                
                <View style={{flexDirection:'row',marginLeft:5}}>
                    <Icon name='heart' type="font-awesome" size={15} color='#F2F2F2'/>
                    <Text style={styles.textStyle}>{movieRating}</Text>
                </View>
                
                <Text style={styles.textStyle}>{movieYear}</Text>

            </View>
            </TouchableOpacity>
        </View>
         
        )

    }
}


const styles ={
    textStyle:{
        fontSize:10,
        opacity:.7,
        color:'#F2F2F2',
        padding:5
    },
    innerView:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    opacityStyle:{
        top:0,
        left:0,
        bottom:0,
        right:0,
        position:'absolute',
        backgroundColor:'rgba(0,0,0,.7)'
    }
}

export default MovieItem;