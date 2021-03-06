module.exports = {
  norpc: true,
  copyPackages: [
    '@aragon/os',
    '@aragon/test-helpers',
    '@aragon/apps-shared-migrations',
    '@aragon/apps-vault',
    '@ablack/fundraising-shared-interfaces',
    '@ablack/fundraising-shared-test-helpers',
  ],
  skipFiles: [
    'test',
    '@aragon/os',
    '@aragon/test-helpers',
    '@aragon/apps-shared-migrations',
    '@aragon/apps-vault',
    '@ablack/fundraising-shared-interfaces',
    '@ablack/fundraising-shared-test-helpers',
  ],
}
