function keyHandleToLabel(handle) { switch(handle) {
	case "undo" 	: return "<span style='font-size:13px; position:absolute; top:10px; left: 4px;'>undo</span>";
	case "redo" 	: return "<span style='font-size:13px; position:absolute; top:10px; right:3px;'>redo</span>";
	case "STOP" 	: return "<span style='font-size:25px;'>⬛</span>"; //&#9632;
	case "PLAY" 	: return "<span style='font-size:19px;'>⭓</span>";
	case "REC" 		: return "<span style='color:#8b0000; font-size:39px;'>⬤</span>";
	case "SAVE" 	: return "<span style='font-size:19px;'>⬇</span>";
	case "LOAD" 	: return "<span style='font-size:19px;'>⬆</span>";
	case "STACK"	: return "按";
	case "COLLAPSE"	: return "易";
	case "CONSTL" 	: return "搁";
	case "MONOCOL" 	: return "│";
	case "MONOROW"	: return "─";
	case "HIGHERR"	: return "⫧";
	case "SYMMETRY"	: return "<span style='font-size:12px;'>┼</span>";
	case "HIGHROW"	: return "⫟";
	case "HIGHCOL"	: return "<span style='font-size:27px;'>⫨</span>";
	case "HIGHERC"	: return "<span style='font-size:27px;'>⫠</span>";
	case "METATOOL" : return "▢";/*"<span style='font-size:65px;'>□</span>";*/
	case "QUADDISP" : return "⌘❑<br />⌘⌘";
	case "MONOMOS"  : return "⌘";
	case "MONOD3D"  : return "❑";
	case "ZOOMIN"   : return "+";
	case "ZOOMOUT"  : return "-";
	case "LOOKLEFT" : return "<-";
	case "LOOKRGHT" : return "->";
	case "LOOKUP" 	: return "ˆ";
	case "LOOKDN"   : return "v";
	case "DISPUL"   : return "1";
	case "DISPUR"   : return "2";
	case "DISPDL" 	: return "3";
	case "DISPDR" 	: return "4";
	case "PROJBIN" 	: return "FT";
	case "PROJCAR" 	: return "-0+"}}	
function triple(pri,sec,ter){ var rt={ n:0, pri:null, sec:null, ter:null };
	if 		(typeof ter!="undefined"){ rt.n=3; 	rt.ter=ter; rt.sec=sec; rt.pri=pri }
	else if (typeof sec!="undefined"){ rt.n=2; 				rt.sec=sec; rt.pri=pri }
	else 							 { rt.n=1; 							rt.pri=pri } return rt }
function initTools(handle) { var r=[]; var key=[]; var tool=null;	function T(p,s,t)	{ var rt=triple(p,s,t); return rt }
/*⊞ upon clikc? or sqrd minus etc*/									function K(tri) 	{ key.push(tri) }
	if(handle=="dharma") {
					K(T("undo","redo"));
		tool = new Tool("UndoRedo", 		key); r.push(tool); var key=[];
					K(T("STOP","PLAY")); K(T("REC"));
		tool = new Tool("StopPlayRec", 		key); r.push(tool); var key=[];
					K(T("SAVE","LOAD"));
		tool = new Tool("SaveLoad", 		key); r.push(tool); var key=[];
					K(T("STACK","COLLAPSE"));
		tool = new Tool("StackConst", 		key); r.push(tool); var key=[];
					K(T("CONSTL"));
		tool = new Tool("ConstLabel", 		key); r.push(tool); var key=[];
					K(T("MONOCOL","MONOROW")); K(T("HIGHERR","SYMMETRY","HIGHROW")); K(T("HIGHCOL","HIGHERC"));
		tool = new Tool("HorVer",	 		key); r.push(tool); var key=[];
					K(T("METATOOL"));
		tool = new Tool("MetaTool",	 		key); r.push(tool); var key=[]}
	else if(handle=="mosaic") {
					K(T("undo","redo"));
		tool = new Tool("UndoRedo", 		key); r.push(tool); var key=[];
					K(T("STOP","PLAY")); K(T("REC"));
		tool = new Tool("StopPlayRec", 		key); r.push(tool); var key=[];
					K(T("SAVE","LOAD"));
		tool = new Tool("SaveLoad", 		key); r.push(tool); var key=[];
					K(T("QUADDISP")); K(T("MONOMOS","MONOD3D")); 
		tool = new Tool("DispDim", 			key); r.push(tool); var key=[];
					K(T("ZOOMIN","ZOOMOUT"));
		tool = new Tool("DispZoom", 		key); r.push(tool); var key=[];
	 				K(T("LOOKLEFT","LOOKRGHT"));
		tool = new Tool("DispHor", 			key); r.push(tool); var key=[];
	 				K(T("LOOKUP","LOOKDN"));
		tool = new Tool("DispVer", 			key); r.push(tool); var key=[];
	 				K(T("DISPUR","DISPUL")); K(T("DISPDL","DISPDR"));
		tool = new Tool("DispFocus", 		key); r.push(tool); var key=[];
					K(T("PROJBIN","PROJCAR"));
		tool = new Tool("DispProj", 		key); r.push(tool); var key=[]}
	r = cutToolKeys(r); return r }
