// ALDIOD 0010 - calicahupo@gmail.PayPal:0010

// "There are no taxonomies in America!" "And no Cartesian coordinates, either!"
function initTaxonomy(logies,cat) { var f; var k = logies.length; var l;
	for(var i=0; i < k; i++) {
		if(cat == "ont") { l=logies[i].content.items.length; for(var j=0; j < l; j++) {	f = logies[i].content.items[j];
			f.hypot=false; 			f.hypotIn=[]; 			f.lemma=false; 			f.lemmaIn=[];
			f.corollary=false;		f.corollaryIn=[]; 		f.hiddenDharma=false; 	f.hiddenDharmaIn=[]; }}
		else if(cat == "epi"){ l=logies[i].content.length; for(var j=0; j < l; j++) { var k=logies[i].content[j].length;
			f = logies[i].content[j];
			f.hypot=false; 			f.hypotIn=[]; 			f.lemma=false; 			f.lemmaIn=[];
			f.corollary=false;		f.corollaryIn=[]; 		f.hiddenDharma=false; 	f.hiddenDharmaIn=[]; }}}return logies }
//["tangible","abstract","normal","extreme","weak","strong"]
function initEthics(dharma) { return dharma }
function initMoralities(dharma,mor) { var rt = [];
	function makeCatalogue(hnd) { var rt=[]; var tp; var label;
		if(hnd=="romanticQuanta"){label = "Romantic Quanta";
			tp=listQuanta(getOnt(dharma,'beings').content.items); rt.push(tp) }
		rt = new Catalogue(mor, label, "mor", rt); return rt }
	var r = makeCatalogue(mor); return r }
function initMorality(dharma) { dharma.morality = ["romanticQuality"];
	function generate(arr) { var rt = []; var buf; var j=arr.length;
		for(var i=0; i<j; i++) { buf = initMoralities(dharma, arr[i]); rt.push(buf) } return rt }
	dharma.morality = applyMorality(dharma, initTaxonomy(generate(dharma.morality)));
	AL.morality = dharma.morality; return dharma }
function applyMorality(dharma,morality) {
	function castMor(met,obj) {	console.log(obj) }
	return dharma }
// 3P|$7€|\/\(}\¨°n-lSz
// 3P|$7€|\/\(}\¨°n-lS lllllll PPw  pp  zzzz  ääääääää llllll tt   tt  vvvvv  ss      vvvvv   nnnnn  pp lllllll  zzzz    /\ \/\/WUTU-TUMM⁂. ↯↯↯
// 3P|$7€|\/\(}\¨°n-lS ll      PP w pp zz   z    ää    ll     ttt ttt vv   vv ss     vv   vv nn   nn pp ll      zz  zz  (  ) \/\/WUTU-TUMM⁂:. ↯↯↯
// 3P|$7€|\/\(}\¨°n-lS ll      PP w pp zz        ää    ll     ttttttt vv   vv ss     vv   vv nn      pp ll      zz     (  ° ) \/\/WUTU-TUMM⁂:, ↯↯↯
// 3P|$7€|\/\(}\¨°n-lS lllll   PPw  pp  zzzz     ää    lllll  tt t tt vv   vv ss     vv   vv nn      pp lllll    zzzz  ( ˆ } ) \/\/WUTU-TUMM⁂;. ↯↯↯
// 3P|$7€|\/\(}\¨°n-lS ll      PP   pp     zz    ää    ll     tt   tt vv   vv ss     vv   vv nn  nnn pp ll          zz  ({  } ) \/\/WUTU-TUMM⁂:. ↯↯↯
// 3P|$7€|\/\(}\¨°n-lS ll      PP   pp     zz    ää    ll     tt   tt vv   vv ss     vv   vv nn   nn pp ll          zz  ({∩} ) \/\/WUTU-TUMM⁂:,.⭃♥‽
// 3P|$7€|\/\(}\¨°n-lS ll      PP   pp z   zz    ää    ll     tt   tt vv   vv ss     vv   vv nn   nn pp ll      zz  zz ( {∪}) \/\/WUTU-TUMM⁂;.. ↯↯↯
// 3P|$7€|\/\(}\¨°n-lS lllllll PP   pp  zzzz     ää    llllll tt   tt  vvvvv  ssssss  vvvvv   nnnnn  pp lllllll  zzzz  ( { }) \/\/WUTU-TUMM⁂:. ↯↯↯
// 3P|$7€|\/\(}\¨°n-lS                                                                                                 (  ö) \/\/WUTU-TUMM⁂:, ↯↯↯
// 3P|$r e e y t l w v s p p z p z ä h w e p ö e e , r å ä z U ä h h u r v o e t e o e r r p t p l z w h p r h s s l ?  \/ \/\/WUTU-TUMM⁂:. ↯↯↯
//                                                                ⤥y l r r h å wåurp Thtwlyl !! Llote äåsp ävurpthhu seqeeuze? Epweoeu vv öhzprrh-zhöv
function applyEpistemology(dharma,epistemology) {
	function castEpi(ont,epi) { var oi = ont.length;
		function assignContext(on,ep) {
			for (var o=0;o<oi;o++) { assignContext(ont[o],epi) }}}
	var l; var j=dharma.ontology.length; for(var i=0; i < j; i++) {
		l = castEpi(dharma.ontology[i], epistemology); dharma.ontology[i].epistemology=l } return dharma }
function initEpistemology(dharma) { 
	function generate(arr) { var j=arr.length; for(var i=0; i < j; i++) { arr[i] = initEpistemologies(dharma, arr[i]) }}
	generate(AL.epistemology);
	initTaxonomy(AL.epistemology,"epi");
	console.log(AL.epistemology);
	console.log(dharma);
	dharma = applyEpistemology(dharma, dharma.epistemology);
	console.log(dharma);
	//dharma.epistemology = applyEpistemology(dharma, initTaxonomy(generate(dharma.epistemology)));
	//AL.epistemology = dharma.epistemology; 
	//console.log(AL.epistemology);
	return dharma }
function initEpistemologies(dharma, epi) { var label;
	function makeCatalogue(hnd) { var rt=[]; var tp;
		if 		(hnd=="vertexPlane") { label = "Vertex Planes";
			tp=listVertexPlanes(getOnt(dharma,'beings').content.items); //here was not content items
			rt.push(tp)}
		else if (hnd=="circuitScript"){label = "Circuit Script";
			tp=listCircuits(getOnt(dharma,'tmprmnt'),
				["judging","perceiving","resilient","intuitive","thinking","feeling"]); rt.push(tp) }
		rt = new Catalogue(epi, label, "epi", rt); return rt }
	var r = makeCatalogue(epi); return r }
function initDialectics(dharma) { var d =	initEthics(
												initMorality(
													initEpistemology(dharma))); return d }
//███ ███ ███ ███ █  ███ █ █ █ █ █ █ █ █ █ █ █ ███ ███ ███ ███ █  ███ █ █ █ █ █ █ █ █ █ █ █ ███ ███ ███ ███ █  ███ █ █ █ █
//█ █ █ █  █  █ █ █  █ █ ██  █ █ METAPHYSISIAN █ █ █ █  █  █ █ █  █ █ ██  █ █ METAPHYSISIAN █ █ █ █  █  █ █ █  █ █ ██  █ █
//█ █ █ █  █  █ █ █  █ █ ██   █  LINE DO NOT ┼ █ █ █ █  █  █ █ █  █ █ ██   █  LINE DO NOT ┼ █ █ █ █  █  █ █ █  █ █ ██   █ 
//███ █ █  █  ███ ██ ███ █ █ █   █ █ █ █ █ █ █ ███ █ █  █  ███ ██ ███ █ █ █   █ █ █ █ █ █ █ ███ █ █  █  ███ ██ ███ █ █ █  
function initOntology(dharma) {
	dharma.beings = { mas: dharma.mas, fem: dharma.fem };
	var ontologies = ["beings", "tmprmnt"]
	ontologies = initTaxonomy(initOntologies(dharma, ontologies), "ont");
	AL.ontology = ontologies[0]; dharma.ontology = ontologies; return dharma }
function initOntologies(dharma, arr) { var rt=[]; var buf=null; var label;
	function makeCatalogue(hnd) {
		if 		(hnd=="beings") { label = "Beings";		 buf = listBeings(dharma.beings,
				["masculine","feminine","self","other","adult","child","primal being","primal mood"]); }
		else if (hnd=="tmprmnt"){ label = "Temperament"; buf = listTemperaments(dharma.tmprmnt,
				["judging","perceiving","resilient","intuitive","thinking","feeling"]); }
		buf = new Catalogue(arr[i], label, "ont", buf); rt.push(buf); }
	for(var i=0; i<arr.length; i++){ makeCatalogue(arr[i]) } return rt }
