$(document).ready(function(){$("#fullpage").fullpage({anchors:["page1","page2","featuredWorks","page4","page5"],sectionsColor:["#000","orange","#000","#ADD8E6","#222"],loopHorizontal:!1,resize:!0,css3:!0,easing:"easeInOutCubic",easingcss3:"ease",fitToSection:!0,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,navigation:!0,afterLoad:function(d,e){$(this);1==e&&c(),2==e&&b(),3==e&&a()}}),$.fn.fullpage.setAutoScrolling(!0),$(".open-menu").on("click",function(){$.fn.fullpage.setAllowScrolling(!1)}),$(".close-menu").on("click",function(){$.fn.fullpage.setAllowScrolling(!0)}),$(".homePageFeaturedOne").mouseover(function(){TweenMax.to(".homePageFeaturedOne",1,{x:50,ease:Power1.easeOut,zIndex:10}),TweenMax.to(".homePageFeaturedTwo , .homePageFeaturedThree",1,{padding:"2%",opacity:.5})}).mouseleave(function(){TweenMax.to(".homePageFeaturedOne",2,{x:0,ease:Power1.easeOut,zIndex:0}),TweenMax.to(".homePageFeaturedTwo , .homePageFeaturedThree ",1,{padding:"0%",opacity:1}),$(this).css("margin-left","auto").delay(2e3)}),$(".homePageFeaturedTwo").mouseover(function(){TweenMax.to(".homePageFeaturedTwo",1,{y:"-50",ease:Power1.easeOut,zIndex:10}),TweenMax.to(".homePageFeaturedOne , .homePageFeaturedThree",1,{padding:"2%",opacity:.5})}).mouseleave(function(){TweenMax.to(".homePageFeaturedTwo",2,{y:0,ease:Power1.easeOut,zIndex:0}),TweenMax.to(".homePageFeaturedOne , .homePageFeaturedThree ",1,{padding:"0%",opacity:1}),$(this).css("margin-left","auto").delay(2e3)}),$(".homePageFeaturedThree").mouseover(function(){TweenMax.to(".homePageFeaturedThree",1,{x:"-50",ease:Power1.easeOut,zIndex:10}),TweenMax.to(".homePageFeaturedOne , .homePageFeaturedTwo",1,{padding:"2%",opacity:.5})}).mouseleave(function(){TweenMax.to(".homePageFeaturedThree",2,{x:0,ease:Power1.easeOut,zIndex:0}),TweenMax.to(".homePageFeaturedOne , .homePageFeaturedTwo",1,{padding:"0%",opacity:1}),$(this).css("margin-left","auto").delay(2e3)});var a=function(){var a=$(".homePageFeaturedOne"),b=$(".homePageFeaturedTwo"),c=$(".homePageFeaturedThree");homePageSectionThreeImgs=$("#sectionThree .displayFlex"),TweenMax.to(a,2,{x:0,ease:Power2.easeInOut}),TweenMax.to(b,5,{y:0,ease:Power4.easeOut}),TweenMax.to(c,3,{x:0,ease:Power4.easeOut})},b=function(){var a=$(".homePageTwoHexTriangle"),b=$(".homePageTwoTitleBullet"),c=($(".homePageTwoBulletLines"),$(".homePageTwoSmallHeaderHexOne"),$(".homePageTwoSmallHeaderHexTwo"),$(".homePageTwoSmallHeaderHexThree"),$(".sectionTwoAnimations h2")),d=new TimelineMax;d.add(TweenMax.to(a,1,{rotation:360,ease:Power2.easeOut})),d.add(TweenMax.to(b,1,{rotation:180,ease:Power2.easeOut})),d.add(TweenMax.to(c,2,{x:0,opacity:1,ease:Power2.easeOut}))},c=($(".menuButton"),function(){var a=document.createElement("audio"),b="_/audio/praiseYou.mp3";document.body.appendChild(a),a.id="musicPlayer",a.src=b,a.play()})});