
function getmenu(){
var menu=document.getElementById( "li" ).innerHTML;


}	
	
	
	
google.load("feeds", "1");

function initialize() {
var site =new Array();
var entry=new Array();
var entryArray = new Array();
//var title=new Array();
//var content=new Array();

site[0] = {
    title:'エンジニアタイプ',
    rss:"http://engineer.typemag.jp/feed",
    disp_entry:4        // 取得する記事の数
};

site[1] = {
    title:'cinra',
    rss:"http://www.cinra.net/rssfeed",
    disp_entry:4        // 取得する記事の数
};

site[2] = {
    title:'ウェブソク',
    rss:'http://next.rikunabi.com/tech/index.rdf',
    disp_entry:4        // 取得する記事の数
};

site[3] = {
    title:'コリス',
    rss:'http://blogos.com/feed/article_recent/',
    disp_entry:4        // 取得する記事の数
};


for (var i = 0; i < site.length; i++) {

var feed = new google.feeds.Feed(site[i].rss);
feed.setNumEntries(1000);
feed.includeHistoricalEntries();

feed.load(function(result) {
if (!result.error) {

var container = document.getElementById("feed");



var pattern = /プログラマー/;
var count=0;
for (var j=0;j<result.feed.entries.length; j++){

	entry=result.feed.entries[j];
	entryArray.push(entry);

var title = entry.title;

var content = entry.content;


var pdate = new Date(entry.publishedDate);
var pyear = pdate.getFullYear();
var pmonth = pdate.getMonth() + 1;
var pday=pdate.getDate();
if(content.match(pattern)||title.match(pattern)){

	/*
	var entryImg = "";
				var imgCheck = entry.content.match(/(src="http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG))/); //画像のチェックをします　拡張子はここで増やします
				if(imgCheck){
					entryImg += '<img ' + imgCheck[0] + '"class="image" >';
					} else {
						entryImg += noPhoto;
				}

				container.innerHTML += '<div><p>'  
				+ '</p><h3><a href="' + entry.link + '">'
				+ entry.title + '</a></h3>'
				+ entryImg  
				+ '<p>'
				+ entry.contentSnippet.substring(0,120)
				+ '<a href="' + entry.link + '">more</a></p></div>';
			
			}*/

	
var entryImg = "";

var imgCheck = entry.content.match(/(src="http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG))/); //画像のチェックをします　拡張子はここで増やします
				if(imgCheck){
					entryImg += '<img ' + imgCheck[0] + '"class="image" >';
					}
				else{

					entryImg='<img src="shiorin.jpg" class="image" >';
				}

//contents
var diva=document.createElement("div");
diva.setAttribute("id", "contents"); 


//imgs
var divb=document.createElement("div");
divb.setAttribute("id", "imgs");
divb.innerHTML+=entryImg;


//text
var divc=document.createElement("div");
divc.setAttribute("id", "text");   
var link=document.createElement("a");
	link.href=entry.link;

var divd=document.createElement("div");
divd.setAttribute("id", "day");

var days=document.createElement("h2");
days.setAttribute("id", "days");

var dive=document.createElement("div");
dive.setAttribute("id", "articletitle");



days.appendChild(document.createTextNode(pyear));
days.innerHTML+='/';
days.appendChild(document.createTextNode(pmonth));
days.innerHTML+='/';

days.appendChild(document.createTextNode(pday));
divd.appendChild(days);
divc.appendChild(divd);

var titlelen=title.length;
if (!titlelen>=30) {
	link.appendChild(document.createTextNode(title));
}

else{
	link.appendChild(document.createTextNode(title.substr(0,30)));
	link.innerHTML+='...';
}
	dive.appendChild(link)
	divc.appendChild(dive); 

	//li.appendChild(link);
	diva.appendChild(divb);
	diva.appendChild(divc);

	container.appendChild(diva);


	
	count++;
		}
		

	if(count==14){
	break;
}
	
	}

	}	
}


		  

		 ); 


}
		 
}

google.setOnLoadCallback(initialize);


$(function(){
//	var $li=$('li');
		//$li.fadeOut(10000);

	/*$li.click(function(){

		alert("hi!");
	});*/





	$li=$('li');




	$('#feed').on('mouseover','#contents',function(){
		$(this).css('background-color','#dcdcdc');
				   }
				)
	
	.on('mouseout','#contents',function(){
		$(this).css('background-color','white');
				   }
	   );}




  );






