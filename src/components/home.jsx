import React, { Component } from 'react';
import { getbeers } from './../serveces/beerService';
import MyCardGroup from './common/cardGroup';
import _ from 'lodash'
import ListGroup from './common/listGroup';
class Home extends Component {
    state = {
        beers: [],
        filterOptions: ["همه", "گران ترین", "ارزان ترین", "جفت با پیتزا", "جفت با استیک"],
        selectedFilterOption: "همه",
    };

    async componentDidMount() {
        const { data: beers } = await getbeers();
        this.setState({ beers });
    }
    handleFilterOptionSelect = item => {
        this.setState({ selectedFilterOption: item });

    }
    findPairFoods = food => {
        let pairFood = [];
        for (let beer of this.state.beers) {
            let splited = [];
            for (let temp of beer.food_pairing) {
                splited.push(...temp.split(" "));
            }
            if (splited.includes(food)) pairFood.push(beer);
        }
        return pairFood;
    }
    getFilteredItems = () => {
        let filteredBeerItems = this.state.beers;
        switch (this.state.selectedFilterOption) {
            case "گران ترین":
                filteredBeerItems = _.orderBy(filteredBeerItems, ['srm'], ['desc']);
                break;
            case "ارزان ترین":
                filteredBeerItems = _.orderBy(filteredBeerItems, ['srm'], ['asc']);
                break;
            case "جفت با پیتزا":
                filteredBeerItems = this.findPairFoods("pizza");
                break;
            case "جفت با استیک":
                filteredBeerItems = this.findPairFoods("beef");
                break;

        }
        return { filteredBeerItems };
    }

    render() {
        const { filteredBeerItems } = this.getFilteredItems();
        return (
            <div className="row">
                <div className="col-md-12">
                    <ListGroup
                        items={this.state.filterOptions}
                        selectedItem={this.state.selectedFilterOption}
                        onItemSelect={this.handleFilterOptionSelect}
                    />
                </div>
                <div className="col-md-12">
                    <MyCardGroup
                        data={filteredBeerItems}
                    />
                </div>
            </div>
        );
    }
}

export default Home;