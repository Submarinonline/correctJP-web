const { translate } = require('cjp')

const copy = element => {
    if (!element.value) return
    element.select()
    document.execCommand('copy')
    return
}

const inputBox = document.getElementById('inputBox')
const outputBox = document.getElementById('outputBox')

const onClickFunc = (id, func) =>
    document.getElementById(id).addEventListener('click', func)

onClickFunc('doGen', () => {
    outputBox.value = translate(inputBox.value)
})
onClickFunc('doCopy', () => {
    copy(outputBox)
})
onClickFunc('doGenAndCopy', () => {
    outputBox.value = translate(inputBox.value)
    copy(outputBox)
})
