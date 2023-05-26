

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