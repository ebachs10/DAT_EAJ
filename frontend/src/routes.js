import React from 'react';
import { Route } from 'react-router-dom';

import JournalList from './containers/JournalListView';
import JournalDetail from './containers/JournalDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={JournalList} />
        <Route exact path='/:journalID' component={JournalDetail} />
    </div>
)

export default BaseRouter