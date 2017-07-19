define(['./commands/reverse', './commands/append', './commands/prepend', './commands/roll','./commands/insert'],
    function processCommands(reverse, append, prepend, roll, insert) {

    let commands = {
        reverse: reverse.reverse,
        append: append.append,
        prepend: prepend.prepend,
        roll:roll.roll,
        insert: insert.insert
    };
    let arr;
    let isInitialized = false;

    let terminal = document.getElementById("terminal");
    let input = document.getElementById("input");
    input.addEventListener("keypress", (e) => e.code === "Enter" ? submit() : '');
    document.getElementById("submit").addEventListener("click", submit);

    function submit() {
        let commandTokens = input.value.trim().split(/\s+/);
        if (isInitialized) {
            try {
                commands[commandTokens[0]](arr, commandTokens.slice(1));
                terminal.value += arr.join(" ") + "\n";
            } catch (err) {
                terminal.value += err.message + "\n";
            } finally {
                input.value = "";
            }
        } else {
            arr = commandTokens.slice(0);
            terminal.value += arr.join(" ") + "\n";
            isInitialized = true;
            input.value = "";
        }
    }
});
