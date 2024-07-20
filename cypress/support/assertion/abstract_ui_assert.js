import { expect } from 'chai';  // Using Expect style

// Generic assert methods using chai assert library
class AbstractUIAssert{
    equalIgnoreCase(expected, actual) {
        expect(expected).to.eq(actual);
    }
}

export default AbstractUIAssert