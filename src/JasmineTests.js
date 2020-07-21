
const me = 
    {
    name: 'Nicole',
    age: 21,
    writecode: true,
    ocuppation: 'front-end developer',
    }
  

describe('person', () => {
    it('the name of the person', () => {
        expect(me.name).toBe('Nicole');
    });
    it('the age of the person', () => {
        expect(me.age).toEqual(18);
    });
});

// 1) Create a new instance of Person and call it student
// Insert values according to the constructor 
// Copy the test and adjust it so that it won't fail
// Play around with it until you get it

// 2) Create a new class of any object that comes 
// to your mind (like car, house, furniture etc)
// Add a constructor 
// Create a new instance of the class that you created
// Write the tests using the following Matchers (
//     toContain, toEqual, toBeLessThan, toBeDefined, not.toBe