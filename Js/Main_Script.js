$(document).ready(function(){         //htm elements and everything will load first
  


		const sr = ScrollReveal ({
			distance: '65px',
			duration: 2600,
			delay: 350,
			reset: false

		});

		

		sr.reveal('.NameStyle, .header_text',{delay:250, origin:'left'});


		sr.reveal('.NameCaption, .about-info, .Title', {delay:200, origin:'top'});
		sr.reveal('.carousel-inner, .section-header', {delay:200, origin:'top'});
		sr.reveal('.Position',{delay:300, origin:'right'});
		sr.reveal('.Position, .About-image' ,{delay:500, origin:'left'});

		sr.reveal('.Service-bg-image1',{delay:300, origin:'bottom'});
		sr.reveal('.Service-bg-image2',{delay:550, origin:'bottom'});
		sr.reveal('.Service-bg-image3',{delay:600, origin:'bottom'});

        sr.reveal('.card-body',{delay:500, origin:'bottom'});

		sr.reveal('#card-body1',{delay:150, origin:'bottom'});
		sr.reveal('#card-body2',{delay:350, origin:'bottom'});
		sr.reveal('#card-body3',{delay:550, origin:'bottom'});

		sr.reveal('.List-of-Certificate' ,{delay:150, origin:'left'});
		sr.reveal('.Course1' ,{delay:250, origin:'left'});
		sr.reveal('.Schoolname1',{delay:300, origin:'right'});
        sr.reveal('.Course2' ,{delay:350, origin:'left'});
		sr.reveal('.Schoolname2',{delay:400, origin:'right'});
		sr.reveal('.Course3' ,{delay:450, origin:'left'});
		sr.reveal('.Schoolname3',{delay:500, origin:'right'});
		sr.reveal('.Course4' ,{delay:550, origin:'left'});
		sr.reveal('.Schoolname4',{delay:600, origin:'right'});
		
		sr.reveal('.FormInquiry, .Msg-Ing',{delay:250, origin:'right'});
		sr.reveal('.left',{delay:250, origin:'left'});



});


