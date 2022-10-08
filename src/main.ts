import * as core from '@actions/core';
import * as github from '@actions/github';
// import Setup from './lib/setup';
import getFileBuffer from './lib/getFileBuffer';
import sendRequest from './lib/sendRequest';

export async function run() {
  try {
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload is: ${payload}`);

    // Setup.debug()
    // Setup.checkRequiredVarsAvailable('GITHUB_TOKEN')

    // inputs from action
    const filepath_changelog: undefined | string = core.getInput('filepath_changelog');
    const url: string = core.getInput('url');
    let file: null | Buffer = null;
    
    // Check if file path exist and file content can be loaded 
    if (!!filepath_changelog) {
      file = await getFileBuffer(filepath_changelog);
    }

    const dataInput = {
      payload: payload,
      file: file
    }
    
    // send request to API
    const response = await sendRequest(url, dataInput);

    const statusCode = response.status;
    const data = response.data;
    const outputObject = {
      url,
      statusCode,
      data
    };

    const consoleOutputJSON = JSON.stringify(outputObject, undefined, 2);
    console.log(consoleOutputJSON);

    if (statusCode >= 400) {
      core.setFailed(`HTTP request failed with status code: ${statusCode}`);
    } else {
      const outputJSON = JSON.stringify(outputObject);
      core.setOutput('output', outputJSON);
    }
  } catch (error) {
    console.log(error);
    core.setFailed(error.message);
    core.setOutput('Set filepath_changelog', core.getInput('filepath_changelog'));
    core.setOutput('Set url', core.getInput('url'));
  }
}