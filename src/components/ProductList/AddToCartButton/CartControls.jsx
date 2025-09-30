import React, { Component } from "react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

export default class CartControls extends Component {
    render() {
        return (
            <div className="flex items-center justify-between h-full px-3 bg-red text-white">
                <button className="flex items-center justify-center w-5 h-5 rounded-full border border-white cursor-pointer">
                    <Plus size={14} />
                </button>
                0
                <button className="flex items-center justify-center w-5 h-5 rounded-full border border-white cursor-pointer">
                    <Minus size={14} />
                </button>
            </div>
        );
    }
}