function Tool(handle, key) { this.handle=handle; this.key=key}
function cutToolKeys(tools) { var bf=null;
				function setKeyElementClass(e,arity){ if (arity==1) { e.setAttribute('class','unaryFeature')   }
												 else if (arity==2) { e.setAttribute('class','binaryFeature')  }
												 else if (arity==3) { e.setAttribute('class','trinaryFeature') } return e }
				function setKeyElementId(e,handle,n,arity) {
					var id = ""; id += "key"; id += handle;	id += "_"; id += n;	id += "-"; id += arity;
					e.setAttribute('id',id); return e }
			function cutDOM(tri) { var r=[];
				function terDOM() {priDOM();secDOM(); var e=document.createElement('div'); e=setKeyElementClass(e, tri.n);
							e=setKeyElementId(e, tri.ter, 3, tri.n); e.innerHTML=keyHandleToLabel(tri.ter); r.push(e); }
				function secDOM() {priDOM(); 		  var e=document.createElement('div'); e=setKeyElementClass(e, tri.n);
		 					e=setKeyElementId(e, tri.sec, 2, tri.n); e.innerHTML=keyHandleToLabel(tri.sec); r.push(e); }
				function priDOM() { 				  var e=document.createElement('div'); e=setKeyElementClass(e, tri.n);
		 					e=setKeyElementId(e, tri.pri, 1, tri.n); e.innerHTML=keyHandleToLabel(tri.pri); r.push(e); }
				tri.n==3 ? terDOM() : tri.n==2 ? secDOM() : priDOM(); return r }
			function cutSVG(tri) { var r=[];
function terSVG() {priSVG();secSVG();var e=document.createElementNS(svgNS,'rect');e=setKeyElementClass(e, tri.n);
	e=setKeyElementId(e, tri.ter, 3, tri.n); e.innerHTML=keyHandleToLabel(tri.ter); r.push(e); }
function secSVG() {priSVG(); 		 var e=document.createElementNS(svgNS,'rect');e=setKeyElementClass(e, tri.n);
	e=setKeyElementId(e, tri.sec, 2, tri.n); e.innerHTML=keyHandleToLabel(tri.ter); r.push(e); }
function priSVG() { 				 var e=document.createElementNS(svgNS,'rect');e=setKeyElementClass(e, tri.n);
	e=setKeyElementId(e, tri.pri, 1, tri.n); e.innerHTML=keyHandleToLabel(tri.ter); r.push(e); }
				tri.n==3 ? terSVG() : tri.n==2 ? secSVG() : priSVG(); return r }
			function cutState(handle) { var s; var ss = []; var ident = "key"+handle; switch(ident) {
				case "keyUndoRedo" 	  	: 	s = { keyUndoRedo_undo: 		null		}; ss.push(s);
											s = { keyUndoRedo_redo: 		null		}; ss.push(s); break;
				case "keyStopPlayRec" 	: 	s = { keyStopPlayRec_stop: 		null		}; ss.push(s);
											s = { keyStopPlayRec_play: 		null		}; ss.push(s);
											s = { keyStopPlayRec_rec: 		null		}; ss.push(s); break;
				case "keySaveLoad" 		: 	s = { keySaveLoad_save: 		null		}; ss.push(s);
											s = { keySaveLoad_load: 		null		}; ss.push(s); break;
				case "keyStackConst"	: 	s = { keyStackConst_stack: 		null		}; ss.push(s);
											s = { keyStackConst_collapse: 	null		}; ss.push(s); break;
				case "keyConstLabel" 	: 	s = { keyConstLabel: 			null		}; ss.push(s); break;
				case "keyHorVer" 		: 	s = { keyHorVer_monoCol: 		null		}; ss.push(s);
											s = { keyHorVer_monoRow: 		null		}; ss.push(s);
											s = { keyHorVer_higherRow: 		null		}; ss.push(s);
											s = { keyHorVer_symmetry: 		null 		}; ss.push(s);
											s = { keyHorVer_highRow: 		null 		}; ss.push(s);
											s = { keyHorVer_highCol: 		null 		}; ss.push(s);
											s = { keyHorVer_higherCol: 		null 		}; ss.push(s); break;
				case "keyMetaTool" 		: 	s = { keyMetaTool: 				null 		}; ss.push(s); break;
				case "keyDispDim" 		: 	s = { keyDispDim_quadDisp:		null 		}; ss.push(s);
											s = { keyDispDim_monoMos:		null 		}; ss.push(s);
											s = { keyDispDim_monoD3d:		null 		}; ss.push(s); break;
				case "keyDispDim" 		: 	s = { keyDispZoom_zoomIn:		null 		}; ss.push(s);
											s = { keyDispZoom_zoomOut:		null 		}; ss.push(s); break;
				case "keyDispHor" 		: 	s = { keyDispHor_lookLeft:		null 		}; ss.push(s);
											s = { keyDispHor_lookRight:		null 		}; ss.push(s); break;
				case "keyDispVer" 		: 	s = { keyDispVer_lookUp:		null 		}; ss.push(s);
											s = { keyDispVer_lookDown:		null 		}; ss.push(s); break;
				case "keyDispFocus" 	: 	s = { keyDispFocus_uL:			null 		}; ss.push(s);
											s = { keyDispFocus_uR:			null 		}; ss.push(s);
											s = { keyDispFocus_dL:			null 		}; ss.push(s);
											s = { keyDispFocus_dR:			null 		}; ss.push(s); break;
				case "keyDispProj" 		: 	s = { keyDispProj_projBin:		null 		}; ss.push(s);
											s = { keyDispProj_projCar:		null 		}; ss.push(s); break} return ss }
		function makeCut(triple,tool) { var buf=null; var cut={ state:null, DOM:[], SVG:[] };
			cut.state 	= cutState(tool.handle);
			cut.DOM 	= cutDOM  (triple);
			cut.SVG 	= cutSVG  (triple); return cut }
	function cutKey(tool){ var cut=null; var cuts={ state:[], DOM:[], SVG:[] };
		for(var j=0;j<tool.key.length;j++) {
			cut = makeCut(tool.key[j], tool);
			cuts.state.push (cut.state); //here was if state
			cuts.DOM.push 	(cut.DOM);
			cuts.SVG.push 	(cut.SVG)} return cuts }
	for(var i=0; i < tools.length; i++){ bf = cutKey(tools[i]); tools[i].key = bf; } return tools }
