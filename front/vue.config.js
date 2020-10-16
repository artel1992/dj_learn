module.exports = {
    assetsDir: process.env.NODE_ENV === 'production'
        ? 'static/'
        : '',
    runtimeCompiler: true,
    filenameHashing: false,
    css: {
        requireModuleExtension: true
    },
}
