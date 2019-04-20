import tl = require('azure-pipelines-task-lib/task');

async function run() {

    try {

        const variableName = tl.getInput("variableName");
        const data: string = tl.getVariable(variableName);
        const buff = new Buffer(data);
        const base64data = buff.toString('base64');

        console.log('"' + data + '" converted to Base64 is "' + base64data + '"');

    }
    catch (err) {

        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();