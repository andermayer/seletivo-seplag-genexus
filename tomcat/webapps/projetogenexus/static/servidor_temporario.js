gx.evt.autoSkip=!1;gx.define("servidor_temporario",!1,function(){this.ServerClass="servidor_temporario";this.PackageName="com";this.ServerFullClass="com.servidor_temporario";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="projeto";this.SetStandaloneVars=function(){};this.Valid_St_pes_id=function(){return this.validSrvEvt("valid_St_pes_id",0).then(function(n){return n}.closure(this))};this.e110312_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e120312_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58];this.GXLastCtrlId=58;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLECONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TITLE",format:0,grid:0,ctrltype:"textblock"};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"FORMCONTAINER",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"TOOLBARCELL",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTN_FIRST",grid:0,evt:"e130312_client",std:"FIRST"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"BTN_PREVIOUS",grid:0,evt:"e140312_client",std:"PREVIOUS"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"BTN_NEXT",grid:0,evt:"e150312_client",std:"NEXT"};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"BTN_LAST",grid:0,evt:"e160312_client",std:"LAST"};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"BTN_SELECT",grid:0,evt:"e170312_client",std:"SELECT"};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_St_pes_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ST_PES_ID",fmt:0,gxz:"Z3st_pes_id",gxold:"O3st_pes_id",gxvar:"A3st_pes_id",ucs:[],op:[39,49,44],ip:[39,49,44,34],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3st_pes_id=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3st_pes_id=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ST_PES_ID",gx.O.A3st_pes_id,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3st_pes_id=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ST_PES_ID",".")},nac:gx.falseFn};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:1,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ST_PES_NOME",fmt:0,gxz:"Z34st_pes_nome",gxold:"O34st_pes_nome",gxvar:"A34st_pes_nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A34st_pes_nome=n)},v2z:function(n){n!==undefined&&(gx.O.Z34st_pes_nome=n)},v2c:function(){gx.fn.setControlValue("ST_PES_NOME",gx.O.A34st_pes_nome,0)},c2v:function(){this.val()!==undefined&&(gx.O.A34st_pes_nome=this.val())},val:function(){return gx.fn.getControlValue("ST_PES_NOME")},nac:gx.falseFn};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,lvl:0,type:"date",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ST_DATA_ADMISSAO",fmt:0,gxz:"Z11st_data_admissao",gxold:"O11st_data_admissao",gxvar:"A11st_data_admissao",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A11st_data_admissao=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z11st_data_admissao=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("ST_DATA_ADMISSAO",gx.O.A11st_data_admissao,0)},c2v:function(){this.val()!==undefined&&(gx.O.A11st_data_admissao=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("ST_DATA_ADMISSAO")},nac:gx.falseFn};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,lvl:0,type:"date",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ST_DATA_DEMISSAO",fmt:0,gxz:"Z12st_data_demissao",gxold:"O12st_data_demissao",gxvar:"A12st_data_demissao",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A12st_data_demissao=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z12st_data_demissao=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("ST_DATA_DEMISSAO",gx.O.A12st_data_demissao,0)},c2v:function(){this.val()!==undefined&&(gx.O.A12st_data_demissao=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("ST_DATA_DEMISSAO")},nac:gx.falseFn};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"BTN_ENTER",grid:0,evt:"e110312_client",std:"ENTER"};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"BTN_CANCEL",grid:0,evt:"e120312_client"};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"BTN_DELETE",grid:0,evt:"e180312_client",std:"DELETE"};this.A3st_pes_id=0;this.Z3st_pes_id=0;this.O3st_pes_id=0;this.A34st_pes_nome="";this.Z34st_pes_nome="";this.O34st_pes_nome="";this.A11st_data_admissao=gx.date.nullDate();this.Z11st_data_admissao=gx.date.nullDate();this.O11st_data_admissao=gx.date.nullDate();this.A12st_data_demissao=gx.date.nullDate();this.Z12st_data_demissao=gx.date.nullDate();this.O12st_data_demissao=gx.date.nullDate();this.A3st_pes_id=0;this.A34st_pes_nome="";this.A11st_data_admissao=gx.date.nullDate();this.A12st_data_demissao=gx.date.nullDate();this.Events={e110312_client:["ENTER",!0],e120312_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_ST_PES_ID=[[{av:"A3st_pes_id",fld:"ST_PES_ID",pic:"ZZZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A11st_data_admissao",fld:"ST_DATA_ADMISSAO",pic:""},{av:"A12st_data_demissao",fld:"ST_DATA_DEMISSAO",pic:""},{av:"A34st_pes_nome",fld:"ST_PES_NOME",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z3st_pes_id"},{av:"Z11st_data_admissao"},{av:"Z12st_data_demissao"},{av:"Z34st_pes_nome"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EnterCtrl=["BTN_ENTER"];this.Initialize()});gx.wi(function(){gx.createParentObj(this.servidor_temporario)})