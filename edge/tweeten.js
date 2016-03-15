$.ajax({
   url: "http://tweeten.xyz/updates/tweeten_updates.json",
   dataType: "text",
   success: function(data) {

       //data downloaded so we call parseJSON function
       //and pass downloaded data
       var json = $.parseJSON(data);
       //now json variable contains data in json format
       //let's display a few items
       var latestbuild = json.beta.title
       var latestbuild = latestbuild.replace("Tweeten", "");
       $('.latestbuild').append(latestbuild);
       $('.releasedate').append(json.beta.publish_date);
       var _href = $(".downloadlink32").attr("href");
       $(".downloadlink32").attr("href", _href + json.beta.download_url + "/tweeten-win32-ia32.exe");
       var _href = $(".downloadlink64").attr("href");
       $(".downloadlink64").attr("href", _href + json.beta.download_url + "/tweeten-win32-x64.exe");
   }
});
