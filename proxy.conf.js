const PROXY_CONFIG = {
    "/api/proxy": {
        "target": "http://activosfijosapi20171107045022.azurewebsites.net/Api/Departamento/",
        "secure": false,
        "bypass": function (req, res, proxyOptions) {
            if (req.headers.accept.indexOf("html") !== -1) {
                console.log("Skipping proxy for browser request.");
                return "/index.html";
            }
            req.headers["X-Custom-Header"] = "yes";
        }
    }
}

module.exports = PROXY_CONFIG;