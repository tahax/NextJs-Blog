import React, {Component} from 'react';
import styleGrid from 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../../styles/Nemonekar.module.css';
import Kart from "./nemonekarKartComponent";
import {Carousel, Radio} from "antd";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

class Nemonekar extends Component {

    render() {
        return (
            <div className='tak-nemonekar-wide'>
                <img src="/backgrounds/bg3.svg" alt="" className="tak-bg-3"/>
                <div className={styleGrid['container']}>
                    <div className="tak-nemonekar">
                        <Carousel dotPosition={"bottom"} autoplay>
                            <div className='tak-nemonekar-slider-div'>
                                <div className="row">
                                    <Kart nemonekarImg={'/nemonekar/001.webp'}/>
                                    <Kart nemonekarImg={'/nemonekar/002.webp'}/>
                                    <Kart nemonekarImg={'/nemonekar/003.webp'}/>
                                    <Kart nemonekarImg={'/nemonekar/004.webp'}/>
                                    <Kart nemonekarImg={'/nemonekar/005.webp'}/>
                                    <Kart nemonekarImg={'/nemonekar/006.webp'}/>
                                </div>
                            </div>
                            <div className='tak-nemonekar-slider-div'>
                                <div className="row">
                                    <Kart nemonekarImg={'/nemonekar/001.webp'}/>
                                    <Kart nemonekarImg={'/nemonekar/002.webp'}/>
                                    <Kart nemonekarImg={'/nemonekar/003.webp'}/>
                                    <Kart nemonekarImg={'/nemonekar/004.webp'}/>
                                    <Kart nemonekarImg={'/nemonekar/005.webp'}/>
                                    <Kart nemonekarImg={'/nemonekar/006.webp'}/>
                                </div>
                            </div>
                            <div className='tak-nemonekar-slider-div'>
                                <div className="row">
                                    <Kart nemonekarImg={'/nemonekar/001.webp'}/>
                                    <Kart nemonekarImg={'/nemonekar/002.webp'}/>
                                    <Kart nemonekarImg={'/nemonekar/003.webp'}/>
                                    <Kart nemonekarImg={'/nemonekar/004.webp'}/>
                                    <Kart nemonekarImg={'/nemonekar/005.webp'}/>
                                    <Kart nemonekarImg={'/nemonekar/006.webp'}/>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nemonekar;


// <div className='tak-nemonekar-wide'>
//     <div className={styleGrid["container"]}>
//         <div className={styleGrid['row']}>
//             <Carousel dotPosition={"right"}>
//                 <div className={styleGrid['row']}>
//                     <div className={styleGrid["col-12"]+" "+styleGrid["col-md-6"]+" "+styleGrid["col-lg-4"]}>
//                         <img src="/nemonekar/001.webp" alt="" className="tak-nemonekar-img"/>
//                     </div>
//                 </div>
//                 <div>
//
//                 </div>
//                 <div>
//
//                 </div>
//             </Carousel>
//         </div>
//     </div>
// </div>