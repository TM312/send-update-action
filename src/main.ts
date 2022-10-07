import * as core from '@actions/core';
import * as github from '@actions/github';
import Setup from './lib/setup';
import File from './lib/file';
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
    console.log("filepath_changelog:", filepath_changelog)
    console.log("url:", url)

    // Check if file path exist and file content can be loaded 
    const file = new File(filepath_changelog);
    console.log("filepath:", file.filepath)
    console.log("fileContent:", file.fileContent)
    
    // send request to API
    const response = await sendRequest(url, file.filepath);

    // const statusCode = response.status;
    // const data = response.data;
    // const outputObject = {
    //   url,
    //   method,
    //   statusCode,
    //   data
    // };

    // const consoleOutputJSON = JSON.stringify(outputObject, undefined, 2);
    // console.log(consoleOutputJSON);

    // if (statusCode >= 400) {
    //   core.setFailed(`HTTP request failed with status code: ${statusCode}`);
    // } else {
    //   const outputJSON = JSON.stringify(outputObject);
    //   core.setOutput('output', outputJSON);
    // }
  } catch (error) {
    console.log(error);
    core.setOutput('Set filepath_changelog', core.getInput('filepath_changelog'));
    core.setOutput('Set url', core.getInput('url'));
    // core.setFailed(error.message);
  }
}