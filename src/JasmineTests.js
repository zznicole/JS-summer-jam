/* Jasmine Matchers 
    toBe / not.toBe
    toBeCloseTo
    toBeDefined
    toBeFalsey / toBeTruthy
    toBeGreaterThan / toBeLessThan
    toContain
    toEqual
    jasmine.any()
*/


/* examples

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

*/

// exercises

// 1) Create a new instance of Person and call it student
// Insert values according to the constructor 
// Copy the test and adjust it so that it won't fail
// Play around with it until you get it


class Person {
    constructor(name, age, school, interests, hasPets, team) {
        this.name = name,
        this.age = age;
        this.school = school;
        this.interests = interests;
        this.hasPets = hasPets;
    }
}

const student = new Person('Jenny', 15, 'Bronte High School', ['swiming','singing'], false, undefined);

describe('person', ()=>{
    it('the name of student in Person Class', () => {
        expect(student.name).toBe('Jenny');
    });
    it('the age of student in Person Class', () => {
        expect(student.age).toEqual(15);
    });
    it('the interests of student', () => {
        expect(student.interests).toContain('singing');
    });
    it('has student got pets', () => {
        expect(student.hasPets).toBeFalsey;
    });
    it('which team student is with', () => {
        expect(student.team).toBeDefined;
    })
});

// 2) Create a new class of any object that comes 
// to your mind (like car, house, furniture etc)
// Add a constructor 
// Create a new instance of the class that you created
// Write the tests using the following Matchers (
//     toContain, toEqual, toBeLessThan, toBeDefined, not.toBe

class Icecream {
    constructor(name, contains, numsInStock, numsSoldToday, manufacturer) {
        this.name = name;
        this.contains =  contains;
        this.numsInStock = numsInStock;
        this.numsSoldToday = numsSoldToday;
        this.manufacturer = manufacturer;
    }
}

const magnum = new Icecream('Almond', ['cream', 'almond', 'vanilla'], 500, 100, undefined);

describe('icecream',() => {
    it('icecreams we have in stock', () => {
        expect(magnum.contains).toContain('vanilla');
    });
    it('how many we sold today', () => {
        expect(magnum.numsSoldToday).toEqual(100);
    });
});