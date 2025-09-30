import React, { Component } from "react";
import { ShoppingCart } from "lucide-react";

export default class AddToCartSpan extends Component {
    render() {
        return (
            <span className="flex items-center justify-center gap-2 h-full font-semibold text-sm cursor-pointer">
                <ShoppingCart size={24} className="text-red" />
                Add to Cart
            </span>
        );
    }
}
