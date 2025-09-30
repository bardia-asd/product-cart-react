import React, { Component } from "react";

export default class ProductImage extends Component {
    render() {
        const { image, name } = this.props;
        return (
            <picture>
                <source media="(min-width: 1280px)" srcSet={image.desktop} />
                <source media="(min-width: 640px)" srcSet={image.tablet} />
                <img
                    src={image.mobile}
                    alt={name}
                    className="w-full h-auto rounded-xl object-cover"
                />
            </picture>
        );
    }
}
