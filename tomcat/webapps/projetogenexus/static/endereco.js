gx.evt.autoSkip=!1;gx.define("endereco",!1,function(){this.ServerClass="endereco";this.PackageName="com";this.ServerFullClass="com.endereco";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="projeto";this.SetStandaloneVars=function(){};this.Valid_End_id=function(){return this.validSrvEvt("valid_End_id",0).then(function(n){return n}.closure(this))};this.Valid_Cid_id=function(){return this.validSrvEvt("valid_Cid_id",0).then(function(n){return n}.closure(this))};this.e11099_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e12099_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68];this.GXLastCtrlId=68;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLECONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TITLE",format:0,grid:0,ctrltype:"textblock"};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"FORMCONTAINER",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"TOOLBARCELL",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTN_FIRST",grid:0,evt:"e13099_client",std:"FIRST"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"BTN_PREVIOUS",grid:0,evt:"e14099_client",std:"PREVIOUS"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"BTN_NEXT",grid:0,evt:"e15099_client",std:"NEXT"};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"BTN_LAST",grid:0,evt:"e16099_client",std:"LAST"};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"BTN_SELECT",grid:0,evt:"e17099_client",std:"SELECT"};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_End_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_ID",fmt:0,gxz:"Z2end_id",gxold:"O2end_id",gxvar:"A2end_id",ucs:[],op:[59,54,49,44,39],ip:[59,54,49,44,39,34],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2end_id=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2end_id=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("END_ID",gx.O.A2end_id,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2end_id=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("END_ID",".")},nac:gx.falseFn};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_TIPO_ENDERECO",fmt:0,gxz:"Z24end_tipo_endereco",gxold:"O24end_tipo_endereco",gxvar:"A24end_tipo_endereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A24end_tipo_endereco=n)},v2z:function(n){n!==undefined&&(gx.O.Z24end_tipo_endereco=n)},v2c:function(){gx.fn.setControlValue("END_TIPO_ENDERECO",gx.O.A24end_tipo_endereco,0)},c2v:function(){this.val()!==undefined&&(gx.O.A24end_tipo_endereco=this.val())},val:function(){return gx.fn.getControlValue("END_TIPO_ENDERECO")},nac:gx.falseFn};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_LOGRADOURO",fmt:0,gxz:"Z25end_logradouro",gxold:"O25end_logradouro",gxvar:"A25end_logradouro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A25end_logradouro=n)},v2z:function(n){n!==undefined&&(gx.O.Z25end_logradouro=n)},v2c:function(){gx.fn.setControlValue("END_LOGRADOURO",gx.O.A25end_logradouro,0)},c2v:function(){this.val()!==undefined&&(gx.O.A25end_logradouro=this.val())},val:function(){return gx.fn.getControlValue("END_LOGRADOURO")},nac:gx.falseFn};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_NUMERO",fmt:0,gxz:"Z26end_numero",gxold:"O26end_numero",gxvar:"A26end_numero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A26end_numero=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z26end_numero=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("END_NUMERO",gx.O.A26end_numero,0)},c2v:function(){this.val()!==undefined&&(gx.O.A26end_numero=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("END_NUMERO",".")},nac:gx.falseFn};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_BAIRRO",fmt:0,gxz:"Z27end_bairro",gxold:"O27end_bairro",gxvar:"A27end_bairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A27end_bairro=n)},v2z:function(n){n!==undefined&&(gx.O.Z27end_bairro=n)},v2c:function(){gx.fn.setControlValue("END_BAIRRO",gx.O.A27end_bairro,0)},c2v:function(){this.val()!==undefined&&(gx.O.A27end_bairro=this.val())},val:function(){return gx.fn.getControlValue("END_BAIRRO")},nac:gx.falseFn};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cid_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CID_ID",fmt:0,gxz:"Z8cid_id",gxold:"O8cid_id",gxvar:"A8cid_id",ucs:[],op:[],ip:[59],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A8cid_id=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8cid_id=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CID_ID",gx.O.A8cid_id,0)},c2v:function(){this.val()!==undefined&&(gx.O.A8cid_id=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CID_ID",".")},nac:gx.falseFn};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"BTN_ENTER",grid:0,evt:"e11099_client",std:"ENTER"};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"BTN_CANCEL",grid:0,evt:"e12099_client"};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"BTN_DELETE",grid:0,evt:"e18099_client",std:"DELETE"};this.A2end_id=0;this.Z2end_id=0;this.O2end_id=0;this.A24end_tipo_endereco="";this.Z24end_tipo_endereco="";this.O24end_tipo_endereco="";this.A25end_logradouro="";this.Z25end_logradouro="";this.O25end_logradouro="";this.A26end_numero=0;this.Z26end_numero=0;this.O26end_numero=0;this.A27end_bairro="";this.Z27end_bairro="";this.O27end_bairro="";this.A8cid_id=0;this.Z8cid_id=0;this.O8cid_id=0;this.A2end_id=0;this.A24end_tipo_endereco="";this.A25end_logradouro="";this.A26end_numero=0;this.A27end_bairro="";this.A8cid_id=0;this.Events={e11099_client:["ENTER",!0],e12099_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_END_ID=[[{av:"A2end_id",fld:"END_ID",pic:"ZZZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A24end_tipo_endereco",fld:"END_TIPO_ENDERECO",pic:""},{av:"A25end_logradouro",fld:"END_LOGRADOURO",pic:""},{av:"A26end_numero",fld:"END_NUMERO",pic:"ZZZZZZZZZ9"},{av:"A27end_bairro",fld:"END_BAIRRO",pic:""},{av:"A8cid_id",fld:"CID_ID",pic:"ZZZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z2end_id"},{av:"Z24end_tipo_endereco"},{av:"Z25end_logradouro"},{av:"Z26end_numero"},{av:"Z27end_bairro"},{av:"Z8cid_id"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EvtParms.VALID_CID_ID=[[{av:"A8cid_id",fld:"CID_ID",pic:"ZZZZZZZZZ9"}],[]];this.EnterCtrl=["BTN_ENTER"];this.Initialize()});gx.wi(function(){gx.createParentObj(this.endereco)})