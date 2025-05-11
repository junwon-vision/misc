function FindProxyForURL(url, host) {
  // Define an array of websites to use the proxy
  var proxySites = ["*.youtube.com"];
  // Define the proxy server
  var localServer = "SOCKS5 localhost:8080";
  // Check if the host matches any of the proxy sites
  for (var i = 0; i < proxySites.length; i++) {
    if (shExpMatch(host, proxySites[i])) {
      return localServer;
    }
  }
  // Direct connection for other sites
  return "DIRECT";
}
