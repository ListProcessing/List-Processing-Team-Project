define([], function() {
    function roll(arr, commandTokens) {
        if (commandTokens.length !== 1) {
            throw new Error("Error: invalid command parameters");
        }

        switch (commandTokens[0]) {
            case "left":
                let head = arr.shift();
                arr.push(head);
                break;
            case "right":
                let tail = arr.pop();
                arr.unshift(tail);
                break;
            default:
                    throw new Error("Error: invalid command parameters");
                 break;
        }
    }

    return {roll};
});