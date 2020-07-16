"use strict";
var Ishop = React.createClass({
  displayName: "Ishop",

  getInitialState: function () {
    return {
      selectedProductCode: null,
    };
  },

  selectProuduct: function () {},

  render: function () {
    var tableCode = [];
    for (var a = 0; a < this.props.catalog.length; a++) {
      var productComponent = React.createElement(Iprouduct, {
        selectedProductCode: this.props.selectedProductCode,
        cbselectProuduct: this.selectProuduct,
        catalog: this.props.catalog[a],
        key: this.props.catalog[a].code,
      });
      tableCode.push(productComponent);
    }
    return React.DOM.div(
      { className: "CatalogBlock" },
      React.DOM.h1({ className: "text" }, this.props.text),
      React.DOM.table(
        { className: "catalogTable" },
        React.DOM.tbody({}, tableCode)
      )
    );
  },
});
