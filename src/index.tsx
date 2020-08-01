import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import { Main, Header, Footer } from "./components/Main";
import Mobile from "./components/Mobile";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


interface appProps {
    isMobile: RegExpMatchArray | null;
}

export default function App(props: appProps) {
    let content = (
        <Router>
            <Header />
            <Route path="/" exact component={Main} />
            <Footer />
        </Router>
    );
    if (props.isMobile) {
        content = <Mobile />
    }

    return (
        <div className="App">{content}</div>
    );
}


// source: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
const isMobile = {
    Android: (): RegExpMatchArray | null => navigator.userAgent.match(/Android/i),
    BlackBerry: (): RegExpMatchArray | null => navigator.userAgent.match(/BlackBerry/i),
    iOS: (): RegExpMatchArray | null => navigator.userAgent.match(/iPhone|iPad|iPod/i),
    Opera: (): RegExpMatchArray | null => navigator.userAgent.match(/Opera Mini/i),
    Windows: (): RegExpMatchArray | null => navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i),
    any: (): RegExpMatchArray | null => isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
};


ReactDOM.render(
    <React.StrictMode>
        <App isMobile={isMobile.any()} />
    </React.StrictMode>,
    document.getElementById('root')
);
