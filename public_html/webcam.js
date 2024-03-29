$(function(){
    (function() {
                var streaming = false,
                        video = document.querySelector('#video'),
                        cover = document.querySelector('#cover'),
                        canvas = document.querySelector('#canvas'),
                        photo = document.querySelector('#photo'),
                        startbutton = document.querySelector('#startbutton'),
                        width = 320,
                        height = 0;

                navigator.getMedia = (navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia);

                navigator.getMedia(
                        {
                            video: true,
                            audio: false
                        },
                function(stream) {
                    if (navigator.mozGetUserMedia) {
                        video.mozSrcObject = stream;
                    } else {
                        var vendorURL = window.URL || window.webkitURL;
                        video.src = vendorURL.createObjectURL(stream);
                    }
                    video.play();
                },
                        function(err) {
                            console.log("An error occured! " + err);
                        }
                );

                video.addEventListener('canplay', function(ev) {
                    console.info('canplay');
                    if (!streaming) {
                        width = video.videoWidth;
                        height = video.videoHeight;
                        video.setAttribute('width', width);
                        video.setAttribute('height', height);
                        canvas.setAttribute('width', width);
                        canvas.setAttribute('height', height);
                        streaming = true;
                    }
                }, false);

                function takepicture() {
                    canvas.width = width;
                    canvas.height = height;
                    canvas.getContext('2d').drawImage(video, 0, 0, width, height);
                    var data = canvas.toDataURL('image/png');
                    photo.setAttribute('src', data);
                }

                startbutton.addEventListener('click', function(ev) {
                    takepicture();
                    ev.preventDefault();
                }, false);

            })();
});