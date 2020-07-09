"use strict";

var FilterStrs = React.createClass({
  displayName: "FilterStrs",

  getInitialState: function () {
    return {
      sortState: false,
      filterState: "",
      strsView: this.props.strs,
    };
  },

  filterList: function () {
    let str = this.props.strs.slice();
    if (this.state.filterState) {
      str = str.filter((s) => s.indexOf(this.state.filterState) != -1);
    }
    if (this.state.sortState) {
      str.sort();
    }
    this.setState({ strsView: str },);
  },

  sortStr:function(eo){
    this.setState({sortState: eo.target.checked}, this.filterList)
  },

  filterStr: function(eo){
    this.setState({filterState: eo.target.value}, this.filterList)
  }, 

  buttonReset: function(){
    this.setState({sortState:false, filterState:'', strsView: this.props.strs})
  },

  render: function () {
    

    return React.DOM.div(
      { className: "Filter" },
      React.DOM.input({ type:'checkbox', onClick:this.sortStr, value:this.state.sortState}),
      React.DOM.input({ type:'text', onChange:this.filterStr, value:this.state.filterState}),
      React.DOM.button({  onClick:this.buttonReset}, "Сброс"),
      React.DOM.div ({className:'textArea'}, this.state.strsView)
    );
  },
});
