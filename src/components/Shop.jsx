import React, { Component } from "react";
import ProductList from "./ProductList/ProductList";

export default class Shop extends Component {
    render() {
        const {items} = this.props
        return (
            <div className="container mx-auto px-4 py-8 lg:py-16">
                <div className="flex flex-col xl:flex-row items-start gap-5 lg:gap-8">
                    <ProductList items={items} />
                    <div className="flex-1 w-full h-20 bg-red-400">Hollo</div>
                </div>
            </div>
        );
    }
}