function keyUndoRedo_undo(e) 		{console.log(e)}
function keyUndoRedo_redo(e) 		{console.log(e)}
function keyStopPlayRec_stop(e) 	{console.log(e)}
function keyStopPlayRec_play(e) 	{console.log(e)}
function keyStopPlayRec_rec(e) 		{console.log(e)}
function keySaveLoad_save(e) 		{console.log(e)}
function keySaveLoad_load(e) 		{console.log(e)}
function keyStackConst_stack(e) 	{console.log(e)}
function keyStackConst_collapse(e)	{console.log(e)}
function keyConstLabel(e) 			{console.log(e)}
function keyHorVer_monoCol(e) 		{console.log(e)}
function keyHorVer_monoRow(e) 		{console.log(e)}
function keyHorVer_higherRow(e)		{console.log(e)}
function keyHorVer_symmetry(e) 		{console.log(e)}
function keyHorVer_highRow(e) 		{console.log(e)}
function keyHorVer_highCol(e) 		{console.log(e)}
function keyHorVer_higherCol(e) 	{console.log(e)}
function keyMetaTool(e) 			{console.log(e)}
function keyDispDim_quadDisp(e) 	{console.log(e)}
function keyDispDim_monoMos(e) 		{console.log(e)}
function keyDispZoom_zoomIn(e) 		{console.log(e)}
function keyDispZoom_zoomOut(e) 	{console.log(e)}
function keyDispHor_lookLeft(e) 	{console.log(e)}
function keyDispHor_lookRight(e) 	{console.log(e)}
function keyDispVer_lookUp(e)	 	{console.log(e)}
function keyDispVer_lookDown(e)	 	{console.log(e)}
function keyDispFocus_uL(e)		 	{console.log(e)}
function keyDispFocus_uR(e)		 	{console.log(e)}
function keyDispFocus_dL(e)		 	{console.log(e)}
function keyDispFocus_DR(e)		 	{console.log(e)}
function keyDispProj_projBin(e)	 	{console.log(e)}
function keyDispProj_projCar(e)	 	{console.log(e)}
                                                  /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                                                XXX      XXX.   XXX.    XXX     XX
                                                               X.       X.     X.  X.  X.  X.  X  X
                                                                XX.     X.     X.  X.  X.  X      X
                                                                  X.     X.     XXX.    XXX.  XXXXXXX
                                                                XX.       X.                       X
                                                                           X.                      X
                                                                           X 
                                                                          */
                                                                          
                     /*X                                                      2222          XX
                X       XX                                                  222  222          XX
XX              X        XX    XXOHRAXX    MBLE  EE   EE  EEEEe EE EE   EE 222    222     XX   XX
NYTXOTTIXX   RESSULL     EX                AA    EEE  EE EE     EE EEE  EE 2222222222     XXOHIXMÄN!
XX              X        XX    XLEIPÄ!!    RNSE  EE E EE EE EEE EE EE E EE 222            XX   XX
                X      333                 XG    EE  EEE EE  EE EE EE  EEE  222  222 	     βββ
                       X                   &E@P  OS   T-  COMM  UN IS   ME    2222           X
                       X                                                                     */
