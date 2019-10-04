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
}

func mA(n int8) int8 { if n < 0 { return -n} else { return n}}


type Va struct{
	inV, inK, exV, exK 	int}



type Cq struct{ 
	mas, ie, s 			bool
	c 					int8
	ni 					string}
type Rq struct{
	Ac, SN 				bool
	F, T 				int8
	ni, desc 			string}
type Cl struct{ 
	hue, sat, val, c, r, V, K 	int8
	hex 				string}

type Ml struct{
	ni, desc 	string}









type Ab struct{
	cqs [10]Cq
 	rqs [10]Rq


	gns [4]Gn
}
type Re struct{
	cqs []Cq

}

type Sim struct{
	ab 	Ab
	re 	Re

}

type Stat struct{
	avg, med 			bool
}


type User struct{
	sims 	[]Sim
	stats 	[]Stat
}

//var users = []

// if no subj is selected then can select multiple types or moods

//func mkSim(u User) Sim {

//}

type Test struct{
	att 	int
}



type IE struct{
	ie, dg, ft, sn, lpi,lpu bool}
func (IE IE) def( 	ft bool, ie bool, sn bool, 	lpi bool, 	lpu bool, 	dg bool){
					IE.ft=ft;IE.ie=ie;IE.sn=sn;	IE.lpi=lpi;	IE.lpu=lpu;	IE.dg=dg}
func precalcInformationElements(){
	IEs[0].def(false,false,false, false,false, false)
	IEs[1].def(false,false,true,  false,true,  true )
	IEs[2].def(false,true, false, false,true,  true )
	IEs[3].def(false,true, true,  false,false, false)
	IEs[4].def(true, false,false, true, false, true )
	IEs[5].def(true, false,true,  true, false, false)
	IEs[6].def(true, true, false, true, true,  false)
	IEs[7].def(true, true, true,  true, true,  true)}
var IEs [8]IE

type Fn struct{
	uv, lon,ver,lat 	bool}
func (fn Fn) def( 	uv bool, 	lon bool, 	lat bool, 	ver bool){
					fn.uv=uv;	fn.lon=lon;	fn.lat=lat;	fn.ver=ver}
func precalcFunctions(){
	fNs[0].def(false, true, true, false)
	fNs[1].def(true,  true, false,false)
	fNs[2].def(true,  false,false,false)
	fNs[3].def(false, false,true, false)
	fNs[4].def(true,  false,true, true )
	fNs[5].def(false, false,false,true )
	fNs[6].def(false, true, false,true )
	fNs[7].def(true,  true, true, true)}
var fNs [8]Fn

type Cr struct{
	ws, vm, lon,ver,lat,lpi,lpu bool}
var cRs [12]Cr

type I3 [2][2][2]IE
type F3 [2][2][2]Fn
type C4 [2][2][2][2]Cr
type Ty struct{
	cr, ie, ft, sn 		bool
	I3 					I3
	F3 					F3
	C4 					C4}
var tYs [16]Ty




type Mp struct{ 
	ul, ur, dr, dl 		Cp}

type Sq struct{
	dir 				bool
	F,T 				int8}
func (sq Sq) def(	dir bool, 	F int8, T int8){
					sq.dir =dir;sq.F =F;sq.T =T}
type Pa struct{
	cla,rom 			Sq
	ntn,xtn 			*Sq}
func precalcScalarQualities(){ 
	sQs[0].def(false,4,0);sQs[0].def(false,3,0);sQs[0].def(false,2,0);sQs[0].def(false,1,0);sQs[0].def(false,0,0);
	sQs[0].def(true, 0,4);sQs[0].def(true, 0,3);sQs[0].def(true, 0,2);sQs[0].def(true, 0,1);sQs[0].def(true, 0,0);
	sQs[0].def(false,4,1);sQs[2].def(false,3,2);sQs[3].def(false,2,3);sQs[4].def(false,1,4);sQs[0].def(false,0,0);
	sQs[0].def(true, 4,1);sQs[2].def(true, 3,2);sQs[3].def(true, 2,3);sQs[4].def(true, 1,4);sQs[0].def(true, 0,0)}
var sQs [20]Sq

type Md struct{
	sx, gn 				*Gn
	pm 					*Pm
	gmf, bmf 			Mf
	gar, bar 			Amf
	cp 					Cp}
type Amf func(int8,int8) (int8,int8)
type Cp [9][9]Vq
type Vq struct{
	c, r, V, K 			int8
	hue, sat, val 		uint
	hex 				string}
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
func (md Md) quantCp(gar Amf, bar Amf) Cp { var p Cp; var l Vq;
	for r, R := int8(0), int8(9); r < R; r++ {
		for c, C := int8(0), int8(9); c < C; c++ { l.c =c-4; l.r =r-4;
			if c <= r { l.V, l.K = md.gar( mA(c-4), mA(r-4));
			} else { 	l.V, l.K = md.bar( mA(c-4), mA(r-4));}
			p[r][c] =l}}
	return p}
