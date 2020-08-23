import React, { Component } from 'react';
import { getbeers } from './../serveces/movieService';
import MyCardGroup from './common/cardGroup';
class Home extends Component {
    state = {
        beers: [],
    };

    async componentDidMount() {
        const { data: beers } = await getbeers();
        this.setState({ beers });
    }
    render() {
        const { beers } = this.state;
        return (
            <MyCardGroup
                data={beers}
            />

        );
    }
}

export default Home;