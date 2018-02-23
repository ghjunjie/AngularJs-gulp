

filters.filter('yjjfilter',function(){
	return function(value,param){
		var text='';
		console.log('value:'+value+'        param:'+param);
		switch (value){
			case 11:
			text='<<过滤后：'+value+'：'+param;
				break;
			case 22:
			text='      <<过滤后：'+value+'：'+param;
				break;
			case 33:
			text='ggggggggggg';
				break;
			case 44:
			text='第四项';
				break;
			default:
			text='居然没有匹配到';
				break;
		}
		return text;
	}
}).filter('orderType',function(){
	return function(type){
		var typeName='';
		if(type==1){
			typeName='提现';
		}else if(type==2){
			typeName='授信';
		}
		return typeName;
	}
}).filter('orderStatus',function(){
	return function(status){
		var statusName='';
		if(status==1){
			statusName='人审待分配';
		}else if(status==2){
			statusName='人审初审';
		}else if(status==3){
			statusName='人审复审';
		}else if(status==4){
			statusName='人审结束';
		}else if(status==5){
			statusName='机器审核中';
		}else if(status==6){
			statusName='订单取消';
		}else if(status==7){
			statusName='机审结束';
		}
		return statusName;
	}
}).filter('repayStatus',function(){//还款状态
	return function(status){
		var statusName='';
		if(status==1){
			statusName='已还款';
		}else if(status==2){
			statusName='逾期';
		}else if(status==3){
			statusName='待还款';
		}
		return statusName;
	}
}).filter('repayStatus2',function(){//还款状态2 还款状态:1正常已还  2逾期还款  3正常未还  4逾期未还
	return function(status){
		var statusName='';
		if(status==1){
			statusName='正常已还';
		}else if(status==2){
			statusName='逾期还款';
		}else if(status==3){
			statusName='正常未还';
		}else if(status==4){
			statusName='逾期未还';
		}
		return statusName;
	}
}).filter('loanStatus',function(){//放款状态
	return function(status){
		var statusName='';
		if(status==1){
			statusName='待放款';
		}else if(status==2){
			statusName='放款中';
		}else if(status==3){
			statusName='放款成功';
		}else if(status==4){
			statusName='放款失败';
		}
		return statusName; 
	}
}).filter('getJoinNetTime',function(dateFormat){//入网时长计算
	return function(dateStr){
		if(!dateStr){
			return '';
		}
		var year=dateStr.substring(0,4);
		var month=dateStr.substring(4,6);
		var day=dateStr.substring(6,8);
		var hour=dateStr.substring(8,10);
		var min=dateStr.substring(10,12);
		var second=dateStr.substring(12);
		
		var dateNow=new Date();
		var curYear=dateNow.getFullYear();
		var curMouth=dateNow.getMonth()+1;
		var curDay=dateNow.getDate();

		var mouthLength=(curYear-year)*12+(curMouth-month+1);
		
//		var dateType = Date.now()-new Date(year+'-'+month+'-'+day+'  '+hour+':'+min+':'+second) ;
		return mouthLength+'个月';
//		return dateFormat.dateFormatConversion(new Date(dateType), 'yyyy-MM-dd');
	}
}).filter('timeSecondFormat',function(){
	return function(secondStr){
		var second=secondStr%60;
		var min=(secondStr-second)/60%60;
		var hour=(secondStr-second-min*60)/3600; 
		return (hour>=1?hour+'小时':'')+''+(min>=1?min+'分钟':'0分钟')+(second+'秒');
	}	
}).filter('contactListPhoneRate',function(){
	return function(phones,contractList){
		var rt='';
		if(!phones||!contractList){
			return '';
		}
		for(var i in phones){
			for(var j in contractList){
				if(contractList[j].phone==phones[i]){
					rt=contractList[j].call_in_count_rate+contractList[j].call_out_count_rate;
				}
			}
		}
		if(rt>0){
			rt=(rt*100).toFixed(3);
		}
		return rt>0?rt+'%':'';
	}
}).filter('contactListPhoneTag',function(){
	return function(phones,contractList){
		var rt='';
		if(!phones||!contractList){
			return '';
		}
		for(var i in phones){
			for(var j in contractList){
				if(contractList[j].phone==phones[i]&&contractList[j].tag){
					rt=contractList[j].tag;
				}
			}
		}
		return rt;
	}
}).filter('delayStatus',function(){
	return function(delay_status){
		var rt='';
		switch (delay_status){
			case 'M0':rt='正常';
				break;
			case 'M1':rt='欠款X-30天';
				break;
			case 'M2':rt='欠款31-60天';
				break;
			case 'M3':rt='欠款61-90天';
				break;
			case 'M4':rt='欠款90天以上';
				break;
			default:
				break;
		}
		return rt;
	}
})
