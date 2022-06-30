import {  Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Code, Function, Runtime} from 'aws-cdk-lib/aws-lambda'
import {Cors, LambdaRestApi} from 'aws-cdk-lib/aws-apigateway'
import {join} from 'path'



export class ApiStack extends Stack {
  
  private lambda: Function
  private api: LambdaRestApi
  
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);  

   this.lambda = this.createFrontEndAPILambda();
   this.createLambdaRestApi(this.lambda)

 
  }

  createLambdaRestApi(fn:Function):LambdaRestApi{

    this.api =  new LambdaRestApi(this,'Lambda Api Graphql',{
      handler:fn,
   //   deployOptions:{stageName:'dev'},
      // defaultCorsPreflightOptions:{
      //   allowOrigins: Cors.ALL_ORIGINS
      // },           
    });

 
    return this.api
  }


  createFrontEndAPILambda():Function{
    this.lambda = new Function(this,'LambdaFunction',{
      functionName: 'LambdaFunction',
      runtime:Runtime.NODEJS_14_X,
      handler: 'index.graphqlHandler',
      code: Code.fromAsset(join(__dirname,'../lambda'))
    }) 
    return this.lambda;
  }
}


