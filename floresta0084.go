package main




import (
	"database/sql"
	"os"
//	"bufio"
	"bytes"
	"flag"
	"log"
	"net/http"
	"strings"
	"strconv"
	"time"
	"github.com/gorilla/websocket"
	_ "github.com/go-sql-driver/mysql" )

func dev(){
	v := strconv.Itoa(20); log.Println(v)
//	v := max(2,3)
}

func abs(n int8) int8 { 	if n < 0 { return -n} else { return n}}
//func max(n1 int8, n2 int8){ if n1<n2 { return n2} else { return n1}}
func min(n1 int8, n2 int8){ if n1>n2 { return n2} else { return n1}}
func odd(n int8) bool { 	if n%2==0{ return false} else { return true}}


type Va struct{
	inV, inK, exV, exK 	int}



/*type Cq struct{ 
	mas, ie, s 			bool
	c 					int8
	ni 					string}
type Rq struct{
	Ac, SN 				bool
	F, T 				int8
	ni, desc 			string}*/
/*type Cl struct{ 
	hue, sat, val, c, r, V, K 	int8
	hex 				string}

type Ml struct{
	ni, desc 	string}*/
/*type Ab struct{
	cqs [10]Cq
 	rqs [10]Rq


	gns [4]Gn
}
type Re struct{
	cqs []Cq

}*/

type People struct{}
type Family struct{}
type Goal struct{}
type Model struct{}
type Subj struct{
	gns 				[4]Gn
	pms 				[12]Pm
	mds 				[]Md
	mp 					Mp
	xtn,ntn 			Pt
	fn 					Fn
	cr 					Cr
	tp 					Tp
	}
type Obj struct{}
type Dharma struct{}
type Duty struct{}


type Sim struct{
	copy 	bool
	src 	uint
	gNs [4]Gn; 	pMs [12]Pm;	mDs [192]Md;cQs [40]Cq;	IES [8]IE;fNs [8]Fn;cRs [13]Cr;	tPs [16]Tp;	iRs [16]Tp;	rQs [40]Rq
	gns []Gn;	pms []Pm;	mds []Md; 	cqs []Cq;	IEs []IE; fns []Fn;	crs []Cr;	tps []Tp;	irs []Tp;	rqs []Rq
	peoples []People;	familys []Family;	goals 	[]Goal;		models 	[]Model
	subjs 	[]Subj;		objs 	[]Obj;		dharmas []Dharma;	duties 	[]Duty}

type Stat struct{
	avg, med 			bool
}


type User struct{
	sim 	*Sim
	sims 	[]Sim
	simsS 	[]*Sim
	stat 	*Stat
	gNs [4]Gn; 	pMs [12]Pm;	mDs [192]Md;cQs [40]Cq;	IES [8]IE;fNs [8]Fn;cRs [13]Cr;	tPs [16]Tp;	iRs [16]Tp;	rQs [40]Rq
	gns []Gn;	pms []Pm;	mds []Md; 	cqs []Cq;	IEs []IE; fns []Fn;	crs []Cr;	tps []Tp;	irs []Tp;	rqs []Rq
	peoples []People;	familys []Family;	goals 	[]Goal;		models 	[]Model
	subjs 	[]Subj;		objs 	[]Obj;		dharmas []Dharma;	duties 	[]Duty}
func (u User) mkSim(copy bool,src uint) { var s Sim;
	s.copy =copy; if copy { s.src =src}
	s.copyMetaphysics( gNs, pMs, mDs, cQs, IES, fNs, cRs, tPs, iRs, rQs)
	u.sims =append(u.sims, s)}
func initUser(){
	if len(users)==0 { mkUser()}}
func mkUser(){ var u User;
 	u.copyMetaphysics( gNs, pMs, mDs, cQs, IES, fNs, cRs, tPs, iRs, rQs)
 	u.mkSim(false,0,pcPeoples,pcFamilys,pcGoals,pcModels,pcSubjs,pcObjs,pcDharmas,pcDuties)
 	users =append(users, u)}
//subjs, objs, dharmas, duties, ppls, famis, goals, models
var users []User



/*sound like clicking the keyboard is associated to a vector quality*/




func initEssences(){
	}
var defPeoples 	[]People
var defFamilys 	[]Family
var defGoals 	[]Goal
var defModels 	[]Model
var defSubjs 	[]Subj
var defObjs 	[]Obj
var defDharmas 	[]Dharma
var defDuties 	[]Duty
//var users = []

// if no subj is selected then can select multiple types or moods

//func mkSim(u User) Sim {

//}

/*type Test struct{
	att 	int
}*/












type Rq struct{
	Ac,sn 				bool
	F,T 				int8
	lpft,lpsn, pps,ppo 	Va
	pts 				[]Pt}
func (rq Rq) def(	Ac bool, sn bool, 	F int8, T int8){
					rq.Ac=Ac;rq.sn=sn; 	rq.F=F; rq.T=T}
func precalcRomanticQualities(){
	rQs[0].def( false,false, 0,0); 	rQs[20].def(true ,false, 0,0);
	rQs[1].def( false,false, 1,4); 	rQs[21].def(true ,false, 1,4);
	rQs[2].def( false,false, 2,3); 	rQs[22].def(true ,false, 2,3);
	rQs[3].def( false,false, 3,2); 	rQs[23].def(true ,false, 3,2);
	rQs[4].def( false,false, 4,1); 	rQs[24].def(true ,false, 4,1);

	rQs[5].def( false,false, 0,0); 	rQs[25].def(true ,false, 0,0);
	rQs[6].def( false,false, 1,4); 	rQs[26].def(true ,false, 1,4);
	rQs[7].def( false,false, 2,3); 	rQs[27].def(true ,false, 2,3);
	rQs[8].def( false,false, 3,2); 	rQs[28].def(true ,false, 3,2);
	rQs[9].def( false,false, 4,1); 	rQs[29].def(true ,false, 4,1);

	rQs[10].def(false,true , 0,0); 	rQs[30].def(true ,true , 0,0);
	rQs[11].def(false,true , 1,4); 	rQs[31].def(true ,true , 1,4);
	rQs[12].def(false,true , 2,3); 	rQs[32].def(true ,true , 2,3);
	rQs[13].def(false,true , 3,2); 	rQs[33].def(true ,true , 3,2);
	rQs[14].def(false,true , 4,1); 	rQs[34].def(true ,true , 4,1);

	rQs[15].def(false,true , 0,0); 	rQs[35].def(true ,true , 0,0);
	rQs[16].def(false,true , 1,4); 	rQs[36].def(true ,true , 1,4);
	rQs[17].def(false,true , 2,3); 	rQs[37].def(true ,true , 2,3);
	rQs[18].def(false,true , 3,2); 	rQs[38].def(true ,true , 3,2);
	rQs[19].def(false,true , 4,1); 	rQs[39].def(true ,true , 4,1)}
var rQs [40]Rq



