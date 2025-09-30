import React, { Component } from "react";
import Icon from "../../../public/assets/svgs/icon-carbon-neutral.svg";
import CartItem from "./CartItem";

export default class CartList extends Component {
    render() {
        return (
            <div className="space-y-6">
                <div className="flex flex-col">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-rose-500 font-medium">Order Total</p>
                    <p className="font-bold text-2xl">$46.50</p>
                </div>

                <div className="flex items-center justify-center gap-2 px-1 py-4 rounded-md bg-rose-100">
                    <img src={Icon} alt="Icon Carbon Neutral" />
                    <p className="text-rose-500 text-sm sm:text-base">
                        This is a{" "}
                        <span className="font-semibold">carbon-neutral</span>{" "}
                        delivery
                    </p>
                </div>

                <button className="w-full h-12 rounded-full bg-red text-white cursor-pointer">
                    Confirm Order
                </button>
            </div>
        );
    }
}
