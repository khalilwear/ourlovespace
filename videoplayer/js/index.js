document.addEventListener('DOMContentLoaded', function() {
	var p = $("#video").player({
		video: {
			url: {
				hq: {
					en: "../video/video_1.mp4"
				}
			}
		}
	}, {width: 700});
},false);