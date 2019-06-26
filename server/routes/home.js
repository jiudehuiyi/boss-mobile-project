var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var testModel = require('../model/test');
var indexHeaderImgModel = require('../model/indexHeaderImg');
var homeListModel = require('../model/homeList');
var citysModel = require('../model/citys');
var positionListShowModel =  require('../model/positionListShow');
var positionDetailModel= require('../model/positionDetail');
mongoose.connect('mongodb://localhost/bossDatabase');


router.get('/',function(req,res,next){
   var aa = new positionListShowModel({
    "companyLogo" : "https://img2.bosszhipin.com/mcs/chatphoto/20160309/399587a3e283bebd1deefac22f6e99c4612c816a11f2ec7593825aab96724622_s.jpg?x-oss-process=image/resize,w_120,limit_0",
    "position" : "web前端",
    "company" : "天猫",
    "place" : "杭州",
    "date" : "不限",
    "education" : "本科",
    "money" :"20K-30K",
    "url" : "/jobDetail/web?companyName=tianmao",
   })

   aa.save();

  res.send("aa")
})

router.get('/headerImgs',function(req,res,next){
    indexHeaderImgModel.find({},function(err,result){
        res.json(result);
    })
})
router.get("/positionSort",function(req,res,next){
    homeListModel.find({},function(err,result){
        res.json(result);
    })
})
//省份数据
router.get("/citys",function(req,res,next){
    citysModel.find({},function(err,result){
        res.json(result);
    })
})
//返回职位数据
router.get("/positionList",function(req,res,next){

    let  query = req.query;
    // console.log(query);
    for(let key in query) {
        if(query[key] === '全国'){
            delete query[key]
        }
        if(key=='date' && bodyData[key]==="不限") {
            delete bodyData[key];
        }
        if(key == 'education' && bodyData[key]==='不限'){
            delete bodyData[key];
        }
        if(key=='money' && bodyData[key]==='不限'){
            delete bodyData[key];
        }
        
        
    }
    // console.log(query)
    query = JSON.parse( JSON.stringify(query).replace(/searchPosition/g,'position') );
    query = JSON.parse( JSON.stringify(query).replace(/city/g,'place') );
    query = JSON.parse( JSON.stringify(query).replace(/date/g,'date') );
    query = JSON.parse( JSON.stringify(query).replace(/education/g,'education') );
    query = JSON.parse( JSON.stringify(query).replace(/money/g,'money') );
    console.log(query);
    positionListShowModel.find(query,function(err,result){
        res.json(result);
    })
})
//返回职位数据，这里尝试使用post
router.post('/positionList',function(req,res,next){
    // console.log('++++'+req.body+'++++')
    // console.log(JSON.parse(req.body) )
    console.log(req.body)
    let bodyData = req.body;
    for(let key in bodyData) {
        if(key=='place' && bodyData[key]==='全国'){
            delete bodyData[key];
        }
        if(key=='date' && bodyData[key]==="不限") {
            delete bodyData[key];
        }
        if(key == 'education' && bodyData[key]==='不限'){
            delete bodyData[key];
        }
        if(key=='money' && bodyData[key]==='不限'){
            delete bodyData[key];
        }
    }

    positionListShowModel.find(bodyData,function(err,result){
        res.json(result);
    })
})

