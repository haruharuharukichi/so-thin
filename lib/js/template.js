	function header(rootDir){
		$.ajax({
		url: rootDir + "header.html",
		cache: false,
		success: function(html){
		html = html.replace(/\{\$root\}/g, rootDir); //footer.htmlの{$root}を置換
		document.write(html);
		}
		});
	}
	function footer(rootDir){
	    $.ajax({
	        url: rootDir + "footer.html", // ディレクトリー変更
	        cache: false,
	        async: false,
	        dataType: 'html',
	        success: function(html){
	            html = html.replace(/\{\$root\}/g, rootDir); 
	            document.write(html);
	        }
	    });
	}