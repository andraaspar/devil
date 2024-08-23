// title: Devil
// author: András Parditka (andraaspar)
// desc: Hack and slash
// license: MIT
// version: 1
// script: js
// saveid: devil-sio6y7
let
j=JSON.stringify
,okeys=Object.keys
,ofrom=Object.fromEntries
,KEY={...ofrom([...Array(26).keys()].map(x=>[(x+10).toString(36),x+1])
	.concat([...Array(10).keys()].map(x=>[x,x+27]))
	.concat([...Array(12).keys()].map(x=>['f'+(x+1),x+67]))),
	space:48,ctrl:63,shift:64,alt:65,
}
,tostr=x=>typeof x==='string'?x:j(x)
,t=(...r)=>trace(r.map(tostr).join(" "),12)
,ps=[]
,linere=/.{60}/g
,p=(...r)=>ps.push(r.map(tostr).join(" ").replace(linere,'$&\n'))
,doprint=()=>{
	print(ps.join("\n"),0,0,12,true,1,true)
	ps=[]
}
,btnlabels="udlrabxy".split('')
,lastbtnp
,lastbtn
,btnps
,btns
,dobtnfn=(fn)=>{
	r=[]
	for(let p=0;p<4;p++){
		let o={}
		r.push(o)
		for(let i=0;i<8;i++)
			if(fn(p*8+i))o[btnlabels[i]]=true
	}
	return r
}
,dobtns=()=>{
	if(!btnps||lastbtnp!==btnp()){
		lastbtnp=btnp()
		btnps=dobtnfn(btnp)
	}
	if(!btns||lastbtn!==btn()){
		lastbtn=btn()
		btns=dobtnfn(btn)
	}
}
,w=240
,h=136
,map=`
##############################
#.....#####...............####
#.....#####.....#####.....####
###.#########.#########.######
#...#.........#....##...#....#
#.#...#..##.#...#..##.#...#..#
#.#########.#########.########
#.#......##.#......##.#......#
#........##..................#
#.#.....###.#.....###.#.....##
##############################
`.trim().split('\n')
,mapw=map[0].length
,maph=map.length
,player={x:14,y:5}
/*
  #
 # .
# . #
 . .
  #
*/
,slicemap=(x,y,d)=>{
	let count=2*d+1,r=[...Array(count*2-1).keys()].map(()=>[])
	for(let u=0;u<count;u++){
		for(let v=0;v<count;v++){
			let mapx=x-d+v,mapy=y-d+u,tile=map[mapy]?.[mapx]
			r[v+u].unshift({x:mapx,y:mapy,tile})
		}
	}
	// for(let r1 of r){
	// 	p(r1)
	// }
	return r
}
,drawmap=()=>{
	let smap=slicemap(player.x,player.y,4),nrow=smap.length
	for(let j=0;j<nrow;j++) {
		let row=smap[j]
		,ncol=row.length
		,u=-ncol/2
		,v=-nrow/2
		for(let i=0;i<ncol;i++){
			let t=row[i],x=w/2+(u+i+0.5)*twidth,y=h/2+(v+j+0.5)*theight/2
			if(t.tile==='.')drawtile(x,y,0,0)
			let tl=map[t.y]?.[t.x-1]
			if(tl==='#')drawwalltl(x,y,0,16)
		}
	}
}
,twidth=8*8
,theight=4*8
,wheight=twidth
,drawtile=(x,y,u,v)=>{
	ttri(
		x-twidth/2,y,
		x,y-theight/2,
		x,y+theight/2,
		u,v,
		u+16,v,
		u,v+16
	)
	ttri(
		x+twidth/2,y,
		x,y-theight/2,
		x,y+theight/2,
		u+16,v+16,
		u+16,v,
		u,v+16
	)
}
,drawwalltl=(x,y,u,v)=>{
	pix(x,y,12)
	ttri(
		x-twidth/2,y-wheight,
		x-twidth/2,y,
		x,y-theight/2-wheight,
		u,v,
		u+16,v,
		u,v+16
	)
	ttri(
		x-twidth/2,y-theight/2-wheight,
		x,y-theight/2-wheight,
		x,y-theight/2,
		u,v,
		u+16,v,
		u,v+16
	)
}
function TIC(){
	if(key(KEY.q))exit()
	cls()
	dobtns()
	if(btnps[0].l)player.x--
	if(btnps[0].r)player.x++
	if(btnps[0].u)player.y--
	if(btnps[0].d)player.y++
	p(player)
	// p('mouse:',mouse())
	// p(btns().map((o,i)=>`btns[${i}]:`+okeys(o)).join('\n'))
	// p('A:',key(KEY.a))
	drawmap()
	// pix(w/2,h/2,12)
	spr(256,w/2-4,h/2-16,0,1,0,0,1,2)
	doprint()
}