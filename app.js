
// var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseInt(currentAge) + 1;

// // console.log(currentAge);
// console.log();
// console.log(~19);


// console.log(currentAge*1);






// // let rightNow = new Date('june 5,2023');
// // console.log('date' , rightNow);
// // console.log('date' , rightNow.getDate());
// // console.log('day' , rightNow.getDay());
// // console.log('hours' , rightNow.getHours());
// // console.log('minutes' , rightNow.getMinutes());
// // console.log('seconds' , rightNow.getSeconds());
// // console.log('millisecond' , rightNow.getMilliseconds());
// // console.log('month' , rightNow.getMonth());
// // console.log('full year' , rightNow.getFullYear());
// // console.log('time' , rightNow.getTime());




// let today = new Date().getTime();
// let classtime = new Date('June 5, 2023').getTime();
// let remainingMilliSeconds = today - classtime;
// let remainingDays = remainingMilliSeconds / 1000 / 60 / 60 /

// console.log('today===>' , today)
// console.log('classTime ===>' , classtime)
// console.log('remainingMilliSeconds ===>' , remainingMilliSeconds)
// console.log('remainingDays ===>', Math.ceil(remainingDays))




// const newMobile = document.querySelectorAll(".containers");

// /// Array Area ...
// const phone = [
//       {
//             brand: 'Xiaomi',
//             img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2023/08/Xiaomi-Poco-M6-Pro-400x400.jpg",
//             model: 'POCO M6 Pro',
//             ram: 8,
//             rom: 256,
//             camera: '50+2mp megapixel',
//             frontcamera: '8 megapixel',
//             display: 6.76,
//             price: 'PKR 48,000'
//       },
//       {
//             brand: 'Samsung',
//             img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2023/05/Samsung-Galaxy-M14.jpg",
//             model: 'M14',
//             ram: 6,
//             rom: 128,
//             camera: '20 megapixel',
//             frontcamera: '10 megapixel',
//             display: 5.6,
//             price: 'PKR 429,999'
//       },
//      {
//         brand: 'Samsung',
//         img:"https://m.media-amazon.com/images/I/41KRhotx+PL.jpg",
//         model: 'S20',
//         ram: 8,
//         rom: 256,
//         camera: '20 megapixel',
//         frontcamera: '10 megapixel',
//         display: 5.6,
//         price: 'PKR 429,999'
//     },
//     {
//         brand: 'Xiomi',
//         img:"https://images.priceoye.pk/xiaomi-redmi-note-10-pakistan-priceoye-124uk.jpg",
//         model: 'note10',
//         ram: 4,
//         rom: 64,
//         camera: '10 megapixel',
//         frontcamera: '10 megapixel',
//         display: 5.6,
//         price: 'PKR 429,999'
//     },
//     {
//         brand: 'Infinix',
//         img:"https://rakistan.pk/wp-content/uploads/2021/11/infinix-zero-x-pro-pakistan-priceoye-im0ai-500x500-1.webp",
//         model: 'z10',
//         ram: 2,
//         rom: 16,
//         camera: '5 megapixel',
//         frontcamera: '10 megapixel',
//         display: 5.6,
//         price: 'PKR 429,999'
//     },
//     {
//         brand: 'Tecno',
//         img:"https://images.priceoye.pk/tecno-spark-10-pakistan-priceoye-2144l.jpg",
//         model: 'spark10',
//         ram: 12,
//         rom: 512,
//         camera: '25 megapixel',
//         frontcamera: '10 megapixel',
//         display: 5.6,
//         price: 'PKR 429,999'
//     },
//     {
//         brand: 'Iphone',
//         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb7zxjf33D_bOzSqpJdYZtFRS9_d9w2VVHOcAn7HTDtOyONYMoH5Iz1uQQeh2qm17DyA&usqp=CAU",
//         model: '14',
//         ram: 4,
//         rom: 128,
//         camera: '30 megapixel',
//         frontcamera: '10 megapixel',
//         display: 5.6,
//         price: 'PKR 429,999'
//     },
//     {
//         brand: 'Iphone',
//         img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2020/08/iphonex.jpg",
//         model: 'X',
//         ram: 6,
//         rom: 128,
//         camera: '30 megapixel',
//         frontcamera: '10 megapixel',
//         display: 5.6,
//         price: 'PKR 429,999'
//     },
//     {
//         brand: 'Oppo',
//         img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2020/07/oppof15nn-600x600.jpg",
//         model: 'F15',
//         ram: 8,
//         rom: 128,
//         camera: '48+8+2 megapixel',
//         frontcamera: '16 megapixel',
//         display: 6.4,
//         price: 'PKR 40,990'
//     },
//     {
//         brand: 'Vivo',
//         img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2023/05/vivo-Y78.jpg",
//         model: 'y78',
//         ram: 12,
//         rom: 256,
//         camera: '50 +2 megapixel',
//         frontcamera: '8 megapixel',
//         display: 6.76,
//         price: 'PKR 65,999'
//     },
//     {
//         brand: 'Huawei',
//         img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2023/03/Huawei-P60-Pro.jpg",
//         model: 'P60 Pro',
//         ram: 8,
//         rom: 128,
//         camera: '50+ 50+ 64 megapixel',
//         frontcamera: '32 megapixel',
//         display: 6.6,
//         price: 'PKR 164,999'
//     },
//     {
//         brand: 'Nokia',
//         img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2020/09/nkua-600x600.jpg",
//         model: '6.2 Space',
//         ram: 3,
//         rom: 64,
//         camera: '16+18 megapixel',
//         frontcamera: '8 megapixel',
//         display: '6.3 Inch',
//         price: 'PKR 29,999'
//     },
//     {
//         brand: 'I phone',
//         img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2021/07/13-1.jpg",
//         model: '13 Pro',
//         ram: 8,
//         rom: 512,
//         camera: '40 megapixel',
//         frontcamera: '10 megapixel',
//         display: 5.6,
//         price: 'PKR 229,999'
//     },

