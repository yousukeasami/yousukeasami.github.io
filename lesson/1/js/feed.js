	google.load("feeds","1");

		function initialize(){

			var feed = new google.feeds.Feed('http://japan.cnet.com/rss/index.rdf');


			feed.setNumEntries(100);
			feed.includeHistoricalEntries();
 			feed.load(function(result){

					if(!result.error) {
						//console.log(result);
						var container = document.getElementById('feed');
						var htmlstr = "";
						
          				for (var i = 0; i < result.feed.entries.length; i++) {
				            var entry = result.feed.entries[i];
				            var title = entry.title;
				            
				            var link = document.createElement("a");
				            link.href = entry.link;
				            link.appendChild(document.createTextNode(title));

				            var li = document.createElement("li");
				            li.appendChild(link);
				            container.appendChild(li);

				            var div = document.createElement("div");
				            div.appendChild(li);
				            container.appendChild(div);

				             //日付の取得
			                var pdate = new Date(entry.publishedDate); //Dateクラス
			                var pyear = pdate.getFullYear();   //年
			                var pmonth = pdate.getMonth() + 1; //月
			                var pday = pdate.getDate();        //日

			                //日付を2桁表示に変更
			                if (pyear < 2000) pyear += 1900;
			                if (pmonth < 10) {pmonth = "0" + pmonth;}
			                if (pday < 10) {pday = "0" + pday;}

			                var date = pyear + "." + pmonth + "." + pday + " ";

			                //画像の取得
			                imgsrc = entry.content.match(/src="(.*?)"/igm);

			                //html生成
			                htmlstr += '<li><a href="' + entry.link + '">';
			                htmlstr += '<div class="feed_contents"><div class="thum"><img ' + imgsrc + '></div>';
			                htmlstr += '<p class="info">' + date + '| ' + entry.categories[0] + '</p>';
			                htmlstr += '<p class="tit">' + entry.title + '</p></div></a></li>';
						
						}

						 container.innerHTML = htmlstr;
        			} else {
            		//読み込みが失敗したときの処理
            			alert(result.error.code + ":" + result.error.message);
        		}


			});
		}

		google.setOnLoadCallback(initialize);	
