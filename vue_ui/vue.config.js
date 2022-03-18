module.exports = {
    devServer:{
        port:8880
    },
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true
}
