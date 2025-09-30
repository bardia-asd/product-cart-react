import React, { Component } from "react";
import data from "./data.json";
import "./index.css";
import Shop from "./components/Shop";
import Modal from "./components/Modal/Modal";
import Overlay from "./components/Overlay";

export default class App extends Component {
    constructor(params) {
        super(params);

        this.state = {
            cart: [],
            showModal: false,
        };

        this.addToCart = this.addToCart.bind(this);
        this.isItemInCart = this.isItemInCart.bind(this);
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    addToCart(name, price, thumb) {
        const { cart } = this.state;

        const newItem = {
            id: cart.length + 1,
            name,
            count: 1,
            price,
            thumbnail: thumb,
        };

        this.setState({
            cart: [...cart, newItem],
        });
    }

    increaseCount(name) {
        this.setState((prevState) => ({
            cart: prevState.cart.map((item) =>
                item.name === name ? { ...item, count: item.count + 1 } : item
            ),
        }));
    }

    decreaseCount(name) {
        this.setState((prevState) => ({
            cart: prevState.cart
                .map((item) =>
                    item.name === name
                        ? { ...item, count: item.count - 1 }
                        : item
                )
                .filter((item) => item.count > 0),
        }));
    }

    removeFromCart(name) {
        this.setState((prevState) => ({
            cart: prevState.cart.filter((item) => item.name !== name),
        }));
    }

    isItemInCart(name) {
        const { cart } = this.state;
        return cart.some((item) => item.name === name);
    }

    openModal() {
        const { cart } = this.state;

        if (cart.length > 0) {
            this.setState({ showModal: true });
        }
    }

    closeModal() {
        this.setState({ showModal: false, cart: [] });
    }

    render() {
        const { cart, showModal } = this.state;
        return (
            <>
                <Shop
                    items={data}
                    cart={cart}
                    isInCart={this.isItemInCart}
                    onAddItem={this.addToCart}
                    onIncrease={this.increaseCount}
                    onDecrease={this.decreaseCount}
                    onRemove={this.removeFromCart}
                    onOpenModal={this.openModal}
                />
                <Modal
                    cart={cart}
                    showModal={showModal}
                    onCloseModal={this.closeModal}
                />
                <Overlay showModal={showModal} />
            </>
        );
    }
}
