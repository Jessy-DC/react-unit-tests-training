function sum(a,b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return Error('Number expected as parameter')
    }

    return a + b;
}

export default sum;