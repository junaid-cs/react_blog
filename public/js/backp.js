
(function () {
    "use strict";
    grecaptcha.ready(function () {
        grecaptcha.execute("6LcyxTodAAAAAJSXzxAaXiwAEVwXJXukyh2RMIuM", {
            action: 'homepage'
        }).then(function (token) {
            if (document.getElementById('gcaptcha_token') != null) {
                document.getElementById('gcaptcha_token').value = token;
            }
        });
    });

})(jQuery);




$('[data-toggle="tooltip"]').tooltip({
    'placement': 'top',
    'color': 'green'
});


// < type="text/javascript">
(function ($) {
    "use strict"
    $(document).ready(function () {
        $('.load-ajax-data').hide();
        $(document).on('click', '.list-category', function (e) {
            e.preventDefault();
            let el = $(this);
            var id = $(this).data('id');

            $.ajax({

                url: "https://bytesed.com/laravel/intoday/blog/get/blog/by/ajax",
                type: 'get',
                data: {
                    id: id
                },

                beforeSend: function () {
                    $('.load-ajax-data').show();
                },
                success: function (data) {
                    $('.load-ajax-data').hide();
                    $('.home-page-ajax-news-show').html(data.markup);
                }

            });


        });

        $('#frontend_darkmode').on('click', function () {
            var el = $(this)

            var mode = el.data('mode');


            $.ajax({
                type: 'GET',
                url: 'https://bytesed.com/laravel/intoday/dark-mode-toggle',
                data: {
                    mode: mode
                },
                success: function () {
                    location.reload();
                },
                error: function () {}
            });
        });
        $(document).on('change', '#langchange', function (e) {
            $.ajax({
                url: "https://bytesed.com/laravel/intoday/lang",
                type: "GET",
                data: {
                    'lang': $(this).val()
                },
                success: function (data) {
                    location.reload();
                }
            })
        });
        $(document).on('submit', '.custom-form-builder-form', function (e) {
            e.preventDefault();
            var btn = $('#contact_form_btn');
            var form = $(this);
            var formID = form.attr('id');
            var msgContainer = form.find('.error-message');
            var formSelector = document.getElementById(formID);
            var formData = new FormData(formSelector);
            msgContainer.html('');
            $.ajax({
                url: "https://bytesed.com/laravel/intoday/submit-custom-form",
                type: "POST",
                headers: {
                    'X-CSRF-TOKEN': "DeCAwJEngpcDmSODy8LSjGqWCEQIzrJsLVEZeWgY",
                },
                beforeSend: function () {
                    // form.find('.ajax-loading-wrap').addClass('show').removeClass('hide');
                    btn.html(
                        '<i class="fas fa-spinner fa-spin mr-1"></i> Submitting..'
                    );
                },
                processData: false,
                contentType: false,
                data: formData,
                success: function (data) {
                    form.find('.ajax-loading-wrap').removeClass('show')
                        .addClass('hide');
                    msgContainer.html('<div class="alert alert-' + data.type +
                        '">' + data.msg + '</div>');
                    btn.text('Submit Message');
                },
                error: function (data) {
                    form.find('.ajax-loading-wrap').removeClass('show')
                        .addClass('hide');
                    var errors = data.responseJSON.errors;
                    var markup = '<ul class="alert alert-danger">';
                    $.each(errors, function (index, value) {
                        markup += '<li>' + value + '</li>';
                    })
                    markup += '</ul>';
                    msgContainer.html(markup);
                    btn.text('Submit Message');
                }
            });
        });
        //Poll Voting Code
        $(document).on('change', '.poll_radio', function () {
            var vote_val = $(this).val();
            $('#submit_vote_btn').show();
            $('.vote-login-details').show();
            $('#submit_vote_btn').show();

            $(document).on('click', '.view_results_btn', function (e) {
                e.preventDefault();
                $('#poll_voting_form').hide();
                $('#submit_vote_btn').hide();
            });

            $(document).on('click', '.view_options_btn', function (e) {
                e.preventDefault();
                $('#poll_voting_form').show();
                $('#submit_vote_btn').show();
            });

            //Poll Voting Store
            $(document).on('click', '#submit_vote_btn', function (e) {
                e.preventDefault();

                let el = $(this);
                const form = $('#poll_voting_form');
                let route = "https://bytesed.com/laravel/intoday/poll/vote/store";
                let name = form.find('#voter_name').val();
                let email = form.find('#voter_email').val();
                let id = form.find('#id').val();

                $.ajax({
                    url: route,
                    method: 'POST',
                    data: {
                        _token: "DeCAwJEngpcDmSODy8LSjGqWCEQIzrJsLVEZeWgY",
                        id: id,
                        name: name,
                        email: email,
                        vote_name: vote_val
                    },

                    success: function (data) {
                        form.find('.error-wrap').html(
                            '<div class="alert alert-' + data.type +
                            '">' + data.msg + '</div>');

                    },
                    error: function (data) {
                        console.log(data);
                        var response = data.responseJSON.errors;
                        form.find('.error-wrap').html(
                            '<ul class="alert alert-danger"></ul>');
                        $.each(response, function (value, index) {
                            form.find('.error-wrap ul').append(
                                '<li>' + index + '</li>');
                        });
                        el.text('Submit Vote');
                    }
                });
            })
        });



        //Showing Progressbar
        $(document).on('click', '.view_results_btn', function (ev) {
            ev.preventDefault();
            $('#total_vote').show();
            $('.vote_item').hide();
            $('.vote_progress_content').show();
            $(this).hide();
            $('.view_options_btn').show();
        })


        $(document).on('click', '.view_options_btn', function (ev) {
            ev.preventDefault();
            $('#total_vote').hide();
            $('.vote_item').show();
            $('.vote_progress_content').hide();
            $(this).hide();
            $('.view_results_btn').show();
        })
        //Home Addvertisement Click Store
        $(document).on('click', '.home_advertisement', function () {
            let id = $('#add_id').val();
            $.ajax({
                url: "https://bytesed.com/laravel/intoday/home/advertisement/click/store",
                type: "GET",
                data: {
                    'id': id
                },
                success: function (data) {
                    console.log(data);
                }
            })
        });

        //Home Addvertisement Click Store
        $(document).on('mouseover', '.home_advertisement', function () {
            let id = $('#add_id').val();
            $.ajax({
                url: "https://bytesed.com/laravel/intoday/home/advertisement/impression/store",
                type: "GET",
                data: {
                    'id': id
                },
                success: function (data) {
                    console.log(data);
                }
            })
        });
        $('a#tag_view_all').hide();
        $(document).on('keyup', '#search', function (e) {
            e.preventDefault();

            $('a#tag_view_all').show();

            let el_val = $(this).val()

            let link = $('#tag_view_all').data('url');
            $('#tag_view_all').attr('href', link + '?term=' + el_val);

            $.ajax({
                type: 'get',
                url: "https://bytesed.com/laravel/intoday/blog/blog/autocomplete-search",
                data: {
                    query: $(this).val()
                },
                beforeSend: function () {
                    $('.ajax-preloader-wrap').parent().find('.form-btn-2 i')
                        .addClass('fa-spinner fa-spin').removeClass('fa-search')
                },
                success: function (data) {

                    $('#show-autocomplete ul').html('');
                    if ($('#search').val() != '' && data != '') {
                        $('#show-autocomplete ul').html(data);
                        $('#show-autocomplete').show();
                    } else {
                        $('#show-autocomplete').hide();
                        $('#tag_view_all').hide();
                    }


                    $('.ajax-preloader-wrap').parent().find('.form-btn-2 i')
                        .removeClass('fa-spinner fa-spin').addClass('fa-search')
                },
                error: function (res) {

                }
            });


            $(document).on('click', '#search_icon_up', function (e) {
                e.preventDefault();
                $('#show-autocomplete').hide();
                $('#tag_view_all').hide();

            });
        });

        $(document).on('click', '.search-close', function (e) {
            e.preventDefault();
            $('#show-autocomplete').hide();
        });

        // Newsletter Insert

        $(document).on('click', '.newsletter-form-wrap .submit-btn', function (e) {
            e.preventDefault();
            var email = $('.newsletter-form-wrap input[type="email"]').val();
            var errrContaner = $(this).parent().parent().parent().find(
                '.form-message-show');
            errrContaner.html('');
            var paperIcon = 'fa-paper-plane';
            var spinnerIcon = 'fa-spinner fa-spin';
            var el = $(this);
            el.find('i').removeClass(paperIcon).addClass(spinnerIcon);
            $.ajax({
                url: "https://bytesed.com/laravel/intoday/subscribe-newsletter",
                type: "POST",
                data: {
                    _token: "DeCAwJEngpcDmSODy8LSjGqWCEQIzrJsLVEZeWgY",
                    email: email
                },
                success: function (data) {
                    errrContaner.html('<div class="alert alert-' + data.type +
                        '">' + data.msg + '</div>');
                    el.find('i').addClass(paperIcon).removeClass(spinnerIcon);
                },
                error: function (data) {
                    el.find('i').addClass(paperIcon).removeClass(spinnerIcon);
                    var errors = data.responseJSON.errors;
                    errrContaner.html('<div class="alert alert-danger">' +
                        errors.email[0] + '</div>');
                }
            });
        });

    });

}(jQuery));

