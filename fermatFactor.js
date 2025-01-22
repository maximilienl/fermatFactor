/**
 * Factors a number using Fermat's Factorization method.
 * 
 * This method works best when the number has factors close to its square root.
 * 
 * @param {bigint} n - The number to factor.
 * @returns {{ factor1: bigint, factor2: bigint }} A pair of factors of `n`.
 * 
 * @example
 * const result = fermatFactor(5959n);
 * console.log(result); // { factor1: 59n, factor2: 101n }
 */
function fermatFactor(n) {
    if (n % 2n === 0n) return { factor1: 2n, factor2: n / 2n };

    let a = n ** 0.5n + 1n;
    let b2 = a * a - n;

    while (b2 ** 0.5n !== BigInt(Math.floor(Number(b2 ** 0.5n)))) {
        a += 1n;
        b2 = a * a - n;
    }

    const b = b2 ** 0.5n;
    return { factor1: a - b, factor2: a + b };
}