type RT4 [2][2][2][2]*Tp
func mkRt4(tps [16]*Tp) [16]*Tp { var t4 RT4;
	//sn,ft,ie,cr
	t4[0][0][0][0] =&tps[0];
	t4[0][0][0][1] =&tps[1];
	t4[0][0][1][0] =&tps[2];
	t4[0][0][1][1] =&tps[3];
	t4[0][1][0][0] =&tps[4];
	t4[0][1][0][1] =&tps[5];
	t4[0][1][1][0] =&tps[6];
	t4[0][1][1][1] =&tps[7];
	t4[1][0][0][0] =&tps[8];
	t4[1][0][0][1] =&tps[9];
	t4[1][0][1][0] =&tps[10];
	t4[1][0][1][1] =&tps[11];
	t4[1][1][0][0] =&tps[12];
	t4[1][1][0][1] =&tps[13];
	t4[1][1][1][0] =&tps[14];
	t4[1][1][1][1] =&tps[15]; return t4}
var rT4 RT4;



type Tp struct{
	cr, ie, ft, sn 		bool
	aI3					AI3
	rI3 				RI3
	aF3					AF3
	rF3 				RF3
	aC3					AC3
	rC3 				RC3}
func (tp Tp) def( 	cr bool, 	ie bool, 	ft bool, 	sn bool){
					tp.cr=cr; 	tp.ie=ie; 	tp.ft=ft; 	tp.sn=sn;
	tp.aI3 =mkAI3(IES); tp.rI3 =tp.aI3.point();
	tp.aF3 =mkAf3(fNs); tp.rF3 =tp.aF3.point();
	tp.aC3 =mkAc3(cRs); tp.rC3 =tp.aC3.point();
	if !sn{ if !ft{ if !ie{ if !cr { tp.aF3.lat().ver(); 		tp.aC3.lat().ver(); 		tp.rI3.lat().ver(); 	 	 		//iSFC
							} else { tp.aF3.lat().ver().lon(); 	tp.aC3.lat().ver().lon(); 	tp.rI3.lat().ver().lon(); 			//iSFR
					}}else {if !cr { tp.aF3.ver(); 				tp.aC3.ver(); 			 	tp.rI3.ver(); 			  			//eSFC
							} else { tp.aF3.ver().lon(); 		tp.aC3.ver().lon(); 		tp.rI3.ver().lon(); 	 	 		//eSFR
			}}}else{if !ie{ if !cr { tp.aF3.tor().lat(); 		tp.aC3.tor().lat(); 		tp.rI3.tor().lat(); 	 	 		//iSTC
							} else { tp.aF3.tor().lon().lat(); 	tp.aC3.tor().lon().lat(); 	tp.rI3.tor().lon().lat(); 			//iSTR
					}}else {if !cr { tp.aF3.tor(); 				tp.aC3.tor(); 			 	tp.rI3.tor(); 			  			//eSTC
							} else { tp.aF3.tor().lon(); 		tp.aC3.tor().lon(); 		tp.rI3.tor().lon(); 	 	 		//eSTR
	}}}}else{if !ft{if !ie{ if !cr { tp.aF3.rot().lat(); 		tp.aC3.rot().lat(); 		tp.rI3.rot().lat(); 	 	 		//iNFC
							} else { tp.aF3.rot().lon().lat();	tp.aC3.rot().lon().lat(); 	tp.rI3.rot().lon().lat(); 			//iNFR						
					}}else {if !cr { tp.aF3.rot().lon();		tp.aC3.rot().lon();		 	tp.rI3.rot().lon();		  			//eNFC
							} else { tp.aF3.rot(); 				tp.aC3.rot(); 			 	tp.rI3.rot(); 			  			//eNFR
			}}}else{if !ie{ if !cr { tp.aF3.lon().lat(); 		tp.aC3.lon().lat(); 		tp.rI3.lon().lat(); 	 	 		//iNTC
							} else { tp.aF3.lat();				tp.aC3.lat(); 				tp.rI3.lat(); 						//iNTR						
					}}else {if !cr { tp.aF3.lon(); 				tp.aC3.lon(); 			 	tp.rI3.lon(); 			  			//eNTC
							} else { 																					}}}}} 	//eNTR
func precalcSociotypes(){
	tPs[0].def( false,false,false,false)
	tPs[1].def( true, false,false,false)
	tPs[2].def( false,true, false,false)
	tPs[3].def( true, true, false,false)
	tPs[4].def( false,false,true, false)
	tPs[5].def( true, false,true, false)
	tPs[6].def( false,true, true, false)
	tPs[7].def( true, true, true, false)
	tPs[8].def( false,false,false,true )
	tPs[9].def( true, false,false,true )
	tPs[10].def(false,true, false,true )
	tPs[11].def(true, true, false,true )
	tPs[12].def(false,false,true, true )
	tPs[13].def(true, false,true, true )
	tPs[14].def(false,true, true, true )
	tPs[15].def(true, true, true, true)}
var tPs [16]Tp
var aT4 AT4;
type AT4 [2][2][2][2]Tp
func mkAt4(tps [16]Tp) [16]Tp { var t4 AT4;
	//sn,ft,ie,cr
	t4[0][0][0][0] =tps[0];
	t4[0][0][0][1] =tps[1];
	t4[0][0][1][0] =tps[2];
	t4[0][0][1][1] =tps[3];
	t4[0][1][0][0] =tps[4];
	t4[0][1][0][1] =tps[5];
	t4[0][1][1][0] =tps[6];
	t4[0][1][1][1] =tps[7];
	t4[1][0][0][0] =tps[8];
	t4[1][0][0][1] =tps[9];
	t4[1][0][1][0] =tps[10];
	t4[1][0][1][1] =tps[11];
	t4[1][1][0][0] =tps[12];
	t4[1][1][0][1] =tps[13];
	t4[1][1][1][0] =tps[14];
	t4[1][1][1][1] =tps[15]; return t4}

type Cr struct{
	dir, ws, vm, lpi,lpu, ppi,ppu bool
	lon,lat,ver 		int8}
func (cr Cr) def( 	lon int8, 	lat int8, 	ver int8, 	dir bool, 	ws bool, vm bool, 	lpi bool, 	lpu bool, 	ppi bool, 	ppu bool 	){
					cr.lon=lon;	cr.lat=lat; cr.ver=ver; c.dir=dir; 	cr.ws=ws;cr.vm=vm;	cr.lpi=lpi; cr.lpu=lpu; cr.ppi=ppi; cr.ppu=ppu; }
func precalcCircuits(){
	cRs[0].def(  0, 0, 0)//mono
	cRs[1].def(  1, 0,-1,false, true ,true , false,false, false,false)//love
	cRs[2].def( -1, 0,-1,true , false,false, false,true , false,true )//dare
	cRs[3].def( -1, 0, 1,false, false,true , true ,true , true ,true )//chal
	cRs[4].def(  1, 0, 1,true , true ,false, true ,false, true ,false)//harv
	cRs[5].def(  0, 1, 1,true , true ,true , false,false, false,false)//ego
	cRs[6].def(  0, 1,-1,false, false,true , false,true , true ,false)//sego
	cRs[7].def(  0,-1,-1,false, false,false, true ,true , true ,false)//sid
	cRs[8].def(  0,-1, 1,true , true ,false, true ,false, false,true )//id
	cRs[9].def( -1, 1, 0,true , true ,false, false,false, false,false)//neur
	cRs[10].def(-1,-1, 0,false, false,true , true ,false, false,true )//meta
	cRs[11].def( 1,-1, 0,false, true ,true , false,true , true ,false)//morp
	cRs[12].def( 1, 1, 0,true , true ,false, true ,true , true ,true )}//mego
