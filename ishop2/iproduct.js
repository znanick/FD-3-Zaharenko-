"use strict";
var Iprouduct = React.createClass({
  displayName: "Iprouduct",

  getInitialState: function () {
    return {};
  },

  select: function (EO) {
    if (this.props.selectedProductCode != this.props.catalog.code) {
      this.props.cbselectProuduct(this.props.catalog.code);
    } else {
      this.props.cbselectProuduct(null);
    }
  },

  delete: function () {
    this.props.cbdeleteProduct(this.props.catalog.code);
  },

  render: function () {
    var product = this.props.catalog;

    return React.DOM.tr(
      {
        key: product.code,
        className: "product",
        onClick: this.select,
        style: {
          backgroundColor:
            this.props.selectedProductCode == product.code ? "yellow" : "white",
        },
      },
      React.DOM.td({ className: "productName" }, product.name),
      React.DOM.td({ className: "productPrice" }, product.price),
      React.DOM.td(
        { className: "productImg" },
        React.DOM.img({ src: product.imgUrl, width: 100 })
      ),
      React.DOM.td({ className: "productAmount" }, product.amount),
      React.DOM.td(
        { className: "delete" },
        React.DOM.button({ onClick: this.delete }, "Delete")
      )
    );
  },
});
