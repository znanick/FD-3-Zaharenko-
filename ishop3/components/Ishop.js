import React from "react";
import PropTypes from "prop-types";

import "./Ishop.css";

import Iproduct from "./Iproduct";
import Card from "./Card";

class Ishop extends React.Component {
  state = {
    selectedProductCode: null,
    catalog: this.props.catalog,
    cardMode: 0, //0 - nothing  1 - view  2 - edit  3 - add new item
    isFormEdit: false,
  };

  cbselectProuduct = (code) => {
    this.setState({ selectedProductCode: code, cardMode: 1 });
  };

  cbSaveEdit = (newItem) => {
    let catalog = this.state.catalog;
    var newCatalog = [];
    catalog.map((item) => {
      item = item.code == newItem.code ? newItem : item;
      newCatalog.push(item);
    });
    console.log(newCatalog);
    this.setState({ catalog: newCatalog, cardMode: 1, isFormEdit: false });
  };

  cbCencel = () => {
    this.setState({
      selectedProductCode: null,
      cardMode: 0,
      isFormEdit: false,
    });
  };

  cbFormEdit = () => {
    this.setState({ isFormEdit: true });
  };

  deleteProduct = (item) => {
    if (confirm("Вы уверены?")) {
      var newCatalog = this.state.catalog.filter((el) => el.code != item);
      this.setState({ catalog: newCatalog });
    }
  };

  editProduct = (itemCode) => {
    this.setState({ selectedProductCode: itemCode, cardMode: 2 });
  };

  newProduct = () => {
    this.setState({
      cardMode: 3,
      selectedProductCode: null,
      isFormEdit: true,
    });
  };

  cbAddItem = (newItem) => {
    var newCatalog = this.state.catalog;
    newCatalog.push(newItem);

    this.setState({ catalog: newCatalog, cardMode: 1, isFormEdit: false });
  };

  render() {
    var tableCode = [];
    for (var a = 0; a < this.state.catalog.length; a++) {
      var productComponent = (
        <Iproduct
          selectedProductCode={this.state.selectedProductCode}
          cbselectProuduct={this.cbselectProuduct}
          cbdeleteProduct={this.deleteProduct}
          cbeditProduct={this.editProduct}
          item={this.state.catalog[a]}
          key={this.state.catalog[a].code}
          cardMode={this.state.cardMode}
          isFormEdit={this.state.isFormEdit}
        />
      );
      tableCode.push(productComponent);
    }

    var cardCode = [];

    if (this.state.cardMode == 3) {
      var id = 0;
      for (var a = 0; a < this.state.catalog.length; a++) {
        id = this.state.catalog[a].code;
      }
      id = id + 1;
      var cardComponent = (
        <Card
          catalog={this.state.catalog}
          selectedProductCode={this.state.selectedProductCode}
          cardMode={this.state.cardMode}
          item={{
            name: "",
            code: id,
            price: 0,
            description: "",
            amount: 0,
          }}
          key={id}
          cbSaveEdit={this.cbSaveEdit}
          cbCencel={this.cbCencel}
          cbFormEdit={this.cbFormEdit}
          cbAddItem={this.cbAddItem}
        />
      );
    } else {
      for (var a = 0; a < this.state.catalog.length; a++) {
        if (this.state.selectedProductCode == this.state.catalog[a].code) {
          var cardComponent = (
            <Card
              selectedProductCode={this.state.selectedProductCode}
              cardMode={this.state.cardMode}
              item={this.state.catalog[a]}
              key={this.state.catalog[a].code}
              cbSaveEdit={this.cbSaveEdit}
              cbCencel={this.cbCencel}
              cbFormEdit={this.cbFormEdit}
              cbAddItem={this.cbAddItem}
            />
          );
        }
      }
    }

    cardCode.push(cardComponent);

    return (
      <div className="CatalogBlock">
        <h1 className="text">{this.props.text}</h1>
        <table className="catalogTable">
          <tbody>{tableCode}</tbody>
        </table>
        <button
          onClick={this.newProduct}
          disabled={
            this.state.cardMode != 0 && this.state.cardMode != 1 ? true : false
          }
        >
          New product
        </button>
        <div>{cardCode}</div>
      </div>
    );
  }
}

export default Ishop;
