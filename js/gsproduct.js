$(function(){
    var manman = new Manman();
    manman.getgsshop();
    manman.getgsshoparea();
    manman.getgsproduct();
    
})

var Manman = function(){

};

Manman.prototype = {
    
    //商铺名称的渲染
    getgsshop:function(){
        var that = this;
        $('#nav .mui-row .jd').on('tap',function(){
          if($('#nav .moreSlect').css('display') == 'none'){
            $('#nav .moreSlect').css('display','block');
            $('#nav .jd i').removeClass().addClass('fa fa-caret-up');
          }else{
            $('#nav .moreSlect').css('display','none');
            $('#nav .jd i').removeClass().addClass('fa fa-caret-down');
          }
            $.ajax({
                url:'http://localhost:9090/api/getgsshop',
                success:function(data){
                   var html = template('selectMoreTpl',data);
                //    console.log(data);
                   $('#nav .moreSlect ul').html(html); 
                }
            });  
        });
    },
    //地区的渲染
    getgsshoparea:function(){
        $('#nav .mui-row .area').on('tap',function(){
            if($('#nav .moreSlect').css('display') == 'none'){
                $('#nav .moreSlect').css('display','block');
                $('#nav .area i').removeClass().addClass('fa fa-caret-up');
              }else{
                $('#nav .moreSlect').css('display','none');
                $('#nav .area i').removeClass().addClass('fa fa-caret-down');
              }
             $.ajax({
               url:'http://localhost:9090/api/getgsshoparea',
               success:function(data){
                  console.log(data);
                var html = template('getShopAreaTpl',data);
                $('#nav .moreSlect ul').html(html); 
                  
               }
             });  
        });
    },
    //主体商品渲染
    getgsproduct:function(){
        $('#nav .moreSlect').on('tap','ul li',function(){
          $('#nav a.jd').data('id',$(this).data('id'));
          $('#nav a.area').data('id',$(this).data('id'));
          var shopid = $('#nav a.jd').data('id');
          var areaid = $('#nav a.area').data('id');
        //   var shopName=  $(this).children()[0].innerHTML;
        // //   console.log(shopName);
        //   $('#nav .jd span')[0].innerHTML = shopName;
         $.ajax({
            url:'http://localhost:9090/api/getgsproduct',
            data:{shopid:shopid,areaid:areaid},
            success:function(data){
                console.log(data);
                var html = template('productListTpl',data);
                $('#main .mui-row').html(html);
            }
         });

        });
   
    },
  
}