var cRs [13]Cr
type AC3 [3][2][2]Cr
type RC3 [3][2][2]*Cr
func (c31 AC3) lon(){var c32 AC3;for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{	c32[0][y][x]=c31[1-z][y][x]
																				c32[1][y][x]=c31[1-z][y][x]
																				c32[2][y][x]=c31[1-z][y][x] 	}}; c31= c32}
func (c31 AC3) lat(){var c32 AC3;for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{	c32[0][y][x]=c31[z][1-y][x]
																				c32[1][y][x]=c31[z][1-y][x]
																				c32[2][y][x]=c31[z][1-y][x] 	}}; c31= c32}
func (c31 AC3) ver(){var c32 AC3;for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{	c32[0][y][x]=c31[z][y][1-x]
																				c32[1][y][x]=c31[z][y][1-x]
																				c32[2][y][x]=c31[z][y][1-x] 	}}; c31= c32}
func (c31 AC3) rot(){var c32 AC3;for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{	c32[0][y][x]=c31[z][x][y]
																				c32[1][y][x]=c31[z][x][y]
																				c32[2][y][x]=c31[z][x][y] 		}}; c31= c32}
func (c31 AC3) tor(){var c32 AC3;for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{	c32[0][y][x]=c31[z][1-y][1-x]
																				c32[1][y][x]=c31[z][1-y][1-x]
																				c32[2][y][x]=c31[z][1-y][1-x] 	}}; c31= c32}
func (c31 AC3) point() RC3 {var c32 RC3;for z:=int8(0);z<3;z++{for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{ c32[z][y][x]=&c31[z][y][x] }}}; c31 = c32}
func mkAc3(crs [13]Cr) AC3 { var c3 AC3;
	//dir x  y
	c3[0][1][0] =crs[1];
	c3[0][0][0] =crs[2];
	c3[0][0][1] =crs[3];
	c3[0][1][1] =crs[4];
	c3[1][1][1] =crs[5];
	c3[1][1][0] =crs[6];
	c3[1][0][0] =crs[7];
	c3[1][0][1] =crs[8];
	c3[2][1][0] =crs[9];
	c3[2][0][0] =crs[10];
	c3[2][0][1] =crs[11];
	c3[2][1][1] =crs[12]; return c3}


type Fn struct{
	uv, lon,ver,lat 	bool}
func (fn Fn) def( 	uv bool, 	lon bool, 	lat bool, 	ver bool){
					fn.uv=uv;	fn.lon=lon;	fn.lat=lat;	fn.ver=ver}
func precalcFunctions(){
	fNs[0].def(true,  false,false,false);//mobi
	fNs[1].def(false, false,false,true );//igno
	fNs[2].def(false, false,true, false);//vuln
	fNs[3].def(true,  false,true, true );//ego
	fNs[4].def(true,  true, false,false);//cour
	fNs[5].def(false, true, false,true );//demo
	fNs[6].def(false, true, true, false);//role
	fNs[7].def(true,  true, true, true )}//crea
var fNs [8]Fn
type AF3 [2][2][2]Fn
type RF3 [2][2][2]*Fn
func (f31 AF3) lon(){var f32 AF3;for z:=int8(0);z<2;z++{for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{f32[z][y][x]=f31[1-z][y][x] 	}}}; f31 =f32}
func (f31 AF3) lat(){var f32 AF3;for z:=int8(0);z<2;z++{for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{f32[z][y][x]=f31[z][1-y][x] 	}}}; f31 =f32}
func (f31 AF3) ver(){var f32 AF3;for z:=int8(0);z<2;z++{for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{f32[z][y][x]=f31[z][y][1-x] 	}}}; f31 =f32}
func (f31 AF3) rot(){var f32 AF3;for z:=int8(0);z<2;z++{for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{f32[z][y][x]=f31[z][x][y] 	}}}; f31 =f32}
func (f31 AF3) tor(){var f32 AF3;for z:=int8(0);z<2;z++{for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{f32[z][y][x]=f31[z][1-y][1-x] }}}; f31 =f32}
func (f31 AF3) point() RF3 {var f32 RF3;for z:=int8(0);z<2;z++{for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{ f32[z][y][x]=&f31[z][y][x]}}};f31 =f32}
func aF3(fns [8]Fn) [8]Fn { var f3 F3;
    //verlatlon
	f3[0][0][0] =fns[0]; 
	f3[1][0][0] =fns[1]; 
	f3[0][1][0] =fns[2]; 
	f3[1][1][0] =fns[3]; 
	f3[0][0][1] =fns[4]; 
	f3[1][0][1] =fns[5]; 
	f3[0][1][1] =fns[6]; 
	f3[1][1][1] =fns[7]; return F3}


type IE struct{
	ie, dg, ft, sn, lpi,lpu bool
	cqs 			[]*Cq}
func (IE IE) def( 	ft bool, ie bool, sn bool, 	lpi bool, 	lpu bool, 	dg bool, 	cqs [40]Cq){
					IE.ft=ft;IE.ie=ie;IE.sn=sn;	IE.lpi=lpi;	IE.lpu=lpu;	IE.dg=dg;
	IE.cqs =cqs.pointByIE( ft,ie,sn)}
func precalcInformationElements(cqs [40]Cq, IEs [8]IE){
	IEs[0].def(cqs,false,false,false, false,false, false)//Fi
	IEs[1].def(cqs,false,false,true,  false,true,  true )//Si
	IEs[2].def(cqs,false,true, false, false,true,  true )//Fe
	IEs[3].def(cqs,false,true, true,  false,false, false)//Se
	IEs[4].def(cqs,true, false,false, true, false, true )//Si
	IEs[5].def(cqs,true, false,true,  true, false, false)//Ti
	IEs[6].def(cqs,true, true, false, true, true,  false)//Se
	IEs[7].def(cqs,true, true, true,  true, true,  true)}//Te
