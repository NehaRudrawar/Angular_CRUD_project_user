export class Init {
    load() {
      if(localStorage.getItem('users') === null || localStorage.getItem('users') == undefined) {
        console.log('No users Found... Creating...');
        let users = [
            {
                id:'1',
                firstName: 'John',
                lastName: 'Doe',
                email: 'johndoe@gmail.com',
                advertisingMonthlyBudget: 40000,
                phoneNumber: 8956119841
            }
        ];
        localStorage.setItem('users', JSON.stringify(users));
        return 
      }
      else {
        console.log('Found users...');
      }
    }
}