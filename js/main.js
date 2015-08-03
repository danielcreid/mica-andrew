// Smooth scrolling for navigation
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

// RSVP Form functionality. Utilizes http://formspree.io/ API.
/*(function() {
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

    function setAttributes(el, attrs) {
        for(var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    var rsvpForm = document.querySelector('.js-rsvp-form');
    var rsvpMessageYes = document.querySelector('.js-rsvp-message-yes');
    var rsvpMessageNo = document.querySelector('.js-rsvp-message-no');
    var userFirstName = document.querySelectorAll('.js-user-first-name');
    var attendingRadioButtonClass = 'js-attending-radio';
    var attendingRadioButtons = document.querySelectorAll('.js-attending-radio');
    var numberAttendingRow = document.querySelector('.js-number-attending-row');
    var numberAttendingInput = document.querySelector('.js-number-attending-input');
    var isAttendingClass = 'is-attending';
    var isHiddenClass = 'is-hidden';
    var radioButtonInContext;
    var formAction = '//formspree.io/' + Base64.decode('TARGET_EMAIL_ADDRESS');
    var nextElement = document.createElement('input');

    setAttributes(nextElement, {
        'type': 'hidden',
        'name': '_next',
        'value': 'thanks.html'
    });

    function init() {
        resetForm();
        radioButtonListener();
        submitFormListener();
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

    function showRSVPMessage(isAttending, firstName) {
        for (var i = 0; i < userFirstName.length; i++) {
            userFirstName[i].innerHTML = firstName;
        }

        rsvpForm.style.display = 'none';

        if (isAttending == 'I\'ll be there!') {
            rsvpMessageYes.style.display = 'block';
        } else {
            rsvpMessageNo.style.display = 'block';
        }
    }

    function submitFormListener() {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();

            var $data = $(this).serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
            }, {});

            // Support for lte IE9 (also fires for IE10, which is unnecessary. Whatever...)
            if(window.XDomainRequest) {
                setAttributes(rsvpForm, {
                    'action': formAction,
                    'method': 'post'
                });

                rsvpForm.appendChild(nextElement);

                rsvpForm.submit();
            } else {
                $.ajax({
                    url: formAction,
                    method: 'post',
                    data: $data,
                    dataType: 'json',
                    cache: false,
                    crossDomain: true,
                    success: showRSVPMessage($data['Attending?'], $data['First name'])
                });
            }
        });
    }

    init();
})();*/
