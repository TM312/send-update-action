import core from '@actions/core';

class Setup {
  static debug () {
    // Metadate for debugging
    // core.debug(
    //   ` Available environment variables:\n -> ${Object.keys(process.env)
    //     .map(i => i + ' : ' + process.env[i])
    //     .join('\n -> ')}`
    // )
    core.getInput('filepath_changelog')

    core.debug(`\nSelected GITHUB_WORKSPACE: ${process.env.GITHUB_WORKSPACE}`)
  }

  static checkRequiredVarsAvailable (...envVars: string[]) {
    var missingVars: string[] = []
    for (const envVar of envVars) {
      if (!process.env.hasOwnProperty(envVar)) {
        missingVars.push(envVar)
      }
    }

    throw new Error('The following required environment variables are not available: ' + missingVars.join(', '))
  }
}

export default Setup;