function Page_OnResize()
{
	//data:image/png;base64,
    var banner1920 = "<img style=\"border-style:none; max-width:1920px; max-height:480px; width:100%;\" src=\"images/banner/1920x480.png\" alt=\"radiografii dentare, tomografii 3d cbct, radiologie dentara\"/>";
	var banner1280 = "<img style=\"border-style:none; max-width:1280px; max-height:480px; width:100%;\" src=\"images/banner/1280x480.png\" alt=\"radiografii dentare, tomografii 3d cbct, radiologie dentara\"/>";
	var banner960 = "<img style=\"border-style:none; max-width:960px; max-height:480px; width:100%;\" src=\"images/banner/960x480.png\" alt=\"radiografii dentare, tomografii 3d cbct, radiologie dentara\"/>";
	var banner640 = "<img style=\"border-style:none; max-width:640px; max-height:320px; width:100%;\" src=\"images/banner/640x320.png\" alt=\"radiografii dentare, tomografii 3d cbct, radiologie dentara\"/>";
	var banner480 = "<img style=\"border-style:none; max-width:480px; max-height:320px; width:100%;\" src=\"images/banner/480x320.png\" alt=\"radiografii dentare, tomografii 3d cbct, radiologie dentara\"/>";
	var banner320 = "<img style=\"border-style:none; max-width:320px; max-height:320px; width:100%;\" src=\"images/banner/320x320.png\" alt=\"radiografii dentare, tomografii 3d cbct, radiologie dentara\"/>";
	var banner240 = "<img style=\"border-style:none; max-width:240px; max-height:320px; width:100%;\" src=\"images/banner/240x320.png\" alt=\"radiografii dentare, tomografii 3d cbct, radiologie dentara\"/>";

	var map1920 = "<img style=\"border-style:none; max-width:1920px; max-height:480px; width:100%;\" src=\"images/map/1920x480.png\" alt=\"radiologie dentara cluj, radiografii dentare cluj, medios medical center cluj\"/>";
	var map1280 = "<img style=\"border-style:none; max-width:1280px; max-height:480px; width:100%;\" src=\"images/map/1280x480.png\" alt=\"radiologie dentara cluj, radiografii dentare cluj, medios medical center cluj\"/>";
	var map960 = "<img style=\"border-style:none; max-width:960px; max-height:480px; width:100%;\" src=\"images/map/960x480.png\" alt=\"radiologie dentara cluj, radiografii dentare cluj, medios medical center cluj\"/>";
	var map640 = "<img style=\"border-style:none; max-width:640px; max-height:320px; width:100%;\" src=\"images/map/640x320.png\" alt=\"radiologie dentara cluj, radiografii dentare cluj, medios medical center cluj\"/>";
	var map480 = "<img style=\"border-style:none; max-width:480px; max-height:320px; width:100%;\" src=\"images/map/480x320.png\" alt=\"radiologie dentara cluj, radiografii dentare cluj, medios medical center cluj\"/>";
	var map320 = "<img style=\"border-style:none; max-width:320px; max-height:320px; width:100%;\" src=\"images/map/320x320.png\" alt=\"radiologie dentara cluj, radiografii dentare cluj, medios medical center cluj\"/>";
	var map240 = "<img style=\"border-style:none; max-width:240px; max-height:320px; width:100%;\" src=\"images/map/240x320.png\" alt=\"radiologie dentara cluj, radiografii dentare cluj, medios medical center cluj\"/>";
	
	var bannerID = "banner";
	var mapID = "map";
    var w = window.innerWidth || document.documentElement.clientWidth || documentBody.clientWidth;    
	
	var banner = document.getElementById(bannerID);
	var map = document.getElementById(mapID)
		
    if (w>=1280)
	{
		if (banner)
		{
			banner.innerHTML = banner1920;
		}
		if (map)
		{		
			map.innerHTML = map1920;
		}
	}
    if (w<=1280)
    {
		if (banner)
		{
			banner.innerHTML = banner1280;
		}
		if (map)
		{
			map.innerHTML = map1280;
		}
    }
    if (w<=960)
    {
		if (banner)
		{
			banner.innerHTML = banner960;
		}
		if (map)
		{
			map.innerHTML = map960;
		}
    }
	if (w<=640)
    {
		if (banner)
		{
			banner.innerHTML = banner640;
		}
		if (map)
		{
			map.innerHTML = map640;
		}
    }
	if (w<=480)
    {
		if (banner)
		{
			banner.innerHTML = banner480;
		}
		if (map)
		{
			map.innerHTML = map480;
		}
    }
	if (w<=320)
    {	
		if (banner)
		{
			banner.innerHTML = banner320;
		}
		if (map)
		{
			map.innerHTML = map320;
		}
    }
	if (w<=240)
    {
		if (banner)
		{
			banner.innerHTML = banner240;
		}
		if (map)
		{
			map.innerHTML = map240;
		}
    }
}

function Page_OnLoad() 
{
	var wb = document.getElementById("warning-bar");
	var sectionTag1 = document.getElementById("sectionTag1");
	var sectionTag2 = document.getElementById("sectionTag2");
	var sectionTag3 = document.getElementById("sectionTag3");
	if (wb)
	{
		var mainContent = document.getElementById("main-content");
		var header = document.getElementById("header");
		if (header)
		{
			header.setAttribute('style', 'top:48px;');
		}
		if (mainContent)
		{
			mainContent.setAttribute('style', 'top:128px;');
		}
	
		if (sectionTag1)
		{
			sectionTag1.setAttribute('style', 'height:128px; margin-top:-128px;');
		}
		if (sectionTag2)
		{
			sectionTag2.setAttribute('style', 'height:128px; margin-top:-128px;');
		}
		if (sectionTag3)
		{
			sectionTag3.setAttribute('style', 'height:128px; margin-top:-128px;');
		}
	}
	else	
	{
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

	Page_OnResize();
}