function Catalogue(handle,label,cat,content){this.handle=handle; this.label=label; this.cat=cat; this.content=content; }
//███ ███ ███ ███ █  ███ █ █ █ █ █ █ █ █ █ █ █ ███ ███ ███ ███ █  ███ █ █ █ █ █ █ █ █ █ █ █ ███ ███ ███ ███ █  ███ █ █ █ █
//█ █ █ █  █  █ █ █  █ █ ██  █ █ METAPHYSISIAN █ █ █ █  █  █ █ █  █ █ ██  █ █ METAPHYSISIAN █ █ █ █  █  █ █ █  █ █ ██  █ █
//█ █ █ █  █  █ █ █  █ █ ██   █  LINE DO NOT ┼ █ █ █ █  █  █ █ █  █ █ ██   █  LINE DO NOT ┼ █ █ █ █  █  █ █ █  █ █ ██   █ 
//███ █ █  █  ███ ██ ███ █ █ █   █ █ █ █ █ █ █ ███ █ █  █  ███ ██ ███ █ █ █   █ █ █ █ █ █ █ ███ █ █  █  ███ ██ ███ █ █ █  
function getOnt(d,hnd) { for(var i=0; i<d.ontology.length;i++){if(hnd==d.ontology[i].handle){return d.ontology[i]}}}
function getOntology(hnd){ var j=AL.ab.ontology.length; for(var i=0;i<j;i++){
	if(hnd==AL.ab.ontology[i].handle){ return AL.ab.ontology[i] }}}
function getVertexPlanes(beings) { var rt=[]; var j=beings.length; for(var i=0; i < j; i++) {
	rt.push(beings[i].vertexPlane.uR.good); rt.push(beings[i].vertexPlane.uR.bad)}return rt }
function listVertexPlanes(b,types) { var rt = { items: null, categories: [] }; var buf;
	rt.items = getVertexPlanes(b); return rt }
function listCircuits(t,types) { var rt = { items: null, categories: [] }; var buf;
	rt.items = [ {sign:"α"},{sign:"β"},{sign:"γ"},{sign:"δ"},{sign:"ε"},{sign:"ζ"},{sign:"η"},{sign:"θ"},{sign:"ι"},{sign:"κ"},{sign:"λ"},{sign:"μ"} ];	return rt }
function getQuanta(beings) { var rt = []; var bf = null; var j=beings.length; for(var i=0; i < j; i++) {
 	buf = [{ R:4, 	tang:["monolithic","binary","symbolic","diffuse"],
 					abst:["sensory","sensual","intentional","deliberate"]}]; rt.push(buf) } return rt }
function listQuanta(b,types) { var rt = { items: null, categories: [] }; var buf;
	rt.items = getQuanta(b); return rt }
