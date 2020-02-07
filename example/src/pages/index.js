import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './nav'
import {Ipreview, Guide, Affix, Alert, Anchor, AutoComplete, Avatar, BackTop, Badge, BreadCrumb, Button, Calendar, Card, Carousel, Cascader, CheckBox, Collapse, Comment, ConfigProvider, DatePicker, Descriptions, Develope, Divider, Drawer, DropDown, Empty, Form, Grid, Icon, Input, InputNumber, Layout, List, Mentions, Menu, Message, Modal, Notification, PageHeader, Pagination, PopConfirm, PopOver, Progress, Radio, Rate, Result, Select, Skeleton , Slider, Spin, Statistic, Steps, Switch as FormSwitch, Table, Tabs, Tag, TimeLine, TimePicker, Tooltip, Transfer, Tree, TreeSelect, Typography, Upload, Usage} from './components'


const Page = (props) => {
    const routeList = [
        {
            url: '/ipreview',
            component: <Ipreview />
        },
        {
            component: <Guide />,
            url: '/guide'
        },
        {
            component: <Usage />,
            url: '/usage'
        },
        {
            component: <Develope />,
            url: '/develope'
        },
        {
            component: <Button />,
            url: '/button'
        },
        {
            component: <Icon />,
            url: '/icon'
        },
        {
            component: <Typography />,
            url: '/typography'
        },
        {
            component: <Grid />,
            url: '/grid'
        },
        {
            component: <Layout />,
            url: '/layout'
        },
        {
            component: <Affix />,
            url: '/affix'
        },
        {
            component: <BreadCrumb />,
            url: '/breadcrumb'
        },
        {
            component: <DropDown />,
            url: '/dropdown'
        },
        {
            component: <Menu />,
            url: '/menu'
        },
        {
            component: <Pagination />,
            url: '/pagination'
        },
        {
            component: <PageHeader />,
            url: '/pageheader'
        },
        {
            component: <Steps />,
            url: '/steps'
        },
        {
            component: <AutoComplete />,
            url: '/autocomplete'
        },
        {
            component: <CheckBox />,
            url: '/checkbox'
        },
        {
            component: <Cascader />,
            url: '/cascader'
        },
        {
            component: <DatePicker />,
            url: '/datepicker'
        },
        {
            component: <Form />,
            url: '/form'
        },
        {
            component: <InputNumber />,
            url: '/inputnumber'
        },
        {
            component: <Input />,
            url: '/input'
        },
        {
            component: <Mentions />,
            url: '/mentions'
        },
        {
            component: <Rate />,
            url: '/rate'
        },
        {
            component: <Radio />,
            url: '/radio'
        },
        {
            component: <FormSwitch />,
            url: '/switch'
        },
        {
            component: <Slider />,
            url: '/slider'
        },
        {
            component: <Select />,
            url: '/select'
        },
        {
            component: <TreeSelect />,
            url: '/treeselect'
        },
        {
            component: <Transfer />,
            url: '/transfer'
        },
        {
            component: <TimePicker />,
            url: '/timepicker'
        },
        {
            component: <Upload />,
            url: '/upload'
        },
        {
            component: <Avatar />,
            url: '/avatar'
        },
        {
            component: <Badge />,
            url: '/badge'
        },
        {
            component: <Comment />,
            url: '/comment'
        },
        {
            component: <Collapse />,
            url: '/collapse'
        },
        {
            component: <Carousel />,
            url: '/carousel'
        },
        {
            component: <Card />,
            url: '/card'
        },
        {
            component: <Calendar />,
            url: '/calendar'
        },
        {
            component: <Descriptions />,
            url: '/descriptions'
        },
        {
            component: <Empty />,
            url: '/empty'
        },
        {
            component: <List />,
            url: '/list'
        },
        {
            component: <PopOver />,
            url: '/popover'
        },
        {
            component: <Statistic />,
            url: '/statistic'
        },
        {
            component: <Tree />,
            url: '/tree'
        },
        {
            component: <Tooltip />,
            url: '/tooltip'
        },
        {
            component: <TimeLine />,
            url: '/timeline'
        },
        {
            component: <Tag />,
            url: '/tag'
        },
        {
            component: <Tabs />,
            url: '/tabs'
        },
        {
            component: <Table />,
            url: '/table'
        },
        {
            component: <Alert />,
            url: '/alert'
        },
        {
            component: <Drawer />,
            url: '/drawer'
        },
        {
            component: <Modal />,
            url: '/modal'
        },
        {
            component: <Message />,
            url: '/message'
        },
        {
            component: <Notification />,
            url: '/notification'
        },
        {
            component: <Progress />,
            url: '/progress'
        },
        {
            component: <PopConfirm />,
            url: '/popconfirm'
        },
        {
            component: <Result />,
            url: '/result'
        },
        {
            component: <Spin />,
            url: '/spin'
        },
        {
            component: <Skeleton />,
            url: '/Skeleton'
        },
        {
            component: <Anchor />,
            url: '/anchor'
        },
        {
            component: <BackTop />,
            url: '/backtop'
        },
        {
            component: <ConfigProvider />,
            url: '/configprovider'
        },
        {
            component: <Divider />,
            url: '/divider'
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