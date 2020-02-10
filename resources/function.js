$(document).ready(function() {
	var wd_width = $(window).width();
	
	//Tăng, giảm số lượng sản phẩm đặt mua
	if($('.augment')) {
		$('.augment').click(function() {
			var $_input = $(this).parent().find('#quantity');
			var quantity = parseInt($_input.val());
			if(quantity <= 1){
				quantity = 1;
			}else {
				quantity -= 1;
			}
			$_input.val(quantity);
		});
	}
	if($('.abatement')) {
		$('.abatement').click(function() {
			var $_input = $(this).parent().find('#quantity');
			var quantity = parseInt($_input.val());
			quantity += 1;
			$_input.val(quantity);
		});
	}

	//Product tab
	if($('.tabs-anchor')) {
		$('.tabs-anchor li a').click(function() {
			var tab_id = $(this).attr('href');
			$('html,body').animate({scrollTop: $(tab_id).offset().top - 50},500)
		});
	}

    	$(window).scroll(function() {
    		if($(this).scrollTop() > 50) {
    			$('.mobile-filter-bar').show();
    		}else {
    			$('.mobile-filter-bar').hide();
    		}
    	});
    }
});

$(document).ready(function() {
	$('.cart-panel .input-check-label').click(function() {
		$(this).parents('.check-box').find('.input-check').trigger('click');
	});
});

$(window).scroll(function() {
	if($(this).scrollTop() > 50){
		$('.hd-lower').addClass('fix');
	}else{
		$('.hd-lower').removeClass('fix');
		
	}
});

$(document).ready(function(){
	$(document).on('click','.preview',function(){
			var _this = $(this);
			var id = _this.attr('data-id');
			var formURL = 'products/ajax/products/preview';
			$('.filter-list').html('<div class="uk-text-center"><img class="position:absolute;left:50%;top:50%;" src="templates/frontend/resources/img/ripple.gif"  /></div>');
			$.post(formURL, {
				id: id,},
				function(data){
					var json = JSON.parse(data);
					var preview = UIkit.modal("#my-view-now");
					$('#my-view-now .box-panel').html('').html(json.html);
					preview.show()
				});
			return false;
		});
	
});
