function checkIsSameTree(tree1, tree2) {
    if (Object.is(tree1, tree2)) {
        console.log(true, 1)
        return true
    }

    let treeOne = {
        keys: Object.keys(tree1),
        values: Object.values(tree1)
    }
    let treeTwo = {
        keys: Object.keys(tree2),
        values: Object.values(tree2)
    }

    treeOne.values = transfromValues(treeOne.values)
    treeTwo.values = transfromValues(treeTwo.values)

    treeOne.keys.sort()
    treeOne.values.sort()

    treeTwo.keys.sort()
    treeTwo.values.sort()


    for (let i = 0; i < treeOne.keys.length; i++) {
        if (treeOne.keys[ i ] !== treeTwo.keys[ i ]) {
            console.log('false 1')
            return false
        }

        if (treeOne.values[ i ] !== treeTwo.values[ i ]) {
            console.log('false 2')
            return false
        }
    }

    // for (let i = 0; i < treeOne.keys.length; i++) {
    //     const currentVal = treeOne.values[i]
    //     // console.log(currentVal)
    //     if (typeof currentVal === 'object') {
    //         treeOne.values[i] = getValues(currentVal)
    //     }

    // }

    // Luego el return por default sera true, intentaremos encontrar los casos donde falla.
    console.log(true, 'end')
    console.log(treeOne)
    console.log(treeTwo)
    return true
}

function getValues(arr) {
    return Object.values(arr)[ 0 ]
}

function transfromValues(treeValues) {
    for (let i = 0; i < treeValues.length; i++) {
        const currentVal = treeValues[ i ]
        // console.log(currentVal)
        if (typeof currentVal === 'object') {
            treeValues[ i ] = getValues(currentVal)
        }
    }
    return treeValues
}

const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
}


const tree2 = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

const tree3 = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

checkIsSameTree(tree, tree) // true
checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true
checkIsSameTree(tree2, tree3) // true