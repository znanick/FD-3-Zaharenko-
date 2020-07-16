"use strict";
var Ishop = React.createClass({
  displayName: "Ishop",

  getInitialState: function () {
    return {
      selectedProductCode: null,
      catalog: this.props.catalog,
    };
  },

  selectProuduct: function (code) {
    this.setState({ selectedProductCode: code });
  },

  deleteProduct: function (item) {
    if (confirm("Вы уверены?")) {
      var newCatalog = this.state.catalog.filter((el) => el.code != item);
      this.setState({ catalog: newCatalog });
    }
  },

  render: function () {
    var tableCode = [];
    for (var a = 0; a < this.state.catalog.length; a++) {
      var productComponent = React.createElement(Iprouduct, {
        selectedProductCode: this.state.selectedProductCode,
        cbselectProuduct: this.selectProuduct,
        cbdeleteProduct: this.deleteProduct,
        catalog: this.state.catalog[a],
        key: this.state.catalog[a].code,
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
