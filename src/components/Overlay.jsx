import React, { Component } from "react";

export default class Overlay extends Component {
    render() {
        const { showModal } = this.props;

        if (!showModal) return null;

        return <div className="fixed inset-0 bg-black/25 z-40"></div>;
    }
}
