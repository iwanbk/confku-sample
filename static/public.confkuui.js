var confkuUI = {};

confkuUI.addVideo = function (stream, peerId) {
	var vidElem = this.cloneVideo('localVideo', 'video' + peerId);
	var vidDivElem = this.newVideoDiv(peerId);
	vidDivElem.appendChild(vidElem);
	document.getElementById('row_videos').appendChild(vidDivElem);
	return vidElem;
};

confkuUI.removeVideo = function (peerId) {
	var vidDivId = 'div' + peerId;
	var vidDiv = document.getElementById(vidDivId);
	vidDiv.parentNode.removeChild(vidDiv);
};

confkuUI.cloneVideo = function (sourceId, destId) {
	var source = document.getElementById(sourceId);
	var dest = source.cloneNode(false);
	dest.id = destId;
	dest.removeAttribute('muted');
	dest.autoplay = true;
	return dest;
};

confkuUI.newVideoDiv = function (peerId) {
	var elem = document.createElement('div');
	elem.setAttribute('class', "col-md-3");
	elem.id = 'div'+peerId;
	return elem;
};

confku.ee.on('peer_join_room', function (data) {
	var msg = "[[" + Date().toString() + "]] '" + data.name + "' entered this room\n";
	$('#chat_ta_id').append(msg);
});

confku.ee.on('peer_leave_room', function (data) {
	var msg = "[[" + Date().toString() + "]] '"  + data.name + "' leave this room\n";
	$('#chat_ta_id').append(msg);
});