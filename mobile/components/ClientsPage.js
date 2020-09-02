import React from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";
import { EventEmitter } from "events";

import { buttonClick } from "./events";

import "./ClientsPage.css";

import Client from "./Client";
import Card from "./Card";

class ClientsPage extends React.PureComponent {
  state = {
    clientsCatalog: this.props.catalog,
    companyCatalog: this.props.companyList,
    choosenCompany: 0,
    choosenClientId: null,
    cardMode: 0, // 0 - nothing  1 - add new client  2 - change client
  };

  changeCompany = (index) => {
    this.setState({ choosenCompany: index });
  };

  componentDidMount = () => {
    buttonClick.addListener("EAddNewClient", this.addNewClient);
    buttonClick.addListener("ERemoveClient", this.removeClient);
    buttonClick.addListener("EEditClient", this.editClient);
  };

  componentWillUnmount = () => {
    buttonClick.removeListener("EAddNewClient", this.addNewClient);
    buttonClick.removeListener("ERemoveClient", this.removeClient);
    buttonClick.removeListener("EEditClient", this.editClient);
  };

  addNewClient = () => {
    this.setState({ cardMode: 1 });
  };

  removeClient = () => {};

  editClient = () => {};

  render() {
    console.log("ClientPage render");
    var companyCode = [];
    this.state.companyCatalog.forEach((company, index) => {
      var butt = (
        <button
          key={index}
          onClick={() => {
            this.changeCompany(index);
          }}
        >
          {company}
        </button>
      );
      companyCode.push(butt);
    });

    var clientCode = [];
    for (var a = 0; a < this.state.clientsCatalog.length; a++) {
      var clientComponent = (
        <Client
          key={this.state.clientsCatalog[a].key}
          clientInfo={this.state.clientsCatalog[a]}
        ></Client>
      );
      clientCode.push(clientComponent);
    }

    var cardCode =
      this.state.cardMode == 0 ? (
        <button
          onClick={() => {
            buttonClick.emit("EAddNewClient");
          }}
        >
          Добавить клиента
        </button>
      ) : (
        <Card
          cardMode={this.state.cardMode}
          clientsCatalog={this.state.clientsCatalog}
          clientId={this.state.choosenClientId}
        ></Card>
      );

    return (
      <div className="pageContainer">
        <div className="companyContainer">
          <div>{companyCode}</div>
          <div>
            Компания {this.state.companyCatalog[this.state.choosenCompany]}
          </div>
        </div>

        <hr />

        <div className="buttonsContainer">
          <button>Все</button>
          <button>Активные</button>
          <button>Заблокированные</button>
        </div>

        <hr />

        <div className="tableContainer">
          <table className="clientsTable">
            <tbody>
              <tr className="tableHead">
                <td>Фамилия</td>
                <td>Имя</td>
                <td>Отчество</td>
                <td>Баланс</td>
                <td>Статус</td>
                <td>Редактировать</td>
                <td>Удалить</td>
              </tr>
              {clientCode}
            </tbody>
          </table>
          <br />
        </div>
        {cardCode}
      </div>
    );
  }
}

export default ClientsPage;
