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

```json
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

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QueueRecorder <a name="QueueRecorder" id="entest-cdk-chatbot.QueueRecorder"></a>

#### Initializers <a name="Initializers" id="entest-cdk-chatbot.QueueRecorder.Initializer"></a>

```typescript
import { QueueRecorder } from 'entest-cdk-chatbot'

new QueueRecorder(scope: Construct, id: string, props: QueueRecorderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#entest-cdk-chatbot.QueueRecorder.Initializer.parameter.scope">scope</a></code> | <code>@aws-cdk/core.Construct</code> | *No description.* |
| <code><a href="#entest-cdk-chatbot.QueueRecorder.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#entest-cdk-chatbot.QueueRecorder.Initializer.parameter.props">props</a></code> | <code><a href="#entest-cdk-chatbot.QueueRecorderProps">QueueRecorderProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="entest-cdk-chatbot.QueueRecorder.Initializer.parameter.scope"></a>

- *Type:* @aws-cdk/core.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="entest-cdk-chatbot.QueueRecorder.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="entest-cdk-chatbot.QueueRecorder.Initializer.parameter.props"></a>

- *Type:* <a href="#entest-cdk-chatbot.QueueRecorderProps">QueueRecorderProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#entest-cdk-chatbot.QueueRecorder.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="entest-cdk-chatbot.QueueRecorder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#entest-cdk-chatbot.QueueRecorder.isConstruct">isConstruct</a></code> | Return whether the given object is a Construct. |

---

##### `isConstruct` <a name="isConstruct" id="entest-cdk-chatbot.QueueRecorder.isConstruct"></a>

```typescript
import { QueueRecorder } from 'entest-cdk-chatbot'

QueueRecorder.isConstruct(x: any)
```

Return whether the given object is a Construct.

###### `x`<sup>Required</sup> <a name="x" id="entest-cdk-chatbot.QueueRecorder.isConstruct.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#entest-cdk-chatbot.QueueRecorder.property.node">node</a></code> | <code>@aws-cdk/core.ConstructNode</code> | The construct tree node associated with this construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="entest-cdk-chatbot.QueueRecorder.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* @aws-cdk/core.ConstructNode

The construct tree node associated with this construct.

---


## Structs <a name="Structs" id="Structs"></a>

### QueueRecorderProps <a name="QueueRecorderProps" id="entest-cdk-chatbot.QueueRecorderProps"></a>

#### Initializer <a name="Initializer" id="entest-cdk-chatbot.QueueRecorderProps.Initializer"></a>

```typescript
import { QueueRecorderProps } from 'entest-cdk-chatbot'

const queueRecorderProps: QueueRecorderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#entest-cdk-chatbot.QueueRecorderProps.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="entest-cdk-chatbot.QueueRecorderProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---



