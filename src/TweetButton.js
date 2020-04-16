import React from 'react';

function TweetButton(props){
    return (
      <div>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="tweetbutton" data-show-count="false">
        <i class="fab fa-twitter"></i>
          Tweet
        </a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    )
}

export default TweetButton;