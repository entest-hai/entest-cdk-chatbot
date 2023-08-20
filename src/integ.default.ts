import * as cdk from 'aws-cdk-lib';
import { QueueRecorder } from './index';

const app = new cdk.App();

const stack = new cdk.Stack(app, 'projen-stack-demo');

new QueueRecorder(stack, 'QueueRecorder', {
  functionName: 'HelloProjen',
});
