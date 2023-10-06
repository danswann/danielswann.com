import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { HostedZone } from 'aws-cdk-lib/aws-route53';
import { StackContext, NextjsSite } from 'sst/constructs';


const ROOT_SITE_DOMAIN = 'danielswann.com';
const STAGE_PRODUCTION = 'prod';

export function Site({ stack }: StackContext) {
  const hostedZone = HostedZone.fromLookup(stack, 'HostedZone', {
    domainName: stack.stage === STAGE_PRODUCTION ? ROOT_SITE_DOMAIN : `dev.${ROOT_SITE_DOMAIN}`
  });

  const site = new NextjsSite(stack, 'site', {
    // Local build settings
    path: 'packages/web',

    // Route 53 settings
    customDomain: {
      domainName: stack.stage === STAGE_PRODUCTION ? ROOT_SITE_DOMAIN : `dev.${ROOT_SITE_DOMAIN}`,
      domainAlias: stack.stage === STAGE_PRODUCTION ? `www.${ROOT_SITE_DOMAIN}` : undefined,
      cdk: {
        hostedZone
      }
    },

    // CloudFront settings
    waitForInvalidation: process.env.CI == undefined ? true : false,

    // Nextjs Lambda function settings
    timeout: '5 seconds',
    memorySize: '256 MB',
    imageOptimization: {
      memorySize: '512 MB'
    },
    runtime: 'nodejs18.x',
    warm: stack.stage === STAGE_PRODUCTION ? 10 : undefined,

    // General CDK settings forwarded to CDK construct
    cdk: {
      server: {
        logRetention: stack.stage === STAGE_PRODUCTION ? RetentionDays.THREE_MONTHS : RetentionDays.ONE_WEEK
      }
    }
  });

  stack.addOutputs({
    SiteUrl: site.customDomainUrl || site.url
  });
}