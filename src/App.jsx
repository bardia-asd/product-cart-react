import React, { Component } from "react";
import data from "./data.json";
import Shop from "./components/Shop";
import "./index.css";

export default class App extends Component {
    constructor(params) {
        super(params);

        this.state = {
            cart: [],
        };

        this.addToCart = this.addToCart.bind(this);
        this.isItemInCart = this.isItemInCart.bind(this);
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    addToCart(name, price, thumb) {
        const { cart } = this.state;

        const newItem = {
            id: cart.length + 1,
            name,
            count: 1,
            price,
            thumb,
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

    render() {
        const { cart } = this.state;
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
                />
            </>
        );
    }
}