//███ ███ ███ ███ █  ███ █ █ █ █ █ █ █ █ █ █ █ ███ ███ ███ ███ █  ███ █ █ █ █ █ █ █ █ █ █ █ ███ ███ ███ ███ █  ███ █ █ █ █
//█ █ █ █  █  █ █ █  █ █ ██  █ █ METAPHYSISIAN █ █ █ █  █  █ █ █  █ █ ██  █ █ METAPHYSISIAN █ █ █ █  █  █ █ █  █ █ ██  █ █
//█ █ █ █  █  █ █ █  █ █ ██   █  LINE DO NOT ┼ █ █ █ █  █  █ █ █  █ █ ██   █  LINE DO NOT ┼ █ █ █ █  █  █ █ █  █ █ ██   █ 
//███ █ █  █  ███ ██ ███ █ █ █   █ █ █ █ █ █ █ ███ █ █  █  ███ ██ ███ █ █ █   █ █ █ █ █ █ █ ███ █ █  █  ███ ██ ███ █ █ █  
function listBeings(b,types) { var rt = { items: null, categories: [] }; var buf;
	rt.items = [
		b.mas.selves.adult,
		b.mas.selves.adult.moods.hostile, b.mas.selves.adult.moods.enemy, b.mas.selves.adult.moods.runaway,	b.mas.selves.adult.moods.peaceful, b.mas.selves.adult.moods.playful, b.mas.selves.adult.moods.escorting,
		b.fem.selves.adult,
		b.fem.selves.adult.moods.hostile, b.fem.selves.adult.moods.enemy, b.fem.selves.adult.moods.runaway,	b.fem.selves.adult.moods.peaceful, b.fem.selves.adult.moods.playful, b.fem.selves.adult.moods.escorting,
		b.mas.others.adult,
		b.mas.others.adult.moods.hostile, b.mas.others.adult.moods.enemy, b.mas.others.adult.moods.runaway,	b.mas.others.adult.moods.peaceful, b.mas.others.adult.moods.playful, b.mas.others.adult.moods.escorting,
		b.fem.others.adult,
		b.fem.others.adult.moods.hostile, b.fem.others.adult.moods.enemy, b.fem.others.adult.moods.runaway,	b.fem.others.adult.moods.peaceful, b.fem.others.adult.moods.playful, b.fem.others.adult.moods.escorting,
		b.mas.selves.child,
		b.mas.selves.child.moods.hostile, b.mas.selves.child.moods.enemy, b.mas.selves.child.moods.runaway, b.mas.selves.child.moods.peaceful, b.mas.selves.child.moods.playful, b.mas.selves.child.moods.escorting,
		b.fem.selves.child,
		b.fem.selves.child.moods.hostile, b.fem.selves.child.moods.enemy, b.fem.selves.child.moods.runaway, b.fem.selves.child.moods.peaceful, b.fem.selves.child.moods.playful, b.fem.selves.child.moods.escorting,
		b.mas.others.child,
		b.mas.others.child.moods.hostile, b.mas.others.child.moods.enemy, b.mas.others.child.moods.runaway, b.mas.others.child.moods.peaceful, b.mas.others.child.moods.playful, b.mas.others.child.moods.escorting,
		b.fem.others.child,
		b.fem.others.child.moods.hostile, b.fem.others.child.moods.enemy, b.fem.others.child.moods.runaway, b.fem.others.child.moods.peaceful, b.fem.others.child.moods.playful, b.fem.others.child.moods.escorting];
	rt.items = labelBeings(rt.items);
	for(var i=0; i<types.length; i++) {
		if(types[i] == "masculine") { buf = { handle: types[i], items: [
		b.mas.selves.adult,
		b.mas.selves.adult.moods.hostile, b.mas.selves.adult.moods.enemy, b.mas.selves.adult.moods.runaway,	b.mas.selves.adult.moods.peaceful, b.mas.selves.adult.moods.playful, b.mas.selves.adult.moods.escorting,
			b.mas.others.adult,
		b.mas.others.adult.moods.hostile, b.mas.others.adult.moods.enemy, b.mas.others.adult.moods.runaway,	b.mas.others.adult.moods.peaceful, b.mas.others.adult.moods.playful, b.mas.others.adult.moods.escorting,
		b.mas.selves.child,
		b.mas.selves.child.moods.hostile, b.mas.selves.child.moods.enemy, b.mas.selves.child.moods.runaway, b.mas.selves.child.moods.peaceful, b.mas.selves.child.moods.playful, b.mas.selves.child.moods.escorting,
		b.mas.others.child,
		b.mas.others.child.moods.hostile, b.mas.others.child.moods.enemy, b.mas.others.child.moods.runaway, b.mas.others.child.moods.peaceful, b.mas.others.child.moods.playful, b.mas.others.child.moods.escorting] };
		rt.categories.push(buf); }
		else if(types[i] == "feminine") { buf = { handle: types[i], items: [
		b.fem.selves.adult,
		b.fem.selves.adult.moods.hostile, b.fem.selves.adult.moods.enemy, b.fem.selves.adult.moods.runaway,	b.fem.selves.adult.moods.peaceful, b.fem.selves.adult.moods.playful, b.fem.selves.adult.moods.escorting,
		b.fem.others.adult,
		b.fem.others.adult.moods.hostile, b.fem.others.adult.moods.enemy, b.fem.others.adult.moods.runaway,	b.fem.others.adult.moods.peaceful, b.fem.others.adult.moods.playful, b.fem.others.adult.moods.escorting,
		b.fem.selves.child,
		b.fem.selves.child.moods.hostile, b.fem.selves.child.moods.enemy, b.fem.selves.child.moods.runaway, b.fem.selves.child.moods.peaceful, b.fem.selves.child.moods.playful, b.fem.selves.child.moods.escorting,
		b.fem.others.child,
		b.fem.others.child.moods.hostile, b.fem.others.child.moods.enemy, b.fem.others.child.moods.runaway, b.fem.others.child.moods.peaceful, b.fem.others.child.moods.playful, b.fem.others.child.moods.escorting] };
		rt.categories.push(buf); }
		else if(types[i] == "self") { buf = { handle: types[i], items: [
		b.mas.selves.adult,
		b.mas.selves.adult.moods.hostile, b.mas.selves.adult.moods.enemy, b.mas.selves.adult.moods.runaway,	b.mas.selves.adult.moods.peaceful, b.mas.selves.adult.moods.playful, b.mas.selves.adult.moods.escorting,
		b.fem.selves.adult,
		b.fem.selves.adult.moods.hostile, b.fem.selves.adult.moods.enemy, b.fem.selves.adult.moods.runaway,	b.fem.selves.adult.moods.peaceful, b.fem.selves.adult.moods.playful, b.fem.selves.adult.moods.escorting,
		b.mas.selves.child,
		b.mas.selves.child.moods.hostile, b.mas.selves.child.moods.enemy, b.mas.selves.child.moods.runaway, b.mas.selves.child.moods.peaceful, b.mas.selves.child.moods.playful, b.mas.selves.child.moods.escorting,
		b.fem.selves.child,
		b.fem.selves.child.moods.hostile, b.fem.selves.child.moods.enemy, b.fem.selves.child.moods.runaway, b.fem.selves.child.moods.peaceful, b.fem.selves.child.moods.playful, b.fem.selves.child.moods.escorting] };
		rt.categories.push(buf); }
		else if(types[i] == "other") { buf = { handle: types[i], items: [
		b.mas.others.adult,
		b.mas.others.adult.moods.hostile, b.mas.others.adult.moods.enemy, b.mas.others.adult.moods.runaway,	b.mas.others.adult.moods.peaceful, b.mas.others.adult.moods.playful, b.mas.others.adult.moods.escorting,
		b.fem.others.adult,
		b.fem.others.adult.moods.hostile, b.fem.others.adult.moods.enemy, b.fem.others.adult.moods.runaway,	b.fem.others.adult.moods.peaceful, b.fem.others.adult.moods.playful, b.fem.others.adult.moods.escorting,
		b.mas.others.child,
		b.mas.others.child.moods.hostile, b.mas.others.child.moods.enemy, b.mas.others.child.moods.runaway, b.mas.others.child.moods.peaceful, b.mas.others.child.moods.playful, b.mas.others.child.moods.escorting,
		b.fem.others.child,
		b.fem.others.child.moods.hostile, b.fem.others.child.moods.enemy, b.fem.others.child.moods.runaway, b.fem.others.child.moods.peaceful, b.fem.others.child.moods.playful, b.fem.others.child.moods.escorting] };
		rt.categories.push(buf); }
		else if(types[i] == "adult") { buf = { handle: types[i], items: [
		b.mas.selves.adult,
		b.mas.selves.adult.moods.hostile, b.mas.selves.adult.moods.enemy, b.mas.selves.adult.moods.runaway,	b.mas.selves.adult.moods.peaceful, b.mas.selves.adult.moods.playful, b.mas.selves.adult.moods.escorting,
		b.fem.selves.adult,
		b.fem.selves.adult.moods.hostile, b.fem.selves.adult.moods.enemy, b.fem.selves.adult.moods.runaway,	b.fem.selves.adult.moods.peaceful, b.fem.selves.adult.moods.playful, b.fem.selves.adult.moods.escorting,
		b.mas.others.adult,
		b.mas.others.adult.moods.hostile, b.mas.others.adult.moods.enemy, b.mas.others.adult.moods.runaway,	b.mas.others.adult.moods.peaceful, b.mas.others.adult.moods.playful, b.mas.others.adult.moods.escorting,
		b.fem.others.adult,
		b.fem.others.adult.moods.hostile, b.fem.others.adult.moods.enemy, b.fem.others.adult.moods.runaway,	b.fem.others.adult.moods.peaceful, b.fem.others.adult.moods.playful, b.fem.others.adult.moods.escorting] };
		rt.categories.push(buf); }
		else if(types[i] == "child") { buf = { handle: types[i], items: [
		b.mas.selves.child,
		b.mas.selves.child.moods.hostile, b.mas.selves.child.moods.enemy, b.mas.selves.child.moods.runaway, b.mas.selves.child.moods.peaceful, b.mas.selves.child.moods.playful, b.mas.selves.child.moods.escorting,
		b.fem.selves.child,
		b.fem.selves.child.moods.hostile, b.fem.selves.child.moods.enemy, b.fem.selves.child.moods.runaway, b.fem.selves.child.moods.peaceful, b.fem.selves.child.moods.playful, b.fem.selves.child.moods.escorting,
		b.mas.others.child,
		b.mas.others.child.moods.hostile, b.mas.others.child.moods.enemy, b.mas.others.child.moods.runaway, b.mas.others.child.moods.peaceful, b.mas.others.child.moods.playful, b.mas.others.child.moods.escorting,
		b.fem.others.child,
		b.fem.others.child.moods.hostile, b.fem.others.child.moods.enemy, b.fem.others.child.moods.runaway, b.fem.others.child.moods.peaceful, b.fem.others.child.moods.playful, b.fem.others.child.moods.escorting] };
		rt.categories.push(buf); }
		else if(types[i] == "primal being") { buf = { handle: types[i], items: [
		b.mas.selves.adult,	b.fem.selves.adult,	b.mas.others.adult,	b.fem.others.adult,		
		b.mas.selves.child,	b.fem.selves.child,	b.mas.others.child,	b.fem.others.child] };
		rt.categories.push(buf); }
		else if(types[i] == "primal mood") { buf = { handle: types[i], items: [
		b.mas.selves.adult.moods.hostile, b.mas.selves.adult.moods.enemy, b.mas.selves.adult.moods.runaway,	b.mas.selves.adult.moods.peaceful, b.mas.selves.adult.moods.playful, b.mas.selves.adult.moods.escorting,
		b.fem.selves.adult.moods.hostile, b.fem.selves.adult.moods.enemy, b.fem.selves.adult.moods.runaway,	b.fem.selves.adult.moods.peaceful, b.fem.selves.adult.moods.playful, b.fem.selves.adult.moods.escorting,
		b.mas.others.adult.moods.hostile, b.mas.others.adult.moods.enemy, b.mas.others.adult.moods.runaway,	b.mas.others.adult.moods.peaceful, b.mas.others.adult.moods.playful, b.mas.others.adult.moods.escorting,
		b.fem.others.adult.moods.hostile, b.fem.others.adult.moods.enemy, b.fem.others.adult.moods.runaway,	b.fem.others.adult.moods.peaceful, b.fem.others.adult.moods.playful, b.fem.others.adult.moods.escorting,
		b.mas.selves.child.moods.hostile, b.mas.selves.child.moods.enemy, b.mas.selves.child.moods.runaway, b.mas.selves.child.moods.peaceful, b.mas.selves.child.moods.playful, b.mas.selves.child.moods.escorting,
		b.fem.selves.child.moods.hostile, b.fem.selves.child.moods.enemy, b.fem.selves.child.moods.runaway, b.fem.selves.child.moods.peaceful, b.fem.selves.child.moods.playful, b.fem.selves.child.moods.escorting,
		b.mas.others.child.moods.hostile, b.mas.others.child.moods.enemy, b.mas.others.child.moods.runaway, b.mas.others.child.moods.peaceful, b.mas.others.child.moods.playful, b.mas.others.child.moods.escorting,
		b.fem.others.child.moods.hostile, b.fem.others.child.moods.enemy, b.fem.others.child.moods.runaway, b.fem.others.child.moods.peaceful, b.fem.others.child.moods.playful, b.fem.others.child.moods.escorting] };
		rt.categories.push(buf); }}
	return rt}
function listTemperaments(t,types) { var rt = { handle: "", items: null, categories: [] }; var buf;
	rt.items = [	{ label: "FIN"},{ label: "FIR"},{ label: "FEN"},{ label: "FER"},
					{ label: "NIF"},{ label: "NIT"},{ label: "NEF"},{ label: "NET"},
					{ label: "RIF"},{ label: "RIT"},{ label: "REF"},{ label: "RET"},
					{ label: "TIN"},{ label: "TIR"},{ label: "TEN"},{ label: "TER"} ];	return rt }

//  "Vasen käsi ei tiedä että oikeaa onkaan", sanoi valkoinen mies.                          u s s
//  ███  ███   ██████   MMM  MMM   OOOOOO    kaaaa   suu   a!  (??:.                       u s   a
//  ███  ███  ███  ███  MMM MMM   OOO  OOO  kk   as  suu  aa!! (??                    n  h o     s
//  ████████  ███  ███  MMMMMM    OOOOOOOO   kaa     suu  aa!!((??:.                  o          !
//  ████████  ███  ███  MMMMMM    OOOOOOOO     aaa   suu  aa!!((??                 l a
//  ███  ███  ███  ███  MMM MMM   OOO  OOO       as  suu  aa! ((??:.██         s u l
//  ███  ███   ██████   MMM  MMM  OOO  OOO  kkaaaa   suu  aa!  (??  ██    l e s
//  "Perse edellä puuhun?" "Mutta niinhän puu itse kasvaa!"       :.h o b i
function Family(label,sel) { var index=AL.dharmaProfileIndex;  this.index=index; this.selection=sel;
	if(typeof label=="undefined") { var label=""; label+=index; } this.label=label;
	this.hidden = false; AL.dharmaProfiles.push(this); AL.dharmaProfileIndex++; }
function DharmaProfile(proHandle, proTabs, tabApps) {
	this.dharmic=true; this.handle=proHandle; this.proTabs=proTabs; this.tabApps=tabApps; AL.dps.push(this) }
