$(document).ready(function () {
    nodecg.listenFor('changeTweet', changeTweet);
    nodecg.listenFor('showTweet', showTweet);
    nodecg.listenFor('hideTweet', hideTweet);

    function changeTweet(data) {
				console.log("changeTweet");

        $('#tweetfeature-tweet').text(data.tweetText);
    }

    function showTweet() {
		
		console.log("showTweet");
        var show = new TimelineLite({paused: true});

        show.to($('#tweetfeature'), 0.25, {left: 0, ease: Quad.easeOut}, 0)
			.to($('#tweetfeature-tweet-container'), 0.25, {className: 'visible', ease: Quad.easeOut}, 0.5)
            .play();
    }

    function hideTweet() {
				console.log("hideTweet");

        var hide = new TimelineLite({paused: true});

        hide.to($('#tweetfeature-tweet-container'), 0.25, {className: 'invisible', ease: Quad.easeIn}, 0)
			.to($('#tweetfeature'), 0.25, {left: "-450px", ease: Quad.easeIn}, 1)
            .play();
    }

});