import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: "floriphilia.myshopify.com",
  storefrontAccessToken: "2356fcd7cdde3bc67f5bf9a6c2d64645",
});

class ShopContextProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
  };
  componentDidMount() {
    localStorage.checkout
      ? this.fetchCheckout(localStorage.checkout)
      : this.createCheckout();
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout", checkout.id);
    this.setState({ checkout });
  };

  fetchCheckout = async (checkoutId) => {
    const checkout = await client.checkout.fetch(checkoutId);
    this.setState({ checkout });
  };

  fetchProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products });
  };

  fetchProductById = async (productId) => {
    const product = await client.product.fetch(productId);
    this.setState({ product });
  };

  addingLineItems = async (productId) => {
    const lineItemsToAdd = [
      {
        variantId: productId,
        quantity: 1,
      },
    ];

    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );

    this.setState({ checkout });
  };

  updatingLineItems = async (productId, quantity) => {
    const lineItemsToUpdate = [{ id: productId, quantity }];
    const checkout = await client.checkout.updateLineItems(
      this.state.checkout.id,
      lineItemsToUpdate
    );

    this.setState({ checkout });
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };
  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          openCart: this.openCart,
          closeCart: this.closeCart,
          fetchProducts: this.fetchProducts,
          fetchProductById: this.fetchProductById,
          addLineItem: this.addingLineItems,
          updateLineItems: this.updatingLineItems,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopContextProvider;
