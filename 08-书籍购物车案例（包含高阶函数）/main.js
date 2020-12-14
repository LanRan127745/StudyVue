const app= new Vue({
    el:"#app",
    data:{
        books:[
            {
                id:1,
                name:'《算法导论》',
                date:'2006-9',
                price:85.00,
                count:1
            },
            {
                id:2,
                name:'《UNIX编程艺术》',
                date:'2006-2',
                price:59.00,
                count:1
            },
            {
                id:3,
                name:'《编程珠玑》',
                date:'2008-10',
                price:20.00,
                count:1
            },
            {
                id:4,
                name:'《山音》',
                date:'2009-10',
                price:19.00,
                count:1
            },
            {
                id:5,
                name:'《白夜行》',
                date:'2005-1',
                price:50.00,
                count:1
            }

        ]
    },
    methods:{
        add(index){

            this.books[index].count++
        },
        sub(index){
            this.books[index].count--
        },
        remove(index){
            this.books.splice(index,1)
        }
    },
    //过滤器：函数
    filters:{
        showPrice(price){
            //toFixed(number) 保留小数个数
        return '￥'+price.toFixed(2)
        }
    },
    computed:{
        totalPrice(){
            let price = 0
/*
            //1.普通的for循环
            for(let i = 0;i<this.books.length;i++)
                price += this.books[i].price*this.books[i].count

            //2.for(let i in this.books)  i在这里返回的是索引值
            for(let i in this.books)
                price += this.books[i].price*this.books[i].count

            //3.for(let i of this.books) i在这里返回的是对象
            for(let i of this.books)
               price += i.price*i.count
*/

           // 4.reduce()
           //  price = this.books.reduce(function(preValue,n){
           //      return preValue+n.price*n.count
           //  },0)

            price = this.books.reduce((preValue,n)=>preValue+n.price*n.count,0)
            return price
        }
    }

})


const nums = [10,2,32,45,6,12,111]
/*
const nums = [10,2,32,45,6,12,111]

//1.filter函数的使用
let newnums = nums.filter(function (n) {
    return n<100
})
console.log(newnums);

//2.map函数的使用
let newnums2 = newnums.map(function (n) {
    return n*2
})
console.log(newnums2);

//3.reduce函数的使用
//reduce作用对数组中所有的内容进行汇总
//preValue表示前一个回调的值，n表示现在数组的值，下面那个0表示第一次调用函数时preValue的值
let total = newnums2.reduce(function (preValue,n) {
   return preValue+n
},0)

//将三个函数一起使用
let t = nums.filter(function (n) {
    return n <50
}).map(function (n) {
    return n*2
}).reduce(function (preValue,n) {
   return preValue+n
},0)
*/
//箭头函数
let to = nums.filter(n=> n<100).map(n=>n*2).reduce((preValue,n)=>preValue+n,0)
console.log(to);
