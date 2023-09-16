// const dbconnect=require('./mongodb');

// REad data through mongodb Compass 

// const main=async()=>{
//     let datas=await dbconnect();
//     datas=await datas.find().toArray();
//     console.log(datas);
    
// }
// main();

// INsert in mongodb through node 

// const insert=async ()=>{  
//     const data=await dbconnect();
//     const result = await data.insertMany(
//         [
//             { name: 'pova7', brand: 'pova', price: 890, catogry: 'smart_phone' },
//             {name:'pova4',brand:'pova',price:750,catogry:'phone'},
//             { name: 'pova6', brand: 'pova', price: 985, catogry: 'smart_phone' }

//         ]
//     )
// }
// insert();

// UPDATE are done in mongo compass 

// const Update =async ()=>{
//     const data=await dbconnect();
//     const result=await data.updateOne(
//         {name:'v1919'},{
//             $set:{catogry:'teblet'}
//         }
//     )
//     console.log('update done');
    
// }
// Update()

// DELETE data through in mongo compass 

// const deletedata =async ()=>{
//     const data=await dbconnect();
//     const result=await data.deleteOne(
//         {name:'v1919'}
//     )
//     console.log('delete done');
    
// }
// deletedata();