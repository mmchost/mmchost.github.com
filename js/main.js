function Page_OnResize()
{
	//data:image/png;base64,
    var banner1920 = "<img style=\"border-style:none; max-width:1920px; max-height:480px; width:100%;\" src=\"images/banner/1920x480.png\"/>";
	var banner1280 = "<img style=\"border-style:none; max-width:1280px; max-height:480px; width:100%;\" src=\"images/banner/1280x480.png\"/>";
	var banner960 = "<img style=\"border-style:none; max-width:960px; max-height:480px; width:100%;\" src=\"images/banner/960x480.png\"/>";
	var banner640 = "<img style=\"border-style:none; max-width:640px; max-height:320px; width:100%;\" src=\"images/banner/640x320.png\"/>";
	var banner480 = "<img style=\"border-style:none; max-width:480px; max-height:320px; width:100%;\" src=\"images/banner/480x320.png\"/>";
	var banner320 = "<img style=\"border-style:none; max-width:320px; max-height:320px; width:100%;\" src=\"images/banner/320x320.png\"/>";
	var banner240 = "<img style=\"border-style:none; max-width:240px; max-height:320px; width:100%;\" src=\"images/banner/240x320.png\"/>";

	var map1920 = "<img style=\"border-style:none; max-width:1920px; max-height:480px; width:100%;\" src=\"images/map/1920x480.png\"/>";
	var map1280 = "<img style=\"border-style:none; max-width:1280px; max-height:480px; width:100%;\" src=\"images/map/1280x480.png\"/>";
	var map960 = "<img style=\"border-style:none; max-width:960px; max-height:480px; width:100%;\" src=\"images/map/960x480.png\"/>";
	var map640 = "<img style=\"border-style:none; max-width:640px; max-height:320px; width:100%;\" src=\"images/map/640x320.png\"/>";
	var map480 = "<img style=\"border-style:none; max-width:480px; max-height:320px; width:100%;\" src=\"images/map/480x320.png\"/>";
	var map320 = "<img style=\"border-style:none; max-width:320px; max-height:320px; width:100%;\" src=\"images/map/320x320.png\"/>";
	var map240 = "<img style=\"border-style:none; max-width:240px; max-height:320px; width:100%;\" src=\"images/map/240x320.png\"/>";
	
	var bannerID = "banner";
	var mapID = "map";
    var w = window.innerWidth || document.documentElement.clientWidth || documentBody.clientWidth;    
	
    if (w>=1280)
	{
		document.getElementById(bannerID).innerHTML = banner1920;
		document.getElementById(mapID).innerHTML = map1920;
	}
    if (w<=1280)
    {
		document.getElementById(bannerID).innerHTML = banner1280;
		document.getElementById(mapID).innerHTML = map1280;
    }
    if (w<=960)
    {
		document.getElementById(bannerID).innerHTML = banner960;
		document.getElementById(mapID).innerHTML = map960;
    }
	if (w<=640)
    {
		document.getElementById(bannerID).innerHTML = banner640;
		document.getElementById(mapID).innerHTML = map640;
    }
	if (w<=480)
    {
		document.getElementById(bannerID).innerHTML = banner480;
		document.getElementById(mapID).innerHTML = map480;
    }
	if (w<=320)
    {
		document.getElementById(bannerID).innerHTML = banner320;
		document.getElementById(mapID).innerHTML = map320;
    }
	if (w<=240)
    {
		document.getElementById(bannerID).innerHTML = banner240;
		document.getElementById(mapID).innerHTML = map240;
    }
}

function Page_OnLoad() 
{
	Page_OnResize();
}