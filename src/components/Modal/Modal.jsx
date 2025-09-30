import React, { Component } from "react";
import ModalList from "./ModalList";
import Icon from "../../../public/assets/svgs/icon-order-confirmed.svg";

export default class Modal extends Component {
    render() {
        const { cart, showModal, onCloseModal } = this.props;

        if (!showModal) return null;
        return (
            <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50">
                <div
                    className="w-full max-w-md md:rounded-xl bg-white text-rose-900 p-5
                    md:translate-y-0 md:opacity-100 
                    transform transition-transform duration-300
                    rounded-t-xl md:rounded-t-none">
                    <img src={Icon} alt="Icon" className="mx-auto" />
                    <h2 className="font-bold text-3xl mt-4 text-center">
                        Order Confirmed
                    </h2>
                    <p className="text-rose-500 text-sm text-center">
                        We hope you enjoy your food!
                    </p>

                    <div className="bg-rose-100 p-3 my-4 rounded-md">
                        <div className="flex flex-col gap-2">
                            {cart.map((item) => (
                                <ModalList key={item.id} {...item} />
                            ))}
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <p className="text-rose-500 font-medium">
                                Order Total
                            </p>
                            <p className="font-bold text-2xl">
                                $
                                {cart
                                    .reduce(
                                        (prev, item) =>
                                            prev + item.price * item.count,
                                        0
                                    )
                                    .toFixed(2)}
                            </p>
                        </div>
                    </div>

                    <button
                        className="w-full h-12 rounded-full bg-red text-white cursor-pointer"
                        onClick={onCloseModal}>
                        Start New Order
                    </button>
                </div>
            </div>
        );
    }
}
