import React from 'react';
import axios from 'axios';

import Journals from '../components/Journals';

class JournalList extends React.Component {

    state = {
        journals: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    journals: res.data
                });
                console.log(res.data);                                
            })    
    }

    render() {
        return(
            <Journals data={this.state.journals} />
        );
    }
}

export default JournalList