function ensimmaeinenSana() { AL.tree = initExistence(initReality()); console.log(AL.tree); initUI(); virginTab() }
function initUI() {	measureWindow(); for(var i = 0; i < AL.tabs.length; i++) { AL.tabs[i] = initTab(AL.tabs[i]) }} 
function initControls(SVG) {	window.addEventListener("resize", AL.tab.funcs.resize, true);
								SVG ? initSVGControls() : initDOMControls() }
function initDevKey() {	if(typeof AL.tab.features.devKey != "undefined") { if(AL.tab.features.devKey) {
	document.addEventListener('keydown', 	(event) => {
		const keyName = event.key; console.log('keydown event\n\n' + 'key: ' + keyName); }); }}}
function initControls3D() { if(typeof AL.tab.features.d3d != "undefined") { if(AL.tab.features.d3d) {
	document.addEventListener('keydown', 	(e) => { const keyName = e.key; switch(keyName) {
		case "ArrowLeft" : AL.lArr=true;navigate3D(e.shiftKey,e.altKey,e.ctrlKey,AL.tab.display.d3d,AL.tab.speed);break;
		case "ArrowUp" 	 : AL.uArr=true;navigate3D(e.shiftKey,e.altKey,e.ctrlKey,AL.tab.display.d3d,AL.tab.speed);break;
		case "ArrowRight": AL.rArr=true;navigate3D(e.shiftKey,e.altKey,e.ctrlKey,AL.tab.display.d3d,AL.tab.speed);break;
		case "ArrowDown" : AL.dArr=true;navigate3D(e.shiftKey,e.altKey,e.ctrlKey,AL.tab.display.d3d,AL.tab.speed);break}});
	document.addEventListener('keyup', 		(event) => { const keyName = event.key; switch(keyName) {
		case "ArrowLeft" : AL.lArr = false; break;
		case "ArrowUp" 	 : AL.uArr = false; break;
		case "ArrowRight": AL.rArr = false; break;
		case "ArrowDown" : AL.dArr = false; break; }}); }}}
function initSVGControls() { initDevKey(); initControls3D();
	commonBindArr('svg .barTab', 		function(e,id) 	{ barTab(e, id) 				} );
	var elements = Array.from(document.querySelectorAll('svg .mosaic-uL-tile'));
	elements.forEach(function(el) {	el.addEventListener("mousemove",function() { tileMouseover(el.id) 	} ); });
	elements.forEach(function(el) {	el.addEventListener("click", 	function() { tileClick(el.id) 	 	} ); }); }
/*.click().contextmenu().dblclick()[.hover()Bind one or two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.].mousedown().mouseenter()[.mouseleave()Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.].mousemove().mouseout().mouseover().mouseup()*/
function commonBindOne(selector, callback) { 	var e=document.querySelector(selector);
							e.addEventListener("click",  		function() { callback("click", 			e.id ) 	});
			if(!AL.tab.SVG){e.addEventListener("mousemove", 	function() { callback("mousemove", 		e.id ) 	});
							e.addEventListener("mouseleave",	function() { help() 						 	})}}
function commonBindArr(selector, c) { var e=Array.from(document.querySelectorAll(selector));
					e.forEach( function(e) { e.addEventListener("click",  		function() { c("click", 	e.id ) 	})});
	if(!AL.tab.SVG){e.forEach( function(e) { e.addEventListener("mousemove",	function() { c("mousemove", e.id ) 	})});
					e.forEach( function(e) { e.addEventListener("mouseleave",	function() { help() 				})})}}
