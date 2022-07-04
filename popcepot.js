<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/vyantagc/vyantagc/popme-style.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>

<script type="text/javascript">
//<![CDATA[
    var go_current     	= window.location.href;
    var reff     		= document.referrer;
    

    function rChoice(arr) {
	    return arr[Math.floor(arr.length * Math.random())];
	}

    var direct_link_ads = rChoice([
                            "https://captiveimpossibleimport.com/n7sqp6kh?key=e6dd02bc5dbf461b97a9da08df84d31c",
                            "https://captiveimpossibleimport.com/yqgre28v37?key=35e142a862ac90e9f5adbbc9508f3252",
			                "https://captiveimpossibleimport.com/razghgae?key=2446a4582c544b26b2b0aa5d06de9853",
                        ]);

    var ars             = rChoice([
                            "#YOUR_ARSAE_SERVER_OR_OTHER_DOMAIN_1",
                            "#YOUR_ARSAE_SERVER_OR_OTHER_DOMAIN_2",
                        ]);


    var dir_type        = "refresh"; //refresh, domain, path, arsae


    if(dir_type == 'refresh')
    {
        //REFRESH
        console.log('refresh..');
    }
    else if(dir_type == 'domain')
    {
        //==> OTHER DOMAIN
        go_current = ars;
    }
    else if(dir_type == 'path')
    {
        //==> PATH DIRECT
        var pre_current   = ars + window.location.pathname;
        go_current        = pre_current.includes("?")?pre_current+"&c=1":pre_current+"?c=1";
    }
    else if(dir_type == 'arsae')
    {
        //==> ARSAE DIRECT
        go_current            = ars + '/?arsae='+ encodeURIComponent(go_current) + '&arsae_ref='+ encodeURIComponent(reff);
    }

//]]>
</script>

<script  src="https://cdn.jsdelivr.net/gh/vyantagc/vyantagc/popme-double-ads4.js" ></script>