var IES [8]IE
type AI3 [2][2][2]IE
type RI3 [2][2][2]*IE
func (I31 RI3) lon(){var I32 RI3;for z:=int8(0);z<2;z++{for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{I32[z][y][x]=I31[1-z][y][x] 	}}}; I31 =I32}
func (I31 RI3) lat(){var I32 RI3;for z:=int8(0);z<2;z++{for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{I32[z][y][x]=I31[z][1-y][x] 	}}}; I31 =I32}
func (I31 RI3) ver(){var I32 RI3;for z:=int8(0);z<2;z++{for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{I32[z][y][x]=I31[z][y][1-x] 	}}}; I31 =I32}
func (I31 RI3) rot(){var I32 RI3;for z:=int8(0);z<2;z++{for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{I32[z][y][x]=I31[z][x][y] 	}}}; I31 =I32}
func (I31 RI3) tor(){var I32 RI3;for z:=int8(0);z<2;z++{for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{I32[z][y][x]=I31[z][1-y][1-x] }}}; I31 =I32}
func (I31 AI3) point() RI3 {var I32 RI3;for z:=int8(0);z<2;z++{for y:=int8(0);y<2;y++{for x:=int8(0);x<2;x++{ I32[z][y][x]=&I31[z][y][x]}}};I31 =I32}
func mkAI3(IEs [8]IE) [8]IE { var I3 I3;
    //sn,ie, ft
	I3[0][0][0] =IEs[0]; //Fi
	I3[1][0][0] =IEs[1]; //Ni
	I3[0][1][0] =IEs[2]; //Fe
	I3[1][1][0] =IEs[3]; //Ne
	I3[0][0][1] =IEs[4]; //Si
	I3[1][0][1] =IEs[5]; //Ti
	I3[0][1][1] =IEs[6]; //Se
	I3[1][1][1] =IEs[7]; return I3} //Te



type Mp struct{
	lx,ly,dx,dy 		int8
	ul,ur,dr,dl 		Qp
	mm 					[18][18]Mv}
type Mv struct{
	ide 				int8
	col 				Color
	qv 					Qv}
type Pt struct{
	cq 					Cq
	rq 					Rq
	mv 					Mv}

type Cq struct{
	mas,dir,ft,ie,sn,ws,lpi,lpu	bool
	mag			int8}
func (cq Cq) def(	mas bool, 	ft bool, 	mag int8  	){
					cq.mas=mas; cq.ft=ft; 	cq.mag=mag;
	if !ft { if mag <3{ cq.ie =false} else{ cq.ie =true }; 	if odd(mag) { cq.sw =false} else{ cq.sw =true }
	} else { if mag <3{ cq.ie =true } else{ cq.ie =false}; 	if odd(mag) { cq.sw =true } else{ cq.sw =false}}}
func precalcClassicalQualities(cqs [40]Cq){ 
	cqs[0].def( false,false, 0); 	cqs[20].def(true ,false, 0);
	cqs[1].def( false,false, 1); 	cqs[21].def(true ,false, 1);
	cqs[2].def( false,false, 2); 	cqs[22].def(true ,false, 2);
	cqs[3].def( false,false, 3); 	cqs[23].def(true ,false, 3);
	cqs[4].def( false,false, 4); 	cqs[24].def(true ,false, 4);

	cqs[5].def( false,false, 0); 	cqs[25].def(true ,false, 0);
	cqs[6].def( false,false, 1); 	cqs[26].def(true ,false, 1);
	cqs[7].def( false,false, 2); 	cqs[27].def(true ,false, 2);
	cqs[8].def( false,false, 3); 	cqs[28].def(true ,false, 3);
	cqs[9].def( false,false, 4); 	cqs[29].def(true ,false, 4);

	cqs[10].def(false,true , 0); 	cqs[30].def(true ,true , 0);
	cqs[11].def(false,true , 1); 	cqs[31].def(true ,true , 1);
	cqs[12].def(false,true , 2); 	cqs[32].def(true ,true , 2);
	cqs[13].def(false,true , 3); 	cqs[33].def(true ,true , 3);
	cqs[14].def(false,true , 4); 	cqs[34].def(true ,true , 4);

	cqs[15].def(false,true , 0); 	cqs[35].def(true ,true , 0);
	cqs[16].def(false,true , 1); 	cqs[36].def(true ,true , 1);
	cqs[17].def(false,true , 2); 	cqs[37].def(true ,true , 2);
	cqs[18].def(false,true , 3); 	cqs[38].def(true ,true , 3);
	cqs[19].def(false,true , 4); 	cqs[39].def(true ,true , 4)}
var cQs [40]Cq
func (cqs1 []Cq) pointByIE( ft bool,ie bool,sn bool) []*Cq { var cqs2 []*Cq;
	for i := int8(0); i <40; i++{ if cqs1.ft==ft && cqs1.ie==ie && cqs1.sn==sn{ cqs2 =append(cqs2, &cqs1[i])}}; return cqs2}



type Md struct{
	sx, gn 				*Gn
	pm 					*Pm
	gmf, bmf 			Mf
	gar, bar 			Amf
	qp 					Qp}
func (md Md) transPm(pm *Pm) (Mf,Mf) {
	md.gmf =md.sx.gmf.transPm2(pm.gmf); 	md.bmf =md.sx.bmf.transPm2(pm.bmf); return md.gmf, md.bmf}
func (f1 Mf) transPm2(pm Mf) Mf { var f2 Mf
	f2[0] =f1[pm[0]]; 	f2[1] =f1[pm[1]]; 	f2[2] =f1[pm[2]]; 	return f2}
func (md Md) transMd(t1 int8, t2 int8) (Mf,Mf) {
	if t1 > 0 {	for i := int8(0); i < 3; i++ { var f Mf; f =md.gmf.transMf(0,1,2);
		if md.gmf[i] ==t1 { f[i] =t2}; 	if md.gmf[i] ==t2 { f[i] =t1}; return f, md.bmf}
	} else { 	for i := int8(0); i < 3; i++ { var f Mf; f =md.bmf.transMf(0,1,2);
		if md.bmf[i] ==t1 { f[i] =t2}; 	if md.bmf[i] ==t1 { f[i] =t1}; return md.gmf, f}}
	return md.gmf, md.bmf}
type Amf func(int8,int8) (int8,int8)
type Qp [9][9]Qv
type Qv struct{
	lp,lpi,lpu 			bool
	c, r, V, K 			int8
	col  				Color}
func (qv Qv) lp( i bool, 	u bool){
	qv.lp =true; qv.lpi=i; 	qv.lpu=u}
func precalcMoods(mds [192]Md, gns [4]Gn, pms [12]Pm){
	for i := uint8(0); i < 48; i++ {
		for j := uint8(0); j < 4;  j++ {
			mds[i+48*j].sx = &gns[j]}}
	for i := uint8(0); i < 12; i++ {
		for j := uint8(0); j < 16; j++ {
			mds[i+12*j].pm = &pps[i];
			switch j {
			case 0, 4, 8, 12: mds[i+12*j].gn = &gns[0];
			case 1, 5, 9, 13: mds[i+12*j].gn = &gns[1];
			case 2, 6, 10,14: mds[i+12*j].gn = &gns[2];
			case 3, 7, 11,15: mds[i+12*j].gn = &gns[3]}}}
	for i := uint8(0); i < 192;i++ {
		mds[i].gmf, mds[i].bmf =mds[i].transPm( mds[i].pm);
		if mds[i].sx == mds[i].gn {
			if mds[i].sx.mas != mds[i].gn.mas && mds[i].sx.Ac == mds[i].gn.Ac {
				if !mds[i].sx.mas { mds[i].gmf, mds[i].bmf =mds[i].transMd(3,-4)
				} else { 			mds[i].gmf, mds[i].bmf =mds[i].transMd(3,-5)}
			} else if mds[i].sx.mas == mDs[i].gn.mas && mds[i].sx.Ac != mds[i].gn.Ac {
				if !mds[i].sx.Ac { 	mds[i].gmf, mds[i].bmf =mds[i].transMd(3,-6)
				} else { 			mds[i].gmf, mds[i].bmf =mds[i].transMd(-3,6)}
			} else {
				mds[i].gmf, mds[i].bmf =mds[i].transMd(3,-6);
				mds[i].gmf, mds[i].bmf =mds[i].transMd(-3,6)}}
		mds[i].gar=mds[i].gmf.arithMf()
		mds[i].bar=mds[i].bmf.arithMf()
		mds[i].qp =mds[i].quantQp( mds[i].gar,mds[i].bar)}}
