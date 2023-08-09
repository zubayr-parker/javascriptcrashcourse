const statusRef = document.querySelector(".status");
// console.log(emailRef)

// fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
//   response.json().then(data => {
//     console.log(data)
//     emailRef.innerHTML = data.email
// })
// });

// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     console.log(data)
//     emailRef.innerHTML = data.email
// }

// main()(

// function getSubscriptionStatus() {
//     return new Promise((resolve,reject) => {
//         resolve("VIP")
//     })
// }

// function getVideo(SubscriptionStatus) {
//     return new Promise((resolve,reject) => {
//         if(SubscriptionStatus === "VIP") {
//             resolve("show video")
//         }

//         else if(SubscriptionStatus === "FREE") {
//             resolve("show trailer")
//         }

//         else reject("no video")

//     })
// }

// async function main() {
//     const status = await getSubscriptionStatus()
//     statusRef.innerHTML = status
//     console.log(await getVideo(status))
// }

// main()

// function sortHightToLow(numbers) {
//   return numbers.sort((a, b) => b.price - a.price);
// }

// console.log(
//   sortHightToLow([
//     { id: 5, price: 50 },
//     { id: 5, price: 0 },
//     { id: 5, price: 60 },
//   ])
// );


// async function printAllPostsbyUserId(usersId){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await response.json()
//     for (i=0;i<data.length;i++){
//         if (data[i].userId === usersId) {
//             console.log(data[i].body)
//         }
//     }
// }
// async function printAllPostsbyUserId(usersId){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await response.json()
//     const posts = data.filter(elem => elem.userId === usersId) 
//     const postbody = posts.map(elem => elem.body )
//     console.log(postbody) 
// }

// printAllPostsbyUserId(2)

    async function firstSixIncomplete(){
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await response.json()
        incompleteTodo = data.filter(elem => !elem.completed).slice(0, 6)
        console.log(incompleteTodo)

    }

    firstSixIncomplete()