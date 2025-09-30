import React, { Component } from "react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

export default class CartControls extends Component {
    render() {
        const { onIncrease, cart, itemName, onDecrease } = this.props;

        // Find the specific item in the cart and get its count
        const cartItem = cart.find((item) => item.name === itemName);
        const count = cartItem ? cartItem.count : 0;

        return (
            <div className="flex items-center justify-between h-full px-3 bg-red text-white">
                <button
                    className="flex items-center justify-center w-5 h-5 rounded-full border border-white cursor-pointer"
                    onClick={onDecrease}>
                    <Minus size={14} />
                </button>
                {count}
                <button
                    className="flex items-center justify-center w-5 h-5 rounded-full border border-white cursor-pointer"
                    onClick={onIncrease}>
                    <Plus size={14} />
                </button>
            </div>
        );
    }
}