// ]

// console.log(phone[3].price);
// console.log(phone[1].brand);



// // Loop through the phone array and create HTML elements for each phone
// for (let i = 0; i < phone.length; i++) {
//       const phoneItem = phone[i];
//       console.log(phoneItem.display);
//       newMobile.innerHTML = `
//         <h1 class="head">${phoneItem.brand}</h1>
//         <img src="${phoneItem.img}" class="image">
//         <h2 class="heading">Model: ${phoneItem.model}</h2>
//         <h3>Ram: ${phoneItem.ram} GB</h3>
//         <h3>Rom: ${phoneItem.rom} GB</h3>
//         <h3>Camera: ${phoneItem.camera}</h3>
//         <h3>Front Camera: ${phoneItem.frontcamera}</h3>
//         <h3>Display: ${phoneItem.display} inches</h3>
//         <h3>Price: ${phoneItem.price}</h3>
//         <button class="cart">Add To Cart<i class="fa-solid fa-cart-plus fa-beat-fade"></i></button>
//         <button class="order">Order Now<i class="fa-brands fa-opencart fa-beat-fade"></i></button>
//       `;
    
// }
const getMob = document.getElementById("item")

const phones = [
    {
        brand: 'Samsung',
        img:"https://m.media-amazon.com/images/I/41KRhotx+PL.jpg",
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price:159000,
    },
    {
        brand: 'Xiomi',
        img:"https://images.priceoye.pk/xiaomi-redmi-note-10-pakistan-priceoye-124uk.jpg",
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 31999,
    },
    {
        brand: 'Infinix',
        img:"https://rakistan.pk/wp-content/uploads/2021/11/infinix-zero-x-pro-pakistan-priceoye-im0ai-500x500-1.webp",
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 34999,
    },
    {
        brand: 'Tecno',
        img:"https://images.priceoye.pk/tecno-spark-10-pakistan-priceoye-2144l.jpg",
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 39999 ,
    },
    {
        brand: 'Iphone',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb7zxjf33D_bOzSqpJdYZtFRS9_d9w2VVHOcAn7HTDtOyONYMoH5Iz1uQQeh2qm17DyA&usqp=CAU",
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 234999,
    },
    {
        brand: 'Oppo',
        img:"https://cf.shopee.com.my/file/cfb2a159ee8d06bc3d0a0046ec34d060",
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 35999,
    },
    {
        brand: 'Vivo',
        img:"https://newglacier.pk/wp-content/uploads/2022/09/y20.jpg",
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price:26999 ,
    },
    {
        brand: 'Huawei',
        img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2020/08/HUAWEIP3-600x600.jpg",
        model: 'P30 Pro',
        ram: 8,
        rom: 512,
        camera: '40 megapixel',
        price:26999 ,
    },
    // {
    //     brand: 'Itel',
    //     img:"https://pricetoday.com.pk/wp-content/uploads/2022/04/itel-Vision-3-185x285.webp",
    //     model: 'Vision 3',
    //     ram: 3,
    //     rom: 32,
    //     camera: '8megapixel',
    //     price:22999 ,
    // }

]

//  console.log(phones[1].brand);

for(let i = 0; i<phones.length;i++){
    getMob.innerHTML+=`<div class="main-mob"><h3>${phones[i].brand}</h3>
    <img src="${phones[i].img}" class="image">
    <h4>Model:${phones[i].model}</h4>
    <h4>Ram:${phones[i].ram} Gb</h4>
    <h4>Rom:${phones[i].rom}Gb</h4>
    <h4>Camra:${phones[i].camera}</h4>
    <h4>Price: ${phones[i].price}</h4>
    <button class="cart">Add To Cart<i class="fa-solid fa-cart-plus fa-beat-fade"></i></button>
    <button class="order">Order Now<i class="fa-brands fa-opencart fa-beat-fade"></i></button>
    </div>`
}
    