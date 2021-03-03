// self.importScripts("/js/cdn/gun.js", "/js/cdn/sea.js")

onmessage = function(e) {
    console.log(' got msg from the main script');
    var workerResult = 'result: ' + (e.data[0] * e.data[1]);
    console.log('sent back to main');
    postMessage(workerResult);
  }