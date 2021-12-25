function canReconfigure(from = '', to = '') {
    if (from === to) return true
    if (from.length !== to.length) {
        console.log(false, from, to)
        return false
    }

    const setOne = new Set(from.split(''))
    const setTwo = new Set(to.split(''))


    const fromSet = from.split('').filter((char, index) => from.indexOf(char) !== index)
    const toSet = to.split('').filter((char, index) => to.indexOf(char) !== index)

    if (!fromSet.length && !toSet.length) {
        console.log('1: ', true, from, to)
        return true
    }

    if (setOne.size !== setTwo.size) return false

    // if (!fromSet.length) {
    //     console.log('false REPEATED CHARS', from)
    //     return false
    // }

    for (let i = 0; i < from.length; i++)
        if (fromSet.includes(from[ i ]))
            if (from[ i ] !== to[ i ] && !toSet.includes(to[ i ])) {
                console.log('2: ', false, from[ i ], to[ i ], from, to)
                return false
            }



    console.log(true, from, to)
    return true
}

from = 'xxxMMM'
to = 'aaaDDD'
canReconfigure(from, to)

from = 'JUN'
to = 'CUN'
canReconfigure(from, to)

from = 'XBX'
to = 'XOBX'
canReconfigure(from, to)

from = 'MMM'
to = 'MID'
canReconfigure(from, to)

from = 'CNAC'
to = 'CANC'
canReconfigure(from, to)

from = 'abcdefghijkl'
to = 'lkjihgfedcba'
canReconfigure(from, to)

from = 'xxxqqqeeefffggg'
to = 'xxxqqqeeefffgg'
canReconfigure(from, to)