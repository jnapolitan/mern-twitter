import { connect } from 'react-redux';
import { composeTweet } from '../../actions/tweet_actions';
import TweetCompose from './tweet_compose';

const mapStateToProps = state => ({
    currentUser: state.session.user,
    newTweet: state.tweets.new
});

const mapDispatchToProps = dispatch => ({
    composeTweet: data => dispatch(composeTweet(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TweetCompose);