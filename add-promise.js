function addPromise ( a , b) {
    return new Promise(function (resolve, reject) {
        //setTimeout(function () {
            if(typeof a === 'number' && typeof b === 'number'){
            resolve(a - b);
            } else {
            reject('Numbers not selected');
        }
    });
}

addPromise(12, 6).then(function (sum) {
    console.log('Correct Result', sum);
}, function(err) {
    console.log('Wrong Answer', err);
});

addPromise('jef', 6).then(function (sum) {
    console.log('Correct Result', sum);
}, function(err) {
    console.log('Wrong Answer', err);
});

