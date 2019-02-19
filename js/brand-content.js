$(function() {
    const v =  GetQueryString()
    $.get('http://47.52.242.30:9090/api/getbrand',{brandtitleid:v['brandTitleId']},(res)=> {
        const html = template("brandTitleTpl",res)
        document.querySelector('#itmes').innerHTML = html
    })
    $.get('http://47.52.242.30:9090/api/getbrandproductlist',{brandtitleid:v['brandTitleId']},(res)=> {
        console.log(v,res)
        const html = template("brandTitle2Tpl",res)
        document.querySelector('#itmes2').innerHTML = html
    })
    // $.get('http://47.52.242.30:9090/api/getproductcom',)

    mui.init({
        swipeBack: false
    });
    (function($) {
        $('.mui-scroll-wrapper').scroll({
            indicators: true //是否显示滚动条
            
        });
        var html2 = '<ul class="mui-table-view"><li class="mui-table-view-cell">第二个选项卡子项-1</li><li class="mui-table-view-cell">第二个选项卡子项-2</li><li class="mui-table-view-cell">第二个选项卡子项-3</li><li class="mui-table-view-cell">第二个选项卡子项-4</li><li class="mui-table-view-cell">第二个选项卡子项-5</li></ul>';
        var html3 = '<ul class="mui-table-view"><li class="mui-table-view-cell">第三个选项卡子项-1</li><li class="mui-table-view-cell">第三个选项卡子项-2</li><li class="mui-table-view-cell">第三个选项卡子项-3</li><li class="mui-table-view-cell">第三个选项卡子项-4</li><li class="mui-table-view-cell">第三个选项卡子项-5</li></ul>';
        var item2 = document.getElementById('item2mobile');
        var item3 = document.getElementById('item3mobile');
        // document.getElementById('slider').addEventListener('slide', function(e) {
        //     if (e.detail.slideNumber === 1) {
        //         if (item2.querySelector('.mui-loading')) {
        //             setTimeout(function() {
        //                 item2.querySelector('.mui-scroll').innerHTML = html2;
        //             }, 500);
        //         }
        //     } else if (e.detail.slideNumber === 2) {
        //         if (item3.querySelector('.mui-loading')) {
        //             setTimeout(function() {
        //                 item3.querySelector('.mui-scroll').innerHTML = html3;
        //             }, 500);
        //         }
        //     }
        // });
        var sliderSegmentedControl = document.getElementById('sliderSegmentedControl');
        $('.mui-input-group').on('change', 'input', function() {
            passive: false 
            if (this.checked) {
                sliderSegmentedControl.className = 'mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-segmented-control-' + this.value;
                //force repaint
                sliderProgressBar.setAttribute('style', sliderProgressBar.getAttribute('style'));
            }
        });
    })(mui);
    
})
function GetQueryString() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] =parseInt(unescape(strs[i].split("=")[1])) 
        }
    }
    return theRequest;
}
