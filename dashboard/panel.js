// JavaScript Document

'use strict';

$('#changeButton').click(function() {
	var data = {}
	console.log("change");
	data.tweetText = $('#tweet').val();
	nodecg.sendMessage('changeTweet', data);
});

$('#show').click(function() {
		console.log("shpow");

	nodecg.sendMessage('showTweet', '');
});

$('#hide').click(function() {
		console.log("hdie");

	nodecg.sendMessage('hideTweet', '');
});

