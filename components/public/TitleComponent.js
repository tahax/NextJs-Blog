import React, {Component} from 'react';
import "../../styles/mainHeaderTitle.module.css"
import styleGrid from 'bootstrap/dist/css/bootstrap-grid.min.css';
import {Divider} from 'antd';

class Title extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`title-name-div-${this.props.divClassName}`}>
                <Divider orientation="left">
                        {this.props.titleName}
                </Divider>
            </div>
        );
    }
}
export default Title;