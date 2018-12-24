function WarningButton_Click()
{
	var wb = document.getElementById("warning-bar");
	var header = document.getElementById("header");
	var mc = document.getElementById("main-content");
	var sectionTag1 = document.getElementById("sectionTag1");
	var sectionTag2 = document.getElementById("sectionTag2");
	var sectionTag3 = document.getElementById("sectionTag3");
	var pos = 80;
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
			if (wb)
			{
				wb.style.top = pos - 80 + 'px';
			}
			if (header)
			{
				header.style.top = pos + 'px';
			}
			if (mc)
			{
				mc.style.top = pos + 80 + 'px';
			}
		}
		
		if (sectionTag1)
		{
			sectionTag1.setAttribute('style', 'height:80px; margin-top:-80px;');
		}
		if (sectionTag2)
		{
			sectionTag2.setAttribute('style', 'height:80px; margin-top:-80px;');
		}
		if (sectionTag3)
		{
			sectionTag3.setAttribute('style', 'height:80px; margin-top:-80px;');
		}
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
