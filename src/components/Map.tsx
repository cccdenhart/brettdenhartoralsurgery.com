import * as React from 'react';
import { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Pin from "./Pin";

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
        const TOKEN = process.env.REACT_APP_MAPBOX as string;
        return (
            <ReactMapGL
                {...viewport}
                width="100%"
                height="500px"
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
