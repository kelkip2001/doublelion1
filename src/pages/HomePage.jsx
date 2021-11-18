import React, { Component, Fragment } from 'react';
import Categories from '../components/Home/Categories';
import Collection from '../components/Home/Collection';
import FeatureProducts from '../components/Home/FeatureProducts';

export class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <FeatureProducts />
                <Categories />
                <Collection /> 
            </Fragment>
        )
    }
}

export default HomePage
