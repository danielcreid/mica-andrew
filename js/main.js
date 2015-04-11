$(function () {
    $("a[href*=#]:not([href=#])").click(function () {
        var e = this.hash;
        setTimeout(function () {
            window.location.hash = e
        }, 1e3);
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash);
            t = t.length ? t : $("[name=" + this.hash.slice(1) + "]");
            if (t.length) {
                $("html,body").animate({
                    scrollTop: t.offset().top
                }, 1e3);
                return false
            }
        }
    })
});

(function() {
    'use strict';

    function clickInsideElement(e, className) {
        var el = e.target;

        if (el.classList.contains(className)) {
            return el;
        } else {
            while (el = el.parentNode) {
                if (el.classList && el.classList.contains(className)) {
                    return el;
                }
            }
        }

        return false;
    }

    var rsvpForm = document.querySelector('.js-rsvp-form');
    var attendingRadioButtonClass = 'js-attending-radio';
    var attendingRadioButtons = document.querySelectorAll('.js-attending-radio');
    var numberAttendingRow = document.querySelector('.js-number-attending-row');
    var numberAttendingInput = document.querySelector('.js-number-attending-input');
    var isAttendingClass = 'is-attending';
    var isHiddenClass = 'is-hidden';
    var radioButtonInContext;

    function init() {
        resetForm();
        radioButtonListener();
    }

    function radioButtonListener() {
        document.addEventListener('click', function(e) {
            radioButtonInContext = clickInsideElement(e, attendingRadioButtonClass);

            if (radioButtonInContext) {
                if (radioButtonInContext.classList.contains(isAttendingClass)) {
                    numberAttendingRow.classList.remove('is-hidden');
                    numberAttendingInput.removeAttribute('disabled');
                } else {
                    numberAttendingRow.classList.add('is-hidden');
                    numberAttendingInput.setAttribute('disabled', '');
                }
            } else {
                radioButtonInContext = null;
            }
        });
    }

    function resetForm() {
        rsvpForm.reset();
        numberAttendingRow.classList.remove('is-hidden');
        numberAttendingInput.removeAttribute('disabled');
    }

    init();
})();