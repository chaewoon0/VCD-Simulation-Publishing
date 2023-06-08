

$('.video_list_top_btn').click(function () {

    $(this).toggleClass('fold');
    $('.video_list_area').slideToggle(400);
});

$('.filter_dropdown .dropdown_btn').click(function () {

    if($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).siblings('.filter_dropdown_content').removeClass('active');
    } else {
        $(this).closest('.filter_dropdown').siblings('.filter_dropdown').find('.dropdown_btn').removeClass('active');
        $(this).closest('.filter_dropdown').siblings('.filter_dropdown').find('.filter_dropdown_content').removeClass('active');

        $(this).addClass('active');
        $(this).siblings('.filter_dropdown_content').addClass('active');
    }
});

$(document).click(function(e) {
	if(!$(e.target).is('.dropdown_btn.active * , .dropdown_btn.active , .filter_dropdown_content.active * , .filter_dropdown_content.active')) {
		$('.dropdown_btn.active').removeClass('active');
		$('.filter_dropdown_content.active').removeClass('active');
	}
});

$('.filter_dropdown .filter_dropdown_item').click(function () {

    var content = $(this).text();
    var dropdown = $(this).closest('.filter_dropdown_content');
    var dropdownBtn = dropdown.siblings('.dropdown_btn');
    var valueText = dropdownBtn.find('.filter_value_valueText');

    if($(this).hasClass('selected')) {
        dropdown.removeClass('active');
        dropdownBtn.removeClass('active');
    } else {
        $(this).siblings('.filter_dropdown_item').removeClass('selected');
        $(this).addClass('selected');
        valueText.removeClass('hidden');
        valueText.text(content);
        dropdown.removeClass('active');
        dropdownBtn.removeClass('active');
        dropdownBtn.addClass('selected');
    }
});

$(document).ready(function () {
    const clock = document.querySelector("#clock")

    function getClock() {
        const date = new Date();
        const year = String(date.getFullYear());
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const min = String(date.getMinutes()).padStart(2, "0");
        const sec = String(date.getSeconds()).padStart(2, "0");
        clock.innerText = `${year}-${month}-${day} ${hours}:${min}:${sec}`;
    }

    getClock();
    setInterval(getClock, 1000);
});


$('.tab_list .tab_item').click(function () {

    $('.tab_list .tab_item').removeClass('active');
    $(this).addClass('active');
});



$(function () {
    $('.video_list .video_item').draggable({
        revert: 'invalid',
        scroll: false,
        zIndex: 100,
        helper: 'clone',
        start: function(){
            var itemWidth = $(this).outerWidth();

            $(this).css('opacity',0);
            $('.ui-draggable-dragging').css('width',itemWidth);
        },
        stop: function(){
            $(this).css('opacity',1);
        }
    });

    $("#droppable").droppable({
        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function (event, ui) {
            var dataIndexNumber = ui.draggable.attr('data-index-number');
            var dataThumbSrc = ui.draggable.attr('data-thumb-src');
            var dataName = ui.draggable.attr('data-name');
            var dataVideoTime = ui.draggable.attr('data-video-time');
            var dataSearchTime = ui.draggable.attr('data-search-time');
            var dataNote = ui.draggable.attr('data-note');
            var dataState = ui.draggable.attr('data-state');
            var state0 = ('<div class="state_wrap state_0"><svg width="26" height="26" fill="currentColor" viewBox="0 0 26 26"><path d="m5.743 13.077 5.491 5.491 9.014-9.014-1.414-1.414-7.6 7.6-4.077-4.077-1.414 1.414Z"/><path d="M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13 13-5.82 13-13S20.18 0 13 0ZM2 13C2 6.925 6.925 2 13 2s11 4.925 11 11-4.925 11-11 11S2 19.075 2 13Z"/></svg><span>분석 완료</span></div>');
            var state1 = ('<div class="state_wrap state_1"><svg width="26" height="26" fill="currentColor" viewBox="0 0 26 26"><path d="M8.985 18.429 13 14.414l4.015 4.015 1.414-1.414L14.414 13l4.016-4.015-1.415-1.414L13 11.586 8.985 7.571 7.571 8.985 11.586 13l-4.015 4.015 1.414 1.414Z"/><path d="M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13 13-5.82 13-13S20.18 0 13 0ZM2 13C2 6.925 6.925 2 13 2s11 4.925 11 11-4.925 11-11 11S2 19.075 2 13Z"/></svg><span>분석 실패</span></div>');
            var state2 = ('<div class="state_wrap"><svg width="26" height="26" fill="#2380EA" viewBox="0 0 27 26"><path d="M25.993 14.622C25.185 21.11 19.62 26 13.045 26 5.852 26 0 20.169 0 13S5.852 0 13.045 0c2.855 0 5.595.936 7.827 2.618V1.114C20.872.5 21.372 0 21.99 0c.617 0 1.118.5 1.118 1.114v4.532c0 .615-.5 1.114-1.118 1.114h-4.473c-.617 0-1.118-.5-1.118-1.114 0-.615.501-1.115 1.118-1.115h2.171a10.75 10.75 0 0 0-6.643-2.302C7.085 2.229 2.236 7.06 2.236 13s4.848 10.771 10.809 10.771c5.446 0 10.059-4.051 10.728-9.422a1.108 1.108 0 0 1 1.248-.969c.613.076 1.048.632.972 1.242Z"/></svg></div>');

            let state = (dataState == 0) ? state0 :
                (dataState == 1) ? state1 :
                (dataState == 2) ? state2 :
                'null';

            var tableRow = ('<div class="table_row"><div class="table_cell col_1"><span>' + dataIndexNumber + '</span></div><div class="table_cell col_5"><img class="thumbnail" src="' + dataThumbSrc + '" alt=""></div><div class="table_cell col_auto"><span>' + dataName + '</span></div><div class="table_cell col_2"><span>' + dataVideoTime + '</span></div><div class="table_cell col_3"><span>' + dataSearchTime +'</span></div><div class="table_cell col_3"><span>' + dataNote + '</span></div><div class="table_cell col_2">' + state + '</div></div>');

            $(this).prepend(tableRow);
            ui.draggable.remove();
        }
    });
});


$('.nav-fold-btn').click(function () {

    $('.vcd-nav').toggleClass('fold');
});