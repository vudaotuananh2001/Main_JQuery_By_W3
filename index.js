$('#input1').focus(function () {
    $(this).css('background-color', 'red')
});
$('#input1').blur(function () {
    $(this).css('background-color', 'green')
});

$('#demoOn').on({

    mouseleave: function () {
        $(this).css('background-color', 'red')
    },
    mouseenter: function () {
        $(this).css('background-color', 'yellow')
    },
    click: function () {
        $(this).css("background-color", "lightblue");
    }
});

$('#btn_Hide_Show').click(function () {
    var $this = $('#hide');
    if ($this.is(':visible')) { // => kiểm tra phần tử có ở trạng thái hiển thị hay không
        $this.hide(1000);
    } else {
        $this.show(1000) // hiển thị
    }
});

$('#btn_fede').click(function () {
    var fede = $('#fede')
    if (fede.is(':visible')) { // => kiểm tra phần tử có ở trạng thái hiển thị hay không
        fede.fadeOut(1000);
    } else {
        fede.fadeIn(1000);  // hiển thị
    }
});

$('#show_slideDown').click(function () {
    var _slideDown = $('#slideDown');
    if (_slideDown.is(':visible')) { // => kiểm tra phần tử có ở trạng thái hiển thị hay không
        _slideDown.slideUp(1000);
    } else {
        _slideDown.slideDown(4000); // hiển thị
    }
});

$('#stop_slideDown').click(function () {
    var _slideDown = $('#slideDown');
    _slideDown.stop();
});

//Traversing - Ancestors 
$('#Traversing-Ancestors').click(function () {
    console.log('các phần tử con: ', $('#f-Ancestors').children());
    console.log('các phần tử con sử dụng find :', $('#son-tung').find('span'));
});

$('#siblings').click(function () {
    // siblings()
    console.log('Các phần tử cùng cấp ', $(this).siblings());
    console.log('lấy ra 1 phần tủ sau phần tử đã chọn: ', $('#f-Ancestors').next()); // next() chỉ lấy được 1
    console.log('các phần tủ sau phần tử đã chọn: ', $('#f-Ancestors').nextAll()); // next() chỉ lấy được 1
    console.log('các phần tử từ fede đến Traversing-Ancestors', $('#fede').nextUntil('#Traversing-Ancestors')); // lấy ra khoảng giữa 2 đầu giá trị
    console.log('phần tử trước prev()', $(this).prev()); // lấy ra 1 phần tử đứng trước
    console.log("lấy ra các từ trước siblings", $(this).prevAll()); // lấy ra tất cả phần tử đứng trước
    console.log('lấy ra các phần từ đứng trước trong đoạn :', $(this).prevUntil('#fede')); // lấy ra tất cả các phần tử trong khoảng
});

//Filtering
$('#btnFillter').click(function () {
    console.log('phần tử đầu tiên ', $('.item').first());
    console.log('phần tử cuối cùng', $('.item').last());
    console.log('Phần tử thứ 3', $('.item').eq(3 - 1));
    console.log('Lọc các phần tử thoả mãn điều kiên filter()', $('.item').filter('.specific-class')); // tồn tại class specific-class
    console.log('not() lấy các phần tử không có specific-class', $('.item').not('.specific-class')); // lọc các item không có specific-class
});

//AJAX
$('#file').click(function () {
    $('#loading-file').load('./data.txt');
    var dataxx = $('#loading-file').load('./data.txt');
    console.log(dataxx);

});


$('#denvau').click(function () { // j viết thương Q viết hoa
    $(this).text('Vì ngày lang thang vẫn còn dài');
});
