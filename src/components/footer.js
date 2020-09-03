import React from 'react';
// import srtyled from 'styled-components';
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer-middle">
                <div className="container-fluid text-light bg-dark">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-3 col-sm-6 ">
                            <h4>ارتباط با ما</h4>
                            <ul className="list-unstyled">
                                <li>تلگرام</li>
                                <li>اینستاگرام</li>
                                <li>توییتر</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>ارتباط با ما</h4>
                            <ul className="list-unstyled">
                                <li>تلگرام</li>
                                <li>اینستاگرام</li>
                                <li>توییتر</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>ارتباط با ما</h4>
                            <ul className="list-unstyled">
                                <li>تلگرام</li>
                                <li>اینستاگرام</li>
                                <li>توییتر</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>ارتباط با ما</h4>
                            <ul className="list-unstyled">
                                <li>تلگرام</li>
                                <li>اینستاگرام</li>
                                <li>توییتر</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-sm-center">
                            &copy;{new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;