func (mf Mf) arithMf() Amf { var a Amf
	if 			mf[0] == 1 {if mf[1] == 2 { if mf[2] == 3 {	a =func(c int8, r int8)(int8,int8){ return 	-r,	c-r}
									} else 	if mf[2] ==-4 {	a =func(c int8, r int8)(int8,int8){ return 	-r,	c-r}
									} else 	if mf[2] ==-5 {	a =func(c int8, r int8)(int8,int8){ return 	-r,	c-r}
									} else 	{ 				a =func(c int8, r int8)(int8,int8){ return 	-r,	c-r}}
					} else 	if mf[2] == 2 { if mf[1] == 3 { a =func(c int8, r int8)(int8,int8){ return c-r, -c}
									} else	if mf[1] ==-4 { a =func(c int8, r int8)(int8,int8){ return c-r, -c}
									} else 	if mf[1] ==-5 { a =func(c int8, r int8)(int8,int8){	return c-r, -c}
									} else 	{ 				a =func(c int8, r int8)(int8,int8){	return c-r, -c}}}
	} else 	if mf[0] == 2 {	if mf[1] == 1 { if mf[2] == 3 { a =func(c int8, r int8)(int8,int8){	return 	-r,	4-c}
									} else 	if mf[2] ==-4 { a =func(c int8, r int8)(int8,int8){	return 	-r,	4-c}
									} else 	if mf[2] ==-5 { a =func(c int8, r int8)(int8,int8){	return 	-r,	4-c}
									} else 	{ 				a =func(c int8, r int8)(int8,int8){	return 	-r,	4-c}}
					} else 	if mf[2] == 1 { if mf[1] == 3 { a =func(c int8, r int8)(int8,int8){	return c-r, 4-c}
									} else 	if mf[1] ==-4 { a =func(c int8, r int8)(int8,int8){	return c-r, 4-c}
									} else 	if mf[1] ==-5 { a =func(c int8, r int8)(int8,int8){	return c-r, 4-c}
									} else 	{  				a =func(c int8, r int8)(int8,int8){	return c-r, 4-c}}}
	} else 	if mf[1] == 1 { 				if mf[0] == 3 { a =func(c int8, r int8)(int8,int8){	return 4-c, r}
									} else 	if mf[0] ==-4 { a =func(c int8, r int8)(int8,int8){	return 4-c, r}
									} else 	if mf[0] ==-5 { a =func(c int8, r int8)(int8,int8){	return 4-c, r}
									} else 	{ 				a =func(c int8, r int8)(int8,int8){	return 4-c, r}}
	} else 	if mf[2] == 1 { 				if mf[0] == 3 { a =func(c int8, r int8)(int8,int8){	return 4-c, c-r}
									} else 	if mf[0] ==-4 { a =func(c int8, r int8)(int8,int8){	return 4-c, c-r}
									} else 	if mf[0] ==-5 { a =func(c int8, r int8)(int8,int8){	return 4-c, c-r}
									} else 	{ 				a =func(c int8, r int8)(int8,int8){	return 4-c, c-r}}
	} else if mf[0] ==-1 { 	if mf[1] ==-2 { if mf[2] ==-3 { a =func(c int8, r int8)(int8,int8){	return 	-c, c-r}
									} else 	if mf[2] == 4 { a =func(c int8, r int8)(int8,int8){	return 	-c, c-r}
									} else 	if mf[2] == 5 { a =func(c int8, r int8)(int8,int8){	return 	-c, c-r}
									} else 	{ 				a =func(c int8, r int8)(int8,int8){	return 	-c, c-r}}
					} else 	if mf[2] ==-2 { if mf[1] ==-3 { a =func(c int8, r int8)(int8,int8){	return c-r, -c}
									} else 	if mf[1] == 4 { a =func(c int8, r int8)(int8,int8){	return c-r, -c}
									} else 	if mf[1] == 5 { a =func(c int8, r int8)(int8,int8){	return c-r, -c}
									} else 	{ 				a =func(c int8, r int8)(int8,int8){	return c-r, -c}}}
	} else if mf[0] ==-2 { 	if mf[1] ==-1 { if mf[2] ==-3 { a =func(c int8, r int8)(int8,int8){	return 	-c, 4-r}
									} else 	if mf[2] == 4 { a =func(c int8, r int8)(int8,int8){	return 	-c, 4-r}
									} else 	if mf[2] == 5 { a =func(c int8, r int8)(int8,int8){	return 	-c, 4-r}
									} else 	{ 				a =func(c int8, r int8)(int8,int8){	return 	-c, 4-r}}
					} else 	if mf[2] ==-1 { if mf[1] ==-3 { a =func(c int8, r int8)(int8,int8){	return c-r, 4-r}
									} else 	if mf[1] == 4 { a =func(c int8, r int8)(int8,int8){	return c-r, 4-r}
									} else 	if mf[1] == 5 { a =func(c int8, r int8)(int8,int8){	return c-r, 4-r}
									} else 	{  				a =func(c int8, r int8)(int8,int8){	return c-r, 4-r}}}
	} else if mf[1] ==-1 { 		 			if mf[0] ==-3 { a =func(c int8, r int8)(int8,int8){	return r-4, c}
									} else 	if mf[0] == 4 { a =func(c int8, r int8)(int8,int8){	return r-4, c}
									} else 	if mf[0] == 5 { a =func(c int8, r int8)(int8,int8){	return r-4, c}
									} else 	{ 				a =func(c int8, r int8)(int8,int8){	return r-4, c}}
	} else if mf[2] ==-1 { 		 			if mf[0] ==-3 { a =func(c int8, r int8)(int8,int8){	return r-4, c-r}
									} else 	if mf[0] == 4 { a =func(c int8, r int8)(int8,int8){	return r-4, c-r}
									} else 	if mf[0] == 5 { a =func(c int8, r int8)(int8,int8){	return r-4, c-r}
									} else 	{ 				a =func(c int8, r int8)(int8,int8){	return r-4, c-r}}}
	return a}
func (md Md) quantQp(gar Amf, bar Amf) Qp { var qp Qp;
	for r, R := int8(0), int8(9); r < R; r++ {
		for c, C := int8(0), int8(9); c < C; c++ { var qv Qv;
			qv.c =c-4; qv.r =r-4;
			if qv.c < 0 { 		if qv.r < 0 { qv.lp(false,false)
						} else 	if qv.r > 0 { qv.lp(true ,true )
			}}else if qv.c > 0 {if qv.r < 0 { qv.lp(false,true )
						} else 	if qv.r > 0 { qv.lp(true, false)}}
			if abs(qv.c) <= abs(qv.r) { qv.V, qv.K = md.gar( abs(c-4), abs(r-4));
			} else { 					qv.V, qv.K = md.bar( abs(c-4), abs(r-4))}
			qp[r][c] =qv}} //colors
	return qp}
