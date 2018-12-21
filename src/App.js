import React from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';

import SearchComp from './components/SearchComp';
import RepoList from './components/RepoList';

class App extends React.Component {
    state = { repositories: [] };

    onSearchSubmit = async (repo) => {
        let response = await axios.get('https://api.github.com/search/repositories', {
            params: { q: repo, sort: 'stars' }
        });
        if (response.status === 200) {
            this.setState({ repositories: response.data.items });
        }
    }

    render() {
        return (
            <Container>
                <SearchComp onSubmit={this.onSearchSubmit} />
                <RepoList repos={this.state.repositories} />
            </Container>
        );
    }
}

export default App;