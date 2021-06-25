const fibonacci = function(instance) {
    //set up variables
    a = 1; //could be anything, it gets replaced. not my best code
    b = 1;
    c = 0;

    //check for negative input
    if (instance < 0 || isNaN(instance)) {
        return "OOPS";
    }
    else {
        for (let i = 0; i < instance; i++) {
            
            //shift variables
            a = b;
            b = c;
            
            //add to get next number
            c = a + b;
        }
        
        return c;
    }
}

module.exports = fibonacci
