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

    this.displayExpenses = function() {
        let expenseElements = '';
        for(let expense of this.expenses) {
        expenseElements += `
        <div class="expenses-item">
            <div>
                <span>${expense.description}</span>
                <span>${expense.amount}</span>
            </div>
           <div class= "date">${expense.amount}</div>
        </div>
        `
    }
      document.querySelector('.expense-wrapper').innerHTML = expenseElements;
    }

    this.addExpenses = function(event) {
        event.preventDefault();
        console.log('Adding expenses...');

        const description = document.querySelector('#description').value;
        const amount = document.querySelector('#amount').value;
        if(description && amount) {
            const expense = new Expense(description, amount);
            this.expenses.unshift(expense);
            this.displayExpenses();
            document.querySelector('form').reset();
            this.calculateUnsettledAmount();
            this.displayUnsettledAmount();

        }


    }
    this.calculateUnsettledAmount = function() {
        let total = 0;
        for(let expense of this.expenses) {
            total = total + Number(expense.amount)
        }
        const unsettledAmount = total / this.users.length;
        this.unsettledAmount = unsettledAmount;
    }

    

    this.addNewEventListener = function() {
        document.querySelector('form').addEventListener('submit', (event) => {
            this.addExpenses(event);
        })
    }
}
const splitCostApp = new SplitCostApp();
splitCostApp.displayUnsettledAmount();
splitCostApp.addUser('San', 'sanis@gmail.com', '0412345656', 'https://randomuser.me/api/portraits/lego/6.jpg');
splitCostApp.addUser('Sadn', 'sanisss@gmail.com', '041222345656', 'https://randomuser.me/api/portraits/lego/7.jpg');
splitCostApp.displayUsers();
splitCostApp.addNewEventListener();







