import React from 'react';
import TweetBox from '../tweets/tweet_box';

export default class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tweets: []
        };
    }

    componentWillMount() {
        const { currentUser } = this.props;
        console.log(currentUser.id);
        this.props.fetchUserTweets(currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ tweets: newState.tweets });
    }

    render() {
        if (this.state.tweets.length === 0) {
            return <div>This user has no tweets :(</div>
        } else {
            return (
                <>
                    <h2>All of {this.props.currentUser.handle}'s Tweets</h2>
                    {this.state.tweets.map(tweet => (
                        <TweetBox key={tweet._id} text={tweet.text} />
                    ))}
                </>
            )
        }
    }
}