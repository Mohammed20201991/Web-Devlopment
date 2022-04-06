const address = {
city : "Iraq - Fallujah",
street : "60"
};
console.log(address.city);
// can use it as accocaitive  array 
console.log(address['city']);
// console.log(address.city);
console.log(address.street);

//  the other way is using class
class Address {
city = 'Baghdad '
street= 'Alsaddon '
constructor(city,street)
{
    this.city = city;
    this.street =street;
}

}

// creat object 
const a = new Address('aaa','bbb');
console.log(a)