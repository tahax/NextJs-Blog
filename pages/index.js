import React, {Component} from 'react';
import Header from '../components/public/HeaderComponent';
import Footer from '../components/public/FooterComponent';
import Slider from '../components/public/SliderComponent';
import Title from '../components/public/TitleComponent';
import Posts from "../components/public/PostsComponent";
import AksVatozihat from "../components/public/aksVaTozihatComponent";
import Nemonekar from "../components/public/NemonekarComponent";
import Maghalat from "../components/public/MaghalatComponent";


class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header/>
                <Slider/>
                <Title titleName="آخرین آموزش ها" divClassName={1}/>
                <Posts/>
                <Title titleName="برنامه نویسی را از کجا شروع کنم ؟" divClassName={1}/>
                <AksVatozihat aksVaTozihatImg={'/aks-va-tozihat/aks3.svg'}
                              aksVaTozihatVideo={''}
                              aksVaTozihatPadding={1}
                              displaybg={2}
                              aksVaTozihatVideoAndImgClassName={1}
                              aksVaTozihatdirection={2}
                              aksVaTozihatTitle='تیتر احتمالی تست'
                              aksVaTozihatDescription="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                                    طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی
                                    و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                                    دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                                    حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                                    استفاده قرار گیرد."
                />
                <AksVatozihat aksVaTozihatImg={'/aks-va-tozihat/aks1.svg'}
                              takAbsolute={"relative"}
                              aksVaTozihatVideo={''}
                              aksVaTozihatPadding={1}
                              displaybg={1}
                              aksVaTozihatVideoAndImgClassName={1}
                              aksVaTozihatdirection={1}
                              aksVaTozihatTitle='تیتر احتمالی تست'
                              aksVaTozihatDescription="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                                    طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی
                                    و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                                    دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                                    حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                                    استفاده قرار گیرد."
                />
                <Title titleName="نمونه کارهای ما" divClassName={1}/>
                <Nemonekar/>
                <Title titleName="آخرین مقالات آموزشی" divClassName={1}/>
                <Maghalat/>
                <Maghalat/>
                <Maghalat/>
                <Footer/>
            </>
        );
    }
}

export default Home;