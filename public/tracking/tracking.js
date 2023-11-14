(function() {
    function collectTrackingData() {
        return {
            language: navigator.language,
            screenResolution: `${screen.width}x${screen.height}`,
            userAgent: navigator.userAgent,
            doNotTrack: navigator.doNotTrack || false,
            cookieEnabled: navigator.cookieEnabled,
            screenWidth: screen.width,
            screenHeight: screen.height,
            hostname: window.location.hostname,
            pathname: window.location.pathname,
            timestamp: new Date().toISOString(),
            // Her kan du legge til flere felt etter behov
        };
    }

    function sendTrackingData(data) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://measuretank.com/api/tracking', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.withCredentials = true; // For CORS
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // Behandle svar fra server
            }
        };
        xhr.send(JSON.stringify(data));
    }

    const trackingData = collectTrackingData();
    sendTrackingData(trackingData);
})();
