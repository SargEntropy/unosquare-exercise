import React from 'react';
import { ListGroupItem, Container } from 'reactstrap';

import RepoCard from './RepoCard';

const RepoList = (props) => {
    const repos = props.repos.map((repo) => {
        return <ListGroupItem><RepoCard key={repo.id} details={repo} /></ListGroupItem>
    });
    return <Container>{repos}</Container>;
};

export default RepoList;