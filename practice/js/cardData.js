const data = [
    {
        id:'1',
        name:'Honda Discover lal',
        price:"300000",
        description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, dolor! ',
        imageUrl:'https://imgd.aeplcdn.com/1280x720/bw/models/bajaj-discover-125-drum--cbs20190722121006.jpg?q=80',
    },
    {
        id:'2',
        name:'Honda Discover',
        price:"500000",
        description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, dolor! ',
        imageUrl:'https://imgd.aeplcdn.com/0x0/n/bw/models/colors/bajaj-discover-125-flame-red-1486468843562.jpg?20190103151915',
    },
    {
        id:'3',
        name:'Honda Suziki',
        price:"700000",
        description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, dolor! ',
        imageUrl:'https://www.banglamotor.net/images/suzuki/suzuki-gsx-r150-img-a1.jpg',
    },
    {
        id:'4',
        name:'Honda Woman',
        price:"100000",
        description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, dolor! ',
        imageUrl:'https://deshibiker.com/wp-content/uploads/2022/03/suzuki-lets-scooter_side-black.jpg',
    },
   
]

data.forEach(bike =>
    {
        const {name,price, imageUrl,description} = bike;

        const cardContainer = document.getElementById("card-containerID");

        const singleCard = document.createElement('div');
        singleCard.classList.add('col');
        singleCard.innerHTML =`
        <div class="card">
                <img src="${imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${description}</p>
                </div>
              </div>
        
        `
        cardContainer.appendChild(singleCard);
    })