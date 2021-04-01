function mergeSort(A, p, q, r) {
    let i, j, k;
    let L = [];
    let R = []
    let n1 = q - p + 1;
    let n2 = r - q - 1;
    for (i = 0; i < n1; i++) {
        L[i] = A[p + i];
    }
    for (j = 0; j < n2; j++) {
        R[j] = A[q + j + 1];
    }
    L.push(Infinity);
    console.log(L)
    R.push(Infinity);
    console.log(R);
    i = 0;
    j = 0;
    for (k = p; k < r; k++) {
        if (L[i] <= R[j]) {
            A[k] = L[i];
            i++;
        } else {
            A[k] = R[j];
            j++;
        }
    }
    console.log(A);
}

mergeSort([2, 4, 5, 1, 2, 8], 0, 2, 6)