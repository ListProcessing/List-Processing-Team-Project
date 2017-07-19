define([], function() {
    function prepend(arr, commandTokens) {
        if (commandTokens[0].trim() === '') {
            throw new Error("Error: invalid command parameters");
        }
        arr.unshift(commandTokens[0]);
    }

    return {prepend};
});
