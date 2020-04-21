import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Main, Header, Footer } from "./components/Main";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Route path="/" exact component={Main} />
                <Footer />
            </Router>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
