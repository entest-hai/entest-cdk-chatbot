import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'haitran',
  authorAddress: 'hai@entest.io',
  cdkVersion: '2.87.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'entest-cdk-chatbot',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/entest-hai/entest-cdk-chatbot.git',
  peerDeps: ['aws-cdk-lib', 'constructs'],
  publishToPypi: {
    distName: 'entest-cognito-userpool',
    module: 'entest_cognito_userpool',
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const common_exclude = ['cdk.out', 'cdk.context.json'];
project.npmignore!.exclude(...common_exclude);
project.gitignore!.exclude(...common_exclude);

project.synth();
