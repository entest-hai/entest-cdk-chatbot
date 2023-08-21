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