function initDharmaProfiles() { var pr = null;
	function cp(proHandle, proLabel, proSel, tabApps) {
		function make(){}
		function use() {}
		var pd = { proHandle:proHandle, proLabel:proLabel, proSel:proTabs, tabApps:tabApps };
		pd.proTabs = make();
		return pd }
	function sd(codes) { function ib() { var r = { codes:codes, objects:[] }; return r }
		var rt=[]; var sdl=codes.length; var buf=null; for(var i=0; i < sdl; i++) { buf=ib();
			buf.objects.push(callDharma(codes[i]));	rt.push(buf) } return rt }
/*TEMPLATE SEL LINE 1*/pr=sd([".M",".F"]);
/*TEMPLATE SEL LINE 2*/pr=cp( "proTab1", "Beings", pr, ["dharma"] );
	var l = AL.dps.length;
	for(var i=0; i < l; i++) { dps[i].tabApps = use( dps.proTabs, dps[i].tabApps ) }} //näytetää mirrille pornoo
function applyDharmaProfiles(l) { var k=AL.dps.length; for(var i=0; i < l; i++) { for(var j=0; j < k; j++) {
	if(contains( AL.dps[j].tabApps, AL.tabs[i].handle )){ applyDharmaProfile( AL.dps[j].tabApps, AL.tabs[i].handle )}}}}
function applyDharmaProfile(proTab,tab) {}
/*	if( typeof tab.features.profiles!="undefined" && tab.features.profiles ) {
	var pd={ proTab:null, proTabs:[], ta}}
	var pd={ }
	if(tab.handle=="dharma") {
	var bng = selectDharmas("beings",[7]);
	var v = new DharmaProfile("Beings",bng);
	var tpr = selectDharmas("tmprmnt",[]) }else if(tab.handle=="kakara") {}
	var r = []; switch(tab.handle) {
		case "dharma" 	:	
	AL.dharmaProfile = v; //xxx
	var v = new DharmaProfile("Temperaments",tpr); }}*/
function remFromArr(arr,obj) { var index = arr.indexOf(obj); if (index > -1) { array.splice(index, 1) }}
function dharmaHypothesis(str)  { var tab = AL.dharmaProfile; var dI = parseInt(str.split("_").pop());
	var dharma = AL.ontology.content.items[dI];
	dharma.hypot ? remFromArr(dharma.hypotIn,tab) : dharma.hypotIn.push(tab);	dharma.hypot = !dharma.hypot }
function dharmaLemma(str) 		{ var tab = AL.dharmaProfile; var dI = parseInt(str.split("_").pop());
	var dharma = AL.ontology.content.items[dI];
	dharma.lemma ? remFromArr(dharma.lemmaIn,tab) : dharma.lemmaIn.push(tab);	dharma.lemma = !dharma.lemma }
function hideDharma(str) 		{ var tab = AL.dharmaProfile; var dI = parseInt(str.split("_").pop());
	var dharma = AL.ontology.content.items[dI];
	if(!dharma.hiddenDharma){ dharma.hiddenDharma = true; dharma.hiddenDharmaIn.push(tab) }}
function showDharma(str) 		{ var tab = AL.dharmaProfile; var dI = parseInt(str.split("_").pop());
	var dharma = AL.ontology.content.items[dI];
	if(dharma.hiddenDharma) { dharma.hiddenDharma = false; remFromArr(dharma.hiddenDharmaIn,tab) }}
function proveDharma(str) 		{ var tab = AL.dharmaProfile; var dI = parseInt(str.split("_").pop());
	var dharma = AL.ontology.content.items[dI];
	if(!dharma.hiddenDharma){ dharma.conjecture = true; dharma.conjectureIn.push(tab) }}
function disproveDharma(str) 	{ var tab = AL.dharmaProfile; var dI = parseInt(str.split("_").pop());
	var dharma = AL.ontology.content.items[dI];
	if(dharma.hiddenDharma) { dharma.conjecture = false; remFromArr(dharma.conjectureIn,tab) }}
function setDharmaLogy(str) { AL.dharmaLogy = str }
function selectDharmas(hnd,sub,sel) { var rt={ont: null, sub:null, sel:null}; rt.ont = getOntology(hnd);
	if(typeof sub != "undefined") { rt.sub = sub } if(typeof sel != "undefined") { rt.sel = sel } return rt }
function populateDharmaProfiles() {
	var d = document.getElementById('dharmaHeaderTabs');
	for(var i=0; i < AL.dharmaProfiles.length; i++) { createDharmaHeaderTab(d,i,AL.dharmaProfiles[i]) } return d }
function createDharmaHeaderTab(div,n,profile) {
	var profile = getDharmaProfile(n);	var e=document.createElement('div');
	if(profile==AL.dharmaProfile) 	{ e.setAttribute('class','dharmaProfileCurrent'); }
	else 							{ e.setAttribute('class','dharmaProfile')}
	var id = 'dharmaProfile_'+n;		e.setAttribute('id',id);
	e.innerHTML = profile.label;		div.appendChild(e) }
function getDharmaProfile(str) { var n = parseInt(str); return AL.dharmaProfiles[n] }

function createDharmaProfile() { /*var profile = selectDharmas(AL.ontology.handle);	profile = new DharmaProfile(AL.dharmaProfileIndex, profile); var header = document.getElementById('dharmaHeaderTabs'); createDharmaHeaderTab(header,AL.dharmaProfileIndex,profile);	document.getElementById("nameDharmaProfile").focus(); */}
function removeDharmaProfile(n) { AL.currentDharmaProfile.hidden = true; } //kesken
function labelBeings(arr) {	function labelBeing(b) { var l=""; if(b.other) { l += "Other " } if (b.adult &&  b.male) { l += "Man " }	else if (b.adult && !b.male) { l += "Woman "} else if (!b.adult && b.male) { l += "Boy " } else if(!b.adult && !b.male) { l += "Girl "}	l+=b.sign; return l; } for(var i=0; i < arr.length; i++) { labelBeing(arr[i]) } return arr }

// CAUTION: HOT AIR. CAUTION: HOT AIR. CAUTION: HOT AIR... .   ¨  ...  .....     ...  . ..   ::  : : ::
// CAUTION: HOT AIR. CAUTION: HOT AIR. CAUTION: HOT AIR... .   . .   .   .      .   . . . .  : : : : : :
// CAUTION: HOT AIR. CAUTION: HOT AIR. CAUTION: HOT AIR... .   . .   .   .      .   . . .  . : : : : : :
/*                                                         .   . .   .   .      .   . . .  . : : : : : :  */  /*  */   //
// CAUTION: HOT AIR. CAUTION: HOT AIR. CAUTION: HOT AIR... .   . .   .   .      .   . . . .  : : : : : :  */ */   */   //
// CAUTION: HOT AIR. CAUTION: HOT AIR. CAUTION: HOT AIR... ..... .   .   .      ..... . ..   ::  :\: ::   */*/    */¶¶¶/*
// CAUTION: HOT AIR. CAUTION: HOT AIR. CAUTION: HOT AIR... .   . .   .   .      .   . . . .  : : : : : :  */ */   */   //
/*                                                         .   . .   .   .      .   . . . .  : : : : : :  */  /*. */   //.
// CAUTION: HOT AIR. CAUTION: HOT AIR. CAUTION: HOT AIR... .   . .   .   .      .   . . .  . : : : : : :
// CAUTION: HOT AIR. CAUTION: HOT AIR. CAUTION: HOT AIR... .   . .   .   .      .   . . .  . : : : : : :
// CAUTION: HOT AIR. CAUTION: HOT AIR. CAUTION: HOT AIR... .   .  ...    .      .   . . . . .::  : : ::

