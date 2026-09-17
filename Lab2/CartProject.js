import readline from "readline/promises";
import {writeFile,readFile} from "fs/promises";
import {stdin,stdout} from "process";

// database using file starts
const FILE="product.json";

const getCart= async ()=>{
    const data= await readFile(FILE,"utf-8");
    return JSON.parse(data);
};

const saveCart= async (cart)=>{
    await writeFile(FILE,JSON.stringify(cart,null,2));
};


const addtocart= async (product)=>{
    const cart= await getCart();
    const isFoundCart = cart.find((item)=> item.id === product.id);
    if(isFoundCart){
        isFoundCart.qty+=product.qty;
    }
    else{
        cart.push(product);}
    await saveCart(cart);
    console.log(`${product.name} Added/Updated to cart🛒`);
};

const displayCart=async()=>{
    const cart=await getCart();
    if(cart.length===0){
        console.log('\n🛒 is empty\n');
        return;
    }
    console.table(cart);
    const total = cart.reduce((sum,item)=>sum + item.price*item.qty,0);
    console.log(`Total payable amount Rs. ${total}`);
};

const removeproduct = async(pid) =>{
    const cart= await getCart();
    const isfound=cart.find((item)=>item.id===pid);
    const newproduct=cart.filter((item)=> item.id!==pid);
    let x=cart.length;
    let y=newproduct.length;
    if(x>y){
        await saveCart(newproduct);
    }
    else console.log('product not found⁉️');
}
const updateproduct=async(pid)=>{
    const cart=await getCart();
    const newcart=cart.find((item)=>item.id===pid);

    if(newcart){
        if(newcart.qty==1){
            await removeproduct(pid);
        }
        else{
            
            newcart.qty-=1;
             await saveCart(cart);
        }
    }
   console.log('quantity of product is updated👍');
}
const main= async ()=>{
    let choice;
    const cin=readline.createInterface( {input: stdin , output: stdout});
    do{
    console.log('Welcome to amazon shopping 🛒');
    console.log('1..........Show cart');
    console.log('2..........Add product');
    console.log('3..........Remove product');
    console.log('4..........Update product');
    console.log('5..........Checkout');
   choice= await cin.question('Enter your Choice ');
    switch(Number(choice)){
        case 1:
            // console.log('show cart');
            await displayCart();
            break;
        case 2:
            // console.log('add product');
            const item = await cin.question("Enter id,name,price,qty: ");
            const [id,name,price,qty]=item.split(',').map((p)=>p.trim());
            await addtocart({
                id:Number(id),
                name,
                price: Number(price),
                qty: Number(qty),
            });
            break;
        case 3:
            // console.log('remove product');
            let pid=await cin.question("enter product id :");
            await removeproduct(Number(pid));
            break;
        case 4:
            // console.log('update product');
            let pid2 =await cin.question("Enter the product id:");
            await updateproduct(Number(pid2));
            break;
        case 5:
            console.log('checkout');
            break;
        default:
            console.log('Not Valid');
    }
     
    }while(choice!=5);
    cin.close();
};
main();
