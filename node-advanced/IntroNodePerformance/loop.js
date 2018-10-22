// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

const shouldContinue = () => {
    // 1) Any pending setTimeout, setInterval, setImmediate?
    // 2) Any pending OS tasks? (Like server listening to port)
    // 3) Any pending long-running operations? (Like fs module - IO)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

// Entire body executes in one 'tick'
while(shouldContinue()) {
    // 1) Node looks at pendingTimers and sees if any functions are ready to be called - setTimeout, setInterval
    // 2) Node looks at pendingOSTasks and pendingOperations and invokes relevant callbacks
    // 3) Pause execution. Continue when..
    // - a new pendingOSTask is done
    // - a new pendingOperation is done
    // - a timer is about to complete
    // 4) Node looks at pendingTimers. Call any setImmediate
    // 5) Handle any 'close' events
}


// exit back to terminal