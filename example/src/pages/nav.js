import React, {Fragment, useEffect} from "react"
import {Link, useLocation} from 'react-router-dom'

const Nav = (props) => {
    const location = useLocation()
    const navList = [
        {
            title: '开发指南',
            child: [
                {
                    name: '介绍',
                    url: '/guide'
                }
            ]
        },
        {
            title: '展示组件',
            child: [
                {
                    name: 'Ipreview 图片预览',
                    url: '/ipreview'
                }
            ]
        }
    ]
    return <div className="example-nav">
        {navList.map(item => <Fragment key={item.title}>
            <div className="nav-large-title">
                {item.title}
            </div>
            {item.child && item.child.map(child => <Link to={child.url} key={child.url}>
                <div className={`nav-item${location.pathname === child.url ? " nav-item-active" : ""}`}>
                    {child.name}
                </div>
            </Link>)}
        </Fragment>)}
    </div>
}

export default Nav