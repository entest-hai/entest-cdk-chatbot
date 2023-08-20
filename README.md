---
author: haimtran
title: publish a construct
date: 20/08/2023
---

## Introduction

## Command

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

Check the different

```bash
npx cdk --app lib/integ.default.js diff
```

Deploy

```bash
npx cdk --app lib/integ.default.js diff
```

## Reference

- [example lambda](https://github.com/seeebiii/projen-test/blob/main/.projenrc.js)
