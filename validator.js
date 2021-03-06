function validator(options) {
    var fromElement = document.querySelector(options.form)
    //console.log(options.rules)

    fromElement.onsubmit = (submit) => {
        submit.preventDefault()
        var isSuccess = true
        options.rules.forEach((rule) => {
            var inputElement = fromElement.querySelector(rule.selector)

            var isValid = validate(inputElement, rule)

            if (!isValid) {
                isSuccess = false
            }
        })
        if (isSuccess) {
            if (typeof options.onSubmit === 'function') {
                var enableInput = fromElement.querySelectorAll('[name]')
                //console.log(enableInput)

                var enableValue = Array.from(enableInput).reduce((values, input) => {
                    //console.log(input.value)
                    return (values[input.name] = input.value) && values
                }, {})
                options.onSubmit(enableValue)
                //
                var element = document.querySelector('.progress-bar-striped')

                var width = 1
                const id = setInterval(frame, 0)
                function frame() {
                    if (width >= 100) {
                        clearInterval(id)
                        localStorage.setItem(APP_STORAGE, JSON.stringify({ cartItems: [], user: enableValue }))
                        document.querySelector('.mess-success').classList.remove('disabled')
                        var countdown = document.querySelector('.alert-success h1 .countdown')
                        var i = 5
                        setInterval(() => {
                            countdown.innerText = i--
                        }, 1000)
                        setTimeout(() => {
                            var i = 5

                            location.reload()
                        }, 6000)
                    } else {
                        width++
                        element.style.width = width + '%'
                    }
                }
            }
        } else {
        }
    }

    function validate(inputElement, rule) {
        var errElement = inputElement.parentElement.querySelector(options.errorsSelector)
        var errorMessage = rule.test(inputElement.value)
        if (errorMessage) {
            errElement.innerText = errorMessage
            inputElement.parentElement.classList.add('invalid')
        } else {
            errElement.innerText = ''
            inputElement.parentElement.classList.remove('invalid')
        }
        return !errorMessage
    }

    if (fromElement) {
        options.rules.forEach(function (rule) {
            var inputElement = fromElement.querySelector(rule.selector)

            //console.log(inputElement)

            if (inputElement) {
                inputElement.onblur = () => {
                    validate(inputElement, rule)
                }

                // oninput/
                inputElement.oninput = () => {
                    //errElement.innerText = ''
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
        })
    }
}
validator.isRequired = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            return value.trim() ? undefined : 'Vui lo??ng nh????p ho?? t??n '
        },
    }
}
validator.isEmail = (selector) => {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Vui lo??ng nh????p Email'
        },
    }
}
validator.isPhoneNumber = (selector) => {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
            return regex.test(value) ? undefined : 'Nh????p s???? ??i????n thoa??i h????p l????'
        },
    }
}
validator.isAddress = (selector) => {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lo??ng nh????p ??i??a chi?? nh????n ha??ng '
        },
    }
}
// fetch('https://fakestoreapi.com/auth/login', {
//     method: 'POST',
//     body: JSON.stringify({
//         username: 'kevinryan',
//         password: 'kev02937@',
//     }),
// })
//     .then((res) => res.json())
//     .then((json) => console.log(json))
