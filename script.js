var object_width = $(window).width() - $('#object').width();

var document_height = $(document).height() - $(window).height();

// Bola

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var field_top = $('#field').position().top - 330;
        var field_bottom = $('#field').position().top + 330;
        if (scroll_position > field_top && scroll_position < field_bottom) {
            var object_position_left = (object_width + 660) * ((scroll_position - field_top) / 660);
            $('#object').css({
                'left': object_position_left - 330
            });
        }
        else if (scroll_position < field_top) {
            $('#object').css({
                'left': '-330px'
            });
        }
        else if (scroll_position > field_bottom) {
            $('#object').css({
                'left': ($(window).width + 330) + 'px'
            });
        }
    });
});

// Cubos

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var field_top = $('#cubes div').position().top - 360;
        var field_bottom = $('#cubes div').position().top + 360;
        if (scroll_position > field_top && scroll_position < field_bottom) {
            var height = scroll_position - field_top;
            var object_position_width = (height * 100) / 360
            $('#cubes div').css({
                'width': object_position_width + '%'
            });
        }
        else if (scroll_position < field_top) {
            $('#cubes div').css({
                'width': '0%'
            });
        }
        else if (scroll_position > field_bottom) {
            $('#cubes div').css({
                'width': '100%'
            });
        }
    });
});

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var field_top = $('#cubes3 div').position().top - ($(window).height() / 2);
        var field_bottom = $('#cubes3 div').position().top + (340);

        if (scroll_position > field_top && scroll_position < field_bottom) {
            var height = scroll_position - field_top;
            var object_position_height = (height * 100) / 170
            $('#cubes3 div').css({
                'height': (100 - object_position_height) + '%'
            });
        }
        else if (scroll_position < field_top) {
            $('#cubes3 div').css({
                'height': '100%'
            });
        }
        else if (scroll_position > field_bottom) {
            $('#cubes3 div').css({
                'height': '50px'
            });
        }
    });
});

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var field_top = $('#cubes2 div').position().top - ($(window).height() / 2);
        var field_bottom = $('#cubes2 div').position().top + (340);
        if (scroll_position > field_top && scroll_position < field_bottom) {
            var height = scroll_position - field_top;
            var object_position_height = (height * 100) / 170
            $('#cubes2 div').css({
                'height': object_position_height + '%'
            });
        }
        else if (scroll_position < field_top) {
            $('#cubes2 div').css({
                'height': '50px'
            });
        }
        else if (scroll_position > field_bottom) {
            $('#cubes2 div').css({
                'height': '100%'
            });
        }
    });
});

// Header

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var field_top = 0;
        var field_bottom = ($(window).height() / 4);
        var ib = 180;

        if (scroll_position > field_top && scroll_position < field_bottom) {
            var object_margin_top = (100 * scroll_position) / field_bottom;
            $('.header-logo').css({
                "margin-bottom": object_margin_top * -1
            })
        }
        else if (scroll_position < field_top) {
            $('.header-logo').css({
                "margin-bottom": '0'
            })
        }
        else if (scroll_position > field_bottom) {
            $('.header-logo').css({
                "margin-bottom": '-100px'
            })
        }

        $('.header-ondas img').each(function (i, onda) {
            if (scroll_position > field_top && scroll_position < field_bottom) {
                var object_position_x = (scroll_position - field_top) * ($(this).width() - $(window).width()) / (field_bottom - field_top);
                var object_position_y = (scroll_position - field_top) * ib / (field_bottom - field_top);

                if (i % 2 == 0) {
                    $(this).css({
                        'left': object_position_x * -1,
                        'bottom': object_position_y
                    })
                }
                else {
                    $(this).css({
                        'right': object_position_x * -1,
                        'bottom': object_position_y
                    });
                }
            }
            else if (scroll_position < field_top) {
                $('.header-ondas .onda1, .header-ondas .onda3, .header-ondas .onda5').css({
                    'left': '0',
                });
                $('.header-ondas .onda2, .header-ondas .onda4, .header-ondas .onda6').css({
                    'right': '0',
                });
            }
            else if (scroll_position > field_bottom) {
                if (i % 2 == 0) {
                    $(this).css({
                        'left': (($(this).width() - $(window).width()) * -1) + 'px'
                    })
                }
                else {
                    $(this).css({
                        'right': (($(this).width() - $(window).width()) * -1) + 'px'
                    });
                }
            }
            ib -= 36;
        });
    });
});

$(window).scroll(function () {
    var scroll_position = $(window).scrollTop();
    var field_top = $('.ondas2').position().top - ($(window).height() / 2);
    var field_bottom = $('.ondas2').position().top;
    var ib = 180;

    if (scroll_position > field_top && scroll_position < field_bottom) {
        var pos = scroll_position - field_top;
        var area = field_bottom - field_top;
        console.log(pos, area);
        var object_margin_top = (150 * pos) / ($(window).height() / 2);
        $('.sol').css({
            "top": object_margin_top - 50
        })
    }
    else if (scroll_position < field_top) {
        $('.sol').css({
            "top": '-50px'
        })
    }
    else if (scroll_position > field_bottom) {
        $('.sol').css({
            "top": '100px'
        })
    }
})