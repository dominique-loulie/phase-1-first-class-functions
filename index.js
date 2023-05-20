function receivesAFunction(callback) {
    callback();
  }


function  returnsANamedFunction (){
    return function namedFunction(){
        console.log('this is the returned named function');
    }
}

function returnsAnAnonymousFunction() { 
    return () => console.log('ananonymous function returned');
};