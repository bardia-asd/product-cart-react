import React, { Component } from "react";

export default class ProductImage extends Component {
    render() {
        const { image, name, isInCart } = this.props;
        return (
            <picture>
                <source media="(min-width: 1280px)" srcSet={image.desktop} />
                <source media="(min-width: 640px)" srcSet={image.tablet} />
                <img
                    src={image.mobile}
                    alt={name}
                    className={`w-full h-auto border-2 ${
                        isInCart(name) ? "border-red" : "border-transparent"
                    } rounded-xl object-cover`}
                />
            </picture>
        );
    }
}
