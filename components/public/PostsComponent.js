import React, {Component} from 'react';
import styleGrid from "bootstrap/dist/css/bootstrap-grid.min.css";
import "../../styles/posts.module.css";
import Post from "./PostComponent"

class Posts extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tak-posts-div-wide">

                <div className={styleGrid["container"]}>

                    <div className={styleGrid["row"]}>
                        <div className="tak-posts-div">
                            <img src="/backgrounds/bg1.svg" alt="" className="tak-bg1"/>
                            <img src="/backgrounds/6zeli-nazok.svg" alt="" className="tak-bg-6zeli-nazok"/>
                            <Post imageSrc={"/posts/wp.jpg"} cardTitle={"آموزش وردپرس"}
                                  description={"وردپرس بسیار عالی است و من دوستش دارم"}/>
                            <Post imageSrc={"/posts/frontend.jpg"} cardTitle={"آموزش فرانتند"}
                                  description={"فرانتند خیلی سخت تر از بکند است و این را همه میدانند"}/>
                            <Post imageSrc={"/posts/android.jpg"} cardTitle={"آموزش اندروید"}
                                  description={"منظور همون ریاکت نیتیو است باب جان"}/>
                            <Post imageSrc={"/posts/js.jpg"} cardTitle={"آموزش جاوا اسکریپت"}
                                  description={"بهترین زبان برنامه نویسی که تاحالا ساخته شده است"}/>
                            <Post imageSrc={"/posts/php.jpg"} cardTitle={"آموزش جاوا اسکریپت"}
                                  description={"بهترین زبان برنامه نویسی که تاحالا ساخته شده است"}/>
                            <Post imageSrc={"/posts/laravel.jpg"} cardTitle={"آموزش جاوا اسکریپت"}
                                  description={"بهترین زبان برنامه نویسی که تاحالا ساخته شده است"}/>
                            <Post imageSrc={"/posts/ui-1.jpg"} cardTitle={"آموزش جاوا اسکریپت"}
                                  description={"بهترین زبان برنامه نویسی که تاحالا ساخته شده است"}/>
                            <Post imageSrc={"/posts/start.jpg"} cardTitle={"آموزش جاوا اسکریپت"}
                                  description={"بهترین زبان برنامه نویسی که تاحالا ساخته شده است"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;