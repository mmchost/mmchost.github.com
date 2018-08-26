function WarningButton_Click()
{
	var wb = document.getElementById("warning-bar");
	var header = document.getElementById("header");
	var mc = document.getElementById("main-content");
	var examstag = document.getElementById("examstag");
	var contacttag = document.getElementById("contacttag");
	var newstag = document.getElementById("infotag");
	var pos = 48;
	var id = setInterval(frame, 5);
	function frame() 
	{
		if (pos == 0) 
		{
			clearInterval(id);			
			//wb.innerHTML = "";
		}
		else 
		{
			pos--; 
			wb.style.top = pos - 48 + 'px';
			header.style.top = pos + 'px';
			mc.style.top = pos + 64 + 'px';			
		}
		examstag.setAttribute('style', 'height:64px; margin-top:-65px;');
		newstag.setAttribute('style', 'height:64px; margin-top:-65px;');
		contacttag.setAttribute('style', 'height:64px; margin-top:-65px;');
	}
}

function CookiesButton_Click()
{
	var cb = document.getElementById("cookies-bar");
	var fcw = document.getElementById("footer-copyright-ws");
	fcw.setAttribute('style', 'min-height:0px;');
	var pos = 0;
	var id = setInterval(frame, 5);
	function frame() 
	{
		if (pos == -48) 
		{
			clearInterval(id);			
			//cb.innerHTML = "";
		}
		else 
		{
			pos--; 
			cb.style.bottom = pos + 'px';			
			fcw.style.height = pos + 48 + 'px';
		}
	}
}