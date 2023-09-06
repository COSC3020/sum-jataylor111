function sum(a) {
    var sum = 0;
    //I changed the initilization value from a[0] to just 0, this should keep the for loop from counting the first entry twice.
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
