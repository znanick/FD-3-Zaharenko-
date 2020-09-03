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
    cardMode: 0, // 0 - nothing  1 - add new client  2 - edit client
    viewMode: 0, // 0 - all  1 - active clients  2 - blocked clients
  };

  changeCompany = (index) => {
    this.setState({ choosenCompany: index });
  };

  componentDidMount = () => {
    buttonClick.addListener("EAddNewClient", this.addNewClient);
    buttonClick.addListener("ERemoveClient", this.removeClient);
    buttonClick.addListener("EEditClient", this.editClient);
    buttonClick.addListener("EButtonSave", this.buttonSave);
    buttonClick.addListener("EButtonCencel", this.buttonCencel);
  };

  componentWillUnmount = () => {
    buttonClick.removeListener("EAddNewClient", this.addNewClient);
    buttonClick.removeListener("ERemoveClient", this.removeClient);
    buttonClick.removeListener("EEditClient", this.editClient);
    buttonClick.removeListener("EButtonSave", this.buttonSave);
    buttonClick.removeListener("EButtonCencel", this.buttonCencel);
  };

  addNewClient = () => {
    this.setState({ cardMode: 1 });
  };

  removeClient = (clientKey) => {
    var oldCatalog = [...this.state.clientsCatalog];

    if (confirm("Вы уверены?")) {
      var newCatalog = oldCatalog.filter((el) => el.key != clientKey);
      this.setState({ clientsCatalog: newCatalog });
    }
  };

  editClient = (id) => {
    this.setState({ cardMode: 2, choosenClientId: id });
  };

  buttonSave = (newClientInfo) => {
    if (this.state.cardMode == 1) {
      let id = 0;
      for (var a = 0; a < this.state.clientsCatalog.length; a++) {
        id = parseFloat(this.state.clientsCatalog[a].key);
      }
      id = id + 1;
      newClientInfo.key = id;

      let newClientsCatalog = [...this.state.clientsCatalog];
      newClientsCatalog.push(newClientInfo);

      this.setState({ cardMode: 0, clientsCatalog: newClientsCatalog });
    } else if (this.state.cardMode == 2) {
      let oldCatalog = [...this.state.clientsCatalog];
      var newCatalog = [];
      oldCatalog.forEach((item, key) => {
        if (item.key == newClientInfo.key) {
          newCatalog.push(newClientInfo);
        } else {
          newCatalog.push(item);
        }
      });

      this.setState({ cardMode: 0, clientsCatalog: newCatalog });
    }
  };

  buttonCencel = () => {
    this.setState({ cardMode: 0 });
  };

  viewAll = () => {
    console.log("dsf");
    this.setState({ viewMode: 0 });
  };
  viewActive = () => {
    this.setState({ viewMode: 1 });
  };
  viewBlocked = () => {
    this.setState({ viewMode: 2 });
  };

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
      if (
        this.state.viewMode == 1 &&
        parseFloat(this.state.clientsCatalog[a].balance) > 0
      ) {
        var clientComponent = (
          <Client
            key={this.state.clientsCatalog[a].key}
            clientInfo={this.state.clientsCatalog[a]}
          ></Client>
        );
        clientCode.push(clientComponent);
      } else if (
        this.state.viewMode == 2 &&
        parseFloat(this.state.clientsCatalog[a].balance) < 0
      ) {
        var clientComponent = (
          <Client
            key={this.state.clientsCatalog[a].key}
            clientInfo={this.state.clientsCatalog[a]}
          ></Client>
        );
        clientCode.push(clientComponent);
      } else if (this.state.viewMode == 0) {
        var clientComponent = (
          <Client
            key={this.state.clientsCatalog[a].key}
            clientInfo={this.state.clientsCatalog[a]}
          ></Client>
        );
        clientCode.push(clientComponent);
      }
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

    var buttonAllColor = this.state.viewMode == 0 ? "#4CAF50" : "#008CBA";
    var buttonActiveColor = this.state.viewMode == 1 ? "#4CAF50" : "#008CBA";
    var buttonBlockedColor = this.state.viewMode == 2 ? "#4CAF50" : "#008CBA";

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
          <button
            style={{ backgroundColor:  buttonAllColor  }}
            onClick={this.viewAll}
          >
            Все
          </button>
          <button
            style={{ backgroundColor:  buttonActiveColor  }}
            onClick={this.viewActive}
          >
            Активные
          </button>
          <button
            style={{ backgroundColor:  buttonBlockedColor  }}
            onClick={this.viewBlocked}
          >
            Заблокированные
          </button>
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
