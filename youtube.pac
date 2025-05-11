function FindProxyForURL(url, host) {
  // everything YouTube uses
  var proxySites = [
    "youtube.com",      // the naked domain
    "*.youtube.com",    // www.youtube.com, m.youtube.com, etc.
    "youtu.be",         // short URLs
    "*.googlevideo.com",// the actual video chunks
    "*.ytimg.com"       // thumbnails, player assets, etc.
  ];
  var localServer = "SOCKS5 localhost:8080";

  for (var i = 0; i < proxySites.length; i++) {
    if (shExpMatch(host, proxySites[i])) {
      return localServer;
    }
  }
  return "DIRECT";
}


// should disable chrome://flags/#enable-quic
