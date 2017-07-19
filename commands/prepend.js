define([], function() {
    function prepend(arr, commandTokens) {
        if (commandTokens.length === 0 || commandTokens.length > 1 || commandTokens[0].trim() === '') {
            throw new Error("Error: invalid command parameters");
        }
        arr.unshift(commandTokens[0]);
    }

    return {prepend};
});
