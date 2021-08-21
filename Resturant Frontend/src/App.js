import React, { Component } from "react";
import Layout from "./Components/layout";
import axios from "axios";
class App extends Component {
  state = {
    menuItems: [
      {
        _id: "612006dbd7905f196803ad7a",
        name: "Starter Dough Balls",
        price: " 4.99 ",
        userSelected: "1",
        InStock: "51",
        image: "/static/media/1.619b4737.jpg",
        __v: 0,
      },
      {
        _id: "612006dbd7905f196803ad7b",
        name: "Starter Garlic Pizza Bread ",
        price: " 4.59 ",
        userSelected: "1",
        InStock: "50",
        image: "/static/media/1.619b4737.jpg",
        __v: 0,
      },
      {
        _id: "612006dbd7905f196803ad7c",
        name: "Starter Garlic Pizza Bread with Mozzarella",
        price: " 4.99 ",
        userSelected: "1",
        InStock: "80",
        image: "/static/media/1.619b4737.jpg",
        __v: 0,
      },
      {
        _id: "612006dbd7905f196803ad7d",
        name: "Starter Garlic Bread with Vegan Mozzarella ",
        price: " 4.99 ",
        userSelected: "1",
        InStock: "85",
        image: "/static/media/1.619b4737.jpg",
        __v: 0,
      },
      {
        _id: "612006dbd7905f196803ad7e",
        name: "Starter Meatballs",
        price: " 5.50 ",
        userSelected: "1",
        InStock: "32",
        image: "/static/media/1.619b4737.jpg",
        __v: 0,
      },
      {
        _id: "612006dbd7905f196803ad7f",
        name: "Starter Mozzarella Sticks",
        price: " 3.99 ",
        userSelected: "1",
        InStock: "150",
        image: "/static/media/1.619b4737.jpg",
        __v: 0,
      },
    ],
    userItems: [],
    totalPrice: 0,
  };

  async componentDidMount() {
    await axios
      .get("http://localhost:5000/menu/menuGetAll")
      .then(async (response) => {
        this.setState({ menuItems: response?.data });
      })
      .catch((err) => {
        this.setState({ result: err?.response?.data?.detail });
      });
    this.calculateTotal();
  }
  changeArray = (addArray, removeArray, id) => {
    let foundObject = {};
    const filteredlist = removeArray.filter((element) => {
      if (element._id !== id) return element;
      foundObject = element;
    });
    foundObject.userSelected = 1;
    addArray.push(foundObject);
    return { addArray, filteredlist };
  };

  removeItem = (id) => {
    const { userItems, menuItems } = this.state;
    const { addArray, filteredlist } = this.changeArray(
      menuItems,
      userItems,
      id
    );
    this.setState({ userItems: filteredlist, menuItems: addArray }, () =>
      this.calculateTotal()
    );
  };

  manageItem = (id, operation) => {
    const { userItems } = this.state;

    const filteredlist = userItems.filter((element) => {
      if (element._id === id) {
        element.userSelected =
          operation === "add"
            ? element.userSelected + 1
            : element.userSelected - 1;

        return element;
      }
      return element;
    });

    this.setState({ userItems: filteredlist }, () => this.calculateTotal());
  };

  addItem = (id) => {
    const { userItems, menuItems } = this.state;
    const { addArray, filteredlist } = this.changeArray(
      userItems,
      menuItems,
      id
    );
    this.setState({ userItems: addArray, menuItems: filteredlist }, () =>
      this.calculateTotal()
    );
  };

  calculateTotal = () => {
    const { userItems } = this.state;
    let calculatedPrice = 0;
    for (let element of userItems) {
      let mul = element.price * element.userSelected;
      calculatedPrice = calculatedPrice + mul;
    }

    console.log("calculatedPrice", calculatedPrice);
    this.setState({ totalPrice: calculatedPrice });
  };
  render() {
    return (
      <Layout
        state={this.state}
        addItemToUser={this.addItem}
        removeItemToUser={this.removeItem}
        manageItemUser={this.manageItem}
      />
    );
  }
}

export default App;
