define([], function() {
    function reverse(arr, commandTokens) {
        if (commandTokens.length !== 0) {
            throw new Error("Error: invalid command parameters");
        }
        arr.reverse();
    }

    return {reverse};
});
