import * as React from 'react';
import { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { PureComponent } from 'react';

// REFERENCED: https://github.com/visgl/react-map-gl

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
    fill: '#d00',
    stroke: 'none'
};

class Pin extends PureComponent {
    render() {
        const size = 20;

        return (
            <svg height={size} viewBox="0 0 24 24" style={pinStyle}>
                <path d={ICON} />
            </svg>
        );
    }
}

interface Props { };

interface Viewport {
    latitude: number;
    longitude: number;
    zoom: number;
}

interface State {
    viewport: Viewport;
}

const LAT: number = 42.17212;
const LONG: number = -72.58973;

export default class Map extends Component<Props, State> {
    state: State = {
        viewport: {
            latitude: LAT,
            longitude: LONG,
            zoom: 9,
        }
    }

    _updateViewport = (viewport: Viewport) => {
        this.setState({ viewport });
    };

    render() {
        const { viewport } = this.state;
        const TOKEN = "pk.eyJ1IjoiY2NjZGVuaGFydCIsImEiOiJja2JpbmRsaHEwZWg3MnNuY2x3emRjMjlqIn0.WboFvPx3QcT9kSifRexnaw";
        return (
            <ReactMapGL
                {...viewport}
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={this._updateViewport}
                mapboxApiAccessToken={TOKEN}
            >
                <Marker
                    longitude={LONG}
                    latitude={LAT}
                    offsetTop={-20}
                    offsetLeft={-10}
                >
                    <Pin />
                </Marker>
            </ ReactMapGL>
        );
    }
}
