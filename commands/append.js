define([], function() {
    function append(arr, commandTokens) {
        if (commandTokens.length === 0 || commandTokens.length > 1 || commandTokens[0].trim() === '') {
            throw new Error("Error: invalid command parameters");
        }
        arr.push(commandTokens[0]);
    }

    return {append};
});
