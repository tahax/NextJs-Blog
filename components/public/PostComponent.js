import React, {Component} from 'react';
import {Card, Avatar , Button} from 'antd';
import "../../styles/post.module.css";
import styleGrid from "bootstrap/dist/css/bootstrap-grid.min.css";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';

const {Meta} = Card;

class Post extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={["tak-post-div"]+" "+styleGrid["col-12"] + " " +
            styleGrid["col-md-6"] + " " +
            styleGrid["col-lg-3"]}
            >

                <Card
                    style={{width: "100%" , height: "100%"}}
                    hoverable={true}
                    cover={
                        <img
                            alt="example"
                            src={this.props.imageSrc}
                        />
                    }
                    actions={[
                        <Button type="text" style={{width: "100%" , height: "100%" , padding: "10px 0"}}>ادامه ی مطلب</Button>
                    ]}
                >
                    <Meta
                        title={this.props.cardTitle}
                        description={this.props.description}
                    />
                </Card>

            </div>
    )
        ;
    }
}

export default Post;