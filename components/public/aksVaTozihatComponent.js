import React, {Component} from 'react';
import "../../styles/aksVaTozihat.module.css";
import styleGrid from "bootstrap/dist/css/bootstrap-grid.min.css";
import {Button} from 'antd';

class AksVatozihat extends Component {

    render() {
        return (
            <div className={`tak-aks-va-tozihat-wide${this.props.aksVaTozihatPadding}`}>
                <div className={styleGrid['container']}>
                    <div className={styleGrid['row']+ " "+[`tak-wrap-reverse${this.props.aksVaTozihatdirection} ${this.props.takAbsolute}`] }>
                        <img src="/backgrounds/bg2.svg" alt="" className={`tak-bg2-${this.props.displaybg}`}/>
                        <div className={styleGrid['col-12'] + " " + styleGrid['col-md-5']}>
                            <div className="tak-inner-col-text">
                                <h4 className="tak-title-inner-col">
                                    {this.props.aksVaTozihatTitle}
                                </h4>
                                <p className="tak-descriptions">
                                    {this.props.aksVaTozihatDescription}
                                </p>
                                <div className="tak-btn-aks-va-tozihat-div">
                                    <Button block className='tak-btn'>دکمه ی تست</Button>
                                </div>
                            </div>
                        </div>
                        <div className={styleGrid['col-12'] + " " + styleGrid['col-md-5']}>
                            <img src={this.props.aksVaTozihatImg} alt="" className={`imgaksvatozihat${this.props.aksVaTozihatVideoAndImgClassName}`}/>
                            <video playsInline autoPlay loop muted data-silent="true"
                                   src={this.props.aksVaTozihatVideo} className={`aksVaTozihatVideo${this.props.aksVaTozihatVideoAndImgClassName}`}>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AksVatozihat;