---
author: haimtran
title: deploy a next chatbot on amazon ecs
date: 20/08/2023
---

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
| <code><a href="#entest-cdk-chatbot.QueueRecorder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#entest-cdk-chatbot.QueueRecorder.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#entest-cdk-chatbot.QueueRecorder.Initializer.parameter.props">props</a></code> | <code><a href="#entest-cdk-chatbot.QueueRecorderProps">QueueRecorderProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="entest-cdk-chatbot.QueueRecorder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

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
| <code><a href="#entest-cdk-chatbot.QueueRecorder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="entest-cdk-chatbot.QueueRecorder.isConstruct"></a>

```typescript
import { QueueRecorder } from 'entest-cdk-chatbot'

QueueRecorder.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="entest-cdk-chatbot.QueueRecorder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#entest-cdk-chatbot.QueueRecorder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="entest-cdk-chatbot.QueueRecorder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

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



