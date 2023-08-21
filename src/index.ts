import { RemovalPolicy, aws_cognito } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface CognitoAuthorizerProps {
  readonly userPoolName: string;
  readonly userPoolClientName: string;
}

export class CognitoAuthorizer extends Construct {
  public readonly userPool: string;

  constructor(scope: Construct, id: string, props: CognitoAuthorizerProps) {
    super(scope, id);

    const pool = new aws_cognito.UserPool(this, 'UserPoolDemo', {
      userPoolName: props.userPoolName,
      selfSignUpEnabled: true,
      signInAliases: {
        email: true,
      },
      autoVerify: {
        email: true,
      },
      removalPolicy: RemovalPolicy.DESTROY,
    });

    pool.addClient('WebClient', {
      authFlows: {
        userPassword: true,
        adminUserPassword: true,
        custom: true,
        userSrp: true,
      },
      userPoolClientName: props.userPoolClientName,
    });

    // export output
    this.userPool = pool.userPoolArn;
  }
}
