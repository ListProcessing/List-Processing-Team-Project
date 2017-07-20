define([], function() {
    function end(arr, commandTokens) {
        if (commandTokens.length !== 0) {
            throw new Error("Error: invalid command parameters");
        }
        return "Finished";
    }

    return {end};
});