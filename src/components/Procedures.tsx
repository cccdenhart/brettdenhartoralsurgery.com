import React from "react";
import { default as data } from "../data.json";
import { ListGroup, Jumbotron, Container, Row, Col } from "react-bootstrap";

interface Props { };

interface State {
    proc: Procedure
};

interface DescProps {
    desc: string;
};

interface Procedure {
    name: string;
    desc: string;
};

const procData = data["Procedures"];

function ProcessDesc(props: DescProps) {
    const splits: string[] = props.desc.split("\n");
    return (
        <div>
            {
                splits.map((p: string) =>
                    <p>{p}</p>)
            }
        </div>
    );
}

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
            <section id="procedures">
                <Container>
                    <Row>
                        <Col>
                            <h1 style={{ marginTop: "10vh" }}>
                                Our Procedures
                            </h1>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4">
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
                        </Col>
                        <Col sm="8">
                            <Jumbotron className="proc-text mt-5">
                                <h2>{this.state.proc.name}</h2>
                                <br />
                                <ProcessDesc desc={this.state.proc.desc} />
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
