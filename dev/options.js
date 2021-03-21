const options = {
    update: () => {
        options.difficulty.update()
        options.bac.update()
        // options.drinks.update()
    },
    difficulty: {
        lvl: undefined,
        changed: (arg) => {
            arg = arg < 0 ? 0 : arg > 2 ? 0 : arg
            options.difficulty.lvl = parseInt(arg)
            sess.set('lvl', options.difficulty.lvl)
            options.difficulty.update()
        },
        get: () => {
            options.difficulty.lvl = options.difficulty.lvl || parseInt(sess.get('lvl')) || 0
            return options.difficulty.lvl
        },
        update: () => {
            let z = options.difficulty.get()
            switch (z) {
                case 0:
                    document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="0"]').setAttribute('active', '')
                    document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="1"]').removeAttribute('active')
                    document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="2"]').removeAttribute('active')
                    break
                case 1:
                    document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="0"]').removeAttribute('active')
                    document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="1"]').setAttribute('active', '')
                    document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="2"]').removeAttribute('active')
                    break
                case 2:
                    document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="0"]').removeAttribute('active')
                    document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="1"]').removeAttribute('active')
                    document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="2"]').setAttribute('active', '')
                    break
                default:
                    break
            }
        }
    },
    bac: {
        bac: undefined,
        changed: (arg) => {
            options.bac.bac = parseInt(arg)
            sess.set('bac', options.bac.bac)
            options.bac.update()
        },
        get: () => {
            if (options.bac.bac === undefined) {
                let sessVal = parseInt(sess.get('bac'))
                if (isNaN(sessVal)) {
                    options.bac.bac = 1
                } else {
                    options.bac.bac = sessVal
                }
            }
            return options.bac.bac
        },
        update: () => {
            let z = options.bac.get()
            switch (z) {
                case 0:
                    document.querySelector('#options-countWrapper .options-chkbx[data-id="0"]').setAttribute('active', '')
                    document.querySelector('#options-countWrapper .options-chkbx[data-id="1"]').removeAttribute('active')
                    break
                case 1:
                    document.querySelector('#options-countWrapper .options-chkbx[data-id="0"]').removeAttribute('active')
                    document.querySelector('#options-countWrapper .options-chkbx[data-id="1"]').setAttribute('active', '')
                    break
                default:
                    break
            }
        }
    },
    drinks: {},
}