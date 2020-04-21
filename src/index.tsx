import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import About from "./components/About";
import Procedures from './components/Procedures';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/procedures" exact component={Procedures} />
                <Route path="/schedule" exact component={Schedule} />
                <Route path="/contact" exact component={Contact} />
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
