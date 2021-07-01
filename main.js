// main.js
$(function(){
  // 이미지, 배경 세팅값
  var titleData = [
    {
      imgUrl: 'images/img1.png',
      bgUrl: 'images/shrimp.png'
    },
    {
      imgUrl: 'images/img2.png',
      bgUrl: 'images/bacon.png'
    },
    {
      imgUrl: 'images/img3.png',
      bgUrl: 'images/cheeze.png'
    },
    {
      imgUrl: 'images/img4.png',
      bgUrl: 'images/guinness.png'
    },
  ];

  $('.pager > ul > li').eq(0).click(function(){
   
    $('figure img')
      .attr('src',  titleData[0].imgUrl);

    $('#title figure').css('background-image', `url(${titleData[0].bgUrl})`);
    console.log(titleData[0].bgUrl)
  });

  $('.pager > ul > li').eq(1).click(function(){
    $('figure img')
      .attr('src',  titleData[1].imgUrl);
    $('#title figure').css('background-image', `url(${titleData[1].bgUrl})`);  
    console.log(titleData[0].bgUrl)
  });

  $('.pager > ul > li').eq(2).click(function(){
    $('figure img')
      .attr('src',  titleData[2].imgUrl);
      $('#title figure').css('background-image', `url(${titleData[2].bgUrl})`);    
  });

  $('.pager > ul > li').eq(3).click(function(){
    $('figure img')
      .attr('src',  titleData[3].imgUrl);
      $('#title figure').css('background-image', `url(${titleData[3].bgUrl})`);    
  });


})