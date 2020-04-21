import React from "react";
import { default as data } from "../data.json";
import { ListGroup, Jumbotron } from "react-bootstrap";

interface Props { };

interface State {
    proc: Procedure
};

interface Procedure {
    name: string;
    desc: string;
};

const procData = data["Procedures"];

export default class Procedures extends React.Component<Props, State> {
    procedures: Procedure[] = procData["types"] as Procedure[];
    state: State = {
        proc: this.procedures[0]
    };

    updateProc = (p: Procedure): void => {
        this.setState({ proc: p });
    };

    render() {
        return (
            <div className="procedures">
                <hr id="procedures" style={{ width: "0vw" }} />
                <h1 style={{ marginTop: "10vh" }}>
                    Our Procedures
                </h1>
                <hr />
                <div className="body d-flex justify-content-around">
                    <ListGroup>
                        {this.procedures.map((p) =>
                            <ListGroup.Item
                                action
                                className="proc-names"
                                onClick={() => this.updateProc(p)}
                            >
                                {p.name}
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                    <Jumbotron className="proc-text">
                        <h2>{this.state.proc.name}</h2>
                        <br />
                        <p>{this.state.proc.desc}</p>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}
