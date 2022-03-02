function validator(options) {
    var fromElement = document.querySelector(options.form)
    //console.log(options.rules)

    fromElement.onsubmit = (submit) => {
        submit.preventDefault()

        var element = document.querySelector('.progress-bar-striped')
        var width = 1
        const id = setInterval(frame, 0)
        function frame() {
            if (width >= 100) {
                clearInterval(id)
                localStorage.setItem(APP_STORAGE, JSON.stringify({ cartItems: [] }))
                document.querySelector('.mess-success').classList.remove('disabled')
                setTimeout(() => {
                    location.reload()
                }, 1000)
            } else {
                width++
                element.style.width = width + '%'
            }
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
            return value.trim() ? undefined : 'Vui lòng nhập họ tên '
        },
    }
}
validator.isEmail = (selector) => {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Vui lòng nhập Email'
        },
    }
}
validator.isPhoneNumber = (selector) => {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
            return regex.test(value) ? undefined : 'Nhập số điện thoại hợp lệ'
        },
    }
}
validator.isAddress = (selector) => {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập địa chỉ nhận hàng '
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
