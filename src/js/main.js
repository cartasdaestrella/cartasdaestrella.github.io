var _____WB$wombat$assign$function_____ = function (name) { return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function (obj) { this.__WB_source = obj; return this; } }
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    function funcaoCallback(json) {
        var videos = json.items; //array com os vídeos
        var youtubeUrl = 'https://www.youtube.com/watch?v='; //padrão de URL do YouTube
        var output_html = "";
        for (i = 0; i < videos.length; i++) {
            output_html += "<div class=\"image-youtube col-12 col-lg-4 text-center\">";
            output_html += "<a target=\"_blank\" href=\"" + youtubeUrl + videos[i].id.videoId + "\">";
            output_html += "<div class=\"img\">";
            output_html += "<img src=\"" + videos[i].snippet.thumbnails.medium.url + "\" width=\""
                + videos[i].snippet.thumbnails.medium.width + "\" height=\""
                + videos[i].snippet.thumbnails.medium.height + "\"/>";
            output_html += "<i class=\"fa fa-youtube-play\"></i>";
            output_html += "</div>";
            output_html += "<div class=\"title\">" + videos[i].snippet.title.substr(0, 70) + "</div>";
            output_html += "</a>";
            output_html += "</div>";
            //output_html += videos[i].snippet.title.substr(0, 70);
            //output_html += "<p>";
            //output_html += videos[i].snippet.description.substr(0, 90);
            //output_html += "</p>";
            //output_html += "</div>";
        }
        document.getElementById("container-youtube").innerHTML = output_html;
    }

}