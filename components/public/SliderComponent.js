import React, {Component} from 'react';
import '../../styles/slider.modules.css';
import '../../styles/aksVaTozihat.module.css';
import styleGrid from "bootstrap/dist/css/bootstrap-grid.min.css";
import AksVatozihat from "./aksVaTozihatComponent";
import {Carousel} from 'antd';

class SliderComponent extends Component {


    render() {

        return (
            <div className='tak-slider-wide'>
                <img src="/backgrounds/6zeli-koloft.svg" alt="" className="tak-6zeli-img-absolute"/>
                <Carousel autoplay effect="fade">
                    {/*<div className='tak-div-slider'>*/}
                    {/*    <AksVatozihat aksVaTozihatImg={'/aks-va-tozihat/example-11.svg'}*/}
                    {/*                  aksVaTozihatVideo={'/slider/av2.mp4'}*/}
                    {/*                  aksVaTozihatPadding={2}*/}
                    {/*                  displaybg={2}*/}
                    {/*                  aksVaTozihatVideoAndImgClassName={2}*/}
                    {/*                  aksVaTozihatdirection={2}*/}
                    {/*                  aksVaTozihatTitle='تیتر احتمالی تست'*/}
                    {/*                  aksVaTozihatDescription="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می*/}
                    {/*                طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی "*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div className='tak-div-slider1'>
                        <AksVatozihat aksVaTozihatImg={'/aks-va-tozihat/example-11.svg'}
                                      aksVaTozihatVideo={'/slider/av1.mp4'}
                                      aksVaTozihatPadding={2}
                                      displaybg={2}
                                      aksVaTozihatVideoAndImgClassName={2}
                                      aksVaTozihatdirection={1}
                                      aksVaTozihatTitle='تیتر احتمالی تست'
                                      aksVaTozihatDescription="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                                    طلبد تا با نرم افزارها شناخت ."
                        />
                    </div>
                    <div className='tak-div-slider2'>
                        <AksVatozihat aksVaTozihatImg={'/slider/s2.gif'}
                                      aksVaTozihatVideo={'/slider/av3.mp4'}
                                      aksVaTozihatPadding={2}
                                      displaybg={2}
                                      aksVaTozihatVideoAndImgClassName={2}
                                      aksVaTozihatdirection={2}
                                      aksVaTozihatTitle='تیتر احتمالی تست'
                                      aksVaTozihatDescription="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را م موجود طراحی اساسا مورد
                                    استفاده قرار گیرد."
                        />
                    </div>
                    {/*<div className='tak-div-slider3'>*/}
                    {/*    <AksVatozihat aksVaTozihatImg={'/slider/s1.gif'}*/}
                    {/*                  aksVaTozihatVideo={'/slider/Shot_2.mp4'}*/}
                    {/*                  displaybg={2}*/}
                    {/*                  aksVaTozihatVideoAndImgClassName={2}*/}
                    {/*                  aksVaTozihatdirection={1}*/}
                    {/*                  aksVaTozihatTitle='تیتر احتمالی تست'*/}
                    {/*                  aksVaTozihatDescription="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می*/}
                    {/*                طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی*/}
                    {/*                و فرهنگ پیشرو در زبان فارسی ایجاد کرد."*/}
                    {/*    />*/}
                    {/*</div>*/}
                </Carousel>
            </div>
        );
    }
}

export default SliderComponent;