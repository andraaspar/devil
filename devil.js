// title: Devil
// author: Andras Parditka (andraaspar)
// desc: Hack and slash
// license: MIT
// version: 1
// script: js
// saveid: devil-sio6y7
let
j=JSON.stringify
,okeys=Object.keys
,oents=Object.entries
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
	print(ps.join("\n"),0,0,8,true,1,true)
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
,swapcolors=(o)=>oents(o).forEach(([k,v])=>poke4(0x3FF0*2+parseInt(k),v))
,resetcolors=(a)=>a.forEach(c=>poke4(0x3FF0*2+c,c))
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
,drawmaplayer=(smap,nrow,layer)=>{
	for(let j=0;j<nrow;j++) {
		let row=smap[j]
		,ncol=row.length
		,u=-ncol/2
		,v=-nrow/2
		for(let i=0;i<ncol;i++){
			let t=row[i],x=w/2+(u+i+0.5)*twidth,y=h/2+(v+j+0.5)*theight/2
			if(t.tile==='.'){
				if(layer===0){
					let tl=map[t.y]?.[t.x-1]
					,tr=map[t.y-1]?.[t.x]
					if(tl==='#')drawwalltl(x,y,0,16)
					if(tr==='#')drawwalltr(x,y,0,16)
				}else if(layer===1){
					let b=map[t.y+1]?.[t.x+1]==='.'
					// ,bl=b&&map[t.y+1]?.[t.x]==='#'
					// ,br=b&&map[t.y]?.[t.x+1]==='#'
					// drawtilel(x,y,0,bl?32:0)
					// drawtiler(x,y,0,br?64:0)
					if(b&&map[t.y+1]?.[t.x]==='#')
						swapcolors({1:2,2:3,3:4,4:5,5:6,6:7,7:8})
					drawtilel(x,y,0,0)
					resetcolors([1,2,3,4,5,6,7])
					if(b&&map[t.y]?.[t.x+1]==='#')
						swapcolors({1:14,2:13,3:12,4:11,5:10,6:19,7:8})
					drawtiler(x,y,0,0)
					resetcolors([1,2,3,4,5,6,7])
				}
			}
		}
	}
}
,drawmap=()=>{
	let smap=slicemap(player.x,player.y,4),nrow=smap.length
	drawmaplayer(smap,nrow,0)
	drawmaplayer(smap,nrow,1)
}
,twidth=32*2
,theight=16*2
,wheight=twidth/2
,drawtilel=(x,y,u,v)=>{
	ttri(
		x-twidth/2,y,
		x,y-theight/2,
		x,y+theight/2,
		u,v,
		u+16,v,
		u,v+16,
		0,
		-1
	)
}
,drawtiler=(x,y,u,v)=>{
	ttri(
		x+twidth/2,y,
		x,y-theight/2,
		x,y+theight/2,
		u+16,v+16,
		u+16,v,
		u,v+16,
		0,
		-1
	)
}
,drawwalltl=(x,y,u,v)=>{
	ttri(
		x-twidth/2,y-wheight,
		x,y-theight/2-wheight,
		x-twidth/2,y,
		u,v,
		u+16,v,
		u,v+16
	)
	ttri(
		x,y-theight/2,
		x,y-theight/2-wheight,
		x-twidth/2,y,
		u+16,v+16,
		u+16,v,
		u,v+16
	)
}
,drawwalltr=(x,y,u,v)=>{
	swapcolors({1:15,2:14,3:13,4:12,5:11,6:10,7:9})
	ttri(
		x,y-theight/2-wheight,
		x+twidth/2,y-wheight,
		x,y-theight/2,
		u,v,
		u+16,v,
		u,v+16
	)
	ttri(
		x+twidth/2,y,
		x+twidth/2,y-wheight,
		x,y-theight/2,
		u+16,v+16,
		u+16,v,
		u,v+16
	)
	resetcolors([1,2,3,4,5,6,7])
}
,drawchar=(id,x,y)=>{
	swapcolors({1:10,2:10,3:10,4:10,5:10,6:10,7:10,8:10,9:10,10:10,11:10,12:10,13:10,14:10,15:10})
	spr(id,x+1,y+1,0,1,0,0,1,2)
	spr(id,x-1,y-1,0,1,0,0,1,2)
	resetcolors([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
	spr(id,x,y,0,1,0,0,1,2)
}
function TIC(){
	vbank(0)
	if(key(KEY.q))exit()
	cls(0)
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
	vbank(1)
	cls(0)
	drawchar(256,w/2-4,h/2-16)
	doprint()
}