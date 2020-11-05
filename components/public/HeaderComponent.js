import React, {Component} from 'react';
import '../../styles/header.module.css';
import styleGrid from 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import {Menu, Dropdown, Button} from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <Link href="/login-signup/signup"><a>ثبت نام</a></Link>
        </Menu.Item>
        <Menu.Item>
            <Link href="/login-signup/login"><a>ورود</a></Link>
        </Menu.Item>
    </Menu>
);

class Header extends Component {

    state = {
        size: 'large',
    };

    handleSizeChange = e => {
        this.setState({size: e.target.value});
    };

    render() {
        const {size} = this.state;
        return (
            <div className={styleGrid["clearfix"]}>
                <div className='tak-header-wide'>
                    <div className={styleGrid["container"]}>
                        <div className="tak-header">
                            <img src="/menu-icon/menu2.svg" alt=""
                                 className={styleGrid['d-flex'] + " " + styleGrid['d-md-none'] + " " + ['tak-menu-icon']}/>
                            <span className={styleGrid['d-flex'] + " " + styleGrid['d-md-none'] + " " + ['tak-robo-span']}>
                                <span className="tak-robotext">RoboBoxs</span>
                                <img src="/logo/roboboxs.svg" alt=""
                                 className={styleGrid['d-flex'] + " " + styleGrid['d-md-none'] + " " + ['tak-logo-icon']}/>
                            </span>
                            <ul className={styleGrid['d-none'] + " " + styleGrid['d-md-flex'] + " " + ['nav']}>
                                <li className='tak-li'>
                                    <img src="/logo/roboboxs.svg" alt="" className="tak-logo-png"/>
                                </li>
                                <li className='tak-li'>
                                    <Link href="/amozesh"><a>آموزش ها</a></Link>
                                </li>
                                <li className='tak-li'>
                                    <Link href="/login-signup/signup"><a>مقالات</a></Link>
                                </li>
                                <li className='tak-li'>
                                    <Link href="/login-signup/login"><a>طراحی سایت</a></Link>
                                </li>
                                <li className='tak-li'>
                                    <Link href="/login-signup/signup"><a>درباره ما</a></Link>
                                </li>
                            </ul>

                            <Dropdown overlay={menu} placement="bottomLeft" arrow>
                                <Button type="primary" size={size}
                                        className={styleGrid['d-none'] + " " + styleGrid['d-md-flex']}>
                                    ورود / ثبت نام
                                </Button>
                            </Dropdown>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

