const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Hot Drinks' }, 
        { name: 'Cold Drinks' } 
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Caffè Americano',
            description:
                `Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.`,
            image: 'americano.png',
            category: categories[1]._id,
            price: 2.55,
            quantity: 1
        },
        {
            name: 'Cappuccino',
            description:
                `Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.`,
            image: 'cappuccino.png',
            category: categories[1]._id,
            price: 4.55,
            quantity: 1
        },
        {
            name: 'Espresso',
            category: categories[1]._id,
            description:
                `Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.`,
            image: 'espresso.png',
            price: 3.55,
            quantity: 1
        },
        {
            name: 'Caffè Latte',
            category: categories[1]._id,
            description:
                `Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk-forward warm-up.`,
            image: 'latte.png',
            price: 5.00,
            quantity: 1
        },
        {
            name: `Caffè Mocha`,
            category: categories[1]._id,
            description:
                `Our rich, full-bodied espresso combined with bittersweet mocha sauce and steamed milk, then topped with sweetened whipped cream. The classic coffee drink that always sweetly satisfies.`,
            image: 'mocha.png',
            price: 5.00,
            quantity: 1
        },
        {
            name: 'Irish Cream Cold Brew',
            category: categories[0]._id,
            description:
                `Everything and more you ever wanted in a sippable, dreamy holiday drink: Starbucks® Cold Brew swirled with Irish cream syrup, and then topped with a cloud of vanilla sweet cream cold foam and a hint of cocoa.`,
            image: 'irish.png',
            price: 3.55,
            quantity: 1
        },
        {
            name: 'Iced Caramel Macchiato',
            category: categories[0]._id,
            description:
                `We combine our rich, full-bodied espresso with vanilla-flavored syrup, milk and ice, then top it off with a caramel drizzle for an oh-so-sweet finish.`,
            image: 'macchiato.png',
            price: 5.55,
            quantity: 1
        },
        {
            name: 'Dragon Drink',
            category: categories[0]._id,
            description:
                `This tropical-inspired pick-me-up—crafted with a refreshing combination of sweet mango and dragonfruit flavors—is handshaken with creamy coconutmilk, ice and a scoop of real diced dragonfruit.`,
            image: 'dragon.png',
            price: 4.55,
            quantity: 1
        },
        {
            name: 'Green Smoothie',
            category: categories[0]._id,
            description: 'Go green! Juicy pineapple, toasted coconut, vibrant kale and spinach blended with ice and coconut milk, or substitute your favorite milk. Surprisingly delicious: this smoothie will have you craving the next one before your last sip.​',
            image: 'star.png',
            price: 5.00,
            quantity: 1
        },
        {
            name: 'Star Drink',
            category: categories[0]._id,
            description:
                `Starfruit- and kiwi-flavored juice and real kiwi fruit pieces added to coconutmilk and shaken with ice. Summer re-imagined.`,
            image: 'sleepymoon00-360x.png',
            price: 3.99,
            quantity: 1
        },
        
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamela@testmail.com',
        password: 'password12345',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345'
    });

    console.log('users seeded');

    process.exit();
});