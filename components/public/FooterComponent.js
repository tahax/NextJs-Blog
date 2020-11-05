import React, {Component} from 'react';
import '../../styles/Footer.module.css';
import styleGrid from 'bootstrap/dist/css/bootstrap-grid.min.css';

class Footer extends Component {
    render() {
        return (
            <div className={styleGrid["clearfix"]}>
                <div className="tak-footer-wide">
                    <div className={styleGrid["container"]}>
                        <div className="tak-footer">
                            <p className='tak-footer-text-bala'>NEXT.JS PROJECT</p>
                            <p className='tak-footer-text-pain'>TAHA KASRAMEHR</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;