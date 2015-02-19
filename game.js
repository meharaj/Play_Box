	var n=6;
	setInterval(function(){remove();},1000);
	$(document).ready(function()
	{
	can=$("#can")[0];
	ctx=can.getContext('2d');
	var player1=prompt("enter first player name");
	var player2=prompt("enter second player name");
	
	var win=function(n)
	{
		if(n==1)
		{
			if(((arr[0][0]==1)&&(arr[0][1]==1)&&(arr[0][2]==1))|| 
			((arr[0][0]==1)&&(arr[1][0]==1)&&(arr[2][0]==1))||
			((arr[1][0]==1)&&(arr[1][1]==1)&&(arr[1][2]==1))||
			((arr[2][0]==1)&&(arr[2][1]==1)&&(arr[2][2]==1))||
			((arr[0][1]==1)&&(arr[1][1]==1)&&(arr[2][1]==1))||
			((arr[0][2]==1)&&(arr[1][2]==1)&&(arr[2][2]==1)))
			{
			
				var winner=confirm(player1+" has One has won the match Play Again");
				//console.log("player one wins");*/
				//var winner=rectText(player1+" Has won the match",200,100);
					//if(winner)
				{
				location.reload();
				}
				/*else{
				console.log("closing");
				window.close();
				}*/
			
			}
		}
		else if(n==0)
		{
			if(((arr[0][0]==2)&&(arr[0][1]==2)&&(arr[0][2]==2))|| 
			((arr[0][0]==2)&&(arr[1][0]==2)&&(arr[2][0]==2))||
			((arr[1][0]==2)&&(arr[1][1]==2)&&(arr[1][2]==2))||
			((arr[2][0]==2)&&(arr[2][1]==2)&&(arr[2][2]==2))||
			((arr[0][1]==2)&&(arr[1][1]==2)&&(arr[2][1]==2))||
			((arr[0][2]==2)&&(arr[1][2]==2)&&(arr[2][2]==2)))
			{
				//var winner=rectText(player2+" Has won the match",200,100);
				var winner=confirm(player2+" has won the Game Play again");
				console.log("Second player has won the match");
				//if(winner)
				{
				location.reload();
				}
			/*	else{
				console.log("closing");
				window.close();
				}*/
	
			}
			else
			{ remove()}
		}
		else 
		{
			
			console.log("no one has won this match keep enjoy and continue the game");
			
		}
		
		
	}
	//var clicked=function(){alert("mouse moved");}

	var change=function(o)
	{ 
		rect(o.x,o.y,o.w,o.h,"gray");
		return new rect(0,0,10,10,o.col);
	}
	
	var warning=function()
	{ 
		
		alert("wrong Position Selection dude ");
	
	}

	var arr=new Array(new Array(0,0,0),new Array(0,0,0),new Array(0,0,0));
	var check=function(a,b){  
			if(arr[a][b]==0)
			{
				return true;
			}
			else
				return false;
		}
			
		var isThere=function(a,b)
		{
			if(a>10 && a<40)//0th column
			{
				if(b>10&&b<40)//0,0 checking for existence of a tile
				{
					if(arr[0][0]==1)
					{	//alert("first click one");
						return 1;
					}
					else if(arr[0][0]==2 )
					{
						return 2;
					}
					else if(arr[0][0]==0)
					{	//alert("second click second");
						return 0;
					}
				}
				else if(b>50 && b<90)//1,0 position of second click
				{
					if(arr[1][0]==1)//to check whether trasaction is from position 1,0
					{	//alert("first click one");
						return 1;
					}
					else if(arr[1][0]==2 )
					{
						return 2;
					}
					else if(arr[1][0]==0)
					{	
					//alert("second click second");
						return 0;
					}
				}
				else if(b>110 && b<150)//2,0 position of second click
				{
					
					if(arr[2][0]==1)//to check whether trasaction is from position 2,0
					{	//alert("first click one");
						return 1;//for srv tile
					}
					else if(arr[2][0]==2 )
					{
						return 2;//for src tile
					}
					if(arr[2][0]==0){
					
					return 0;//to check dest pos is empty or not
					}
				}
				
			
			}
			else if(a>70 && a<120)//2 nd column
			{
				if(b>10 && b<40)//0,1
				{
					if(arr[0][1]==1)
					{
						//alert("fiste")
						return 1;
					}
					else if(arr[0][1]==2)
					{
						//alert("first")
						return 2;
					}
					else if(arr[0][1]==0)
					{
						//alert("second click")
						return 0;
					}
				}
				else if(b>110 && b<150)//2,1
				{
					if(arr[2][1]==1)
					{
						//alert("fiste")
						return 1;
					}
					else if(arr[2][1]==2)
					{
						//alert("first")
						return 2;
					}
					if(arr[2][1]==0)
						{
							//alert("second click")
							return 0;
						}
				}
				
				else if(b>70 && b<90)//1,1
				{
					if(arr[1][1]==1)//to check whether trasaction is from position 1,1
					{	//alert("first click one");
						return 1;//for srv tile
					}
					else if(arr[1][1]==2 )
					{
						return 2;//for src tile
					}
					if(arr[1][1]==0)
						{
							//alert("second click")
							return 0;
						}
				}
			}
			else if(a>150 && a<180)//3rd column
			{
				if(b>10 && b<40)//0,2
				{
					if(arr[0][2]==1)
					{
					//	alert("fiste")
						return 1;
					}
					else if(arr[0][2]==2)
					{
						//alert("first")
						return 2;
					}
					else if(arr[0][2]==0)
					{
						//alert("second click")
						return 0;
					}
				}
				else if(b>60 && b<90)//1,2
				{
					if(arr[1][2]==1)
					{
					//	alert("fiste")
						return 1;
					}
					else if(arr[1][2]==2)
					{
						//alert("first")
						return 2;
					}
					if(arr[1][2]==0)
						{
							//alert("second click")
							return 0;
						}
				}
				
				else if(b>110 && b<150)//2,2
				{
					if(arr[2][2]==1)//to check whether trasaction is from position 1,1
					{	//alert("first click one");
						return 1;//for srv tile
					}
					else if(arr[2][2]==2 )
					{
						return 2;//for src tile
					}
					if(arr[2][2]==0)
						{
							//alert("second click")
							return 0;
						}
				}
			}
		}
		var draw2=function(x,y,n){
			if(x>10 && x<40)//for 1st colomn
			{
				//alert("yyyyyyyyy");
				if(y>10 && y<40)//position (0,0)
				{
			
					rect(10,10,10,10,"gray");//remove the selected source position
					arr[0][0]=0;//set source to empty
					win(n);
					
				}
				else if(y>50&& y<90)//1,0
				{
					rect(10,70,10,10,"gray");//remove the selected source position
					arr[1][0]=0;//set source to empty
					win(n);
				}
				else if(y>110 && y<150)//2,0
				{
					rect(10,130,10,10,"gray");//remove the selected source position
					arr[2][0]=0;//set source to empty
					win(n);
				}
			
			}
			if(x>70 && x<120)//for 2nd colomn
			{
				//alert("yyyyyyyyy");
				if(y>10 && y<40)//0,1
				{
						rect(90,10,10,10,"gray");//remove the selected source position
					arr[0][1]=0;//set source to empty
					win(n);
				}
				else if(y>70 && y<40)//position (1,0)
				{
			
					rect(10,10,10,10,"gray");//remove the selected source position
					arr[1][0]=0;//set source to empty
					win(n);
					
				}
				else if(y>70&& y<90)//1,1
				{
					rect(90,70,10,10,"gray");//remove the selected source position
					arr[1][1]=0;//set source to empty
					win(n);
				}
				else if(y>110 && y<150)//2,1
				{
					//alert("2,1 has not grayed");
					rect(90,130,10,10,"gray");//remove the selected source position
					arr[2][1]=0;//set source to empty
					win(n);
				}
				
			
			}
			if(x>150 && x<180)//for 3rd colomn
			{
				//alert("yyyyyyyyy");
				if(y>10 && y<40)//0,2
				{
						rect(170,10,10,10,"gray");//remove the selected source position
					arr[0][2]=0;//set source to empty
					win(n);
				}
				else if(y>60 && y<90)//position (1,2)
				{
			
					rect(170,70,10,10,"gray");//remove the selected source position
					arr[1][2]=0;//set source to empty
					win(n);
					
				}
				else if(y>110&& y<150)//2,2
				{
					rect(170,130,10,10,"gray");//remove the selected source position
					arr[2][2]=0;//set source to empty
					win(n);
				}
				
				
			
			}
		}
		var clickvar=0;
		var mouseX1,mouseY1,mouseX2,mouseY2;
		var newrectCol="";
		var moveSprite=function(evt)//to move tiles 
		{	
		
			if(clickvar==0)//identifies first click i.e tile that is to be moved
			{
									var bRect = can.getBoundingClientRect();
									mouseX1=(evt.clientX-bRect.left)*(can.width/bRect.width);
									mouseY1 = (evt.clientY - bRect.top)*(can.height/bRect.height);
									clickvar=1;
										console.log(mouseX1,mouseY1);
									var newsprite=isThere(mouseX1,mouseY1);//checks is there another tile in the clicked position
									if(newsprite==1)//if there is players one's tile tile 
									{
										notempty=true;
										newrectCol="red";
										//alert("select destination");
									}
									else if(newsprite==2)//if there is player 2
									{
										notempty=true
										newrectCol="yellow";
									}
									else
									{	
										notempty=false;
										clickvar=0;
										alert("select tile to be moved");
									}
			}
			
			else if(clickvar==1 && notempty)//second clicked identifies the click that specifies the dest position 
				{
					//alert("second click");
						var bRect = can.getBoundingClientRect();
						mouseX2=(evt.clientX-bRect.left)*(can.width/bRect.width);
						mouseY2 = (evt.clientY - bRect.top)*(can.height/bRect.height);
						clickvar=0;
						
						console.log("x2 y2"+mouseX2,mouseY2);
						var newsprite=isThere(mouseX2,mouseY2);
					//	alert(newsprite)
						if(newsprite==0)//if there is no tiles
						{
							if(mouseX2>10 && mouseX2<40)// move to 1st culmn
							{
								if(mouseY2>10 && mouseY2<40)//position(0,0)
								{		
															rect(10,10,10,10,newrectCol);
															
															if(newrectCol=="red")//if it is player1
															{
																arr[0][0]=1;
																draw2(mouseX1,mouseY1,1);//pass n as 1 to check whether player has won or not
															}
															else if(newrectCol=="yellow")//if it is player2
															{
																arr[0][0]=2;
																draw2(mouseX1,mouseY1,0);//pass n as 0 to check whether player has won or not
															}
															newrectCol="";
								}
								if(mouseY2>50 && mouseY2<90)//position(1,0)
								{		
															rect(10,70,10,10,newrectCol);
															
															if(newrectCol=="red")//if it is player1
															{
																arr[1][0]=1;
																draw2(mouseX1,mouseY1,1);//pass n as 1 to check whether player has won or not
															}
															else if(newrectCol=="yellow")//if it is player2
															{
																arr[1][0]=2;
																draw2(mouseX1,mouseY1,0);//pass n as 0 to check whether player has won or not
															}newrectCol="";
															
								}
								else if(mouseY2>110 && mouseY2<150)//position(2,0)
								{		//alert("color"+newrectCol);
															rect(10,130,10,10,newrectCol);
															
															if(newrectCol=="red")//if it is player1
															{
																arr[2][0]=1;
																draw2(mouseX1,mouseY1,1);//pass n as 1 to check whether player has won or not
															}
															else if(newrectCol=="yellow")//if it is player2
															{
																arr[2][0]=2;
																draw2(mouseX1,mouseY1,0);//pass n as 0 to check whether player has won or not
															}newrectCol="";
															
								}
								
							
							}
							else if(mouseX2>70 && mouseX2<120)//move  2nd column
							{
							
								if(mouseY2>10 && mouseY2<40)//position(0,1)
								{		
															rect(90,10,10,10,newrectCol);
															
															if(newrectCol=="red")//if it is player1
															{
																arr[0][1]=1;
																draw2(mouseX1,mouseY1,1);//pass n as 1 to check whether player has won or not
															}
															else if(newrectCol=="yellow")//if it is player2
															{
																arr[0][1]=2;
																draw2(mouseX1,mouseY1,0);//pass n as 0 to check whether player has won or not
															}
															newrectCol="";
								}
								else if(mouseY2>110 && mouseY2<150)//move to 2,1
								{
										rect(90,130,10,10,newrectCol);
										if(newrectCol=="red")//if it is player1
															{
																arr[2][1]=1;
																draw2(mouseX1,mouseY1,1);//pass n as 1 to check whether player has won or not
															}
															else if(newrectCol=="yellow")//if it is player2
															{
																arr[2][1]=2;
																draw2(mouseX1,mouseY1,0);//pass n as 0 to check whether player has won or not
															}
															newrectCol="";
										
								}
								else if(mouseY2>70 && mouseY2<90)//move to 1,1
								{
										rect(90,70,10,10,newrectCol);
										if(newrectCol=="red")//if it is player1
															{
																arr[1][1]=1;
																draw2(mouseX1,mouseY1,1);//pass n as 1 to check whether player has won or not
															}
															else if(newrectCol=="yellow")//if it is player2
															{
																arr[1][1]=2;
																draw2(mouseX1,mouseY1,0);//pass n as 0 to check whether player has won or not
															}
															newrectCol="";
										
								}
								
							
							}
							else if(mouseX2>150 && mouseX2<180)// move to 3rd column
							{
								if(mouseY2>10 && mouseY2<40)//position(0,2)
								{		
															rect(170,10,10,10,newrectCol);
															
															if(newrectCol=="red")//if it is player1
															{
																arr[0][2]=1;
																draw2(mouseX1,mouseY1,1);//pass n as 1 to check whether player has won or not
															}
															else if(newrectCol=="yellow")//if it is player2
															{
																arr[0][2]=2;
																draw2(mouseX1,mouseY1,0);//pass n as 0 to check whether player has won or not
															}
															newrectCol="";
								}
								else if(mouseY2>60 && mouseY2<90)//move to 1,2
								{
										rect(170,70,10,10,newrectCol);
										if(newrectCol=="red")//if it is player1
															{
																arr[1][2]=1;
																draw2(mouseX1,mouseY1,1);//pass n as 1 to check whether player has won or not
															}
															else if(newrectCol=="yellow")//if it is player2
															{
																arr[1][2]=2;
																draw2(mouseX1,mouseY1,0);//pass n as 0 to check whether player has won or not
															}
															newrectCol="";
										
								}
								else if(mouseY2>110 && mouseY2<150)//move to 2,2
								{
										rect(170,130,10,10,newrectCol);
										if(newrectCol=="red")//if it is player1
															{
																arr[2][2]=1;
																draw2(mouseX1,mouseY1,1);//pass n as 1 to check whether player has won or not
															}
															else if(newrectCol=="yellow")//if it is player2
															{
																arr[2][2]=2;
																draw2(mouseX1,mouseY1,0);//pass n as 0 to check whether player has won or not
															}
															newrectCol="";
										
								}
								
							}
							
						}
					
				}
				/*else
				{
					alert("first select to source tile");
				}*/
			
				
		}
		var addSprite=function(evt)
		{
		//var i;
		var bRect = can.getBoundingClientRect();
		mouseX = (evt.clientX - bRect.left)*(can.width/bRect.width);
		mouseY = (evt.clientY - bRect.top)*(can.height/bRect.height);
		console.log(mouseX,mouseY);//x & y values
		
		//if((mouseX>90 && mouseX<100)||(mouseX>0 && mouseX<20)||(mouseX>170 && mouseX<180))
		
if(mouseX>10 && mouseX<40)
		{
		
			if(mouseY>10 && mouseY<40)//position (0,0)
			{
				v=check(0,0);
				//console.log("print now"); helps to debugger
				if(n>0 && n%2==0 && v)//First Player
				{
					
					P=new rect(10,10,10,10,"red",n);
					arr[0][0]=1;
					n=n-1;
					win(n);
					console.log(arr[0][0]);
				//P.addEventListener("mousemove",clicked,false);
					//console.log("first");
				}
				else if(n>0 && v)//second Player
				{
					Q=rect(10,10,10,10,"yellow");
					arr[0][0]=2;
					n=n-1;
					win(n);
					//console.log("second");
				}
				else	
				warning();		
			}
			else if(mouseY>50 && mouseY<90)//position(1,0)
			{
				v=check(1,0);
				if(n>0 && n%2==0 && v)//First player
				{
					rect(10,70,10,10,"red");
					n=n-1;
					arr[1][0]=1;
					win(n);
				}
				else if(n>0 && v)//second player
				{
					rect(10,70,10,10,"yellow");
					n=n-1;
					arr[1][0]=2;
					win(n);
				}
				else warning();
			}
			else if(mouseY>110 && mouseY<150)//position(2,0)
			{   v=check(2,0);
				if(n>0 && n%2==0 && v )//first player
				{
					rect(10,130,10,10,"red");
					n=n-1;
					arr[2][0]=1;
					win(n);
				}
				else if(n>0 && v)//second player
				{
					rect(10,130,10,10,"yellow");
					n=n-1;
					arr[2][0]=2;
					win(n);
				}
				else warning();
			}
			else warning();//Warn to user has selected wrong position
			
			
		}
		else if(mouseX>70 && mouseX<120)
		{
			if(mouseY>10 && mouseY<40)//position(0,1)
			{
				v=check(0,1);
				if(n>0 && n%2==0 && v)//first player
				{
					rect(90,10,10,10,"red");
					n=n-1;
					arr[0][1]=1;
					win(n);
				}
				else if(n>0 && v)//second player
				{
					rect(90,10,10,10,"yellow");
					n=n-1;
					arr[0][1]=2;
					win(n);
				}
				else warning();
			}
			else if(mouseY>70 && mouseY<90)//position(1,1)
			{
				v=check(1,1);
				if(n>0 && n%2==0 && v)//first player
				{
					rect(90,70,10,10,"red");
					n=n-1;
					arr[1][1]=1;
					win(n);
					
				}
				else if(n>0 && v)//second player
				{
					rect(90,70,10,10,"yellow");
					n=n-1;
					arr[1][1]=2;
					win(n);
				}
				else warning();
			}
			else if(mouseY>110 && mouseY<150)//position (2,1)
			{   
				v=check(2,1);
				if(n>0 && n%2==0 && v)//first player
				{
					rect(90,130,10,10,"red");
					n=n-1;
					arr[2][1]=1;
					win(n);
					
				}
				else if(n>0 && v)//second player
				{
					rect(90,130,10,10,"yellow");
					n=n-1;
					arr[2][1]=2;
					win(n);
				}
				else warning();
			}
			else warning();//Warn to user has selected wrong position
		
		}
		else if(mouseX>150 && mouseX<180)
		{
			v=check(0,2);
			if(mouseY>10 && mouseY<40)//position(0,2)
			{
				if(n>0 && n%2==0 && v)//first player
				{
					rect(170,10,10,10,"red");
					n=n-1;
					arr[0][2]=1;
					win(n);
				}
				else if(n>0 && v)//second player
				{
					rect(170,10,10,10,"yellow");
					n=n-1;
					arr[0][2]=2;
					win(n);
				}
				else warning();
			}
			else if(mouseY>60 && mouseY<90)//position(1,2)
			{
				v=check(1,2);
				if(n>0 && n%2==0 && v)//first player
				{
					rect(170,70,10,10,"red");
					n=n-1;
					arr[1][2]=1;
					win(n);
				}
				else if(n>0 && v)//second player
				{
					rect(170,70,10,10,"yellow");
					n=n-1;
					arr[1][2]=2;
					win(n);
				}
				else warning();
			}
			else if(mouseY>110 && mouseY<150)//position(2,2)
			{
				v=check(2,2);
				if(n>0 && n%2==0 && v)//first player
				{
					//console.log(n);
					rect(170,130,10,10,"red");
					n=n-1;
					arr[2][2]=1;
					win(n);
				}
				else if(n>0 && v)//second player
				{
					//console.log(n);
					rect(170,130,10,10,"yellow");
					n=n-1;
					arr[2][2]=2;
					win(n);
				}
				else warning();
				
			}
			else warning();//Warn to user has selected wrong position
				
		}	
		else warning();//Warn to user has selected wrong position

	   
	
	}
	can.addEventListener("mousedown",addSprite,false);
	var remove=function()
	{
		can.removeEventListener("mousedown",addSprite);//removes addsprite on click after players put their all tiles 
		//alert("removed");
		can.addEventListener("mousedown",moveSprite,false)//starts  moving of tiles 
	}
	height=can.height;
	width=can.width;
	//ctx.fillStyle="Black";
	//ctx.fillRect(0,0,width,height);
	var rectText=function(text,x,y)
	{
		this.text=text;
		this.x=x;
		this.y=y;
		ctx.fillText(this.text,this.x,this.y)
	}
	var text=function()
	{  
		ctx.font="10px verdana";
		ctx.fillStyle="red";
		rectText(player1,200,30);
		ctx.fillStyle="yellow";
		rectText(player2,200,50);
		
	}
	var rect= function(x, y, w, h, col,val) {
        this.col=col;
		ctx.fillStyle = this.col;
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
        ctx.fillRect(this.x, this.y,this.w,this.h);
		this.val= val;
    }
	var draw=function(){
		rect(0,0,width,height,"Black");
		rect(10,10,170,130,"gray");
		var w=70;
		var h=50;
		rect(20,20,w,h,"green");//1st quadrant
		rect(100,20,w,h,"green");//2nd
		rect(20,80,w,h,"green");//3rd
		rect(100,80,w,h,"green");	//4th
	}
		draw();
		text();
	
});
