# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all

demo_user = User.create( email:'demouser@demo.com', password:'password', first_name: 'YourFirstName', last_name: 'YourLastName')

user1 = User.create( email: 'bezukov@ourspace.org', password: 'password', first_name: 'Pierre', last_name: 'Bezukov')
user2 = User.create( email: 'bolkonskya@ourspace.org', password: 'password', first_name: 'Andre', last_name: 'Bolkonsky')
user3 = User.create( email: 'rostovn@ourspace.org', password: 'password', first_name: 'Nikolay', last_name: 'Rostov')
user4 = User.create( email: 'rostovnatalia@ourspace.org', password: 'password', first_name: 'Natalia', last_name: 'Rostov')
user5 = User.create( email: 'napoleon@ourspace.org', password: 'password', first_name: 'Napolean', last_name: 'Bonaparte')
user6 = User.create( email: 'karaginj@ourspace.org', password: 'password', first_name: 'Julia', last_name: 'Karagin')

demopost1 = Post.create( user_id: demo_user.id, poster_id: demo_user.id, body: 'My first Post')
demopost1 = Post.create( user_id: demo_user.id, poster_id: demo_user.id, body: 'My second Post')

post1 = Post.create( user_id: user1.id, poster_id: user1.id, body: 'Wait a minute, I, a bastard, became the primary beneficiary to my fathers will? Im Rich!')
post2 = Post.create( user_id: user1.id, poster_id: user1.id, body: 'I will free my serfs')

comment1 = Comment.create( user_id: user2.id, post_id: demopost1.id, body: 'congrats on your first post')
comment2 = Comment.create( user_id: user2.id, post_id: demopost1.id, body: 'hope to see you post more!')