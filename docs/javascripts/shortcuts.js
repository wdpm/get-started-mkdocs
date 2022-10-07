keyboard$.subscribe(function (key) {
    if (key.mode === "global" && key.type === "x") {
        /* Add custom keyboard handler here */
        // The call to key.claim()will execute preventDefault() on the underlying event, 
        // so the keypress will not propagate further and touch other event listeners.
        key.claim()
    }
})