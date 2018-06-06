'use strict';

async function asyncA() {

    //console.log('a');


    throw new Error('co loi ham A()');

}


async function asyncB() {

    try {
        var return_b = await asyncA();
       // console.log(return_b);
    } catch (error) {
        console.log(error.message);
    }

    
}


asyncB().then(value => {

   // console.log(value);
});



