import * as TweetAPIUtil from '../util/tweet_api_util';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const RECEIVE_USER_TWEETS = 'RECEIVE_USER_TWEETS';
export const RECEIVE_NEW_TWEET = 'RECEIVE_NEW_TWEET';

export const receiveUserTweets = tweets => ({
    type: RECEIVE_USER_TWEETS,
    tweets
});

export const receiveNewTweet = tweet => ({
    type: RECEIVE_NEW_TWEET,
    tweet
});

export const receiveTweets = tweets => ({
    type: RECEIVE_TWEETS,
    tweets
});

export const fetchTweets = () => dispatch => (
    TweetAPIUtil.getTweets()
        .then(tweets => dispatch(receiveTweets(tweets)))
        .catch(err => console.log(err))
);

export const fetchUserTweets = id => dispatch => (
    TweetAPIUtil.getUserTweets(id)
        .then(tweets => dispatch(receiveUserTweets(tweets)))
        .catch(err => console.log(err))
);

export const composeTweet = data => dispatch => (
    TweetAPIUtil.writeTweet(data)
        .then(tweet => dispatch(receiveNewTweet(tweet)))
        .catch(err => console.log(err))
);

