function show()
		{ 
		  var box = document.getElementById("box"); 

		  var text = box.innerHTML; 
		  var newBox = document.createElement("div"); 
		  var btn = document.createElement("a"); 
		  newBox.innerHTML = text.substring(0,56); 
		  btn.innerHTML = text.length > 56 ? "...显示全部" : ""; 
		  btn.href = "###"; 
		  btn.onclick = function(){ 
		    if(btn.innerHTML == "...显示全部")
		    { 
		      btn.innerHTML = "收起"; 
		      newBox.innerHTML = text; 
		    }
		    else
		    { 
		      btn.innerHTML = "...显示全部"; 
		      newBox.innerHTML = text.substring(0,56); 
		    } 
		  } 
		  box.innerHTML = ""; 
		  box.appendChild(newBox); 
		  box.appendChild(btn); 
		} 
		
		function showintro(){
			var contentbox=document.getElementById("contentbox");
			
			// switch bookcontent{
			// 	case 1:
			 	contentbox.innerHTML="<h2>真正的人民艺术家——凡·高先生<a href='https://www.douban.com/people/amenkaile/'>(手肿治虫)</a></h2>	<br>  			和很多人一样，我以前一直以为凡·高是一个很会画画的疯子。但是看过这本传记后，我才发现自己大错特错。		      			<br><br>我觉得称呼他为“人民艺术家”也不为过，你很少见到这样一个纯粹的人，一个高尚的人，一个脱离了低级趣味的人，一个时刻惦记着劳苦大众的人。<br><br>这不是调侃，而是凡·高悲惨一生的写照。<br><br>《悲伤的老头》<br>		      			<div class='cc'><img src='https://img1.doubanio.com/view/thing_review/large/public/p250429.jpg' alt=''>		      			<div style='text-align:center;padding-bottom:1em' class='wr pl'></div>		      			</div>		      			<br><br>凡·高从小拥有一个良好的家庭教育环境，虽然谈不上大富大贵，但父亲是牧师，母亲是订书匠之女，三个叔叔都是艺术品交易商。<br><br>凡·高一开始跟着母亲学习阅读，接受过神学、艺术等各种知识。不过7岁时他被送到寄宿学校，在那里凡·高过的很不开心，感觉自己被抛弃了。<br><br>13岁时，凡·高已经变成一个严肃、沉默的孩子。<br>		      			<div class='cc'><img src='https://img3.doubanio.com/view/thing_review/large/public/p250424.jpg' alt=''>		      			<div style='text-align:center;padding-bottom:1em' class='wr pl'></div>		      			</div>		      			<br><br>从小受父亲影响，凡·高有很强的宗教信仰，16岁时，凡·高去叔叔的古比尔画廊工作，白天做事，晚上研读《圣经》，偶尔看小说，也是狄更斯、艾略特这类描述底层人民穷苦生活的作品。<br><br>因为追求房东女儿不成，凡·高变得愤世嫉俗，常常在客人面前表达不满，凡·高被画廊开除（再次被抛弃）。<br><br>丢了工作后，凡·高的宗教信仰却更加狂热实践，他开始翻译《圣经》、吃素食，并准备神学院的入学考试。<br><br>看起来很美好？但是凡·高的生活将会一直重复希望——失望——被抛弃的循环。<br><br>因为觉得拉丁文太枯燥，凡·高没有考上神学院，最终却只得到去煤矿做临时助理牧师的职位。<br><br>在煤矿，凡·高见识到最受压迫、生活最辛苦的底层民众。为此他创作了《背着袋子的矿工妻子们》。<br><br>		      			<div class='cc'><img src='https://img3.doubanio.com/view/thing_review/large/public/p250425.jpg' alt=''>		      			<div style='text-align:center;padding-bottom:1em' class='wr pl'></div>		      			</div>		      			<br>画面右侧有个钉在树上的耶稣神龛，暗示这不仅是矿工的悲惨，还是全人类都处在水深火热的痛苦之中。<br><br>凡·高非常同情矿工，将自己的衣物和食品分给他们，自己穿的破破烂烂，吃的也营养不良。<br><br>在教会眼中，凡·高这是在抹黑煤矿，于是将他辞退（再度被抛弃）。于是凡·高只好转向另外一个他可以感受到激情的领域：绘画。<br><br>凡·高初涉绘画时，最喜爱描绘乡村风景的巴比松画派，尤其是擅长描绘农民的儒勒·布雷东。<br><br>不过凡·高觉得巴比松画派淡化农民的艰难生存境况，比如这幅《结束一天的工作》<br>		      			<div class='cc'><img src='https://img3.doubanio.com/view/thing_review/large/public/p250416.jpg' alt=''>		      			<div style='text-align:center;padding-bottom:1em' class='wr pl'></div>		      			</div>		      			<br><br>凡·高自己创作的《吃土豆的人》，关注的是农民身负重担、被无情剥削的境遇。<br>这些乡亲，他们在微弱的灯光下吃着土豆，这些在盘中取食的双手正是在地里耕种的双手……他们用双手诚恳地获得了食物。<br>		      			<div class='cc'><img src='https://img1.doubanio.com/view/thing_review/large/public/p250417.jpg' alt=''>		      			<div style='text-align:center;padding-bottom:1em' class='wr pl'></div>		      			</div>		      			<br><br><br>这幅《夜间咖啡馆》，描绘了咖啡馆里百无聊赖、喝酒度日的孤独客人。<br>凡·高用色坏上出于对立位置的红色和绿色来表现可怕的人类激情，血红色的墙面和台球桌，草绿色的天花板，黄色的地板和吊灯，增添了让人不安的压抑。<br>		      			<div class='cc'><img src='https://img3.doubanio.com/view/thing_review/large/public/p250422.jpg' alt=''><div style='text-align:center;padding-bottom:1em' class='wr pl'></div></div>		      			<br><br><br>这一时期，不仅凡·高的作品中充满贫穷和疾苦，他自己的生活也是穷困潦倒。<br><br>在安特卫普学习色彩理论时，凡·高靠弟弟提奥的接济生存，他在10个月的时间里只记得吃过6顿热饭，牙齿变得松脱，他开始沉迷于苦艾酒，神智经常处于迷乱状态。<br><br>后来，凡·高搬到巴黎和弟弟提奥同住。在巴黎，凡·高第一次接触到莫奈等印象派画家。他开始努力模仿印象派在蓝色/橙色、红色/绿色、黄色/紫色等对比色的运用。<br><br>在《蒙马特：风车和农圃》中，凡·高受印象派的影响，虽然画面仍然在描绘劳动中的农民和磨坊，但是一改过去画中沉痛压抑的黑色调，变成大胆亮丽的蓝、黄、绿。把风景变成阳刚灿烂的情境下光影的合唱。<br>		      			<div class='cc'><img src='https://img1.doubanio.com/view/thing_review/large/public/p250419.jpg' alt=''><div style='text-align:center;padding-bottom:1em' class='wr pl'></div>		      			</div>		      			<br><br>在巴黎，凡·高还遇到了后印象派画家高更，两人都认同用绘画传达灵魂至深的情感。凡·高曾说过：“我要做的不是描绘照相式的相似性，而是表现感情状态”。<br><br>和以前一样，凡·高和提奥住在一起没多久，他就变得无法忍受，逼不得已，凡·高只好搬去南方小镇阿尔勒。<br><br>在这里，凡·高更加孤独，交的朋友都是一些怪人，比如这幅《邮递员约瑟夫·鲁兰肖像》，画中的邮递员是“一个愤怒的共产党人”，对劳苦大众和工人阶级充满同情。<br><br>凡·高简化了画面的色彩和衣服的轮廓，采用这种朴实无华的技法来对应他眼中鲁兰直率的天性。<br>		      			<div class='cc'><img src='https://img3.doubanio.com/view/thing_review/large/public/p250421.jpg' alt=''><div style='text-align:center;padding-bottom:1em' class='wr pl'></div>		      			</div><br><br><br>虽然朋友不多，但好在阿尔勒富饶的乡村风景美不胜收，凡·高在这里创作了很多绚丽生动的作品。<br><br>《丰收》中，成熟后的麦田温暖金色的黄和山峦天空的蓝形成和谐的色调，精准捕捉到普罗旺斯风景中的光彩夺目之美。<br>		      			<div class='cc'><img src='https://img3.doubanio.com/view/thing_review/large/public/p250426.jpg' alt=''><div style='text-align:center;padding-bottom:1em' class='wr pl'></div>		      			</div><br><br>这时，高更也搬来和他一起创作，两人互相汲取灵感。不过，缠绕在凡·高身上的抛弃命格又开始发挥作用。<br><br>因为怀疑高更不喜欢自己的创作，又怨恨高更的女人缘，两人吵了一架后凡·高将高更赶走，可是凡·高无法承受生命中一次次的“被抛弃”，终于他拿起剃刀，把自己的耳朵割掉。<br>		      			<div class='cc'><img src='https://img3.doubanio.com/view/thing_review/large/public/p250423.jpg' alt=''>		      			<div style='text-align:center;padding-bottom:1em' class='wr pl'></div>		      			</div>		      			<br><br>也许是对这个世界彻底失去希望，也许是自己都无法忍受这种暴躁状态，凡·高自愿选择了去精神病院。<br><br>在精神病院，他很少见到户外世界，不过他却重拾绘画的热情，画出了“”一幅幅更加成熟大胆、令人震撼的作品，让人感到画家复杂强烈的感情和表达的冲动“”。<br><br>比如《星夜》<br>教堂矗立在村子的中央，头顶则是布满星辰的天空，这让凡·高想起自己早年对宗教使人们团结一致的信念。<br>		      			<div class='cc'><img src='https://img1.doubanio.com/view/thing_review/large/public/p250427.jpg' alt=''><div style='text-align:center;padding-bottom:1em' class='wr pl'></div>		      			</div>		      			<br><br>《杏树枝叶》<br><div class='cc'><img src='https://img3.doubanio.com/view/thing_review/large/public/p250433.jpg' alt=''><div style='text-align:center;padding-bottom:1em' class='wr pl'></div></div><br><br>在精神病院待了一年后，凡·高在弟弟的安排下接受加歇医生的治疗。<br><br>加歇医生喜爱艺术，脾气也有点古怪，两人很快成为朋友，凡·高还为这位焦虑古怪的医生画了一副肖像。<br>		      			<div class='cc'><img src='https://img3.doubanio.com/view/thing_review/large/public/p250431.jpg' alt=''>		      			<div style='text-align:center;padding-bottom:1em' class='wr pl'></div>		      			</div><br><br>然而没过几个月，凡·高被发现在画画时开枪自杀，虽然子弹没有打中心脏，但是在治疗三天后还是离开了人世。<br><br>回过头来，再看凡·高的作品，你会发现他从未放弃一个信念：<br><br>艺术应当关心现实的问题，<br>探索如何唤醒良知，改造世界。<br><br>不过这种激烈的情感也让凡·高将他人拒之门外，自己一直生活在无尽的孤独中。		      			<br><br>在最后的作品《有乌鸦的麦田》中，狂暴的天空中乌鸦盘旋，广阔麦田中的小路，似乎预示了凡·高那注定孤独的命运。<br>		      			<div class='cc'><img src='https://img3.doubanio.com/view/thing_review/large/public/p250432.jpg' alt=''><div style='text-align:center;padding-bottom:1em' class='wr pl'></div>"
			
			// 		break;
			// }
		}