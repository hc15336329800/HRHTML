(function () {
    "use strict";

    try {
        if (window.top !== window.self) {
            window.top.location = window.self.location;
        }
    } catch (error) {
        window.location.href = window.location.href;
    }
})();