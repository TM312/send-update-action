import * as core from '@actions/core';
import * as github from '@actions/github';
// import Setup from './lib/setup';
import getFileBuffer from './lib/getFileBuffer';
import sendRequest from './lib/sendRequest';

export async function run() {
  try {
    const payload = JSON.stringify(github.context.payload, undefined, 2)

    // Setup.debug()
    // Setup.checkRequiredVarsAvailable('GITHUB_TOKEN')

  // inputs
    const filepath_changelog: undefined | string = core.getInput('filepath_changelog');
    const url: string = core.getInput('url');
    
    // Check if file path exist and file content can be loaded 
    let file: null | Buffer = null;
    if (!!filepath_changelog) {
      file = await getFileBuffer(filepath_changelog);
    }

    const dataInput = {
      payload: payload,
      file: file
    }
    
    // send request to API
    const response = await sendRequest(url, dataInput);

    if (response.status !== 200 && response.status !== 201) {
      core.setFailed(`HTTP request failed with status code: ${response.status}`);
    } else {
      const responseJSON = JSON.stringify(response);
      core.setOutput('response', responseJSON);
    }
  } catch (error) {
    core.setFailed(JSON.stringify(error));
  }
}