var mDs [192]Md

type Pm struct{
	pp,ppi,ppu 			bool
	lpi,lpu 			int8
	gmf,bmf 			Mf}
func (pm Pm) lp(i int8,u int8){ pm.lpi =i; pm.lpu =u}
func (pm Pm) pp(i int8,u int8){ pm.pp =true; pm.ppi =i; pm.ppu =u}
func precalcPrimalMoods(a [12]Pm){
	a[0].gmf[0] =0; 	a[0].gmf[1] =1; 	a[0].gmf[0] =2;
	a[0].bmf[0] =0; 	a[0].bmf[1] =1; 	a[0].bmf[0] =2; 				a[0].lp( 2,2); 							// to 6
	a[1].gmf =a[0].gmf.transMf(0,2,1); a[1].bmf =a[0].bmf.transMf(0,1,2); 	a[1].lp( 3,4); 							// hos
	a[2].gmf =a[0].gmf.transMf(0,1,2); a[2].bmf =a[0].bmf.transMf(2,1,0); 	a[2].lp( 1,1); a[2].pp( false,true );	// car
	a[3].gmf =a[1].gmf.transMf(0,1,2); a[3].bmf =a[1].bmf.transMf(2,1,0); 	a[3].lp( 0,1);  						// esc
	a[4].gmf =a[0].gmf.transMf(0,1,2); a[4].bmf =a[0].bmf.transMf(0,2,1); 	a[4].lp( 1,1);  						// pla
	a[5].gmf =a[1].gmf.transMf(0,1,2); a[5].bmf =a[0].bmf.transMf(0,2,1); 	a[5].lp( 1,0); a[5].pp( false,true );	// fig
	a[6].gmf =a[2].gmf.transMf(0,1,2); a[6].bmf =a[2].bmf.transMf(0,2,1); 	a[6].lp( 3,3); a[6].pp( true ,false);	// cbp
	a[7].gmf =a[3].gmf.transMf(0,1,2); a[7].bmf =a[3].bmf.transMf(0,2,1); 	a[7].lp( 3,4); a[7].pp( false,true );	// ebf
	a[8].gmf =a[4].gmf.transMf(0,1,2); a[8].bmf =a[4].bmf.transMf(2,1,0); 	a[8].lp( 3,3); a[8].pp( true, true );	// pbc
	a[9].gmf =a[5].gmf.transMf(0,1,2); a[9].bmf =a[5].bmf.transMf(2,1,0); 	a[9].lp( 3,4); a[9].pp( true ,true );	// fbe
	a[10].gmf=a[6].gmf.transMf(0,1,2); a[10].bmf=a[6].bmf.transMf(2,1,0); 	a[10].lp(3,3); a[10].pp(false,false);	// cnp		
	a[11].gmf=a[7].gmf.transMf(0,1,2); a[11].bmf=a[7].bmf.transMf(2,1,0); 	a[11].lp(3,4); a[11].pp(false,false)}	// fne
var pMs [12]Pm

type Gn struct{
	mas, Ac 			bool
	gmf, bmf 			Mf
	va 					Va}
type Mf [3]int8
func (f1 Mf) transMf(t1 int8, t2 int8, t3 int8) Mf { var f2 Mf
	f2[0] =f1[t1]; 	f2[1] =f1[t2]; 	f2[2] =f1[t3]; 	return f2}
func precalcGenders( gns){
	gns[0].gmf[0]= 3;	gns[0].gmf[1]= 2;	gns[0].gmf[2]= 1; 	gns[0].bmf[0]=-1; 	gns[0].bmf[1]=-3; 	gns[0].bmf[2]=-2
	gns[1].mas=true;						gns[1].gmf=gns[0].gmf.transMf(2,1,0); 	gns[1].bmf=gns[0].bmf.transMf(0,1,2)
						gns[2].Ac =true;	gns[2].gmf=gns[1].gmf.transMf(1,0,2); 	gns[2].bmf=gns[1].bmf.transMf(0,1,2)
	gns[3].mas=true; 	gns[3].Ac =true;	gns[3].gmf=gns[1].gmf.transMf(0,1,2); 	gns[3].bmf=gns[1].bmf.transMf(1,0,2)}
var gNs [4]Gn


func (u User) copyMetaphysics(	gns [4]Gn, pms [12]Pm, mds [192]Md, cqs [40]Cq, IEs [8]IE, fns [8]Fn, crs [13]Cr, tps [16]Tp, irs [16]Ir, rqs [40]Rq){
								u.gNs=gns; u.pMs=pMs;  u.mDs=mds;   u.cQs=cqs;  u.IES=IEs; u.fNs=fns; u.cRs=crs;  u.tPs=tps;  u.iRs=irs;  u.rQs=rqs}
func (s Sim) copyMetaphysics(	gns [4]Gn, pms [12]Pm, mds [192]Md, cqs [40]Cq, IEs [8]IE, fns [8]Fn, crs [13]Cr, tps [16]Tp, irs [16]Ir, rqs [40]Rq){
								s.gNs=gns; s.pMs=pMs;  s.mDs=mds;   s.cQs=cqs;  s.IES=IEs; s.fNs=fns; s.cRs=crs;  s.tPs=tps;  s.iRs=irs;  s.rQs=rqs}
func precalcMetaphysics(gns [4]Gn, pms [12]Pm, mds [192]Md, cqs [40]Cq, IEs [8]IE, fns [8]Fn, crs [13]Cr, tps [16]Tp, irs [16]Ir, rqs [40]Rq){
	precalcGenders( 			gns)
	precalcPrimalMoods( 		pms)
	precalcMoods( 				mds, gns, pms)
	precalcClassicalQualities( 	cqs)
	precalcInformationElements( cqs, IEs)
	precalcFunctions( 			fns)
	precalcCircuits( 			crs)
	precalcSociotypes( 			tps, IEs, fns, crs)
	precalcIntertypeRelations( 	irs, tps)
	precalcRomanticQualities( 	rqs, tps, irs, cqs)}




//   // /// // // //////   // /// // // //////   // /// // // //////   // /// // // //////   // /// // // //////
//   // // /// //   //     // // /// //   //     // // /// //   //     // // /// //   //     // // /// //   //  
//   // //  // //   //     // //  // //   //     // //  // //   //     // //  // //   //     // //  // //   //  


func init(){

	precalcPlanarColors()
	precalcCubicColors()
	precalcMetaphysics( 		gNs, pMs, mDs, cQs, IEs, fNs, cRs, tPs, iRs, rQs)

	initEssences()
	initUser()

 	log.Println( gNs)
 	log.Println( pMs)
 	log.Println( mDs)
}


//   // /// // // //////   // /// // // //////   // /// // // //////   // /// // // //////   // /// // // //////
//   // // /// //   //     // // /// //   //     // // /// //   //     // // /// //   //     // // /// //   //  
//   // //  // //   //     // //  // //   //     // //  // //   //     // //  // //   //     // //  // //   //  



