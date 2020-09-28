//校验抽离文件
// 验证验证外部链接
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}
// 验证验证URL
export function validURL(url) {
    const reg = /(http|https):\/\/([\w.]+\/?)\S*/
    return reg.test(url)
}
// 验证小写
export function validLowerCase(str) {
    const reg = /^[a-z]+$/
    return reg.test(str)
}
// 验证大写
export function validUpperCase(str) {
    const reg = /^[A-Z]+$/
    return reg.test(str)
}
// 验证字母
export function validAlphabets(str) {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
}
// 验证邮箱
export function validEmail(email) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(email)
}
// 验证MAC
export function validMac(str) {
    const reg = /^[A-F0-9]{2}([A-F0-9]{2}){5}$/;
    return reg.test(str)
}
// 验证QQ
export function validQq(str) {
    const reg = /^[1-9]\d{4,9}$/
    return reg.test(str)
}
// 验证微信
export function validWechat(str) {
    const reg = /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/
    return reg.test(str)
}
// 验证银行卡
export function validBankCard(str) {
    const reg = /^([1-9]{1})(\d{14}|\d{18})$/
    return reg.test(str)
}
// 验证IP
export function validIP(str) {
    const reg = /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]{1,2})){3}$/
    return reg.test(str)
}
// 验证固定电话
export function validTelePhone(str) {
    const reg = /^(\\d{3,4}-)?\\d{6,8}$/;
    return reg.test(str)
}
// 验证手机号码
export function validPhoneNumber(str) {
    const reg = /^1[0-9]{10}$/;
    return reg.test(str)
}
// 验证邮政编码
export function validPostalCode(str) {
    const reg = /^\\d{6}$/;
    return reg.test(str)
}
// 验证身份证
export function validIdCard(str) {
    var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
    var tip = "";
    var pass= true;
    //验证身份证格式
    if(!str || ! /(^\d{15}$)|(^\d{17}(\d|X)$)/.test(str)){
        tip = "身份证号格式错误";
        pass = false;
    }

    else if(!city[str.substr(0,2)]){
        tip = "地址编码错误";
        pass = false;
    }
    else{
        //18位身份证需要验证最后一位校验位
        if(str.length == 18){
            str = str.split('');
            var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
            //校验位
            var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++)
            {
                ai = str[i];
                wi = factor[i];
                sum += ai * wi;
            }
            var last = parity[sum % 11];
            if(parity[sum % 11] != str[17]){
                tip = "校验位错误";
                pass =false;
            }
        }
    }
    return {
        pass,
        tip
    };
}
// 验证汉字
export function validChinese(str) {
    const reg = /^[\u4e00-\u9fa5]+$/;
    return reg.test(str)
}
// 验证护照
export function validPassport(str) {
    const reg = /^1[45][0-9]{7}$|(^[P|p|S|s]\d{7}$)|(^[S|s|G|g|E|e]\d{8}$)|(^[Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8}$)|(^[H|h|M|m]\d{8,10}$)/;
    return reg.test(str)
}
// 验证字符串
export function isString(str) {
    if (typeof str === 'string' || str instanceof String) {
        return true
    }
    return false
}
// 验证数组
export function isArray(arg) {
    if (typeof Array.isArray === 'undefined') {
        return Object.prototype.toString.call(arg) === '[object Array]'
    }
    return Array.isArray(arg)
}
/**
*	IMEI(International Mobile Equipment Identity)是国际移动设备身份码的缩写，国际移动装备辨识码，是由15位数字组成的"电子串号"，它与每台手机一一对应，
*	而且该码是全世界唯一的。每一部手机在组装完成后都将被赋予一个全球唯一的一组号码，这个号码从生产到交付使用都将被制造生产的厂商所记录。
*	IMEI码由GSM（全球移动通信协会）统一分配，授权BABT（英国通信认证管理委员会）审受。
*	IMEI由15位数字组成，其组成为：
*	1、前6位数（TAC，Type ApprovalCode)是"型号核准号码"，一般代表机型。
*	2、接着的2位数（FAC，Final Assembly Code)是"最后装配号"，一般代表产地。
*	3、之后的6位数（SNR)是"串号"，一般代表生产顺序号。
*	4、最后1位数（SP)通常是"0"，为检验码，备用。
*/
// 验证IMEI
export function validIMEI(str) {
    const reg = /^\d{14,15}$/;
    return reg.test(str)
}

/**
*   IMSI全称是International Mobile Subscriber Identification Number,我们的手机号码在系统中是被转换为IMSI进行通信的
*   当你的手机开机后在接入网络的过程中有一个注册登记的过程，系统通过控制信道将经加密算法后的参数组传送给客户，手机中的SIM卡收到参数后，
*   与SIM卡存储的客户鉴权参数经同样算法后对比，结果相同就允许接入，否则为非法客户，网络拒绝为此客户服务。
*
*   IMSI共有15位，其结构如下：MCC+MNC+MSIN
*   MCC：Mobile Country Code，移动国家码，MCC的资源由国际电联（ITU）统一分配和管理，唯一识别移动用户所属的国家，共3位，中国为460;
*   MNC: Mobile Network Code，移动网络码，2~3位，中国移动系统使用00、02、07，中国联通GSM系统使用01、06，中国电信CDMA系统使用03、05，中国铁通系统使用20，
*   一个典型的IMSI号码为460030912121001;
*   MSIN:Mobile Subscriber Identification Number, 移动用户识别号码,共有10位，其结构如下：EF+M0M1M2M3+ABCD
*/
export function validIMSI(str) {
    const reg = /^4600[0,1,2,3,5,6,7,9]\d{10}$/;
    return reg.test(str)
}
