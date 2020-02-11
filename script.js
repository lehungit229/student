$(document).ready(function() {

	// Khi thực hiện gửi dữ liệu
	$(document).on('click','.js_submit', function(){
		clear_noti() 

		// kiểm tra định dạng tên
		let name = $('.add-student input[name="name"]').val();
		check_minlength('name', name, 6)
		check_null('name', name) 

		// kiểm tra định dạng email
		let email = $('.add-student input[name="email"]').val();
		check_mail('email', email)
		check_null('email', email)

		// kiểm tra định dạng chứng minh thư
		let cmt = $('.add-student input[name="cmt"]').val();
		check_int('cmt', cmt) 
		check_null('cmt', cmt)

		// kiểm tra định dạng số điện thoại
		let phone = $('.add-student input[name="phone"]').val();
		check_int('phone', phone) 
	});

});

// __________________________ VALIDATE DỮ LIỆU _______________________________
// kiểm tra định dang email
function check_mail(input, val){
	let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let is_email=re.test(val);
	if(is_email){
		noti(input)
	}else{
		noti(input, false, '* Email không đúng định dạng')
	}
}

// kiểm tra độ dài tối thiểu
function check_minlength(input, val, number){
	if (val.length < number){
		noti(input, false, '* Trường phải có ít nhất '+number+' kí tự')
	}else{
        noti(input)
	}
}

// kiểm tra độ dài tối thiểu
function check_maxlength(input, val, number){
	if (val.length > number){
		noti(input, false, '* Trường phải không được quá '+number+' kí tự')
	}else{
        noti(input)
	}
}

// kiểm tra định dạng số
function check_int(input, val){
	console.log(123)
	if(Math.floor(val) == val && $.isNumeric(val)){
		noti(input)
	}else{
		noti(input, false, '* Trường này phải là kiểu số')
	}
}

// kiểm tra rỗng
function check_null(input, val){
	if(val.trim() == ''){
		noti(input, false, '* Trường này không được để trống')
	}else{
		noti(input)
	}
}

// Xuất ra câu thông báo
function noti(input, boolean = true, text = ''){
	let tex111 = '<div class="error js_noti color-danger">'+text+'</div>';
	if(!boolean){
		$('.add-student input[name="'+input+'"]').parents('.form').after(tex111)
	}
}

// Xóa tất cả câu thông báo
function clear_noti(input, boolean = true, text = ''){
	$('.js_noti').remove('')
}
// __________________________ END VALIDATE DỮ LIỆU _______________________________