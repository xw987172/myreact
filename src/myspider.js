import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import headerContent from './Nav';
// import TodoApp from './components/todoApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(headerContent,document.getElementById("header"));

function tick() {
    const con = (<p>{new Date().toLocaleTimeString()}</p>);
    ReactDOM.render(
        con,
        /*<Clock date={new Date()}/>*/
        document.getElementById("example")
    )
}
setInterval(tick,1000);


registerServiceWorker();