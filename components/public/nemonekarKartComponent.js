import React, {Component} from 'react';
import styleGrid from "bootstrap/dist/css/bootstrap-grid.min.css";
import '../../styles/Nemonekar.module.css';

class Kart extends Component {
    render() {
        return (
            <div className={styleGrid["col-6"] + " " + styleGrid["col-lg-4"]}>
                <img src={this.props.nemonekarImg} alt="" className="tak-nemonekar-img"/>
            </div>
        );
    }
}

export default Kart;