import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-3.3.7-dist/css/bootstrap.min.css';
import $ from 'jquery';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {time:'',number:'',members:[]};
    }

    componentDidMount(){

        this.serverRequest = $.get({
               "url": this.props.source,
                "dataType": "jsonp",
                "jsonpCallback":"callback",
               "success": function (result) {
                    this.setState({
                        time:result.time,
                        number: result.info.total,
                        members:result.info.members,
                    })
                }.bind(this)
            }
        );
    }

    componentWillUnmount(){
        this.serverRequest.abort();
    }

  render() {
        var lis = this.state.members.map(function (m){
            return <tr><td>{m.name}</td><td>{m.age}</td></tr>;
        })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">欢迎来到爬虫系统和数据分析系统</h1>
        </header>
        <p className="App-intro">
            {this.state.time}本系统一为爬虫框架，{this.state.number}二为机器学习。爬虫框架旨在调度爬虫的管理，和爬虫数据的监测。机器学习平台的目标是解决线上取特征及特征处理，反射调用模型，执行学习和预测并反馈到图表上。
        </p>
          <table className="table">{lis}</table>
      </div>
    );
  }
}

export default App;
