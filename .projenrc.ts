import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'haitran',
  authorAddress: 'hai@entest.io',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'entest-cdk-chatbot',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/hai/entest-cdk-chatbot.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();