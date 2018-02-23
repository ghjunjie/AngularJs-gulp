/*日期工具*/
/*
     时间格式的转换
     例如：yyyy-mm-dd  yyy/mm/dd
     */
services.factory("dateFormat", function() {
	Date.prototype.Format = function(fmt) { //author: meizz
		var o = {
			"M+": this.getMonth() + 1, //月份
			"d+": this.getDate(), //日
			"h+": this.getHours(), //小时
			"m+": this.getMinutes(), //分
			"s+": this.getSeconds(), //秒
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度
			"S": this.getMilliseconds() //毫秒
		};
		if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for(var k in o)
			if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}
	var dateFormatConversion = function(date, format) {
		return date.Format(format);
	}
	return {
		dateFormatConversion: dateFormatConversion
	}
}).factory('dateUtils', function(dateFormat) { /*日期工具*/
	var returnObj = {
		getTodayStr: function() {
			var curDate = new Date();
			return dateFormat.dateFormatConversion(curDate, 'yyyy-MM-dd');
		},
		getThisWeekFristDateStr: function() {
			var curDate = new Date();
			var weekNum=curDate.getDay();
			if(weekNum){
				var timeMills=curDate.getTime()-weekNum*(1000*60*60*24)
				curDate=new Date(timeMills);
			}
			return dateFormat.dateFormatConversion(curDate, 'yyyy-MM-dd');
		},
		getThisMouthFristDateStr:function(){
			var curDate = new Date();
			var	tempDate=new Date(curDate.getFullYear()+'/'+(curDate.getMonth()+1)+'/01');
			return dateFormat.dateFormatConversion(tempDate, 'yyyy-MM-dd');
		}
	};
	return returnObj;
})