function initDOMControls() { initDevKey(); initControls3D();
	commonBindArr('.sidebar-option', 			function(e,id) 		{ barTab(e, id) 				} );
	commonBindOne('.sidebar-option-selected', 	function(e,id) 		{ barTab(e, id) 				} );
	if(AL.tab.handle == "dharma") {
		commonBindOne("[id^='keyundo_']", 			function(e) { keyUndoRedo_undo(e) 			} );
		commonBindOne("[id^='keyredo_']", 			function(e) { keyUndoRedo_redo(e) 			} );
		commonBindOne("[id^='keySTOP_']", 			function(e) { keyStopPlayRec_stop(e) 		} );
		commonBindOne("[id^='keyPLAY_']", 			function(e) { keyStopPlayRec_play(e) 		} );
		commonBindOne("[id^='keyREC_']", 			function(e) { keyStopPlayRec_rec(e) 		} );
		commonBindOne("[id^='keySAVE_']", 			function(e) { keySaveLoad_save(e) 			} );
		commonBindOne("[id^='keyLOAD_']", 			function(e) { keySaveLoad_load(e) 			} );
		commonBindOne("[id^='keySTACK_']", 			function(e) { keyStackConst_stack(e) 		} );
		commonBindOne("[id^='keyCOLLAPSE_']", 		function(e) { keyStackConst_collapse(e) 	} );
		commonBindOne("[id^='keyCONSTL_']", 		function(e) { keyConstLabel(e) 				} );
		commonBindOne("[id^='keyMONOCOL_']", 		function(e) { keyHorVer_monoCol(e) 			} );
		commonBindOne("[id^='keyMONOROW_']", 		function(e) { keyHorVer_monoRow(e) 			} );
		commonBindOne("[id^='keyHIGHERR_']", 		function(e) { keyHorVer_higherRow(e)		} );
		commonBindOne("[id^='keySYMMETRY_']",		function(e) { keyHorVer_symmetry(e) 		} );
		commonBindOne("[id^='keyHIGHROW_']", 		function(e) { keyHorVer_highRow(e) 			} );
		commonBindOne("[id^='keyHIGHCOL_']", 		function(e) { keyHorVer_highCol(e) 			} );
		commonBindOne("[id^='keyHIGHERC_']", 		function(e) { keyHorVer_higherCol(e)		} );
		commonBindOne("[id^='keyMETATOOL_']", 		function(e) { keyMetaTool(e)				} )}

// tab specific dharma profiles

	if(typeof AL.tab.profiles != "undefined" && AL.tab.profiles) {
	var elements = Array.from(document.querySelectorAll('#removeDharmaProfile'));
	elements.forEach(function(el) { el.addEventListener('click', 	function() { removeDharmaProfile() 	} ); });
	var elements = Array.from(document.querySelectorAll('#createDharmaProfile'));
	elements.forEach(function(el) { el.addEventListener('click', 	function() { createDharmaProfile() 	} ); });
	var elements = Array.from(document.querySelectorAll('.dharmaSource .dharmaSourceSelected'));
	elements.forEach(function(el) { el.addEventListener('click', 	function() { dharmaHypothesis(el.id)} ); });
	var elements = Array.from(document.querySelectorAll('.dharmaTarget .dharmaTargetSelected'));
	elements.forEach(function(el) { el.addEventListener('click', 	function() { dharmaLemma(el.id) 	} ); });
	var elements = Array.from(document.querySelectorAll('.dharmaSidebarHood #dharmaSidebarHoodPaint'));
	elements.forEach(function(el) { el.addEventListener('mouseover',function() {
		console.log("HOOD"); openHood(el.id,el.class)} ); });
	var elements = Array.from(document.querySelectorAll('#dharmaOntologySelector'));
	elements.forEach(function(el) { el.addEventListener('click',	function() { setDharmaLogy("ont") 	} ); });
	var elements = Array.from(document.querySelectorAll('#dharmaEpistemologySelector'));
	elements.forEach(function(el) { el.addEventListener('click',	function() { setDharmaLogy("epi") 	} ); });
	var elements = Array.from(document.querySelectorAll('#dharmaMoralitySelector'));
	elements.forEach(function(el) { el.addEventListener('click',	function() { setDharmaLogy("mor") 	} ); });
	var elements = Array.from(document.querySelectorAll('#dharmaEthicsSelector'));
	elements.forEach(function(el) { el.addEventListener('click',	function() { setDharmaLogy("qua") 	} ); }); }}
function tileMouseover(id) 	{ console.log(id + " tile mouseover"); }
function tileClick(id) 		{ /*console.log(id);*/ var Id = id.split("-").pop(); /*console.log(Id);*/ moveToTile(Id); }