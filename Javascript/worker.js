// Listen for messages from the main thread
onmessage = function(event) {
    console.log('Message received in Worker:', event.data);
  
    // Do some computation or task in the Worker
    const result = 'Worker processed: ' + event.data;
  
    // Send the result back to the main thread
    postMessage(result);
  };
  