import React, { Component } from "react";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";

export default class Cart extends Component {
    render() {
        const { cart, onRemove } = this.props;
        return (
            <div className="xl:flex-1 w-full bg-white rounded-xl p-4 shadow">
                <h2 className="text-red text-lg font-bold mb-4">
                    Your Cart (
                    {cart.reduce(
                        (prevCount, currentObj) => prevCount + currentObj.count,
                        0
                    )}
                    )
                </h2>
                {cart.length ? <CartList cart={cart} onRemove={onRemove} /> : <EmptyCart />}
            </div>
        );
    }
}
