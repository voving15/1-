$(document).ready(function() {
	
    $('.logo_b').show('drop');
	$('#text1').show('fold',1000);
	$('#text2').delay(1500).show('scale');
	$('#text3').delay(2000).show('scale');
	$('#text4').delay(2500).show('scale');
	$('#scene_two').delay(1500).fadeIn(2000);
	
	$('#scene_two').click(function(){
	$('#text1').hide('drop',1000); 
	$('#text2').delay(500).hide('drop');
	$('#text3').delay(1000).hide('drop');
	$('#text4').delay(1500).hide('drop');
	$('#scene_two').hide('drop');
	$('#text5').delay(1000).show('fold',1500);
	$('#skidka10').delay(1700).show('drop');
	$('#skidka7').delay(2000).fadeIn(2000);
	$('#skidka5').delay(2500).show('scale');
	$('#text6').delay(2000).show('fold',2000);
	$('#skidka').delay(2500).show('fold',2000);
	});
var skidka10 = 0;
var skidka7 = 0;
var skidka5 = 0;
var skidka = 0;
		$('#skidka10').click(function(){
			skidka10 = 10;
			calck();
			$('#skidka10').hide('drop',3000);
			$('#text6').delay(500).hide('fold',2000);
			$('#text7').show('fold',2000);
			
		});
	$('#skidka7').click(function(){
			skidka7=7;
			calck();
			$('#skidka7').effect('fade',3000);
			$('#text6').delay(500).hide('fold',2000);
			$('#text7').show('fold',2000);
		});
	$('#skidka5').click(function(){
			skidka5=5;
			calck();
			$('#skidka5').effect('explode',3000);
			$('#text6').delay(500).hide('fold',2000);
			$('#text7').show('fold',2000);
		});
	function calck(){
			skidka = skidka10+skidka7+skidka5;
			$('#skidka p').text(skidka+'%');
			
			$('#skidka').click(function(){
					
				$('#text5').hide('fold',1000);
	$('#skidka10').delay(1500).hide('drop');
	$('#skidka7').delay(1000).fadeOut(2000);
	$('#skidka5').delay(1500).hide('scale');
	$('#text6').delay(1000).hide('fold',2000);
	$('#text7').delay(1000).hide('fold',2000);
	$('#skidka').fadeOut(2000);
	$('#arrow').delay(1500).show('drop');
	$('#text8').delay(1500).fadeIn(2000);
	
			});
		};
});