gx.evt.autoSkip=!1;gx.define("cidade",!1,function(){this.ServerClass="cidade";this.PackageName="com";this.ServerFullClass="com.cidade";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="projeto";this.SetStandaloneVars=function(){};this.Valid_Cid_id=function(){return this.validSrvEvt("valid_Cid_id",0).then(function(n){return n}.closure(this))};this.e110a10_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e120a10_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53];this.GXLastCtrlId=53;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLECONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TITLE",format:0,grid:0,ctrltype:"textblock"};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"FORMCONTAINER",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"TOOLBARCELL",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTN_FIRST",grid:0,evt:"e130a10_client",std:"FIRST"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"BTN_PREVIOUS",grid:0,evt:"e140a10_client",std:"PREVIOUS"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"BTN_NEXT",grid:0,evt:"e150a10_client",std:"NEXT"};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"BTN_LAST",grid:0,evt:"e160a10_client",std:"LAST"};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"BTN_SELECT",grid:0,evt:"e170a10_client",std:"SELECT"};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cid_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CID_ID",fmt:0,gxz:"Z8cid_id",gxold:"O8cid_id",gxvar:"A8cid_id",ucs:[],op:[44,39],ip:[44,39,34],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A8cid_id=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8cid_id=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CID_ID",gx.O.A8cid_id,0)},c2v:function(){this.val()!==undefined&&(gx.O.A8cid_id=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CID_ID",".")},nac:gx.falseFn};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CID_NOME",fmt:0,gxz:"Z28cid_nome",gxold:"O28cid_nome",gxvar:"A28cid_nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A28cid_nome=n)},v2z:function(n){n!==undefined&&(gx.O.Z28cid_nome=n)},v2c:function(){gx.fn.setControlValue("CID_NOME",gx.O.A28cid_nome,0)},c2v:function(){this.val()!==undefined&&(gx.O.A28cid_nome=this.val())},val:function(){return gx.fn.getControlValue("CID_NOME")},nac:gx.falseFn};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CID_UF",fmt:0,gxz:"Z29cid_uf",gxold:"O29cid_uf",gxvar:"A29cid_uf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A29cid_uf=n)},v2z:function(n){n!==undefined&&(gx.O.Z29cid_uf=n)},v2c:function(){gx.fn.setControlValue("CID_UF",gx.O.A29cid_uf,0)},c2v:function(){this.val()!==undefined&&(gx.O.A29cid_uf=this.val())},val:function(){return gx.fn.getControlValue("CID_UF")},nac:gx.falseFn};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"BTN_ENTER",grid:0,evt:"e110a10_client",std:"ENTER"};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"BTN_CANCEL",grid:0,evt:"e120a10_client"};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"BTN_DELETE",grid:0,evt:"e180a10_client",std:"DELETE"};this.A8cid_id=0;this.Z8cid_id=0;this.O8cid_id=0;this.A28cid_nome="";this.Z28cid_nome="";this.O28cid_nome="";this.A29cid_uf="";this.Z29cid_uf="";this.O29cid_uf="";this.A8cid_id=0;this.A28cid_nome="";this.A29cid_uf="";this.Events={e110a10_client:["ENTER",!0],e120a10_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_CID_ID=[[{av:"A8cid_id",fld:"CID_ID",pic:"ZZZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A28cid_nome",fld:"CID_NOME",pic:""},{av:"A29cid_uf",fld:"CID_UF",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z8cid_id"},{av:"Z28cid_nome"},{av:"Z29cid_uf"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EnterCtrl=["BTN_ENTER"];this.Initialize()});gx.wi(function(){gx.createParentObj(this.cidade)})