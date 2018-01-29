// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseUrl: 'https://192.168.99.100:31614',
  httpOptions: { withCredentials: true },
  gitLabToken: 'xxx',
  gitLabRepository: 'https://git.caruso-dataplace.com/api/v4/projects/60/repository/files/catalog%2Fcatalog.json?branch=master'
};
