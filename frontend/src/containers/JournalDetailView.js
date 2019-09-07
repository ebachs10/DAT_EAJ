import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class JournalDetail extends React.Component {

    state = {
        journal: {}
    }

    componentDidMount() {
        const journalID = this.props.match.params.journalID;
        axios.get(`http://127.0.0.1:8000/api/${journalID}`)
            .then(res => {
                this.setState({
                    journal: res.data
                });
                console.log(res.data);                            
            })    
    }

    render() {
        return(
            <Card> {this.state.journal.TagNumber}
                <p>{this.state.journal.note}</p>
            </Card>
        )
    }
}

export default JournalDetail