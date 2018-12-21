import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class RepoCard extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        const { name, description, url, forks, language, owner } = this.props.details;
        const { html_url, login } = owner;
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>{name}</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <section>
                                <p>Description: {description} </p>
                                <p>Owner: <a href={html_url} rel="noopener noreferrer" target="_blank">{login}</a></p>
                                <p>Language: {language}</p>
                                <p>url: <a href={url} rel="noopener noreferrer" target="_blank">{url}</a></p>
                                <p>Has been forked: {forks}</p>
                            </section>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default RepoCard;