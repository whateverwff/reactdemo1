const {
    override,
    fixBabelImports,
    addLessLoader,
    addDecoratorsLegacy
} = require("customize-cra");
const modifyVars = require("./modifyVars")
module.exports = override(
    //antd配置
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    //添加less-loader
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: modifyVars,
    }),
    //react装饰器模式    customize-cra    react-app-rewired
    addDecoratorsLegacy(),
);