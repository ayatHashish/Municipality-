require(['jquery', 'aos', 'sweetalert', 'bootstrap', 'owl', 'datetimepicker', 'resources.' + BER.languageCode, 'uploader'], function ($, AOS, swal) {
    (function (resources) {
        var isRTL = BER.languageCode == "en-GB" ? false : true;
        AOS.init({ once: true, disable: 'mobile' });

        //AOS Intiate
        AOS.init({ once: true, disable: 'mobile' });

        if ($('.uploader').length > 0) {
            $('.uploader').Uploader({
                url: window.location.origin + '/' + BER.shortLanguageCode + '/Utility/UploadFile',
                deleteUrl: window.location.origin + '/' + BER.shortLanguageCode + '/Utility/DeleteFile',
                lblDragDropFiles: resources.uploader.lblDragDropFiles,
                lblUploadSuccess: resources.uploader.lblUploadSuccess,
                lblUploadFailed: resources.uploader.lblUploadFailed,
                lblChooseFiles: resources.uploader.lblChooseFiles,
                lblDelete: resources.uploader.lblDelete,
                lblRemoveConfirmation: resources.uploader.lblRemoveConfirmation,
                lblFileLimit: resources.uploader.lblFileLimit,
                lblFileImages: resources.uploader.lblFileExtensions.replace("{{extensions}}", "docx, doc, pdf"),
                lblFileSize: resources.uploader.lblFileSize,
                lblFilesLarge: resources.uploader.lblFilesLarge,
                lblOk: resources.uploader.lblOk,
                lblCancel: resources.uploader.lblCancel,
                limit: 1,
                extensions: ['docx', 'doc', 'pdf'],
                fileMaxSize: $("#MaxFileSize").val()
            });
            var allowedFiles = "docx, doc, pdf";
            $(resources.uploader.lblAllowedFiles.replace('{0}', allowedFiles).
                replace('{1}', $("#MaxFileSize").val() + ' ' + resources.uploader[$("#FileSizeUnit").val().toLowerCase()]).
                replace('{2}', 1)).insertAfter($('.uploader').parents(".attachment").find('.form-label'));
        }

        $(".close-modal").on("click", function () {
            $(".message-failed").removeClass("show");
            $(".message-sent").removeClass("show");
        });

        const burgerBtn = document.querySelector('.burger-btn');
        if (burgerBtn) {
            burgerBtn.addEventListener('click', () => {
                const currentState = burgerBtn.getAttribute('data-state');
                const mainNav = $('.first-nav');

                if (!currentState || currentState === 'closed') {
                    burgerBtn.setAttribute('data-state', 'opened');
                    burgerBtn.setAttribute('aria-expanded', 'true');
                    mainNav.addClass('open');

                } else {
                    burgerBtn.setAttribute('data-state', 'closed');
                    burgerBtn.setAttribute('aria-expanded', 'false');
                    mainNav.removeClass('open');
                }
            });
        }

        var checkEmail = function (txtCtrl) {
            if (txtCtrl.val() != '') {
                var userinput = txtCtrl.val();
                var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
                if (!pattern.test(userinput)) {
                    txtCtrl.parent().find('.error-msg').hide();
                    txtCtrl.parent().find('.error-msg.email').show();
                    txtCtrl.parent().removeClass('has-error').addClass('has-error');
                }
                else {
                    txtCtrl.parent().find('.error-msg.email').hide();
                }
            }
            else {
                txtCtrl.parent().find('.error-msg.email').hide();
            }
        }
        var validateform = function () {
            var requiredCtrls = $('#contactusform').find('.required');
            var hasError = false;
            requiredCtrls.each(function () {
                if ($(this).val() == '') {
                    $(this).parent().removeClass('has-error').addClass('has-error');
                    $(this).parent().find('.error-msg').show();
                    hasError = true;
                }
                if ($(this).hasClass('email')) {
                    checkEmail($(this));
                }
                $(this).on("change", function () {
                    if ($(this).val() == '') {
                        $(this).parent().removeClass('has-error').addClass('has-error');
                        $(this).parent().find('.error-msg').show();
                        hasError = true;
                    }

                    if ($(this).val() != '') {
                        $(this).parent().removeClass('has-error');
                    }
                    if ($(this).hasClass('email')) {
                        checkEmail($(this));
                    }
                });
            });
            return hasError;
        }

        $(".btnsubmit-contact").on("click", function (event) {
            event.preventDefault();
            var formData = $('#contactusform').serialize();
            formData += '&languageId=' + BER.languageId;

            if (validateform() == true) {
                return false;
            }
            $.ajax({
                type: "POST",
                url: window.location.origin + '/berwebnamji/api/ajax/SubmitContactUs',
                data: formData,
                dataType: "json",
                encode: true,
            }).done(function (data) {
                $(".close-modal").on("click", function () {
                    $(".message-failed").modal("hide");
                    $(".message-sent").modal("hide");
                });
                if (data == true) {
                    $('#contactusform').find('input[type=text],textarea').val('');
                    $(".message-failed").modal("hide");
                    $(".message-sent").modal("show");
                }
                else {
                    $(".message-sent").modal("hide");
                    $(".message-failed").modal("show");

                }
            });
        });
        $(".btn-submit-career").on("click", function (event) {
            event.preventDefault();
            var form = $('#careerform');
            var formData = form.serialize();
            formData += '&languageId=' + BER.languageId;

            if (validateform(form) == true) {
                $('html,body').animate({ scrollTop: form.offset().top - ($(window).height() - form.outerHeight(true)) / 2 }, 100);
                return false;
            }
            $.ajax({
                type: "POST",
                url: window.location.origin + '/berwebnamji/api/Ajax/SubmitCareer',
                data: formData,
                dataType: "json",
                encode: true,
            }).done(function (data) {
                $(".close-modal").on("click", function () {
                    $(".message-failed").modal("hide");
                    $(".message-sent").modal("hide");
                });
                if (data == true) {
                    form.find('input[type=text],select,textarea,.hdf-ctrl').val('');
                    $(".message-failed").modal("hide");
                    $(".message-sent").modal("show");
                }
                else {
                    $(".message-sent").modal("hide");
                    $(".message-failed").modal("show");

                }
            });
        });
        $(".services-wrap").owlCarousel({
            loop: false,
            lazyLoad: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 6000,
            items: 1,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 2,
                },
                1199: {
                    items: 3,
                },
            },
            rtl: isRTL
        });
        $(".partners-wrap").owlCarousel({
            loop: true,
            lazyLoad: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 5000,
            items: 1,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 2,
                },
                1199: {
                    items: 3,
                },
            },
            rtl: isRTL
        });

    })(BER.resources);
});
