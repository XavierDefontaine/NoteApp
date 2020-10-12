function assert(assertionToCheck, test) {
    if (!(assertionToCheck)) {
        throw new Error("Assertion failed: " + test + " is not truthy");
    } else {
        console.log("Test has passed for:" + test)
    }
}