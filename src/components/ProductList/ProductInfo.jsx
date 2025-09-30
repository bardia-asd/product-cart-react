import React, { Component } from "react";

export default class ProductInfo extends Component {
    render() {
        const { name, category, price } = this.props;
        return (
            <div>
                <span className="text-sm text-rose-400 font-medium">
                    {category}
                </span>
                <h3 className="font-semibold ">{name}</h3>
                <p className="font-semibold text-sm text-red">${price.toFixed(2)}</p>
            </div>
        );
    }
}
