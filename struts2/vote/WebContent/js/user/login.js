
/**
 * 刷新验证码
 * 开发时间：May 31, 2016 12:08:16 PM
 * @author 你的姓名
 * @param a
 * @returns {Boolean}
 */
function chageVerifyCode(a){
	
	//获取图片的url
	var url =a.parents("form:first").find("img").attr("src")+"&x="+new Date().valueOf();
	
	//设置给图片
	a.parents("form:first").find("img").attr("src",url);
	
	return false;
}