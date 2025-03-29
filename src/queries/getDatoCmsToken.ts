// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  switch (hostname) {
    case 'ror.Keirasamala.com':
    case 'Keirasamala.com':
    case 'ror.localhost':
    case 'localhost':
      return '41c30f33cba9ff368371a8f58802fd';
      
    case 'java.Keirasamala.com':
    case 'java.localhost':
      return '9cfd2ca8c261429a7caa55ea0587a7';

    case 'frontend.Keirasamala.com':
    case 'frontend.localhost':
      return 'ee1351644972ae7c3b89db9cf7314b';

    case 'node.Keirasamala.com':
    case 'node.localhost':
      return 'adbb69807c5a85d07b5d557d7b0ce0';

    default:
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
