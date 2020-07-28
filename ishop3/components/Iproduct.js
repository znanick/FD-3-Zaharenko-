import React from "react";
import PropTypes from "prop-types";

import "./Iproduct.css";

class Iproduct extends React.Component {
  state = {};

  select = (EO) => {
    if (this.props.selectedProductCode != this.props.catalog.code) {
      this.props.cbselectProuduct(this.props.catalog.code);
    } else {
      this.props.cbselectProuduct(null);
    }
  };

  delete = () => {
    this.props.cbdeleteProduct(this.props.catalog.code);
  };

  render() {
    var product = this.props.catalog;
    var trColor =
      this.props.selectedProductCode == product.code ? "yellow" : "white";
    return (
      <React.Fragment>
        <tr
          key={product.code}
          className={"product"}
          onClick={this.select}
          style={{ backgroundColor: trColor }}
        >
          <td className={"productName"}>{product.name} </td>
          <td className={"productPrice"}>{product.price} </td>
          <td className={"productImg"}>
            <img src={product.imgUrl} width={100} />
          </td>
          <td className={"productAmount"}>{product.amount} </td>
          <td className={"delete"}>
            <button onClick={this.delete}>Delete</button>
            <button onClick={this.edit}>Edit</button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Iproduct;
