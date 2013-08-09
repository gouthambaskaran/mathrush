var q=document.getElementById("s1");
var t=document.getElementById("text1");
var a=document.getElementById("p2");
var b=document.getElementById("b1");
var d1=document.getElementById("d1");
var r=document.getElementById("result");
var md=document.getElementById("main");
var b2=document.getElementById("b2");
var resp1=document.getElementById("resp1");
var resp2=document.getElementById("resp2");
var resp3=document.getElementById("resp3");
var mp=document.getElementById("mainp");
var ran1;
var ran2;
var ans=0;
var count=0;
var h=0;
var m=0;
var s=0;
var hh=0;
var mm=0;
var ss=0;
var w;
var choice;
var op=["+","-","*"]
b2.onclick=b2handle;
function b2handle()
{
	window.location.reload();
}
b.onclick=bhandle;
function bhandle()
{
	if(b.innerHTML=="start")
	{
	d1.style.visibility="visible";
	calc();
	t.focus();
	b.innerHTML="stop";
	timer();
	}
	else
	{
		clearTimeout(w);
		result();
	}

}

t.onkeydown=khandle;
function khandle(e)
{
	if(e.keyCode==13)
		check();
	

}

function add()
{
	ran1=(Math.random()*1000).toFixed();
	ran2=(Math.random()*1000).toFixed();
	ans=Math.round(ran1)+Math.round(ran2);
	q.innerHTML=ran1+" + "+ran2+" = ";
}


function sub()
{
do{
ran1=Math.round(Math.random()*1000).toFixed()
}while(ran1==0)
 do{
 ran2=Math.round(Math.random()*1000).toFixed()
 }while(ran2==0 || ran2==ran1)

 if(ran1<ran2)
 {
 	var tv=ran1;
 	ran1=ran2;
 	ran2=tv;
 }	
	ans=ran1-ran2;
	q.innerHTML=ran1+" - "+ran2+" = ";
}

function mul()
{
do{
ran1=Math.round((Math.random()*200).toFixed())
}while(ran1==0)
 do{
 ran2=Math.round((Math.random()*100).toFixed())
 }while(ran2==0)
ans=ran1*ran2;
q.innerHTML=ran1+" * "+ran2+" = ";
}
function calc()
{
	
	clear();
	t.focus();
	
	//add();
	choice=Math.round(Math.random()*2) ;
	switch(choice)
	{
	case 0:
	add();
	break;
	
	case 1:
	sub();
	break;
	
	case 2:
	mul();
	break;
	}

		
}
function check()
{
if(t.value==ans)
	{a.innerHTML="Correct";
	count++;
	hh=h;
	mm=m;
	ss=s;
	calc();
}
else
	{a.innerHTML=t.value+" is Incorrect";
	t.value="";
}
}
function clear()
{
	
	t.value="";
	a.innerHTML="";
}
function result()
{
	
	md.style.display="none";
	r.style.display="block";
	resp1.innerHTML=count;
	resp2.innerHTML=(hh<10?"0"+hh:hh)+" : "+(mm<10?"0"+mm:mm)+" : "+(ss<10?"0"+ss:ss);
	resp3.innerHTML=average()+" seconds";
	
}

function timer()
	{
		
				
		mp.innerHTML=(h<10?"0"+h:h)+" : "+(m<10?"0"+m:m)+" : "+(s<10?"0"+s:s);
		s=s+1;
		if(s>59)
			{s=0;
			m=m+1;}
		if(m>59)
			{m=0;
				h=h+1;}
		 w=setTimeout(timer,1000);
	}

function average()
{
	var av=0;
	var sec=(hh*3600)+(mm*60)+ss;
	if(sec>0)
	av=sec/count;
	
	return av.toFixed(2);
}
