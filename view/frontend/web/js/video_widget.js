(function () {
    'use strict';

    function videoWidget(element, options) {
        this.element = element;
        this.options = options;
        this.videoPlayer = document.getElementById('video-player');
        this.playPauseButton = this.element.querySelector('.play-pause-button');
        this.muteUnmuteButton = this.element.querySelector('.mute-unmute-button');

        this._attachEventListeners();
    }

    videoWidget.prototype._attachEventListeners = function () {
        var self = this;

        // Eseménykezelő a lejátszás/szünet gombhoz
        this.playPauseButton.addEventListener('click', function () {
            if (self.videoPlayer.paused) {
                self.videoPlayer.play();
            } else {
                self.videoPlayer.pause();
            }
        });

        // Eseménykezelő a némítás/hang bekapcsolása gombhoz
        this.muteUnmuteButton.addEventListener('click', function () {
            if (self.videoPlayer.muted) {
                self.videoPlayer.muted = false;
            } else {
                self.videoPlayer.muted = true;
            }
        });
    };

    window.vendor = window.vendor || {};
    window.vendor.videoWidget = videoWidget;
})();
