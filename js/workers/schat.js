onmessage = function(e) {
    console.log(' got msg from the main script');
    var workerResult = 'result: ' + (e.data[0] * e.data[1]);
    console.log('sent back to main');
    postMessage(workerResult);
  }