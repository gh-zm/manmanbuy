$(function() {
    const dataId = document.querySelectorAll(".item .title")
    const list = document.querySelectorAll(".item .list")
    dataId.forEach((element,index)=> {
        element.setAttribute('titleId',index)
    })
    const arrData = []
    $.get("http://47.52.242.30:9090/api/getbrandtitle",(res) => {
        dataId.forEach((element,index)=> {
            res.result.forEach((result)=> {
                const title = element.getAttribute('titleId')
                if(+title == result.categoryId) {
                   // const html = template('listTpl',result)
                   var a = document.createElement('a')
                   // a.dataset.brandTitleId = result.brandTitleId
                   a.innerHTML = result.brandTitle
                   a.href="brand-content.html?brandTitleId="+result.brandTitleId
                   list[index].appendChild(a)
                }
            })
        })
    })
    // $.get('http://47.52.242.30:9090/api/getcategorytitle',(res)=>{
    //     console.log(res);
        
    // })
    // document.querySelector(".items").addEventListener('class',(e)=>{
    //     e.target.classList.add("active")
    // })
    // // $.get("http://47.52.242.30:9090/api/getbrand",{brandtitleid:1},(res)=> {
    // // })
    // $.get("http://47.52.242.30:9090/api/getcategorybyid",{categoryid:1},(res)=> {
    // })
})