/* MOSAIC ANALOGIES
1. Dharma whose origin is Self and location Other is extroverted. Vice versa for introversion.
2. Mosaic Cube Syntax: (top, bottom, right, left, front, back)
3. Mosaic Cube Orientation for Man:
	(((MS,MO),(FS,FO)), ((FS,FO),(MS,MO)), ((mS,mO),(fS,fO)), ((fS,fO),(mS,mO)), ((DS,DO),(DS,DO)), ((sS,sO),(sS,sO)))
	LEGEND: M=man, S=self, O=other, F=woman, m=boy, f=girl, D=dom, s=sub
*/
/* MOSAIC COORDINATES
Let "Mosaic Coordinate" be an ordered pair of the monospace (ie. no gaps between chars) syntactic form (X,Y) in which chars X and Y stand for respective triples whose value is either undefined or whose form is a ∨ b so that a and b are ordered pairs which stand for offset relative to a given location of the Wrapped Mosaic Space.
Let the values of a be undefined or defined so that its context is either lateral or longitudinal and its value is any combination of unsigned 0 and unsigned 1 which are denoted by chars 0 and 1 in a lateral context and chars n and m in a longitudinal context.
Let b stand for elevation so that an undefined value is denoted by char , and a boolean value by - or + which stand for false and true, respectively.
Examples:
MS(0,0) <=> MS
MS(0,1) <=> MO
MS(1,0) <=> FS
MS(1,1) <=> FO
MS(0,[0,1]) <=> {MO,FO}
MS(0+1) <=> (MS,FO)
MS(n,0) <=> mS
MS(n,1) <=> mO
*/
/* ESSENTIAL ROADMAP v0000
I 		IDN. Identical		: INTp		<=>def	INTp IDN <=> INTp
II		MRR. Mirror			: ENTj		<=>def	INTp MRR <=> ENTj
III		FLR. Fluorescent	: ENTp		<=>def	INTp FLR <=> ENTp
IV		QID. Quasi-Identic.	: INTj		<=>def	INTp QID <=> INTp FLR(MRR)
V		NRM. Normal			: INFp		<=>def	INTp NRM <=> INFp
VI		<SP. Supervisor		: ENFj		<=>def	INTp <SP <=> INTp MRR(NRM)
VII		ILL. Illusionary	: ENFp		<=>def	INTp ILL <=> INTp FLR(NRM)
VIII	SEG. Super-Ego		: ISFp		<=>def	INTp SEG <=> ISFp
IX		<BN. Benefactor		: ISTj		<=>def	INTp <BN <=> INTp SEG(ILL)
X		SDL. Semi-Dual		: ESTp		<=>def	INTp SDL <=> INTp MRR(<BN)
XI		SP>. Supervisee		: ENTj		<=>def	INTp SP> <=> INTp FLR(<BN)
XII		LKL. Look-A-Like	: ISTp		<=>def	INTp LKL <=> INTp MRR(SP>)
XIII	DNK. Donkey			: ESFj		<=>def	INTp DNK <=> INTp MRR(SEG)
XIV		DUO. Dual			: ESFp		<=>def	INTp DUO <=> INTp FLR(SEG)
XV		BN>. Beneficiary	: INFj		<=>def	INTp BN> <=> INTp MRR(ILL)
XVI		ACT. Activator		: ISFj		<=>def	INTp ACT <=> INTp MRR(DUO)
*/


                                       /*XXXXXXXXXXXXXXXXXVXXX
                                      X                       X
									 X	ZZZZZ  ZZ  ZZ     XXX  X
									 X	Z Z Z Z  Z  Z    Z     X
									 X	  Z   ZZZZ  ZZZ   XX   X
									 X	  Z   X  X  Z  Z    X  X
						  XXXXXXXXXXXX   ZZZ  X  X XXXX  XXX   XXXXXXXXXX*/  

function help(text) { if(AL.help && !AL.tab.SVG){ if(typeof text == 'undefined') { devBar() } else { devBar(text) }}}
function barTab(event,id) 	{ var Id = id.split("_").pop(); switch(event) {
	case "click" 		: 	displayTabById(Id); 				break;
	case "mousemove" 	: 	help(getTabByStrInt(Id).devBar); 	}}
function measureWindow(){ var winWid=window.innerWidth;AL.winWid=winWid; var winHei=window.innerHeight;AL.winHei=winHei }
function () {	measureWindow();
					var l=AL.tabs.length; for(var i = 0; i < l; i++) { AL.tabs[i]=initTab(AL.tabs[i]) }
					initDharmaProfiles();
					applyDharmaProfiles(l);
					initKakara();
					initSequencer() } 
function initTab(handle) {	var tab = null;	 if (handle=='mosaic'||handle=='yozen') {
												tab = initSVGTab(handle) }
										else if (handle=="legend"||handle=="dharma"||handle=="kakara"){
												tab = initDOMTab(handle) } return tab }
function Tab(handle,SVG,label,display,features,funcs,devBar) { this.handle=handle; this.label=label; this.devBar=devBar;
	this.SVG=SVG; this.display=display; this.features=features; this.funcs=funcs; console.log(this); }
function initSVGTab(handle) { var SVG=true;	var label; var display=null; var features; var funcs=null; var devBar;
	console.log(handle);
	if 		( handle == 'mosaic' ){ label = "Mosaic";
		devBar = "wrapped synthesis of cartesian and multipolar 3-spaces, and an event sequencer";
		features = { tools:initTools(handle), mono:false, d3d:true, devKey:true, seq:true };
		display = initMosaicDisplays(AL.winWid,AL.winHei,AL.resolution,AL.unitDistD3d);
		funcs={ show 	: function() { showSVGTab() },
				hide 	: function() { hideSVGTab() },
				resize 	: function() { resizeSVGTab() },
				refresh : function() { refreshSVGTab() },
				clear 	: function() { clearSVGTab() }}}
	else if ( handle == 'yozen' ){ label = "Yozen";
		devBar = "recovery from doomela's wirta ? event sequencer";
		features = { tools:initTools(handle) }; //devkey false?
		display = initYozen();
		funcs={ show 	: function() { showSVGTab() },
				hide 	: function() { hideSVGTab() },
				resize 	: function() { resizeSVGTab() },
				refresh : function() { refreshSVGTab() },
				clear 	: function() { clearSVGTab() }}}
	var rt = new Tab( handle, SVG, label, display, features, funcs, devBar ); return rt }
function initDOMTab(handle) { var SVG=false; var label; var display; var features={tools:null}; var funcs; var devBar;
	if 		( handle == 'legend' ){ label = "Legend";
		devBar = "●'ve seen the 1 hu got a way";
		funcs={ show 	: function() { showDOMTab() },
				hide 	: function() { hideDOMTab() },
				resize 	: function() { },
				refresh : function() { }}}
	else if ( handle == 'dharma' ){ label = "Dharma";
		devBar = "dharma explorer and sequencer";
		features = { profiles:true, tools: initTools(handle), sysGrid:null, devKey:false };
		display = initDharmaDisplay(handle);		
		funcs={ show 	: function() { showDOMTab() },
				hide 	: function() { hideDOMTab() },
				resize 	: function() { resizeDOMTab() },
				refresh : function() { refreshDOMTab() }}}
	else if ( handle == 'kakara' ){ label = "Kakara";
		devBar = "Kukapa haluaisi nussia isänsä kyrvällä? Pleasant instance of kersa.";
		features = { profiles:true, sidebar:false, kakara:null, tools:initTools(handle), devKey:false, d3d:false };
		display = null;
		funcs={ show 	: function() { showDOMTab() },
				hide 	: function() { hideDOMTab() },
				resize 	: function() { resizeDOMTab() },
				refresh : function() { refreshDOMTab() }}}
	var rt = new Tab( handle, SVG, label, display, features, funcs, devBar ); return rt }
function getTabByHandle (h) { console.log(AL.tabs); var j=AL.tabs.length;for(var i=0; i<j; i++){if(h==AL.tabs[i].handle){ return AL.tabs[i] }}}
function getTabByStrInt(id) { var i=parseInt(id); return AL.tabs[i] }
function virginTab (handle) { if(AL.kakara) { AL.tab = "kakara" }
	var tab = getTabByHandle( AL.tab ); switchTabs( null, tab ) }
function displayTab(handle) { var tab = getTabByHandle(handle); 				switchTabs( AL.tab, tab )}
function displayTabById(id) { var i=parseInt(id); if( AL.tab != AL.tabs[i] )  { switchTabs( AL.tab, AL.tabs[i] )}}
function switchTabs(ex, to) { if(ex != null) { ex.funcs.hide() } AL.tab = to;	to.funcs.show() }
function hideDOMTab() { var w = document.getElementById("wrapper");	if(w != null) { w.remove() }}
function hideSVGTab() { svg.setAttribute('display','none');
						var d3d = document.getElementById('d3d');
						if(typeof d3d != 'undefined' && d3d) { d3d.remove() }}
function showSVGTab() {	svg.setAttribute('display','block'); 
						showSVGSidebar( AL.winWid, AL.winHei, AL.tab ); 
						document.body.appendChild(svg);
						switch(AL.tab.handle){
							case "mosaic" : showMosaicDisplays( AL.winWid, AL.winHei, AL.tab ); 	break;
							case "yozen"  : showYozen( AL.winWid, AL.winHei, AL.tab );				break;
						if(AL.tab.features.d3d){ show3D( AL.tab.display.d3d )}}
						$( document ).ready(function() { initControls(AL.tab) } ) }
function showDOMTab() {  if(AL.tab.handle=="legend"){ showDOMStory() 	}
					else if(AL.tab.handle=="dharma"){ showDOMApp()  	}
					else if(AL.tab.handle=="kakara"){ showDOMApp() 		}}
function showDOMApp() {
	var wrapper = document.createElement('div');		wrapper.setAttribute('id','wrapper');
	var content = AL.tab.display.cloneNode(true);
	wrapper.appendChild(content);
	document.body.appendChild(wrapper);
	AL.tab.funcs.refresh();
	var sidebar = makeDOMSidebar(); 					wrapper.appendChild(sidebar);
	$( document ).ready(function() {
		initPostDOM(AL.tabs);
		help();
		initControls(AL.tab) } ) }
function initPostDOM(tabs) { var l = tabs.length;
	for(var i=0; i < l; i++) { if(typeof tabs[i].features.kakara!="undefined"&&tabs[i].features.kakara){
		initKakaraDisplay(tabs[i]) }}
	}
