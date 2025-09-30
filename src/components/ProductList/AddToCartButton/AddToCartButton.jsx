import React, { Component } from "react";
import AddToCartSpan from "./AddToCartSpan";
import CartControls from "./CartControls";

export default class AddToCartButton extends Component {
    render() {
        return (
            <div className="absolute -bottom-5 left-0 right-0 w-36 sm:w-44 h-10 mx-auto bg-white rounded-full border border-red overflow-hidden">
                <AddToCartSpan />
                {/* <CartControls /> */}
            </div>
        );
    }
}
