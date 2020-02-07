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
                },
                {
                    name: '快速上手',
                    url: '/usage'
                },
                {
                    name: '开发指南',
                    url: '/develope'
                }
            ]
        },
        {
            title: '通用',
            child: [
                {
                    name: 'Button 按钮',
                    url: '/button'
                },
                {
                    name: 'Icon 图标',
                    url: '/icon'
                },
                {
                    name: 'Typography 排版',
                    url: '/typography'
                }
            ]
        },
        {
            title: '布局',
            child: [
                {
                    name: 'Grid 栅格',
                    url: '/grid'
                },
                {
                    name: 'Layout 布局',
                    url: '/layout'
                }
            ]
        },
        {
            title: '导航',
            child: [
                {
                    name: 'Affix 固钉',
                    url: '/affix'
                },
                {
                    name: 'Breadcrumb 面包屑',
                    url: '/breadcrumb'
                },
                {
                    name: 'Dropdown 下拉菜单',
                    url: '/dropdown'
                },
                {
                    name: 'Menu 导航菜单',
                    url: '/menu'
                },
                {
                    name: 'Pagination 分页',
                    url: '/pagination'
                },
                {
                    name: 'Pageheader 页头',
                    url: '/pageheader'
                },
                {
                    name: 'Steps 步骤条',
                    url: '/steps'
                }
            ]
        },
        {
            title: '数据录入',
            child: [
                {
                    name: 'Autocomplete 自动完成',
                    url: '/autocomplete'
                },
                {
                    name: 'Checkbox 多选框',
                    url: '/checkbox'
                },
                {
                    name: 'Cascader 级联选择',
                    url: '/cascader'
                },
                {
                    name: 'Datepicker 日期选择框',
                    url: '/datepicker'
                },
                {
                    name: 'Form 表单',
                    url: '/form'
                },
                {
                    name: 'Inputnumber 数字输入框',
                    url: '/inputnumber'
                },
                {
                    name: 'Input 输入框',
                    url: '/input'
                },
                {
                    name: 'Mentions 提及',
                    url: '/mentions'
                },
                {
                    name: 'Rate 评分',
                    url: '/rate'
                },
                {
                    name: 'Radio 单选框',
                    url: '/radio'
                },
                {
                    name: 'Switch 开关',
                    url: '/switch'
                },
                {
                    name: 'Slider 滑动输入条',
                    url: '/slider'
                },
                {
                    name: 'Select 选择器',
                    url: '/select'
                },
                {
                    name: 'Treeselect 树选择',
                    url: '/treeselect'
                },
                {
                    name: 'Transfer 穿梭框',
                    url: '/transfer'
                },
                {
                    name: 'Timepicker 时间选择框',
                    url: '/timepicker'
                },
                {
                    name: 'Upload 上传',
                    url: '/upload'
                }
            ]
        },
        {
            title: '展示',
            child: [
                {
                    name: 'Avatar 头像',
                    url: '/avatar'
                },
                {
                    name: 'Badge 徽标数',
                    url: '/badge'
                },
                {
                    name: 'Comment 评论',
                    url: '/comment'
                },
                {
                    name: 'Collapse 折叠面板',
                    url: '/collapse'
                },
                {
                    name: 'Carousel 走马灯',
                    url: '/carousel'
                },
                {
                    name: 'Card 卡片',
                    url: '/card'
                },
                {
                    name: 'Calendar 日历',
                    url: '/calendar'
                },
                {
                    name: 'Descriptions 描述列表',
                    url: '/descriptions'
                },
                {
                    name: 'Empty 空状态',
                    url: '/empty'
                },
                {
                    name: 'Ipreview 图片预览',
                    url: '/ipreview'
                },
                {
                    name: 'List 列表',
                    url: '/list'
                },
                {
                    name: 'Popover 气泡卡片',
                    url: '/popover'
                },
                {
                    name: 'Statistic 统计数值',
                    url: '/statistic'
                },
                {
                    name: 'Tree 树形控件',
                    url: '/tree'
                },
                {
                    name: 'Tooltip 文字提示',
                    url: '/tooltip'
                },
                {
                    name: 'Timeline 时间轴',
                    url: '/timeline'
                },
                {
                    name: 'Tag 标签',
                    url: '/tag'
                },
                {
                    name: 'Tabs 标签页',
                    url: '/tabs'
                },
                {
                    name: 'Table 表格',
                    url: '/table'
                }
            ]
        },
        {
            title: '反馈',
            child: [
                {
                    name: 'Alert 警告提示',
                    url: '/alert'
                },
                {
                    name: 'Drawer 抽屉',
                    url: '/drawer'
                },
                {
                    name: 'Modal 对话框',
                    url: '/modal'
                },
                {
                    name: 'Message 全局提示',
                    url: '/message'
                },
                {
                    name: 'Notification 通知提醒框',
                    url: '/notification'
                },
                {
                    name: 'Progress 进度条',
                    url: '/progress'
                },
                {
                    name: 'Popconfirm 气泡确认框',
                    url: '/popconfirm'
                },
                {
                    name: 'Result 结果',
                    url: '/result'
                },
                {
                    name: 'Spin 加载中',
                    url: '/spin'
                },
                {
                    name: 'Skeleton 骨架屏',
                    url: '/Skeleton'
                }
            ]
        },
        {
            title: '其他',
            child: [
                {
                    name: 'Anchor 锚点',
                    url: '/anchor'
                },
                {
                    name: 'Backtop 回到顶部',
                    url: '/backtop'
                },
                {
                    name: 'Configprovider 全局化配置',
                    url: '/configprovider'
                },
                {
                    name: 'Divider 分割线',
                    url: '/divider'
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