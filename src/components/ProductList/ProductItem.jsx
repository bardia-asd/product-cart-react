import React, { Component } from "react";
import ProductImage from "./ProductImage";
import AddToCartButton from "./AddToCartButton/AddToCartButton";
import ProductInfo from "./ProductInfo";

export default class ProductItem extends Component {
    render() {
        const { image, name, category, price } = this.props;
        return (
            <div className="space-y-5 sm:space-y-8">
                <div className="relative">
                    <ProductImage image={image} name={name} />
                    <AddToCartButton />
                </div>

                <ProductInfo name={name} category={category} price={price} />
            </div>
        );
    }
}