type Color struct{
	h, s, v 			uint8
	hex 				string}
func (c Color) defByHSV(h uint8,s uint8,v uint8){
						c.h=h; 	c.s=s; 	c.v=v}
func (c Color) defByHex(hex string){ c.hex=hex}
func (ca1 []Color) spectrum( n uint8, c1 Color, c2 Color) { var c Color; var ca2 []Color;
	var sStep, vStep float32; 	var sstep, vstep uint8;
	sStep =(c2.s-c1.s)/n; 		sstep =uint8(sStep);
	vStep =(c2.v-c1.v)/n; 		vstep =uint8(vStep);
	for i:=unit8(0); i<n; i++{	ca2 =append(ca2, c.defByHSV( c1.h, min(c1.s,c2.s)+c*sstep, min(c1.v,c2.v)+c*vstep))}; ca1 =ca2}

func precalcPlanarColors(){
	pCs.whi.defByHSV(   1,   1,  25, 	   1,   1,  50, 	   1,   1, 100)
	pCs.red.defByHSV(   0,  25, 100, 	   0,  50,  50, 	   0, 100, 100)
	pCs.cya.defByHSV( 180,  25, 100, 	 180,  50,  50, 	 180, 100, 100)
	pCs.lil.defByHSV( 315,  25, 100, 	 315,  50,  50, 	 315, 100, 100)
	pCs.gre.defByHSV( 135,  25, 100, 	 135,  50,  50, 	 135, 100, 100)
	pCs.ora.defByHSV(  30,  25, 100, 	  30,  50,  50, 	  30, 100, 100)
	pCs.blu.defByHSV( 222,  25, 100, 	 222,  50,  50, 	 222, 100, 100)
	pCs.yel.defByHSV(  70,  25, 100, 	  70,  50,  50, 	  70, 100, 100)
	pCs.vio.defByHSV( 275,  25, 100, 	 275,  50,  50, 	 275, 100, 100)
	pCs.src4, pCs.src5 =pCs.simpleBlend( 	pCs.red, pCs.cya)
	pCs.slg4, pCs.slg5 =pCs.simpleBlend( 	pCs.lil, pCs.gre)
	pCs.sob4, pCs.sob5 =pCs.simpleBlend( 	pCs.ora, pCs.blu)
	pCs.syv4, pCs.syv5 =pCs.simpleBlend( 	pCs.yel, pCs.vio)
	pCs.crc4, pCs.crc5 =pCs.complexBlend( 	pCs.red, pCs.cya)
	pCs.clg4, pCs.clg5 =pCs.complexBlend( 	pCs.lil, pCs.gre)
	pCs.cob4, pCs.cob5 =pCs.complexBlend( 	pCs.ora, pCs.blu)
	pCs.cyv4, pCs.cyv5 =pCs.complexBlend( 	pCs.yel, pCs.vio)}
type Pc struct{
 	lo, fa, hi 			Color}
func (pc Pc) defByHSV( 	loh uint8,  los uint8,  lov uint8, 	fah uint8,  fas uint8,  fav uint8, 	hih uint8,  his uint8,  hiv uint8){
						pc.lo.h=loh;pc.lo.s=los;pc.lo.v=lov;pc.fa.h=fah;pc.fa.s=fas;pc.fa.v=fav;pc.hi.h=hih;pc.hi.s=his;pc.hi.v=hiv}
type Pcs struct{
 	whi, red, cya, lil, gre, ora, blu, yel, vio Pc
 	src4,slg4,sob4,syv4,crc4,clg4,cob4,cyn4	[][]Color
 	src5,slg5,sob5,syv5,crc5,clg5,cob5,cyn5	[][]Color}
var pCs Pcs
func (pcs Pcs) simpleBlend( g Pc, b Pc) ([][]Color, [][]Color) { var cm4 [][]Color; var cm5 [][]Color;
	var glf []Color;	var glh []Color;
	var blf []Color;	var blh []Color;
	glf.spectrum( 4, g.lo, g.fa);	glh.spectrum( 4, g.lo, g.hi);
	blf.spectrum( 3, b.lo, b.fa);	blh.spectrum( 3, b.lo, b.hi);
	cm4.simpleQuadrant( 4, glf, glh, blf, blh);
	glf.spectrum( 5, g.lo, g.fa);	glh.spectrum( 5, g.lo, g.hi);
	blf.spectrum( 4, b.lo, b.fa);	blh.spectrum( 4, b.lo, b.hi);
	cm5.simpleQuadrant( 5, glf, glh, blf, blh); return cm4, cm5}
func (cm1 [][]Color) simpleQuadrant( res int8, glf []Color, glh []Color, blf []Color, blh []Color) { var c Color; var cm2 [][]Color;
	for r :=int8(0); r < res; r++{
		for c :=int8(0); c < res; c++{

		}
	}}
func (pcs Pcs) complexBlend( g Pc, b Pc) ([][]Color, [][]Color) { var cm4 [][]Color; var cm5 [][]Color;
	var glf []Color;	var glh []Color; 	var gfh []Color;
	var blf []Color;	var blh []Color; 	var bfh []Color;
	glf.spectrum( 4, g.lo, g.fa);	glh.spectrum( 4, g.lo, g.hi); 	gfh.spectrum( 4, g.fa, g.hi);
	blf.spectrum( 3, b.lo, b.fa);	blh.spectrum( 3, b.lo, b.hi); 	bfh.spectrum( 3, b.fa, b.hi);
	cm4.complexQuadrant( glf, glh, gfh, blf, blh, bfh);
	glf.spectrum( 5, g.lo, g.fa);	glh.spectrum( 5, g.lo, g.hi); 	gfh.spectrum( 5, g.fa, g.hi);
	blf.spectrum( 4, b.lo, b.fa);	blh.spectrum( 4, b.lo, b.hi); 	bfh.spectrum( 4, b.fa, b.hi);
	cm5.complexQuadrant( glf, glh, gfh, blf, blh, bfh); return cm4, cm5}
func (cm1 [][]Color) complexQuadrant( res int8,glf []Color,glh []Color,gfh []Color,blf []Color,blh []Color,bfh []Color) { var c Color; var cm2 [][]Color;
	for r :=int8(0); r < res; r++{
		for c :=int8(0); c < res; c++{

		}
	}}


func precalcCubicColors(){
	Ccs[0].defByHex( "#000000")
	Ccs[1].defByHex( "#732a2a")
	Ccs[2].defByHex( "#ff0000")
	Ccs[3].defByHex( "#ff8888")
	Ccs[4].defByHex( "#ffa500")
	Ccs[5].defByHex( "#ffff00")
	Ccs[6].defByHex( "#a5a500")
	Ccs[7].defByHex( "#00ff00")
	Ccs[8].defByHex( "#00ffff")
	Ccs[9].defByHex( "#8888ff")
	Ccs[10].defByHex("#8800e1")
	Ccs[11].defByHex("#ff00ff")
	Ccs[12].defByHex("#888888")}
var Ccs [13]Color


