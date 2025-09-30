import React, { Component } from "react";

export default class ModalList extends Component {
    render() {
        const { thumbnail, name, price, count } = this.props;
        return (
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={thumbnail}
                        alt={name}
                        className="w-12 h-12 rounded-sm"
                    />
                    <div>
                        <h5 className="font-semibold text-sm">
                            {name}
                        </h5>
                        <div className="text-rose-500 text-sm">
                            <span className="mr-3 text-red font-semibold">
                                {count}x
                            </span>
                            <span>@ ${price.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <p className="font-semibold text-sm">${(price * count).toFixed(2)}</p>
            </div>
        );
    }
}
