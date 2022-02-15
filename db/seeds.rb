# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all
ProfilePhoto.destroy_all
BackgroundPhoto.destroy_all
Friendship.destroy_all
Comment.destroy_all
FriendRequest.destroy_all

demo_user = User.create( email:'demouser@demo.com', password:'password', first_name: 'Pierre', last_name: 'Bezukhov')

user1 = User.create( email: 'bezukov@ourspace.org', password: 'password', first_name: 'Kiril', last_name: 'Bezukhov')
user2 = User.create( email: 'bolkonskya@ourspace.org', password: 'password', first_name: 'Andre', last_name: 'Bolkonsky')
user3 = User.create( email: 'rostovn@ourspace.org', password: 'password', first_name: 'Nikolay', last_name: 'Rostov')
user4 = User.create( email: 'rostovnatalia@ourspace.org', password: 'password', first_name: 'Natalia', last_name: 'Rostov')
user5 = User.create( email: 'napoleon@ourspace.org', password: 'password', first_name: 'Napolean', last_name: 'Bonaparte')
user6 = User.create( email: 'karaginj@ourspace.org', password: 'password', first_name: 'Julia', last_name: 'Karagin')
user7 = User.create( email: 'kuragina@ourspace.org', password: 'password', first_name: 'Anatole', last_name: 'Kuragin')
user8 = User.create( email: 'kuraginv@ourspace.org', password: 'password', first_name: 'Vasili', last_name: 'Kuragin')
user9 = User.create( email: 'kuraginh@ourspace.org', password: 'password', first_name: 'Helene', last_name: 'Kuragin')
user10 = User.create( email: 'platonk@ourspace.org', password: 'password', first_name: 'Platon', last_name: 'Karataev')
user11 = User.create( email: 'pavlovnaa@ourspace.org', password: 'password', first_name: 'Anna', last_name: 'Pavlovna')

friend_request1 = FriendRequest.create(user_id: user7.id, friend_id: demo_user.id)
friend_request2 = FriendRequest.create(user_id: user8.id, friend_id: demo_user.id)
friend_request3 = FriendRequest.create(user_id: user9.id, friend_id: demo_user.id)
friend_request4 = FriendRequest.create(user_id: user10.id, friend_id: demo_user.id)
friend_request5 = FriendRequest.create(user_id: user11.id, friend_id: demo_user.id)

demopost1 = Post.create( user_id: demo_user.id, poster_id: demo_user.id, body: 'My first Post')
demopost1 = Post.create( user_id: demo_user.id, poster_id: demo_user.id, body: 'My second Post')

post1 = Post.create( user_id: user1.id, poster_id: user1.id, body: 'Wait a minute, I, a bastard, became the primary beneficiary to my fathers will? Im Rich!')
post2 = Post.create( user_id: user1.id, poster_id: user1.id, body: 'I will free my serfs')

friend1 = Friendship.create( user_id: demo_user.id, friend_id: user1.id)
friend2 = Friendship.create( user_id: demo_user.id, friend_id: user2.id)
friend3 = Friendship.create( user_id: demo_user.id, friend_id: user3.id)
friend4 = Friendship.create( user_id: demo_user.id, friend_id: user4.id)
friend5 = Friendship.create( user_id: demo_user.id, friend_id: user5.id)
friend6 = Friendship.create( user_id: demo_user.id, friend_id: user6.id)

friend7 = Friendship.create( user_id: user2.id, friend_id:user3.id)

