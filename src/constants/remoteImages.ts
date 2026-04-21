const IMAGE_CDN_BASE = 'https://cdn.jsdelivr.net/gh/yadnyeshkolte/yadnyeshkolte.github.io@images';

const imageFromBranch = (path: string): string => `${IMAGE_CDN_BASE}/${path}`;

export const certificationImages = {
  awsCert: imageFromBranch('certifications/aws-educate-introduction-to-cloud-101.webp'),
  githubCert: imageFromBranch('certifications/github-foundations.webp'),
  fdc3Cert: imageFromBranch('certifications/lfel1000-introduction-to-fdc3.webp'),
  openSourceCert: imageFromBranch('certifications/lfd137-open-source-contribution-in-finance.webp'),
  devopsCert: imageFromBranch('certifications/lfs162-introduction-to-devops-and-site-reliability-.webp'),
} as const;

export const projectLightImages = {
  crossdocsImage: imageFromBranch('project-section-light-theme/crossdocsImage.webp'),
  defaultIntroImage: imageFromBranch('project-section-light-theme/default-screen-light.webp'),
  flagsImage: imageFromBranch('project-section-light-theme/flagsImage.webp'),
  frontqodeImage: imageFromBranch('project-section-light-theme/frontqodeImage.webp'),
  imfapiImage: imageFromBranch('project-section-light-theme/imfapiImage.webp'),
  keyboardLightImage: imageFromBranch('project-section-light-theme/keyboardlight.webp'),
  lensImage: imageFromBranch('project-section-light-theme/lensImage.webp'),
  opensourcepenImage: imageFromBranch('project-section-light-theme/opensourcepenImage.webp'),
  structviz3dDesktopImage: imageFromBranch('project-section-light-theme/structviz3dDesktopImage.webp'),
  structviz3dImage: imageFromBranch('project-section-light-theme/structviz3dImage.webp'),
  telegramBotImage: imageFromBranch('project-section-light-theme/telegramBotImage.webp'),
} as const;

export const projectDarkImages = {
  crossdocsDarkImage: imageFromBranch('project-section-dark-theme/crossdocsDarkImage.webp'),
  defaultIntroDarkImage: imageFromBranch('project-section-dark-theme/default-screen-dark.webp'),
  flagsDarkImage: imageFromBranch('project-section-dark-theme/flagsDarkImage.webp'),
  frontqodeDarkImage: imageFromBranch('project-section-dark-theme/frontqodeDarkImage.webp'),
  imfapiDarkImage: imageFromBranch('project-section-dark-theme/imfapiDarkImage.webp'),
  keyboardDarkImage: imageFromBranch('project-section-dark-theme/keyboarddark.webp'),
  lensDarkImage: imageFromBranch('project-section-dark-theme/lensDarkImage.webp'),
  opensourcepenDarkImage: imageFromBranch('project-section-dark-theme/opensourcepenDarkImage.webp'),
  structviz3dDesktopDarkImage: imageFromBranch('project-section-dark-theme/structviz3dDesktopDarkImage.webp'),
  structviz3dDarkImage: imageFromBranch('project-section-dark-theme/structviz3dDarkImage.webp'),
  telegramBotDarkImage: imageFromBranch('project-section-dark-theme/telegramBotDarkImage.webp'),
} as const;

