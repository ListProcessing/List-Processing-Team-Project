define([], function() {
    function append(arr, commandTokens) {
        arr.push(commandTokens[0]);
    }

    return {append};
});
