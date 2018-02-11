import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';


const ExpenseDashboardPage = () => (
    <div>This is from my dashboard component</div>
);
const routes = (
    <BrowserRouter>
        <div> </div>
        <Route path="/" component={ExpenseDashboardPage}></Route>

    </BrowserRouter>
);

ReactDOM.render(routes,document.getElementById('app'));