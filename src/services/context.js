import React, { Component } from "react";
import Gun from "gun";
import "gun/sea";

const defaultState = {};

const GlobalContext = React.createContext(defaultState);

export class GlobalContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;

    if (window && !(window.gun || window.user || window.sea)) {
      window.gun = Gun([
        "https://gunjs.herokuapp.com/gun",
      ]);
      window.user = window.gun.user();
      window.sea = Gun.SEA;
      // window.authenticated = new CustomEvent('authenticated', {
      //     detail: { authenticated: true },
      // })
    }
  }

  componentDidMount() {
    if (window) {
      // var { user, authenticated } = window
      // user.recall({ sessionStorage: true }, ack => {
      //     if (user.is && user._.sea) window.dispatchEvent(authenticated)
      // })
      // window.addEventListener('authenticated', event => {
      //     this.setState({
      //         ...event.detail,
      //         username: user.is.alias,
      //         access: access(user.is.alias),
      //     })
      // })
    }
  }

  componentWillUnmount() {
    // if (window) window.removeEventListener('authenticated', null)
  }

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;
