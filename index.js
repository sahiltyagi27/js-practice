function merge(A, lb, m, ub) {
    let n1 = m - lb + 1;
    let n2 = ub - m;
    let L = [n1];
    let R = [n2];
    let i, j;
    for (i = 0; i < n1; i++) {
        L[i] = A[lb + i];
    }
    for (j = 0; j < n2; j++) {
        R[j] = A[m + 1 + j];
    }

    let k = lb;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            A[k] = L[i];
            i++;
        } else {
            A[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        A[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        A[k] = R[j];
        j++;
        k++;
    }
    console.log(A);
}

function mergeSort(A, lb, ub) {
    let m;
    if (ub == 1) {
        return;
    }
    m = (lb + ub) / 2
    mergeSort(A, lb, m);
    mergeSort(A, m + 1, ub)
    merge(A, lb, m, ub);

}

mergeSort([5], 0, 1);