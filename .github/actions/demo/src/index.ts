import * as core from "@actions/core";
import * as github from "@actions/github";

const run = async () => {
    if (github.context.eventName !== "pull_request") {
        core.setFailed("Can only run on pull request");
    }

    const nameToGreet: string = core.getInput("who-to-greet");
    console.log(`Hello ${nameToGreet}!`);
    
    const time: string = (new Date()).toTimeString();
    core.setOutput("time", time);

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload: string = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
}

// our main method: call the run() function and report any errors
run().catch((error: any) => core.setFailed("Workflow failed!" + error.message));
