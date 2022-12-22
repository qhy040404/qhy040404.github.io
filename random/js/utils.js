/**
 * @param max Max number
 * @param fix Fixed point
 * @return random data
 */
function generateRandomData(max, fix) {
    let rand = mRandom() * parseFloat(max)
    if (fix == "") {
        return rand
    } else {
        return rand.toFixed(parseInt(fix))
    }
}

function mRandom() {
    let origRandom = Math.random()
    let now = Date.now()
    // noinspection JSCheckFunctionSignatures
    let pNow = Date.parse(new Date())
    let m = 1.0;

    let cryptoRan = crypto.getRandomValues(new Uint32Array(1))[0] / 10000000000

    for (let i = 0; i < 5; i++) {
        m *= (now - i - pNow - i)
        if (m < 0) m = 0 - m
        while (m > 1) {
            m /= 10
        }
        if (i % 2 == 0) {
            m += cryptoRan
        } else {
            m += cryptoRan / 2
        }
    }
    if (m < 0.5) {
        m += Math.random() * 0.5
    }
    while (m > 1) {
        m -= cryptoRan / 3
    }
    return origRandom * m
}