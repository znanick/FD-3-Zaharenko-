import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

class Card extends React.Component {
  state = {
    item: this.props.item,
    name: this.props.item.name,
    price: parseFloat(this.props.item.price),
    description: this.props.item.description,
    amount: parseFloat(this.props.item.amount),
    validForm: false,
    notValidPriceTxt: "",
    notValidNameTxt: "",
    notValidDescriptionTxt: "",
    notValidAmountTxt: "",
  };

  cbSaveEdit = () => {
    var editItem = this.state.item;
    editItem.name = this.state.name;
    editItem.price = this.state.price + "$";
    editItem.description = this.state.description;
    editItem.amount = this.state.amount + " шт";
    this.setState({ item: editItem });
    this.props.cbSaveEdit(this.state.item);
  };

  cbCencel = () => {
    this.props.cbCencel(this.state.item);
  };

  validName = (EO) => {
    var errTxt = "";
    if (!this.state.name) {
      errTxt = "Enter product name";
    }
    this.validForm(errTxt);
    this.setState({ notValidNameTxt: errTxt });
  };

  validDescription = (EO) => {
    var errTxt = "";
    if (!this.state.description) {
      errTxt = "Describe the product";
    } else if (EO.target.value.length < 20) {
      errTxt = "Too short description";
    }
    this.setState({ notValidDescriptionTxt: errTxt });
    this.validForm();
  };

  validPrice = (EO) => {
    var errTxt = "";
    if (!this.state.price) {
      errTxt = "Enter price";
    } else if (EO.target.value <= 0) {
      errTxt = "Incorrect value";
    }
    this.setState({ notValidPriceTxt: errTxt });
    this.validForm();
  };

  validAmount = (EO) => {
    var errTxt = "";
    if (!this.state.amount) {
      errTxt = "Enter product amount";
    } else if (EO.target.value <= 0) {
      errTxt = "Incorrect value";
    }
    this.setState({ notValidAmountTxt: errTxt });
    this.validForm();
  };

  validForm = () => {
    if (
      this.state.name &&
      this.state.price &&
      this.state.description &&
      this.state.amount
    ) {
      this.setState({ validForm: true });
    } else {
      this.setState({ validForm: false });
    }
  };

  cbFormEdit = () => {
    this.props.cbFormEdit();
  };

  cbAddItem = () => {
    var newItem = this.state.item;
    newItem.code = this.state.item.code;
    newItem.name = this.state.name;
    newItem.price = this.state.price + "$";
    newItem.description = this.state.description;
    newItem.amount = this.state.amount + " шт";

    this.props.cbAddItem(newItem);
  };

  removingZeros = (num) => {
    if (num == "price") {
      var newNum = this.state.price;
      newNum = newNum.replace(/^0+/, "");
      this.setState({ price: newNum });
    } else if (num == "amount") {
      var newNum = this.state.amount;
      newNum = newNum.replace(/^0+/, "");
      this.setState({ amount: newNum });
    }
  };

  render() {
    // view
    var product = this.state.item;
    var code = [];
    if (this.props.cardMode == 1) {
      var cardComponent = (
        <div key={1}>
          <h1>{product.name}</h1>
          <div>{product.price}</div>
          <div>{product.amount}</div>
        </div>
      );
    } else {
      if (this.props.cardMode == 2) {
        var headText = "Edit product";
        var key = 2;

        var buttonComponent = (
          <button onClick={this.cbSaveEdit} disabled={!this.state.validForm}>
            Save
          </button>
        );
      } else if (this.props.cardMode == 3) {
        var headText = "Add product";
        var key = 3;

        var buttonComponent = (
          <button onClick={this.cbAddItem} disabled={!this.state.validForm}>
            Add
          </button>
        );
      }
      var cardComponent = (
        <div key={key}>
          <h1>{headText}</h1>
          <p>ID: {this.state.item.code}</p>
          <span>Name</span>
          <input
            type="text"
            value={this.state.name}
            onChange={(EO) => {
              this.setState({ name: EO.target.value });
              this.validForm();
              this.cbFormEdit();
            }}
            onBlur={this.validName}
          ></input>
          <span className="errTxt">{this.state.notValidNameTxt}</span> <br />
          <span>Price</span>{" "}
          <input
            type="number"
            value={this.state.price}
            onChange={(EO) => {
              this.setState({ price: EO.target.value });
              this.cbFormEdit();
            }}
            onBlur={(EO) => {
              this.validPrice(EO);
              this.removingZeros("price");
            }}
          ></input>
          <span className="errTxt">{this.state.notValidPriceTxt}</span>
          <br />
          <span>Description</span>{" "}
          <input
            type="text"
            value={this.state.description}
            onChange={(EO) => {
              this.setState({ description: EO.target.value });
              this.cbFormEdit();
            }}
            onBlur={this.validDescription}
          ></input>
          <span className="errTxt">{this.state.notValidDescriptionTxt}</span>{" "}
          <br />
          <span>Amount</span>{" "}
          <input
            type="number"
            value={this.state.amount}
            onChange={(EO) => {
              this.setState({ amount: EO.target.value });
              this.cbFormEdit();
            }}
            onBlur={(EO) => {
              this.validAmount(EO);
              this.removingZeros("amount");
            }}
          ></input>
          <span className="errTxt">{this.state.notValidAmountTxt}</span>
          <br />
          {buttonComponent}
          <button onClick={this.cbCencel}>Cencel</button>
        </div>
      );
    }

    code.push(cardComponent);

    return <div>{code}</div>;
  }
}

export default Card;
