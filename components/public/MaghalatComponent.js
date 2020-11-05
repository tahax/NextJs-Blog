import React, {Component} from 'react';
import '../../styles/maghalat.module.css';
import styleGrid from "bootstrap/dist/css/bootstrap-grid.min.css";

import {List, Avatar, Space} from 'antd';
import {MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons';

const listData = [
    {
        href: 'https://ant.design',
        title: `تیتر تست من`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'در ارائه روزمان مورد نیاز ',
        content:
            'طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خطلب',
    }
];
const IconText = ({icon, text}) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

class Maghalat extends Component {
    render() {
        return (
            <div className='tak-maghalat-wide'>
                <div className={styleGrid["container"]}>
                    <List
                        itemLayout="vertical"
                        size="large"
                        dataSource={listData}
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                extra={
                                    <img
                                        width={272}
                                        alt="logo"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    />
                                }
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar}/>}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default Maghalat;
