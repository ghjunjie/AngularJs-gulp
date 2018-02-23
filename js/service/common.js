
/*通用*/
services.factory("common", function(http) {
	return {
		queryAuditStatus:function(callback){//审核状态/订单状态
			http.post('/backserver/order/queryAuditStatus',{},function(data){
				callback(data);
			})
		},
		queryTrialResult:function(callback){//机审结果/审核结果
			http.post('/backserver/order/queryTrialResult',{},function(data){
				callback(data);
			})
		},
		querychannels:function(callback){//渠道列表查询/进件渠道
			http.post('/backserver/order/querychannels',{},function(data){
				callback(data);
			})
		},
	}
})