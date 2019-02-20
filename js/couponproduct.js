$(function () {
    var mmp = new Mmp();
    mmp.getcoupon();
    mmp.popup();
    mmp.turn();
    mmp.initScroll();
});

function Mmp() {

};
Mmp.prototype = {
    // 用于记录现在显示的图片
    index:0,
    // 记录当前页面优惠券数量,用于判断是否最后一张图片
    couponproducts:0,
    getcoupon: function () {
        var that = this;
        var couponid = this.getQueryString("couponid");
        $.ajax({
            url:"http://localhost:9090/api/getcouponproduct",
            data:{couponid:couponid},
            success:function(data){
                console.log(data);
                that.couponproducts = data.result.length;
                var html = template("tplCouponproduct",data);
                html = html.replace(/&#34;/g,'"');
                html = html.replace(/&#60;/g,'<');
                html = html.replace(/&#62;/g,'>');
                $(".content ul").html(html);
                that.getcouponid(data.result[0].couponId);
            }
        })
    },
    getcouponid:function(id){
        $.ajax({
            url:"http://localhost:9090/api/getcoupon",
            success:function(data){
                for(var i=0;i<data.result.length;i++){
                    if(id == data.result[i].couponId){
                        $("#title").html(data.result[i].couponTitle+"优惠券");
                    }
                }
            }
        });
    },
    popup:function(){
        var that = this;
        $(".content ul").on("tap","li .coupondetail",function(){
            that.index = $(this).data("index");
            $("#popup img").attr("src",$(".coupondetail").eq(that.index).find("img").attr("src"));
            $("#popup").show();

            $("#popup").on("tap",function(){
                $("#popup").hide();
            })
        });
    },
    turn:function(){
        var that = this;
        $(".mui-icon-arrowleft").on("tap",function(e){
            e.stopPropagation();
            if(that.index!=0){
                that.index --;
                $("#popup img").attr("src",$(".coupondetail").eq(that.index).find("img").attr("src"));
            }
        });
        $(".mui-icon-arrowright").on("tap",function(e){
            e.stopPropagation();
            if(that.index!=that.couponproducts){
                that.index ++;
                var main = document.getElementById('main'); 
                main.addEventListener('touchmove', function(e) { 
                    e.preventDefault(); 
                }, false);
                $("#popup img").attr("src",$(".coupondetail").eq(that.index).find("img").attr("src"));
            }
        });
    },
    initScroll: function() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    getQueryString: function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = decodeURI(window.location.search).substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
}