//   ///   ///   ///   // /// //   ///   ///   ///   // /// //   ///   ///   ///   // /// //   ///   ///   ///   // /// //   ///   ///   ///   // /// //  
//   // / / //  /// /  // // ///   // / / //  /// /  // // ///   // / / //  /// /  // // ///   // / / //  /// /  // // ///   // / / //  /// /  // // ///  
//   //  /  // /////// // //  //   //  /  // /////// // //  //   //  /  // /////// // //  //   //  /  // /////// // //  //   //  /  // /////// // //  //  


func main(){
	//initIo()
	initWebSocket()	
}


//   ///   ///   ///   // /// //   ///   ///   ///   // /// //   ///   ///   ///   // /// //   ///   ///   ///   // /// //   ///   ///   ///   // /// //  
//   // / / //  /// /  // // ///   // / / //  /// /  // // ///   // / / //  /// /  // // ///   // / / //  /// /  // // ///   // / / //  /// /  // // ///  
//   //  /  // /////// // //  //   //  /  // /////// // //  //   //  /  // /////// // //  //   //  /  // /////// // //  //   //  /  // /////// // //  // 



func ask(txt string) string { 
	switch txt{
		case "md": 	log.Println("md"); return "md"
	}
	return ""
}


var addr = flag.String("addr", ":8080", "http service address")

func serveHome(w http.ResponseWriter, r *http.Request) {
	log.Println(r.URL)
	if r.URL.Path != "/" { http.Error(w, "Not found", http.StatusNotFound);	return}
	if r.Method != "GET" { http.Error(w, "Method not allowed", http.StatusMethodNotAllowed); return}
	http.ServeFile(w, r, "index1816.html")}

func initWebSocket() {
	flag.Parse()
	hub := newHub()
	go hub.run()
	http.HandleFunc("/", serveHome)
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) { serveWs(hub, w, r) })
	err := http.ListenAndServe(*addr, nil)
	if err != nil {	log.Fatal("ListenAndServe: ", err) }}

// Copyright 2013 The Gorilla WebSocket Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.



// Hub maintains the set of active clients and broadcasts messages to the
// clients.
type Hub struct {	
	clients map[*Client]bool // Registered clients.	
	broadcast chan []byte // Inbound messages from the clients.	
	register chan *Client // Register requests from the clients.
	unregister chan *Client} // Unregister requests from clients.

func newHub() *Hub {
	return &Hub{
		broadcast:  make(chan []byte),
		register:   make(chan *Client),
		unregister: make(chan *Client),
		clients:    make(map[*Client]bool),}}

func (h *Hub) run() {
	for {
		select {
		case client := <-h.register: 	h.clients[client] = true
		case client := <-h.unregister:	if _, ok := h.clients[client]; ok {
											delete(h.clients, client)
											close(client.send)}
		case message := <-h.broadcast:
			txt := string(message)
			if txt =="q"{ os.Exit(0)
			} else {
				log.Printf(txt)
				//var resp = ask(txt)
						
				for client := range h.clients {
					select {
					case client.send <- message:
					default:
						close(client.send)
						delete(h.clients, client)}}}}}}



const (
	writeWait = 10 * time.Second // Time allowed to write a message to the peer.
	pongWait = 60 * time.Second // Time allowed to read the next pong message from the peer.
	pingPeriod = (pongWait * 9) / 10 // Send pings to peer with this period. Must be less than pongWait.
	maxMessageSize = 512) // Maximum message size allowed from peer.
var (
	newline = []byte{'\n'}
	space   = []byte{' '})
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,}
// Client is a middleman between the websocket connection and the hub.
type Client struct {
	hub *Hub	
	conn *websocket.Conn // The websocket connection.	
	send chan []byte} // Buffered channel of outbound messages.
// readPump pumps messages from the websocket connection to the hub.
//
// The application runs readPump in a per-connection goroutine. The application
// ensures that there is at most one reader on a connection by executing all
// reads from this goroutine.
func (c *Client) readPump() {
	defer func() {
		c.hub.unregister <- c
		c.conn.Close()
	}()
	c.conn.SetReadLimit(maxMessageSize)
	c.conn.SetReadDeadline(time.Now().Add(pongWait))
	c.conn.SetPongHandler(func(string) error { c.conn.SetReadDeadline(time.Now().Add(pongWait)); return nil })
	for {
		_, message, err := c.conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("error: %v", err)
			}
			break
		}
		message = bytes.TrimSpace(bytes.Replace(message, newline, space, -1))
		c.hub.broadcast <- message
	}
}
// writePump pumps messages from the hub to the websocket connection.
// A goroutine running writePump is started for each connection. The
// application ensures that there is at most one writer to a connection by
// executing all writes from this goroutine.
func (c *Client) writePump() {
	ticker := time.NewTicker(pingPeriod)
	defer func() {
		ticker.Stop()
		c.conn.Close()
	}()
	for {
		select {
		case message, ok := <-c.send:
			c.conn.SetWriteDeadline(time.Now().Add(writeWait))
			if !ok {
				// The hub closed the channel.
				c.conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}

			w, err := c.conn.NextWriter(websocket.TextMessage)
			if err != nil {
				return
			}
			w.Write(message)

			// Add queued chat messages to the current websocket message.
			n := len(c.send)
			for i := 0; i < n; i++ {
				w.Write(newline)
				w.Write(<-c.send)
			}

			if err := w.Close(); err != nil {
				return
			}
		case <-ticker.C:
			c.conn.SetWriteDeadline(time.Now().Add(writeWait))
			if err := c.conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}
}

// serveWs handles websocket requests from the peer.
func serveWs(hub *Hub, w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return}
	client := &Client{hub: hub, conn: conn, send: make(chan []byte, 256)}
	client.hub.register <- client
	// Allow collection of memory referenced by the caller by doing all work in
	// new goroutines.
	go client.writePump()
	go client.readPump()}







// MySQL

func database() {
	db, err := sql.Open("mysql", "root:password@tcp(localhost:3306)/database");

	cE( err,"Open")
	err = db.Ping(); cE( err,"Ping")

	//var initDone int
	//err = db.QueryRow("select initDone from qZ").Scan(&initDone); cE( err,"QueryRow")
	//fmt.Println( initDone)

	//stmt, err := db.Prepare("INSERT INTO qZ(initDone) VALUES(?)")
	//if err != nil { fmt.Printf("err Prepare\n")}
	//_, err := db.Exec("INSERT INTO qZ (initDone) VALUES (1)"); cE(err)
	defer db.Close()
}

/*// PathError records an error and the operation and
// file path that caused it.
type PathError struct {
    Op string    // "open", "unlink", etc.
    Path string  // The associated file.
    Err error    // Returned by the system call.
}

func (e *PathError) Error() string {
    return e.Op + " " + e.Path + ": " + e.Err.Error()
}
PathError's Error generates a string like this:

open /etc/passwx: no such file or directory*/

func cE(err error, str string) { if err != nil {
		sli := []string{}
		sli = append( sli, "Error: ")
		sli = append( sli, str)
		sli = append( sli, "\n")
		ret := strings.Join( sli,"")
		log.Printf( ret)}}