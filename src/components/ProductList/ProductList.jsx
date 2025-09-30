import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
    render() {
        const { items } = this.props;
        return (
            <div className="w-full xl:flex-2 space-y-6">
                <h1 className="font-bold text-3xl lg:text-4xl">Desserts</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <ProductItem key={item.name} {...item} />
                    ))}
                </div>
            </div>
        );
    }
}
