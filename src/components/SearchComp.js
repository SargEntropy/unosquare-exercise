import React from 'react';
import { Form, Label, Input, FormGroup } from 'reactstrap'

class SearchComp extends React.Component {
    state = { repo: '' };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.repo);
    };

    render() {
        return (
             <Form onSubmit={this.onFormSubmit} className="">
                <FormGroup>
                    <Label>Repo Search:</Label>
                    <Input 
                        type="text"
                        value={this.state.repo}
                        onChange={e => this.setState({ repo: e.target.value })}
                    />
                </FormGroup>
            </Form>
        )
    }
}

export default SearchComp;