document.querySelector('#btnTinhTien').onclick = function () {
    //Lấy dữ liệu người dùng nhập vào
    var tongTienThanhToan = document.querySelector('#txtTongTien').value;
    var phanTramTip = document.querySelector('#phanTramTip').value;
    var share = document.querySelector('#soNguoiShare').value;
    console.log(tongTienThanhToan);
    //Tính toán và in ra giao diện

    if (tongTienThanhToan === "" && phanTramTip === "" && share === "") {
        document.querySelector('#divTongTien').style.display = 'block';
        document.querySelector('#divShare').style.display = 'block';
        document.querySelector('#divPhanTramTip').style.display = 'block';
    }
    else if (tongTienThanhToan === "" && phanTramTip === "" && share != "") {
        document.querySelector('#divPhanTramTip').style.display = 'block';
        document.querySelector('#divTongTien').style.display = 'block';
        document.querySelector('#divShare').style.display = 'none';
    }
    else if (tongTienThanhToan === "" && phanTramTip != "" && share != "") {
        document.querySelector('#divTongTien').style.display = 'block';
        document.querySelector('#divShare').style.display = 'none';
        document.querySelector('#divPhanTramTip').style.display = 'none';
    }
    else if (tongTienThanhToan != "" && phanTramTip === "" && share === "") {
        document.querySelector('#divPhanTramTip').style.display = 'block';
        document.querySelector('#divTongTien').style.display = 'none';
        document.querySelector('#divShare').style.display = 'block';
    }
    else if (tongTienThanhToan != "" && phanTramTip != "" && share === "") {
        document.querySelector('#divShare').style.display = 'block';
        document.querySelector('#divTongTien').style.display = 'none';
        document.querySelector('#divPhanTramTip').style.display = 'none';
    }
    else if (tongTienThanhToan === "" && phanTramTip != "" && share === "") {
        document.querySelector('#divPhanTramTip').style.display = 'none';
        document.querySelector('#divTongTien').style.display = 'block';
        document.querySelector('#divShare').style.display = 'block';
    }
    else if (tongTienThanhToan != "" && phanTramTip != "" && share != "") {
        var tienTip = (Number(tongTienThanhToan * phanTramTip / 100) / share);
        document.querySelector('#tongTienTip').innerHTML = tienTip.toLocaleString() + '$';
        document.querySelector('#divTongTien').style.display = 'none';
        document.querySelector('#divShare').style.display = 'none';
        document.querySelector('#divPhanTramTip').style.display = 'none';
    }
}