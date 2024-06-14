/* Client ----------> Server
         Request    (NodeJs)
Explain
Request made to server. Node js has event queue.

Firstly requests are queued into event queue .

Now even loop is a machine which always watches the event queue.

If event loop get any request in event queue the select that request using fifo(first in first out) principle.

Request can be of two types :

Blocking Operations (Sync.. task)
Non- Blockinng Operations (Async.. task)

If the request has blocking operation then to resolve this request it goes to thread pool.
Thread pool is a pool of threads . Threads act a worker which work for you . It is resposible for fuilful your blocking operation. 
If the works completes then it return the result . Then the respose is send back to the user .

*/

console.log("Namaste Node.js");

const os =  require("os");

const res =  os.cpus.length;

console.log(res);