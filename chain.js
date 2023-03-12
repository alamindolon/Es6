const user = {
    id:5001,
    name:'dolon',
    address: {
        street: {
            first:'35/A dhabmondi',
            post : 1214,
        }
    },
    phone:'012334',
}

console.log(user.address?.street?.first);