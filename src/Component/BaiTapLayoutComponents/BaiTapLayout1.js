import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import ProductListComponent from './ProductListComponent'
import Slider from './Slider'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div className="bg-dark">
                <Header/>
                <Slider/>
                <ProductListComponent/>
                <Footer/>
            </div>
        )
    }
}
