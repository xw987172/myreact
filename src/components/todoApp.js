import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../bootstrap-3.3.7-dist/css/bootstrap.min.css';


class TodoApp extends Component{
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">欢迎来到爬虫系统和数据分析系统</h1>
                </header>
                <p className="App-intro">
                    本系统一为爬虫框架，二为机器学习。爬虫框架旨在调度爬虫的管理，和爬虫数据的监测。机器学习平台的目标是解决线上取特征及特征处理，反射调用模型，执行学习和预测并反馈到图表上。
                </p>
            </div>
        );
    }
}

export default TodoApp;
//     render(){
//         return (
//             <div>
//                 <h3>this is in todoApp components...</h3>
//                 <p>
//                     somethiing is supporsed to be happend....
//                 </p>
//             </div>
//         );
//     }
// }
//
// export default todoApp;