function showDOMStory() {
	var wrapper = document.createElement('div');		wrapper.setAttribute('id','wrapper');
	var content = document.createElement('div');		content.setAttribute('id','content');
	var devBar = document.createElement('div'); 		devBar.setAttribute('id','devBar');
	var sidebar = makeDOMSidebar();

	content.innerHTML = showLegendDisplay();
	content.appendChild(devBar);
	wrapper.appendChild(sidebar);

	wrapper.appendChild(content);
	document.body.appendChild(wrapper);	
	help();
	$( document ).ready(function() { initControls(AL.tab) } ) }
function resizeDOMTab() {}
function resizeSVGTab() {}
function refreshDOMTab(){ if(AL.tab.handle != "legend") { populateDharmaProfiles(); 									
					var e = document.getElementById('dharmaTypeSelector'); 		populateDharmaTypeSelector(e);
					var e = document.getElementById('dharmaSubtypeSelector');	populateDharmaSubtypeSelector(e);
					var e = document.getElementById('dharmaSource');			populateDharmaSidebarSource(e);
					var e = document.getElementById('dharmaRelation');			populateDharmaSidebarRelations(e);
					var e = document.getElementById('dharmaTarget');			populateDharmaSidebarTarget(e);
					var e = document.getElementById('dharmaSubrelSelector');	populateDharmaSubrelSelector(e);
					var e = document.getElementById('dharmaRelSelector'); 		populateDharmaRelSelector(e);
					populateSystemGrid(AL.tab.features.sysGrid) }}
function refreshSVGTab(){}

						  /*XXXXXXXXXX  ZZZZZ  ZZ  ZZ     XXX  XXXXXXXXXXXX
									 X	Z Z Z Z  Z  Z    Z     X
									 X	  Z   ZZZZ  ZZZ   XX   X
									 X	  Z   X  X  Z  Z    X  X
									 X	 ZZZ  X  X XXXX  XXX   X
									 X                        X
									 XXXXXXXXXXXXXXXXXXXXXXX*/

function makeDOMSidebar() {
	function makeDOMSidebarButton(text,n) {
		var rt = document.createElement("div");				var btnId = "barTab_"+n;
		rt.setAttribute('class','sidebar-option');			rt.setAttribute('id',btnId);
		if(text == AL.tab.label) { rt.setAttribute('class','sidebar-option-selected') }
		var btnText = document.createTextNode(text); 		rt.appendChild(btnText); return rt; }
	var sidebar = document.createElement('div'); 		sidebar.setAttribute('id','sidebar');
	var features= populateDOMSidebarFeatures();
	var btn = null;
	for(var i=0; i<AL.tabs.length; i++) {
		btn = makeDOMSidebarButton(AL.tabs[i].label,i);
		sidebar.appendChild(btn); }
	sidebar.appendChild(features); return sidebar }
function populateDOMSidebarFeatures() {
	function clone(DOM) {
		for(var j=0; j < DOM.length; j++){ var d=document.createElement('div'); d.setAttribute('class','clearBoth');
			if( DOM[j].length == 4 ) { DOM[j].shift() }
			for(var k=0; k < DOM[j].length; k++) { var b=DOM[j][k].cloneNode(true); d.appendChild(b) } f.appendChild(d) }}
	function make(DOM) { var e = clone(DOM) }
	var f = document.createElement('div'); f.setAttribute('id','sidebarFeatures');
	if(typeof AL.tab.features.tools != 'undefined') { var tools = AL.tab.features.tools;
		if(tools) { for(var i=0; i < tools.length; i++) { make(tools[i].key.DOM) }}}
	return f }
function showSVGSidebar(winWid, winHei, tab) {
	var tabs = AL.tabs.length;
	var barWid = AL.sidebarWidth;
	var offset = winWid - barWid;
	var tabHei = AL.sidebarTabHei;
	var tabOff = offset + AL.sidebarTabPadL;
	var barTabClass = "barTab";
	var fontSize = AL.fontSize;
	svg.setAttribute('height',winHei); 	svg.setAttribute('width',winWid);
	var bar=document.createElementNS(svgNS,'rect');
	bar.setAttribute('x',offset); 		bar.setAttribute('y',0);
	bar.setAttribute('width',barWid); 	bar.setAttribute('height',winHei);
	bar.setAttribute('fill','#95B3D7');	svg.appendChild(bar);
    for(var i=0; i<tabs; i++) { 
    	var barTabId=barTabClass+"_"+i;	
    	var barTab=document.createElementNS(svgNS,'rect');  
    	barTab.setAttribute('class', barTabClass);	barTab.setAttribute('id', barTabId);
    	barTab.setAttribute('x',offset); 			barTab.setAttribute('y',i*tabHei);
    	barTab.setAttribute('width',barWid);		barTab.setAttribute('height',tabHei);
    	AL.tab.handle==AL.tabs[i].handle?barTab.setAttribute('fill','#DDB300'):barTab.setAttribute('fill','#95B300');
    	var label = document.createElementNS(svgNS,"text");
    	label.setAttributeNS(null,'class',barTabClass); label.setAttributeNS(null,'id',barTabId);
		label.setAttributeNS(null,"x",tabOff);			label.setAttributeNS(null,"y",(i*tabHei)+fontSize+9); 
		label.setAttributeNS(null,"font-size",fontSize);label.setAttributeNS(null,"fill","white");
		var textNode = document.createTextNode(AL.tabs[i].label);
		label.appendChild(textNode);
		svg.appendChild(barTab); svg.appendChild(label);  }}

//
//
//

