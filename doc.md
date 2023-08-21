---
author: haimtran
title: deploy a next chatbot on amazon ecs
date: 20/08/2023
---

## Introduction

[Github]() this note shows how to publish a CDK Construct to npm and pipy using projen

- setup projen project
- develop a construct
- test the construct
- publish the construct

## Setup Project

Create a new projen project

```bash
npx projen new awscdk-construct
```

Update the .projenrc.ts with dependencies

```ts
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
  peerDeps: [
    '@aws-cdk/core',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-ecs',
    '@aws-cdk/aws-ecs-patterns',
  ],
});
project.synth();
```

and install dependencies

```bash
npx projen
```

Projen watch file changes, open this in another terminal. Project complie files and creaet the lib dir by which we can deploy stacks

```bash
yarn watch
```

Check the different

```bash
npx cdk --app lib/integ.default.js diff
```

Deploy

```bash
npx cdk --app lib/integ.default.js deploy
```

## Testing CDK Construct

- Assert that a construct or stack has required resources and properties
- Assert against snapshot (deployed cloudformation template)
- Use [aws-cdk-lib.assertions module](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.assertions-readme.html#asserting-annotations)

Let create a simple test.

```ts
import { Template } from 'aws-cdk-lib/assertions';
import { IntegTesting } from '../src/integ.default';

test('integration test', () => {
  const integ = new IntegTesting();
  integ.stack.forEach((stack) => {
    let template = Template.fromStack(stack);
    template.hasResource('AWS::Cognito::UserPool', {});
  });
});
```

Run the test

```bash
yarn test
```

Build everything before push to github

```yarn
yarn build
```

## Github Actions

- tag and release
- upgrade-main and merge workflow
- publish npm and pipy
- pull a remote branch

To pull a remote branch to locall

```bash
get fetch
git switch github-actions/upgrade-main
git pull origin git switch github-actions/upgrade-main
```

## Reference

- [example lambda](https://github.com/seeebiii/projen-test/blob/main/.projenrc.js)

- [aws-delivlib](https://betterdev.blog/building-cdk-construct-library/)

- [cognito userpool](https://github.com/cdk-entest/apigw-auth-cognito/blob/main/lib/apigw-cognito-authorizer.ts)

- [apigw lambda](https://github.com/cdk-entest/apigw-lambda-basic/blob/main/lib/apigw-lambda-basic-stack.ts)

- [testing cdk construct](https://docs.aws.amazon.com/cdk/v2/guide/testing.html)

- [cdk assertion testing](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.assertions-readme.html#asserting-annotations)
