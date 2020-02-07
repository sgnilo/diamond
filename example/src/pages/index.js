import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './nav'
import {Ipreview, Guide} from './components'


const Page = (props) => {
    const routeList = [
        {
            url: '/ipreview',
            component: <Ipreview />
        }
    ]
    return (
        <div className="demo-wrapper">
            <div className="example-header">Diamond</div>
            <Router>
                <Nav />
                <div className="example-wrapper">
                    <Switch>
                        <Route exact path='/'>
                            <Guide />
                        </Route>
                        {routeList.map(item => <Route path={item.url} key={item.url}>{item.component}</Route>)}
                        <Route path='*'>
                            <Guide />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Page