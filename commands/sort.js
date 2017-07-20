define([], function() {
    function sort(arr, commandTokens) {
        if (commandTokens.length !== 0) {
            throw new Error("Error: invalid command parameters");
        }
        arr.sort();
    }

    return {sort};
});