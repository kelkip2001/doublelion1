import React, { Component, Fragment } from 'react';
import Categories from '../components/Home/Categories';
import Collection from '../components/Home/Collection';
import FeatureProducts from '../components/Home/FeatureProducts';
import NewArrival from '../components/Home/NewArrival';

export class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <FeatureProducts />
                <NewArrival />
                <Categories />
                <Collection /> 
            </Fragment>
        )
    }
}

export default HomePage
