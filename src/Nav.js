import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-3.3.7-dist/css/bootstrap.min.css';
import $ from 'jquery';
import Link from 'react-router';

const headerContent = (
    <div className="container">
        <div className="navbar-header">
            <button className="navbar-toggle collapsed" type="button" data-toggle="collapse"
                    data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand hidden-sm" href="http://localhost:3000"
               onClick="_hmt.push(['_trackEvent', 'navbar', 'click', 'navbar-首页'])">无名网</a>
        </div>
        <div className="navbar-collapse collapse" role="navigation">
            <ul className="nav navbar-nav">
                {/*<li className="hidden-sm hidden-md"><a href="https://v2.bootcss.com/" target="_blank"*/}
                                                       {/*onClick="_hmt.push(['_trackEvent', 'navbar', 'click', 'v2doc'])">Bootstrap2中文文档</a>*/}
                {/*</li>*/}
                <li><a href="http://localhost:3000/myspider.html">数据获取</a></li>
                <li><a href="https://v4.bootcss.com/" target="_blank"
                       onClick="_hmt.push(['_trackEvent', 'navbar', 'click', 'v4doc'])">数据分析</a></li>
                {/*<li><a className="reddot" href="http://www.youzhan.org/" target="_blank"*/}
                       {/*onClick="_hmt.push(['_trackEvent', 'navbar', 'click', 'youzhan-main-nav'])">网站实例</a></li>*/}
            </ul>
            <ul className="nav navbar-nav navbar-right hidden-sm">
                <li><a href="/about/" target="_parent" onClick="_hmt.push(['_trackEvent', 'navbar', 'click', 'about'])">关于</a></li>
            </ul>
        </div>
    </div>
);

export default headerContent;