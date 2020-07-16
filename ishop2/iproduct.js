"use strict";
var Iprouduct = React.createClass({
  displayName: "Iprouduct",

  getInitialState: function () {
    return {};
  },

  render: function () {
    var product = this.props.catalog;
    var productColor =
      this.props.selectedProductCode == product.code ? "white" : "blue";
    return React.DOM.tr(
      { key: product.code, className: "product", backgroundColor: productColor },
      React.DOM.td({ className: "productName" }, product.name),
      React.DOM.td({ className: "productPrice" }, product.price),
      React.DOM.td(
        { className: "productImg" },
        React.DOM.img({ src: product.imgUrl, width: 100 })
      ),
      React.DOM.td({ className: "productAmount" }, product.amount)
    );
  },
});
