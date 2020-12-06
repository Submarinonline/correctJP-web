import cjpDict from './cjp.json'

const copy = element => {
    if (!element.value) return
    element.select()
    document.execCommand('copy')
    return
}
const gen = (text, dictList) => {
    let translateStr = text
    for (const i in dictList) {
        const regex = new RegExp(i, 'g')
        translateStr = translateStr.replace(regex, dictList[i])
    }
    return translateStr
}

const inputBox = document.getElementById('inputBox')
const outputBox = document.getElementById('outputBox')

const onClickFunc = (id, func) =>
    document.getElementById(id).addEventListener('click', func)

onClickFunc('doGen', () => {
    outputBox.value = gen(inputBox.value, cjpDict)
})
onClickFunc('doCopy', () => {
    copy(outputBox)
})
onClickFunc('doGenAndCopy', () => {
    outputBox.value = gen(inputBox.value, cjpDict)
    copy(outputBox)
})
