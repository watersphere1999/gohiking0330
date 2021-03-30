import React, { Component } from 'react'
import App from 'base-shell/lib'
import MUIConfig from 'material-ui-shell/lib'
import merge from 'base-shell/lib/utils/config'
import _config from './config'
import { BrowserRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
const config = merge(MUIConfig, _config)

export default class Demo extends Component {
  render() {
    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App config={config}/>
    </BrowserRouter>
    )
  }
}
