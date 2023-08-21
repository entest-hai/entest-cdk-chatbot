---
author: haimtran
title: create a cognito userpool for web development
date: 20/08/2023
---

## Cognito Authorizer

When developing an web or mobile application, we usually need a identity provider. So this Construct can be used to create a Cognito UserPool

```ts
new CognitoAuthorizer(stack, 'CognitoAuthorizer', {
  userPoolName: 'chatbot',
  userPoolClientName: 'chatbotapp',
});
```

## Usage Guide

There are different use cases, for example

- Use in another CDK Stack
- Create only a UserPool for a web application

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoAuthorizer <a name="CognitoAuthorizer" id="entest-cdk-chatbot.CognitoAuthorizer"></a>

#### Initializers <a name="Initializers" id="entest-cdk-chatbot.CognitoAuthorizer.Initializer"></a>

```typescript
import { CognitoAuthorizer } from 'entest-cdk-chatbot'

new CognitoAuthorizer(scope: Construct, id: string, props: CognitoAuthorizerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#entest-cdk-chatbot.CognitoAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#entest-cdk-chatbot.CognitoAuthorizer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#entest-cdk-chatbot.CognitoAuthorizer.Initializer.parameter.props">props</a></code> | <code><a href="#entest-cdk-chatbot.CognitoAuthorizerProps">CognitoAuthorizerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="entest-cdk-chatbot.CognitoAuthorizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="entest-cdk-chatbot.CognitoAuthorizer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="entest-cdk-chatbot.CognitoAuthorizer.Initializer.parameter.props"></a>

- *Type:* <a href="#entest-cdk-chatbot.CognitoAuthorizerProps">CognitoAuthorizerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#entest-cdk-chatbot.CognitoAuthorizer.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="entest-cdk-chatbot.CognitoAuthorizer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#entest-cdk-chatbot.CognitoAuthorizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="entest-cdk-chatbot.CognitoAuthorizer.isConstruct"></a>

```typescript
import { CognitoAuthorizer } from 'entest-cdk-chatbot'

CognitoAuthorizer.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="entest-cdk-chatbot.CognitoAuthorizer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#entest-cdk-chatbot.CognitoAuthorizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#entest-cdk-chatbot.CognitoAuthorizer.property.userPool">userPool</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="entest-cdk-chatbot.CognitoAuthorizer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="entest-cdk-chatbot.CognitoAuthorizer.property.userPool"></a>

```typescript
public readonly userPool: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### CognitoAuthorizerProps <a name="CognitoAuthorizerProps" id="entest-cdk-chatbot.CognitoAuthorizerProps"></a>

#### Initializer <a name="Initializer" id="entest-cdk-chatbot.CognitoAuthorizerProps.Initializer"></a>

```typescript
import { CognitoAuthorizerProps } from 'entest-cdk-chatbot'

const cognitoAuthorizerProps: CognitoAuthorizerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#entest-cdk-chatbot.CognitoAuthorizerProps.property.userPoolClientName">userPoolClientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#entest-cdk-chatbot.CognitoAuthorizerProps.property.userPoolName">userPoolName</a></code> | <code>string</code> | *No description.* |

---

##### `userPoolClientName`<sup>Required</sup> <a name="userPoolClientName" id="entest-cdk-chatbot.CognitoAuthorizerProps.property.userPoolClientName"></a>

```typescript
public readonly userPoolClientName: string;
```

- *Type:* string

---

##### `userPoolName`<sup>Required</sup> <a name="userPoolName" id="entest-cdk-chatbot.CognitoAuthorizerProps.property.userPoolName"></a>

```typescript
public readonly userPoolName: string;
```

- *Type:* string

---



