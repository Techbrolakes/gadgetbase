module.exports = {
    '**/*.(ts|js)?(x)': (filenames) => `yarn lint . ${filenames.join(' ')}`,
    '**/*.ts?(x)': () => 'yarn scan',
};
