import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { getAllMovies } from '../actions';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
class Movies extends Component {


    componentWillMount() {
        this.props.getAllMovies();
    }

    renderMovies = ({ item }) => {
        return <MovieItem movie={item} />
    }

    renderFooter = () => {
        if (this.props.isLoading)
            return <ActivityIndicator animating size="large" color="#51abf2" />;
        return null;
    }


    render() {
        return (
            <FlatList
                data={this.props.moviesList}
                keyExtractor={item => item.movieId}
                onEndReachedThreshold={.5}
                numColumns={3}
                onEndReached={() => (!this.props.isLoading ? this.props.getAllMovies() : null)}
                renderItem={this.renderMovies}
            />
        )
    }

}


const mapStateToProps = ({ movies }) => {
    const { moviesList, isLoading } = movies;
    return { moviesList, isLoading };
}



export default connect(mapStateToProps, { getAllMovies })(Movies);