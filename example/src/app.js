import './style/index.scss'

import React from 'react'
import ReactDom from 'react-dom'

import Page from './pages'

ReactDom.render(
    <Page />,
    document.getElementById('ipreview')
);


if (module.hot) {
    module.hot.accept();
}