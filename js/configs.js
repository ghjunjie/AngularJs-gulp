configs.factory("config", function() {
	var obj = {
		test: {
			hostUrl: "http://10.10.10.230:8080/api",
			ristCtrlUrl:'http://10.10.10.230:8101'
		},
		yejunjie: {
			hostUrl: "http://10.10.10.206:8080/api",
			ristCtrlUrl:'10.10.10.230:8101'
		},
		ansongtao:{
			hostUrl: "http://10.10.10.201:9005/api",
			ristCtrlUrl:'10.10.10.230:8101'
		},
		linzeyang:{
			hostUrl: "http://10.10.10.134:8081/api",
			ristCtrlUrl:'10.10.10.230:8101'
		},
		maizhitong:{
			hostUrl: "http://10.10.10.202:8080/api",
			ristCtrlUrl:'10.10.10.230:8101'
		},
		dengfeng:{
			hostUrl: "http://10.10.10.205:8080/api",
			ristCtrlUrl:'10.10.10.230:8101'
		},
		wuyuecuan:{
			hostUrl: "http://10.10.10.213:8080/api",
			ristCtrlUrl:'10.10.10.230:8101'
		},
		product: {},
		online: {}
	}
	return obj.test;   
})
configs.factory("menuConfig", function() {
	var menu = {
		list: [{
				/*"name": "财务系统",*/
				"name": "财务中心",
				/*financialSystem*/
				'alias': 'financialSystem',
				"list": [{
						"name": "放款审核",
						"url": "loanReview"
					},
					{
						"name": "还款列表",
						"url": "reimbursementList"
					}
				]
			},
			{
				"name": "产品配置中心",
				/*"name": "金融配置中心",*/
				/*financialAllocationCenter*/
				'alias': 'financialAllocationCenter',
				"list": [/*{
						"name": "渠道配置",
						"url": "channelConfiguration"
					},
					{
						"name": "合作方管理",
						"url": "partnerManagement"
					},*/
					{
						"name": "产品配置",
						"url": "productConfiguration"
					}/*,
					{
						"name": "分群定价配置",
						"url": "groupPricingConfiguration"
					}*/
				]
			},
			{
				"name": "短信管理",
				/*SMSManagement*/
				'alias': 'SMSManagement',
				"list": [/*{
						"name": "模板审核",
						"url": "reviewTemplate",
					},
					{
						"name": "模板配置",
						"url": "templateConfiguration",
					},*/
					{
						"name": "短信发送",
						"url": "textMessaging",
					},
					{
						"name": "定时短信",
						"url": "timingMessages",
					}
				]
			},
			{
				"name": "审核中心",
				/*"name": "风控管理",*/
				/*RiskControlManagement*/
				'alias': 'RiskControlManagement',
				"list": [{
						"name": "总工作台",
						"url": "totalWorkbench",
					},
					{
						"name": "人审列表",
						"url": "creditChecklist",
					}
				]
			},  
			/*{
				"name": "用户提现管理no",
				'alias': 'userWithdrawalManagement',
				"list": [{
						"name": "提现审核",
						"url": "withdrawalAudit",
					},
					{
						"name": "模板审核",
						"url": "reviewTemplate",
					}
				]
			},*/
			{
				"name": "订单中心",
				/*userWithdrawalManagement*/
				'alias': 'orderCenter',
				"list": [{
						"name": "授信订单列表",
						"url": "creditOrderList",
					},
					{
						"name": "提现订单",
						"url": "withdrawOrder",
					}
				]
			}
		]
	};
	return menu;
})
