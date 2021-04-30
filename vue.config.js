module.exports ={
	devServer:{
		proxy:{
			"/api":{
				changeOrigin:true,
				target:"http://localhost:80",
				pathRewrite:{
					"^/api":''
				}
			}
		},
	}
}