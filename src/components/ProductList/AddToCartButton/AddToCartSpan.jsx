import React, { Component } from "react";
import { ShoppingCart } from "lucide-react";

export default class AddToCartSpan extends Component {
    render() {
        const { onAdd } = this.props;
        return (
            <button
                className="flex items-center justify-center gap-2 w-full h-full font-semibold text-sm cursor-pointer"
                onClick={onAdd}>
                <ShoppingCart size={24} className="text-red" />
                Add to Cart
            </button>
        );
    }
}
