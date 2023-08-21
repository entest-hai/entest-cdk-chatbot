import * as cdk from 'aws-cdk-lib';
import { CognitoAuthorizer } from './index';

export class IntegTesting {
  readonly stack: cdk.Stack;

  constructor() {
    const app = new cdk.App();

    const stack = new cdk.Stack(app, 'projen-stack-demo');

    new CognitoAuthorizer(stack, 'CognitoAuthorizer', {
      userPoolName: 'chatbot',
      userPoolClientName: 'chatbotapp',
    });

    this.stack = stack;
  }
}
