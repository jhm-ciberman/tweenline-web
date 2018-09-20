/* 
HEY THERE!! If you are reading this, sorry for using other tween engine like GSAP. I don't use Tweenline for the demo on the 
webpage because it only works on game Maker Studio, so it will be too heavy to load in a webpage for only one example.
If you want to see a REAL world example of Tweenline in action, please check:
	http://ciberman.net/tweenline/demo
*/

$(function () {
	var scr_my_callback = function () {
		$("#demo-output").html("scr_my_callback has been called!");
		outputTween.play(0);
	}
	var tween = TweenMax.to(".demo-box", 1.2, { "x": $(".demo-box").parent().innerWidth() * .7, "rotation": 90, "backgroundColor": "#FF7E00", "yoyo": true, "repeat": 5, "onComplete": scr_my_callback, "paused": true });
	var outputTween = TweenMax.to("#demo-output", .3, { "color": "#FF7E00", "yoyo": true, "repeat": 5, "paused": true });
	$("#demo-animate-btn").click(function () {
		$("#demo-output").html("Playing tween 6 times...");
		tween.play(0);
		outputTween.pause(0);

	})

	var pre = document.getElementsByTagName('pre');
	for (var i = 0; i < pre.length; i++) { 
		hljs.highlightBlock(pre[i]);
	}

	var spynavbar = document.getElementById('spynavbar');
	if (spynavbar) {
		
		if (window.innerWidth > 600) {
			$(spynavbar).affix({
				offset: {
					top: $(spynavbar).offset().top,
					bottom: $('#footer').outerHeight(true)
				}
			}).on("affixed.bs.affix", function () {
				$(spynavbar).attr("style", "");
			});
		}
		
		var aaaa = $('body').scrollspy({ target: '#spynavbar' });
		console.log(aaaa);
	}
	


	$('label.tree-toggler').click(function () {
		$(this).parent().children('ul.tree').toggle(300);
	});

});