//返回职位详情
router.post('/positionDetail',function(req,res,next){
    console.log(req.body);
    
    // var aa = new positionDetailModel({
    //     pathname:req.body.pathname,
    //     search:req.body.search,
    //     positionInformation:{
    //         position:"Web前端",
    //         money:"20-35K",
    //         place:"北京",
    //         date:"3-5年",
    //         education:"本科",
    //         updateDate:"2019-06-26"
    //     },
    //     tranPeople:{
    //         avatar:"https://img.bosszhipin.com/beijin/mcs/useravatar/20170626/b745a50e8c3638c3684ff05974a63a8c42866324e722c4c6ba6e586b7ae6a32a_s.jpg?x-oss-process=image/resize,w_100,limit_0",
    //         name:"范先生",
    //         company:"京东集团",
    //         position:"开发人员",
    //     },
    //     positionDescription:{
    //         descriptionTitle:"职位描述",
    //         content:`
    //         web前端开发工程师<br />
    //         岗位描述：<br />
    //         1.负责部门产品模块的设计和开发工作；<br />
    //         2.持续改进产品性能、安全性、稳定性和可扩展性；<br />
    //         3.提升产品UI效果、用户体验。<br />
    //         4.熟悉h5、小程序等相关开发。<br />
    //         任职资格：<br />
    //         1.计算机相关专业本科以上学历，3年以上网站前端开发经验，具备独立完成整站页面切图能力者优先； <br />
    //         2.需有应用Vue、angular、react或node.js的项目经验，深入理解W3C标准与ES规范，熟悉Web语义化，掌握盒模型、常用布局以及浏览器兼容性；<br />
    //         3.熟练使用photoshop工具进行切图和简单图片修改；`
    //     },
    //     collectionIntroduction:{
    //         title:"团队介绍",
    //         description:"电子商务+广告+国际化，张开我们的怀抱，期待您的加入！",
    //         list:["股票期权","带薪年假","年度旅游","不打卡","领导nice","电子商务"]
    //     },
    //     companyInformation:{
    //         title:"工商信息",
    //         description:"北京京东尚科信息技术有限公司",
    //         represent:"法人代表: 张雱",
    //         money:"注册资本：26000万元人民币",
    //         upsetTime:"成立时间：2012-03-13",
    //         status:"经营状态：开业"
    //     },
    //     workPlace:{
    //         title:"工作地址",
    //         place:"北京大兴区京东大厦B座北京市经济技术开发区科创十一街18号院京"
    //     },
    //     companyIntroduction:{
    //         companyLogo:"https://img.bosszhipin.com/beijin/mcs/bar/20190103/a3dadd91783b90a95b3110da93af6b04be1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_120,limit_0",
    //         companyName:"京东集团",
    //         detailCompanyName:"北京京东尚科信息技术有限公司",
    //         sort:"电子商务",
    //         rz:"已上市",
    //         people:"10000人以上"

    //     },
    //     similarPosition:[
    //         {
    //             avatar:"https://img.bosszhipin.com/beijin/mcs/chatphoto/20190425/b3d59bc72d8b4b00273124ef0be1e9141997a48d8c8c5cb3725f893f8fbb1509.jpg?x-oss-process=image/resize,w_120,limit_0",
    //             position:"Web前端",
    //             companyAndPlace:"中软国际.北京",
    //             money:"10-15K",
    //             font:"立即沟通"
    //         },
    //         {
    //             avatar:src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20190118/85b8a64aadae120b7cff621849568714c825989af7c8424a653bc9d438d554a3.jpg?x-oss-process=image/resize,w_120,limit_0",
    //             position:"Web前端",
    //             companyAndPlace:"VIP.KID.北京",
    //             money:"20-40K",
    //             font:"立即沟通"
    //         },
    //         {
    //             avatar:"https://img.bosszhipin.com/beijin/logo/6ca826e0ef896fcd9f15dabdd2492d6dbe1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_120,limit_0",
    //             position:"web前端",
    //             companyAndPlace:"方正电子.北京",
    //             money:"12-24K",
    //             font:"立即沟通"
    //         },
    //         {
    //             avatar:"https://img.bosszhipin.com/beijin/mcs/bar/20190103/8ec651fcd7a63dfc1d4e44e61c53931abe1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_120,limit_0",
    //             position:"Web前端",
    //             companyAndPlace:"快手.杭州",
    //             money:"20-30k",
    //             font:"立即沟通"
    //         },
    //         {
    //             avatar:"https://img.bosszhipin.com/beijin/mcs/chatphoto/20190220/655544f410cc3e6cb1eacd200b1ac5ae493c161c0bd44a7ab2b5533e61c5726f_s.jpg?x-oss-process=image/resize,w_120,limit_0",
    //             position:"Java",
    //             companyAndPlace:"Boss直聘.杭州",
    //             money:"20-40K",
    //             font:"立即沟通"
    //         },
    //     ],
    //     recomCompany:[
    //         "总信", "广州市星旭实业有限公司","节操精选","搜点网络","北京环球广贸","上海逸泽信息","天平派","美团网","医微讯科技","智慧流",
    //         "北京阿恩替生物科技有限公司","辽宁华益汇众电子商务有限公司","普洱市思茅区薪雅一品土特产店","福建省东山县申宏顺海洋食品有限公司","珠海祺胜达电子材料有限公司"
           
    //     ],
    //     footerFont:"首页 > 北京招聘·web前端招聘 > 北京web前端招聘 > 京东集团web前端招聘",
    //     test:"TEST"
    // })
    // aa.save()

    positionDetailModel.find(req.body,function(err,result){
        res.json(result)
    })

})


module.exports = router;
