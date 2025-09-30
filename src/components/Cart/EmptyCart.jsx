import React, { Component } from "react";
import Illustration from '../../../public/assets/svgs/illustration-empty-cart.svg'


export default class EmptyCart extends Component {
    render() {
        return (
            <div className="flex flex-col items-center justify-center my-3">
                <img
                    src={Illustration}
                    alt="Empty Illustration"
                    className="w-28 h-auto"
                />
                <p className="text-rose-500 font-medium">
                    Your added items will appear here
                </p>
            </div>
        );
    }
}
