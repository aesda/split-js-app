function User(name, email, mobile, photo) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.photo = photo;

}

function Expense(description, amount) {
    this.description = description;
    this.amount = amount;
    this.isSettled = false;
    this.date = new Date();

}
function SplitCostApp() {
    this.unsettledAmount = 0.00;
    this.users = [];
    this.expenses = [];
    


    this.displayUnsettledAmount = function() {
        document.querySelector('.amount').textContent = `$${this.unsettledAmount}`;
    }

    this.addUser = function(name, email, mobile, photo) {
        const user = new User(name, email, mobile, photo);
        this.users.push(user);
    }
    this.displayUsers = function() {
        let userElements = '';
        for(let user of this.users) {
            userElements += `<div><img src='${user.photo}' alt='${user.name}' /></div>`
        }
        document.querySelector('.user-wrapper').innerHTML = userElements;
    }

    this.addExpenses = function(event) {
        event.preventDefault();
        console.log('Adding expenses...');
        console.log('')


    }

    this.addNewEventListener = function() {
        document.querySelector('form').addEventListener('submit', this.addExpenses)
    }
}
const splitCostApp = new SplitCostApp();
splitCostApp.displayUnsettledAmount();
splitCostApp.addUser('San', 'sanis@gmail.com', '0412345656', 'https://randomuser.me/api/portraits/lego/6.jpg');
splitCostApp.addUser('Sadn', 'sanisss@gmail.com', '041222345656', 'https://randomuser.me/api/portraits/lego/7.jpg');
splitCostApp.displayUsers();
splitCostApp.addNewEventListener();

console.log(splitCostApp);