func precalcMoods(){
	for i := uint8(0); i < 48; i++ {
		for j := uint8(0); j < 4;  j++ {
			mDs[i+48*j].sx = &gNs[j]}}
	for i := uint8(0); i < 12; i++ {
		for j := uint8(0); j < 16; j++ {
			mDs[i+12*j].pm = &pMs[i];
			switch j {
			case 0, 4, 8, 12: mDs[i+12*j].gn = &gNs[0];
			case 1, 5, 9, 13: mDs[i+12*j].gn = &gNs[1];
			case 2, 6, 10,14: mDs[i+12*j].gn = &gNs[2];
			case 3, 7, 11,15: mDs[i+12*j].gn = &gNs[3]}}}
	for i := uint8(0); i < 192;i++ {
		mDs[i].gmf, mDs[i].bmf =mDs[i].transPm( mDs[i].pm);
		if mDs[i].sx == mDs[i].gn {
			if mDs[i].sx.mas != mDs[i].gn.mas && mDs[i].sx.Ac == mDs[i].gn.Ac {
				if !mDs[i].sx.mas { mDs[i].gmf, mDs[i].bmf =mDs[i].transMd(3,-4)
				} else { 			mDs[i].gmf, mDs[i].bmf =mDs[i].transMd(3,-5)}
			} else if mDs[i].sx.mas == mDs[i].gn.mas && mDs[i].sx.Ac != mDs[i].gn.Ac {
				if !mDs[i].sx.Ac { 	mDs[i].gmf, mDs[i].bmf =mDs[i].transMd(3,-6)
				} else { 			mDs[i].gmf, mDs[i].bmf =mDs[i].transMd(-3,6)}
			} else {
				mDs[i].gmf, mDs[i].bmf =mDs[i].transMd(3,-6);
				mDs[i].gmf, mDs[i].bmf =mDs[i].transMd(-3,6)}}
		mDs[i].gar=mDs[i].gmf.arithMf()
		mDs[i].bar=mDs[i].bmf.arithMf()
		mDs[i].cp =mDs[i].quantCp( mDs[i].gar,mDs[i].bar)}}
var mDs [192]Md

type Pm struct{
	gmf, bmf 			Mf}
func precalcPrimalMoods(){
	pMs[0].gmf[0] =0; 		pMs[0].gmf[1] =1; 		pMs[0].gmf[0] =2; // to 6
	pMs[0].bmf[0] =0; 		pMs[0].bmf[1] =1; 		pMs[0].bmf[0] =2;
	pMs[1].gmf =pMs[0].gmf.transMf(0,2,1); 	pMs[1].bmf =pMs[0].bmf.transMf(0,1,2); // hos
	pMs[2].gmf =pMs[0].gmf.transMf(0,1,2); 	pMs[2].bmf =pMs[0].bmf.transMf(2,1,0); // car
	pMs[3].gmf =pMs[1].gmf.transMf(0,1,2); 	pMs[3].bmf =pMs[1].bmf.transMf(2,1,0); // esc
	pMs[4].gmf =pMs[0].gmf.transMf(0,1,2); 	pMs[4].bmf =pMs[0].bmf.transMf(0,2,1); // pla
	pMs[5].gmf =pMs[1].gmf.transMf(0,1,2); 	pMs[5].bmf =pMs[0].bmf.transMf(0,2,1); // fig
	pMs[6].gmf =pMs[2].gmf.transMf(0,1,2); 	pMs[6].bmf =pMs[2].bmf.transMf(0,2,1); // cbp
	pMs[7].gmf =pMs[3].gmf.transMf(0,1,2); 	pMs[7].bmf =pMs[3].bmf.transMf(0,2,1); // ebf
	pMs[8].gmf =pMs[4].gmf.transMf(0,1,2); 	pMs[8].bmf =pMs[4].bmf.transMf(2,1,0); // pbc
	pMs[9].gmf =pMs[5].gmf.transMf(0,1,2); 	pMs[9].bmf =pMs[5].bmf.transMf(2,1,0); // fbe
	pMs[10].gmf=pMs[6].gmf.transMf(0,1,2); 	pMs[10].bmf=pMs[6].bmf.transMf(2,1,0); // pnc		
	pMs[11].gmf=pMs[7].gmf.transMf(0,1,2); 	pMs[11].bmf=pMs[7].bmf.transMf(2,1,0)} // enf
var pMs [12]Pm

type Gn struct{
	mas, Ac 			bool
	gmf, bmf 			Mf
	va 					Va}
type Mf [3]int8
func (f1 Mf) transMf(t1 int8, t2 int8, t3 int8) Mf { var f2 Mf
	f2[0] =f1[t1]; 	f2[1] =f1[t2]; 	f2[2] =f1[t3]; 	return f2}
func precalcGenders(){
	gNs[0].gmf[0] = 3;		gNs[0].gmf[1] = 2;		gNs[0].gmf[2] = 1
	gNs[0].bmf[0] =-1; 		gNs[0].bmf[1] =-3; 		gNs[0].bmf[2] =-2
	gNs[1].mas=true		
	gNs[1].gmf=gNs[0].gmf.transMf(2,1,0); 	gNs[1].bmf=gNs[0].bmf.transMf(0,1,2)
	gNs[2].Ac =true
	gNs[2].gmf=gNs[1].gmf.transMf(1,0,2); 	gNs[2].bmf=gNs[1].bmf.transMf(0,1,2)
	gNs[3].mas=true; 		gNs[3].Ac =true
	gNs[3].gmf=gNs[1].gmf.transMf(0,1,2); 	gNs[3].bmf=gNs[1].bmf.transMf(1,0,2)}
var gNs [4]Gn


func init(){
	precalcGenders()
	precalcPrimalMoods()
	precalcMoods()
	precalcScalarQualities()
	precalcInformationElements()
	//var ab Ab
	//var s Sim
 	//var u User
 	//var test Test
 	//test.att = 5
 	log.Println( gNs)
 	log.Println( pMs)
 	log.Println( mDs)

}

func main(){
	//initIo()
	initWebSocket()
	
}

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