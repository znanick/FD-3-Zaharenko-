import React from "react";
import PropTypes from "prop-types";

import "./Ishop.css";

import Iprouduct from "./Iprouduct";

class Ishop extends React.Component {
  state = {
    selectedProductCode: null,
    catalog: this.props.catalog,
  };

  selectProuduct = (code) => {
    this.setState({ selectedProductCode: code });
  };

  deleteProduct = (item) => {
    if (confirm("Вы уверены?")) {
      var newCatalog = this.state.catalog.filter((el) => el.code != item);
      this.setState({ catalog: newCatalog });
    }
  };

  render() {
    var tableCode = [];
    for (var a = 0; a < this.state.catalog.length; a++) {
      var productComponent = (
        <Iprouduct
          selectedProductCode={this.state.selectedProductCode}
          cbselectProuduct={this.selectProuduct}
          cbdeleteProduct={this.deleteProduct}
          catalog={this.state.catalog[a]}
          key={this.state.catalog[a].code}
        />
      );
      tableCode.push(productComponent);
    }
    return (
      <div className="CatalogBlock">
        <h1 className="text">{this.props.text}</h1> 
        <table className="catalogTable">
          <tbody>{tableCode}</tbody>
        </table>
      </div>
    );
  }
}

export default Ishop;
