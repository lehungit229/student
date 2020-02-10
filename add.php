<!DOCTYPE html>
<html lang="en">
<head>
	<?php require_once 'common/head.php' ?>
</head>
<body>
	<?php require_once 'common/header.php' ?>
	<!-- trang thêm học viên -->
	<div class="block-common add-student">
		<div class="head">
			<div class="title">Thêm mới học viên</div>
		</div>
		<div class="body">
			<div class="form-group">
				<div class="title">Tên</div>
				<div class="form">
					<input name="name" type="text" placeholder="Nguyễn Văn A" autocomplete="off" class="form-common">
				</div>
			</div>

			<div class="form-group">
				<div class="title">Giới tính</div>
				<div class="form">
					<select class="form-common" name="">
                        <option>Nam</option>
                        <option>Nữ</option>
                        <option>Khác</option>
                    </select>
				</div>
			</div>

			<div class="form-group">
				<div class="title">Ngày sinh</div>
				<div class="form">
					<input type="text" placeholder="11/04/1995" autocomplete="off" class="form-common">
				</div>
			</div>

			<div class="form-group">
				<div class="title">Email</div>
				<div class="form">
					<input name="email" type="text" placeholder="@gmail.com" autocomplete="off" class="form-common">
				</div>
			</div>

			<div class="form-group">
				<div class="title">Dân tộc</div>
				<div class="form">
					<input type="text" value="Kinh" autocomplete="off" class="form-common">
				</div>
			</div>

			<div class="form-group">
				<div class="title">CMND</div>
				<div class="form">
					<input name="cmt" type="text" placeholder="6783456789" autocomplete="off" class="form-common">
				</div>
			</div>

			<div class="form-group">
				<div class="title">Chuyên ngành</div>
				<div class="form">
					<input type="text" placeholder="Công nghệ thông tin" autocomplete="off" class="form-common">
				</div>
			</div>

			<div class="form-group">
				<div class="title">Lớp</div>
				<div class="form">
					<input type="text" placeholder="BT123" autocomplete="off" class="form-common">
				</div>
			</div>

			<div class="form-group">
				<div class="title">Số điện thoại</div>
				<div class="form">
					<input name="phone" type="text" placeholder="0999888777" autocomplete="off" class="form-common">
				</div>
			</div>

			<div class="form-group">
				<div class="title">Địa chỉ</div>
				<div class="form">
					<input type="text" placeholder="Trung Kính - Hà Nội" autocomplete="off" class="form-common">
				</div>
			</div>
			<div class="clearfix">
				<button class="btn btn-primary pull-right clearfix js_submit" type="submit">Thêm mới</button>
			</div>
		</div>
	</div>

	<script src="resources/library/js/jquery.js"></script>
	<script src="common/script.js"></script>
</body>
</html>