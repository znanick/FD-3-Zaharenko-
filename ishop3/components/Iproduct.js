import React from "react";
import PropTypes from "prop-types";

import "./Iproduct.css";

class Iproduct extends React.Component {
  state = {};

  select = (EO) => {
    if (!this.props.isFormEdit) {
      if (this.props.selectedProductCode != this.props.item.code) {
        this.props.cbselectProuduct(this.props.item.code);
      } else {
        this.props.cbselectProuduct(null);
      }
    }
  };

  delete = () => {
    this.props.cbdeleteProduct(this.props.item.code);
  };

  edit = () => {
    this.props.cbeditProduct(this.props.item.code);
  };

  render() {
    var product = this.props.item;
    var trColor =
      this.props.selectedProductCode == product.code ? "yellow" : "white";
    return (
      <React.Fragment>
        <tr
          key={product.code}
          className={"product"}
          style={{ backgroundColor: trColor }}
        >
          <td onClick={this.select} className={"productName"}>
            {product.name}{" "}
          </td>
          <td onClick={this.select} className={"productPrice"}>
            {product.price}{" "}
          </td>
          <td onClick={this.select} className={"productImg"}>
            <p>{product.description}</p>
          </td>
          <td onClick={this.select} className={"productAmount"}>
            {product.amount}{" "}
          </td>
          <td className={"buttonBlock"}>
            <button
              onClick={this.delete}
              disabled={
                this.props.cardMode != 0 && this.props.cardMode != 1
                  ? true
                  : false
              }
            >
              Delete
            </button>
            <button
              onClick={this.edit}
              disabled={
                this.props.cardMode == 3 || this.props.isFormEdit ? true : false
              }
            >
              Edit
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Iproduct;
