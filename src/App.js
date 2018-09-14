import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-3.3.7-dist/css/bootstrap.min.css';
import $ from 'jquery';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {msg:'',columns:[],items:[]};
    }

    componentDidMount(){

        this.serverRequest = $.get({
               "url": this.props.source,
                "dataType": "jsonp",
                "jsonpCallback":"callbackfunc",
               "success": function (result) {
                    this.setState({
                        msg:result.msg,
                        columns:result.data.columns,
                        items:result.data.items
                    })

                }.bind(this)
            }
        );
    }

    componentWillUnmount(){
        this.serverRequest.abort();
    }

    render(){
      var ths = this.state.columns.map(function(m){
        return <th>{m}</th>;
      });
      var items = this.state.items.map(function(m){
        return <tr>
          <td>{m.shopid}</td>
          <td>{m.name}</td>
          <td>{m.city}</td>
          <td>{m.location}</td>
        </tr>
      })
      return (
         <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">我的爬虫系统和数据分析系统</h1>
        </header>
        <p className="App-intro">
            本系统一为爬虫框架，二为机器学习。爬虫框架旨在调度爬虫的管理，和爬虫数据的监测。机器学习平台的目标是解决线上取特征及特征处理，反射调用模型，执行学习和预测并反馈到图表上。
        </p>
        <em>{this.state.msg}</em>
        <table class="table">
          {ths}
          {items}
        </table>
      </div>
      );
    }
}

export default App;
