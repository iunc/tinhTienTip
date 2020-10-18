document.querySelector('#btnTinhTien').onclick = function () {
    //Lấy dữ liệu người dùng nhập vào
    var tongTienThanhToan = document.querySelector('#txtTongTien').value;
    var phanTramTip = document.querySelector('#phanTramTip').value;
    var share = document.querySelector('#soNguoiShare').value;

    //Tính toán
    var tienTip = (Number(tongTienThanhToan * phanTramTip / 100) / share);

    //In ra giao diện
    document.querySelector('#tongTienTip').innerHTML = tienTip.toLocaleString() + '$';
}