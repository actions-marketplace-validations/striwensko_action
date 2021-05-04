const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  console.log('/home/runner/work/react-setup/react-setup/src/App.js');
console.log('Error:   5:9  error  'time' is assigned a value but never used. Allowed unused vars must match /_.*?$/u  no-unused-vars')
core.warning('myInput was not set');
    // Do stuff
  core.info('Output to the actions build log')
} catch (error) {
  core.setFailed(error.message);
}