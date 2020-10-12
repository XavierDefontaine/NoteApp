function assert(assertionToCheck, test) {
    if (!(assertionToCheck)) {
        throw new Error("Test failed for: " + test);
    } else {
        console.log("Test has passed for:" + test)
    }
}