import React from 'react';
import TweetBox from './tweet_box';

export default class TweetCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            newTweet: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ newTweet: nextProps.newTweet.text });
    }

    handleSubmit(e) {
        e.preventDefault();
        let tweet = {
            text: this.state.text
        };

        this.props.composeTweet(tweet);
        this.setState({text: ''});
    }

    update() {
        return e => this.setState({text: e.currentTarget.value});
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="textarea" value={this.state.text} onChange={this.update()} placeholder="Share something..." />
                    <input type="submit" value="Submit" />
                </form>
                <TweetBox text={this.state.newTweet} />
            </>
        )
    }
}