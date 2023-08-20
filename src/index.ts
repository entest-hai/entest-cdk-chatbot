import * as path from 'path';
import { aws_lambda } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface QueueRecorderProps {
  readonly functionName: string;
}

export class QueueRecorder extends Construct {
  constructor(scope: Construct, id: string, props: QueueRecorderProps) {
    super(scope, id);

    new aws_lambda.Function(this, 'HelloLamdaFunctionDemo', {
      functionName: props.functionName,
      runtime: aws_lambda.Runtime.PYTHON_3_8,
      code: aws_lambda.Code.fromAsset(path.join(__dirname, './../lambda')),
      handler: 'index.handler',
    });
  }
}