function keyHandleToLabel(handle) { switch(handle) {
	case "MONODO" 	: return "do";
	case "MONOUNDO" : return "undo";
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
	if 		(handle=="kakara") {
					K(T("MONODO"));
		tool = new Tool("MonoDo", 			key); r.push(tool); var key=[];
					K(T("MONOUNDO"));
		tool = new Tool("MonoUndo", 		key); r.push(tool); var key=[];
					K(T("STOP","PLAY")); K(T("REC"));
		tool = new Tool("StopPlayRec", 		key); r.push(tool); var key=[]}
	else if (handle=="dharma") {
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
		tool = new Tool("HrzVrt",	 		key); r.push(tool); var key=[];
					K(T("METATOOL"));
		tool = new Tool("MetaTool",	 		key); r.push(tool); var key=[]}
	else if (handle=="mosaic") {
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
		tool = new Tool("DispHrz", 			key); r.push(tool); var key=[];
	 				K(T("LOOKUP","LOOKDN"));
		tool = new Tool("DispVrt", 			key); r.push(tool); var key=[];
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
				case "keyHrzVrt" 		: 	s = { keyHrzVrt_monoCol: 		null		}; ss.push(s);
											s = { keyHrzVrt_monoRow: 		null		}; ss.push(s);
											s = { keyHrzVrt_higherRow: 		null		}; ss.push(s);
											s = { keyHrzVrt_symmetry: 		null 		}; ss.push(s);
											s = { keyHrzVrt_highRow: 		null 		}; ss.push(s);
											s = { keyHrzVrt_highCol: 		null 		}; ss.push(s);
											s = { keyHrzVrt_higherCol: 		null 		}; ss.push(s); break;
				case "keyMetaTool" 		: 	s = { keyMetaTool: 				null 		}; ss.push(s); break;
				case "keyDispDim" 		: 	s = { keyDispDim_quadDisp:		null 		}; ss.push(s);
											s = { keyDispDim_monoMos:		null 		}; ss.push(s);
											s = { keyDispDim_monoD3d:		null 		}; ss.push(s); break;
				case "keyDispDim" 		: 	s = { keyDispZoom_zoomIn:		null 		}; ss.push(s);
											s = { keyDispZoom_zoomOut:		null 		}; ss.push(s); break;
				case "keyDispHrz" 		: 	s = { keyDispHrz_lookLeft:		null 		}; ss.push(s);
											s = { keyDispHrz_lookRight:		null 		}; ss.push(s); break;
				case "keyDispVrt" 		: 	s = { keyDispVrt_lookUp:		null 		}; ss.push(s);
											s = { keyDispVrt_lookDown:		null 		}; ss.push(s); break;
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
function keyMonoDo(f) { console.log(f) }
function keyMonoUndo(f) { console.log(f) }
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
function keyHrzVrt_monoCol(e) 		{console.log(e)}
function keyHrzVrt_monoRow(e) 		{console.log(e)}
function keyHrzVrt_higherRow(e)		{console.log(e)}
function keyHrzVrt_symmetry(e) 		{console.log(e)}
function keyHrzVrt_highRow(e) 		{console.log(e)}
function keyHrzVrt_highCol(e) 		{console.log(e)}
function keyHrzVrt_higherCol(e) 	{console.log(e)}
function keyMetaTool(e) 			{console.log(e)}
function keyDispDim_quadDisp(e) 	{console.log(e)}
function keyDispDim_monoMos(e) 		{console.log(e)}
function keyDispZoom_zoomIn(e) 		{console.log(e)}
function keyDispZoom_zoomOut(e) 	{console.log(e)}
function keyDispHrz_lookLeft(e) 	{console.log(e)}
function keyDispHrz_lookRight(e) 	{console.log(e)}
function keyDispVrt_lookUp(e)	 	{console.log(e)}
function keyDispVrt_lookDown(e)	 	{console.log(e)}
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
function Sequence(handle,events,len){this.handle=handle; this.events=events; this.len=len }
function Episode (handle,sqs,  kaks){this.handle=handle; this.sqs=sqs;     this.kaks=kaks }
function initSequencer() { var rt = {raw:null, cfg:null, state:null, SVG:null};
	rt.raw 		= initEpisodes();
	rt.cfg 		= configSequencer();
	rt.state 	= resetSequencer();
	rt.SVG 		= initSequencerSVG(); return rt }
function initSequences() { var sqs = []; var sq = initEpisode("kakara"); sqs.push(sq); return sqs }
function configSequencer(){var cfg = {pos:0}; return cfg }
                     /*X                                                      2222          XX
                X       XX                                                  222  222          XX
XX              X        XX    XXOHRAXX    MBLE  EE   EE  EEEEe EE EE   EE 222    222     XX   XX
NYTXOTTIXX   RESSULL     EX                AA    EEE  EE EE     EE EEE  EE 2222222222     XXOHIXMÄN!
XX              X        XX    XLEIPÄ!!    RNSE  EE E EE EE EEE EE EE E EE 222            XX   XX
                X      333                 XG    EE  EEE EE  EE EE EE  EEE  222  222 	     βββ
                       X                   &E@P  OS   T-  COMM  UN IS   ME    2222           X
                       X                                                                     */
function initControls(tab) { 	var SVG=tab.SVG;
								window.addEventListener("resize", AL.tab.funcs.resize, true);
								SVG ? initSVGControls(tab) : initDOMControls(tab) }
function initKakaraControls() {	if(AL.tab.handle == "kakara") {
document.addEventListener('keydown', 	(e) => { const keyName = e.key; switch(keyName) {
	case "ArrowUp" 	 : kakaraForwards(AL.kakara);break;
	case "ArrowDown" : kakaraReverse(AL.kakara); break}})}}
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
function initSVGControls(tab) { initDevKey(); initControls3D();
	commonBindArr(tab, 'svg .barTab', 		function(e,id) 	{ barTab(e, id) 				} );
	var elements = Array.from(document.querySelectorAll('svg .mosaic-uL-tile'));
	elements.forEach(function(el) {	el.addEventListener("mousemove",function() { tileMouseover(el.id) 	} ); });
	elements.forEach(function(el) {	el.addEventListener("click", 	function() { tileClick(el.id) 	 	} ); }); }
/*.click().contextmenu().dblclick()[.hover()Bind one or two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.].mousedown().mouseenter()[.mouseleave()Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.].mousemove().mouseout().mouseover().mouseup()*/
function commonBindOne(tab, selector, callback) { 	var e=document.querySelector(selector);
							e.addEventListener("click",  		function() { callback("click", 			e.id ) 	});
				if(tab.SVG){e.addEventListener("mousemove", 	function() { callback("mousemove", 		e.id ) 	});
							e.addEventListener("mouseleave",	function() { help() 						 	})}}
function commonBindArr(tab, selector, c) { var e=Array.from(document.querySelectorAll(selector));
					e.forEach( function(e) { e.addEventListener("click",  		function() { c("click", 	e.id ) 	})});
		if(tab.SVG){e.forEach( function(e) { e.addEventListener("mousemove",	function() { c("mousemove", e.id ) 	})});
					e.forEach( function(e) { e.addEventListener("mouseleave",	function() { help() 				})})}}
function initDOMControls(tab) { initDevKey(); initControls3D(); initKakaraControls();
	commonBindArr(tab, '.sidebar-option', 			function(e,id) 		{ barTab(e, id) 				} );
	commonBindOne(tab, '.sidebar-option-selected', 	function(e,id) 		{ barTab(e, id) 				} );
	if 		(tab.handle == "kakara") {
		commonBindOne(tab, "[id^='keyundo_']", 			function(e) { keyUndoRedo_undo(e) 			} );
		commonBindOne(tab, "[id^='keyredo_']", 			function(e) { keyUndoRedo_redo(e) 			} )}
	else if (tab.handle == "dharma") {
		commonBindOne(tab, "[id^='keyundo_']", 			function(e) { keyUndoRedo_undo(e) 			} );
		commonBindOne(tab, "[id^='keyredo_']", 			function(e) { keyUndoRedo_redo(e) 			} );
		commonBindOne(tab, "[id^='keySTOP_']", 			function(e) { keyStopPlayRec_stop(e) 		} );
		commonBindOne(tab, "[id^='keyPLAY_']", 			function(e) { keyStopPlayRec_play(e) 		} );
		commonBindOne(tab, "[id^='keyREC_']", 			function(e) { keyStopPlayRec_rec(e) 		} );
		commonBindOne(tab, "[id^='keySAVE_']", 			function(e) { keySaveLoad_save(e) 			} );
		commonBindOne(tab, "[id^='keyLOAD_']", 			function(e) { keySaveLoad_load(e) 			} );
		commonBindOne(tab, "[id^='keySTACK_']", 		function(e) { keyStackConst_stack(e) 		} );
		commonBindOne(tab, "[id^='keyCOLLAPSE_']", 		function(e) { keyStackConst_collapse(e) 	} );
		commonBindOne(tab, "[id^='keyCONSTL_']", 		function(e) { keyConstLabel(e) 				} );
		commonBindOne(tab, "[id^='keyMONOCOL_']", 		function(e) { keyHrzVrt_monoCol(e) 			} );
		commonBindOne(tab, "[id^='keyMONOROW_']", 		function(e) { keyHrzVrt_monoRow(e) 			} );
		commonBindOne(tab, "[id^='keyHIGHERR_']", 		function(e) { keyHrzVrt_higherRow(e)		} );
		commonBindOne(tab, "[id^='keySYMMETRY_']",		function(e) { keyHrzVrt_symmetry(e) 		} );
		commonBindOne(tab, "[id^='keyHIGHROW_']", 		function(e) { keyHrzVrt_highRow(e) 			} );
		commonBindOne(tab, "[id^='keyHIGHCOL_']", 		function(e) { keyHrzVrt_highCol(e) 			} );
		commonBindOne(tab, "[id^='keyHIGHERC_']", 		function(e) { keyHrzVrt_higherCol(e)		} );
		commonBindOne(tab, "[id^='keyMETATOOL_']", 		function(e) { keyMetaTool(e)				} )} console.log(tab);
	if(typeof tab.features.profiles != "undefined" && tab.features.profiles) {
		var elements = Array.from(document.querySelectorAll('#removeDharmaProfile'));
		elements.forEach(function(el) { el.addEventListener('click', 	function() { removeDharmaProfile() 	} ); });
		var elements = Array.from(document.querySelectorAll('#createDharmaProfile'));
		elements.forEach(function(el) { el.addEventListener('click', 	function() { createDharmaProfile() 	} ); })}
	if(typeof tab.features.sidebar != "undefined" && !tab.features.sidebar) {
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
		elements.forEach(function(el) { el.addEventListener('click',	function() { setDharmaLogy("qua") 	} ); }) }}
function tileMouseover(id) 	{ console.log(id + " tile mouseover"); }
function tileClick(id) 		{ /*console.log(id);*/ var Id = id.split("-").pop(); /*console.log(Id);*/ moveToTile(Id); }

//\;:::::::::::....   \||/ /\                                             )                       )         ??
//||K A K A R A,,,,    \//// |   //||\                            '   '  ( )    (                ( )     ;
//\\|||||||||||\\\\     |/\|    /  \\\\                      ° *    ""     ())   (())   ) )       ({})    ?      ''
///////////////////     |||         ||||                      §    -        (())   ({})   ))   (()))         '
   ///|||              |/\           //||                    / \.=        )(({})) ({J})  (())    ((})}     (  ;
   //|||              |//  /////      |///            /''":';           (({{J}})))({JJ}((){J}))     }}J)    )
  //||\           \\|///  /   \\\      ////         /'       ,       (){{{JJ}}}))(({{J}{JJ{jJ}}))(j{i}}j}) ; ) :
  //\|\\      ||//|||||        |\\     ////       //              (())((())){JJJ}{{JJJJ}}(()){J}j{ii}jJJ}) ))
  //\\||\   /\\\\||\\         /|||\     |||\  ||\||||               (((){J})){{{JJJJJJ}}}(){JJj{iii}j}J} : :  :  "
  //||/////|||\\          \///||\\\     \\\\|//\    \\\X LEGEND: ASŝ̂ IN PUU !!! !! !!! :!!!!!! 2!‼    . . . .  '
   /////\\\\|            ||/ /// \\\    ||///          X u don't kno Finnish ? go to Dza pan !                        )
   ///||/ \\\\         ||||     \\\      /////         X NOTICE: to use goto is bad coding practice :|       .
   //\\    \||\\     //\''      |||\     |||\//        X ADVICE: play koto ! hihi hii                   ,..
   //||      \|||.     \\      /////    \\// \\\||     X |||||||||||||||||||||||||||||||||||||//////""''          )
  //||||     |||///.    \\|\|\//\\     /// \    \\\\   X ::::::::::::::::::::::::''''''''                        
  //||\\     /|\\\  ;       ///// \                  \ X ... ' ' ' ' ' '                                 )
 //\|||\\\  /|||  \\\\.;.'         \/                 &                              . . : : ) ) )
function kakaraForwards(kak){ if(kak.cfg.disPos < kak.cfg.disLen) { kak.cfg.disPos++; kakaraMove() }}
function kakaraMove()  		{ AL.tab.funcs.refresh() }
function kakaraReverse(kak) { if(kak.cfg.disPos >= 0) { kak.cfg.disPos--; kakaraMove() }}
function initKakaraDisplay(tab) { var div = document.createElement('div');
	tab.kak = initKakara(tab);
	for(var i = 0; i < tab.features.cfg.disLen; i++) { div.appendChild(tab.kak.seq[i]) }
	tab.display = div;
	initFamily(tab); return div }
function initKakara(){
	tab.features.kak = configKakara("local","mono",tab);
	tab.features.kak = formKakara(tab.features.kak); console.log(tab.features.kak) }
function initKakaraProfiles(kak){ AL.kak = kak }
function configKakara(host,code,tab){
	var cfg = { host:host, code:code, tab:tab, disPos:0, disLen:0, disWid:0, disHei:0, dpOffX:0, dpOffY:0 }; return cfg }
function formKakara(c){ var seq = [];
	function h(str) { var div = document.createElement('div');
		function p(uri) { var a; if(c.host=="global"){ a = "http://al.moq.fi/P"+uri+".jpg" }
							else if(c.host=="local" ){ a = "kakara/P"+uri+".jpg" } return a }
		var addr = p(str);
		div.setAttribute("style", "background-image: url("+addr+");\
			background-repeat: no-repeat; background-size: "+c.disWid+"px "+c.disHei+"px");
		div.setAttribute("width", c.disWid);
		div.setAttribute("height",c.disHei); }
	function s(arr) { c.disLen = arr.length; for(var i = 0; i < c.disLen; i++) { seq.push(h(arr[i])) }}
	s([5150587
		,5150588
		,5150589
		,5150590
		,5150591
		,5150592
		,5150593
		,5150594
		,5150595
		,5150596
		,5150597
		,5150598
		,5150599
		,5150600
		,5150601
		,5150602
		,5150603
		,5150604
		,5150605
		,5150606
		,5150607
		,5150608
		,5150609
		,5150610
		,5150611
		,5150612
		,5150613
		,5150614
		,5150615
		,5150616
		,5150617
		,5150618
		,5150619
		,5150620
		,5150621
		,5150622
		,5150623
		,5150624
		,5150625
		,5150626
		,5150627
		,5150628
		,5150629
		,5150630
		,5150631
		,5150632
		,5150633
		,5150634
		,5150635
		,5150636
		,5150637
		,5150638
		,5150639
		,5150640
		,5150641
		,5150642
		,5150643
		,5150644
		,5150645
		,5150646
		,5150647
		,5150648
		,5150649
		,5150650
		,5150651
		,5150652
		,5150653
		,5150654
		,5150655
		,5150656
		,5150657
		,5150658
		,5150659
		,5150660
		,5150661
		,5150662
		,5150663
		,5150664
		,5150665
		,5150666
		,5150668
		,5150669
		,5150670
		,5150671
		,5150672
		,5150673
		,5150675
		,5150676
		,5150677
		,5150678
		,5150679
		,5150680
		,5150684
		,5150685
		,5150686
		,5150687
		,5150688
		,5150689
		,5150690
		,5150691
		,5150692
		,5150693
		,5150694
		,5150695
		,5150696
		,5150697
		,5150698
		,5150699
		,5150700
		,5150701
		,5150702
		,5150703
		,5150704
		,5150705
		,5150706
		,5150707
		,5150708
		,5150709
		,5150710
		,5150711
		,5150712
		,5150713
		,5150714
		,5150715
		,5150716
		,5150717
		,5150718
		,5150719
		,5150720
		,5150721
		,5150722
		,5150723
		,5150724
		,5150725
		,5150726
		,5150727
		,5150728
		,5150729
		,5150730
		,5150731
		,5150732
		,5150733
		,5150734
		,5150735
		,5150736
		,5150737
		,5150738
		,5150739
		,5150740
		,5150741
		,5150742
		,5150743
		,5150744
		,5150745
		,5150746
		,5150747
		,5150748
		,5150749
		,5150750
		,5150751
		,5150752
		,5150753
		,5150754
		,5150755
		,5150756
		,5150757
		,5150758
		,5150759
		,5150760
		,5150761
		,5150762
		,5150763
		,5150764
		,5150765
		,5150766
		,5150767
		,5150768
		,5150769
		,5150770
		,5150771
		,5150772
		,5150773
		,5150774
		,5150775
		,5150776
		,5150777
		,5150778
		,5150779
		,5150780
		,5150781
		,5150782
		,5150783
		,5150784
		,5150785
		,5150786
		,5150787
		,5150788
		,5150789
		,5150790
		,5150791
		,5150792
		,5150793
		,5150794
		,5150795
		,5150796
		,5150797
		,5150798
		,5150799
		,5150800
		,5150801
		,5150802
		,5150803
		,5150804
		,5150805
		,5150806
		,5150807
		,5150808
		,5150809
		,5150810
		,5150811
		,5150812
		,5150813
		,5150814
		,5150815
		,5150816
		,5150817
		,5150818
		,5150819
		,5150820
		,5150821
		,5150822
		,5150823
		,5150824
		,5150825
		,5150826
		,5150827
		,5150828
		,5150829
		,5150830
		,5150831
		,5150832
		,5150833
		,5150834
		,5150835
		,5150836
		,5150837
		,5150838
		,5150839
		,5150840
		,5150841
		,5150842
		,5150843
		,5150844
		,5150845
		,5150846
		,5150847
		,5150848
		,5150849
		,5150850
		,5150851
		,5150852
		,5150853
		,5150854
		,5150855
		,5150856
		,5150857
		,5150858
		,5150859
		,5150860
		,5150861
		,5150862
		,5150863
		,5150864
		,5150865
		,5150866
		,5150867
		,5150868
		,5150869
		,5150870
		,5150871
		,5150872
		,5150873
		,5150874
		,5150875
		,5150876
		,5150877
		,5150878
		,5150879
		,5150880
		,5150881
		,5150882
		,5150883
		,5150884
		,5150885
		,5150886
		,5150887
		,5150888
		,5150890
		,5150891
		,5150892
		,5150893
		,5150894
		,5150895
		,5150896
		,5150897
		,5150898
		,5150899
		,5150900
		,5150901
		,5150902
		,5150903
		,5150904
		,5150905
		,5150906
		,5150907
		,5150908
		,5150909
		,5150910
		,5150911
		,5150912
		,5150913
		,5150914
		,5150915
		,5150916
		,5150917
		,5150918
		,5150919
		,5150920
		,5150921
		,5150922
		,5150923
		,5150924
		,5150925
		,5150926
		,5150927
		,5150928
		,5150929
		,5150930
		,5150931
		,5150932
		,5150933
		,5150934
		,5150935
		,5150936
		,5150937
		,5150938
		,5150939
		,5150940
		,5150941
		,5150942
		,5150943
		,5150944
		,5150945
		,5150946
		,5150947
		,5150948
		,5150949
		,5150950
		,5150951
		,5150952
		,5150953
		,5150954
		,5150955
		,5150956
		,5150957
		,5150958
		,5150959
		,5150960
		,5150961
		,5150962
		,5150963
		,5150964
		,5150965
		,5150966
		,5150967
		,5150968
		,5150969
		,5150970
		,5150971
		,5150972
		,5150973
		,5150974
		,5150975
		,5150976
		,5150977
		,5150978
		,5150979
		,5150980
		,5150981
		,5150982
		,5150983
		,5150984
		,5150985
		,5150986
		,5150987
		,5150988
		,5150989
		,5150990
		,5150991
		,5150992
		,5150993
		,5150994
		,5150995
		,5150996
		,5150997
		,5150998
		,5150999
		,5151000
		,5151001
		,5151002
		,5151003
		,5151004
		,5151005
		,5151006
		,5151007
		,5151008
		,5151009
		,5151010
		,5151011
		,5151012
		,5151013
		,5151014
		,5151015
		,5151016
		,5151017
		,5151018
		,5151019
		,5151020
		,5151021
		,5151022
		,5151023
		,5151024
		,5151025
		,5151026
		,5151027
		,5151028
		,5151029
		,5151030
		,5151031
		,5151032
		,5151033
		,5151034
		,5151035
		,5151036
		,5151037
		,5151038
		,5151039
		,5151040
		,5151041
		,5151042
		,5151043
		,5151044
		,5151045
		,5151046
		,5151047
		,5151048
		,5151049
		,5151050
		,5151051
		,5151052
		,5151053
		,5151054
		,5151055
		,5151056
		]); var kak = { seq:seq, cfg:c }; return kak }
