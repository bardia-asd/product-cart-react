import React, { Component } from "react";
import ProductImage from "./ProductImage";
import AddToCartButton from "./AddToCartButton/AddToCartButton";
import ProductInfo from "./ProductInfo";

export default class ProductItem extends Component {
    render() {
        const {
            image,
            name,
            category,
            price,
            onAddItem,
            isInCart,
            onIncrease,
            onDecrease,
            cart,
        } = this.props;
        return (
            <div className="space-y-5 sm:space-y-8">
                <div className="relative">
                    <ProductImage
                        image={image}
                        name={name}
                        isInCart={isInCart}
                    />
                    <AddToCartButton
                        image={image}
                        name={name}
                        price={price}
                        onAddItem={onAddItem}
                        isInCart={isInCart}
                        onIncrease={onIncrease}
                        onDecrease={onDecrease}
                        cart={cart}
                    />
                </div>

                <ProductInfo name={name} category={category} price={price} />
            </div>
        );
    }
}
