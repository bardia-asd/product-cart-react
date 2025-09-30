import React, { Component } from "react";
import { X } from "lucide-react";

export default class CartItem extends Component {
    render() {
        return (
            <div className="flex items-center justify-between py-3 border-b border-slate-200">
                <div>
                    <h4 className="font-semibold">Classic Tiramisu</h4>
                    <div className="flex gap-1.5 text-rose-500">
                        <span className="text-red font-semibold mr-2">1x</span>
                        <span>@ $5.50</span>
                        <span className="font-semibold">$5.50</span>
                    </div>
                </div>
                <button className="flex items-center justify-center w-4 h-4 border border-rose-500 rounded-full text-shadow-rose-500 cursor-pointer">
                    <X size={14} />
                </button>
            </div>
        );
    }
}
