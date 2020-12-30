import cjpDictWord from './cjp.word.json'
import cjpDictKana from './cjp.kana.json'
import cjpDictKanji from './cjp.kanji.json'
import cjpDictEmoji from './cjp.emoji.json'

const replaceWithDict = (text, dictList) => {
    let translateStr = text
    for (const i in dictList) {
        const regex = new RegExp(i, 'g')
        translateStr = translateStr.replace(regex, dictList[i])
    }
    return translateStr
}

const translate = text => {
    let translateStr = text
    translateStr = replaceWithDict(translateStr, cjpDictWord)
    translateStr = replaceWithDict(translateStr, cjpDictKana)
    translateStr = replaceWithDict(translateStr, cjpDictKanji)
    translateStr = replaceWithDict(translateStr, cjpDictEmoji)
    return translateStr
}

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
