# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Post.destroy_all
ProfilePhoto.destroy_all
BackgroundPhoto.destroy_all
Friendship.destroy_all
Comment.destroy_all
FriendRequest.destroy_all

demo_user = User.create(email:'bagginsfrodo@ourspace.org', password:'password', first_name: 'Frodo', last_name: 'Baggins')

demo_user_profilepic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/frodo_baggins.jpg')
demo_user.profile_photo.photo.attach(io: demo_user_profilepic, filename: 'frodo_baggins.jpg')
demo_user_backgroundpic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/fellowship.jpg')
demo_user.background_photo.photo.attach(io: demo_user_backgroundpic, filename: 'fellowship.jpg')

user1 = User.create(email: 'gandalf@ourspace.org', password: 'password', first_name: 'Gandalf', last_name: 'the Grey')

user1_profilepic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/gandalf.jpg')
user1.profile_photo.photo.attach(io: user1_profilepic, filename: 'gandalf.jpg')
user1_backgroundpic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/fellowship.jpg')
user1.background_photo.photo.attach(io: user1_backgroundpic, filename: 'fellowship.jpg')

user2 = User.create(email: 'aragorn@ourspace.org', password: 'password', first_name: 'Aragorn', last_name: 'son of Arathorn')
user2_profilepic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/aragorn.jpg')
user2.profile_photo.photo.attach(io: user2_profilepic, filename: 'aragorn.jpg')
user2_backgroundpic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/fellowship.jpg')
user2.background_photo.photo.attach(io: user2_backgroundpic, filename: 'fellowship.jpg')

user3 = User.create(email: 'gamgeesamwise@ourspace.org', password: 'password', first_name: 'Samwise', last_name: 'Gamgee')
user3_profilepic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/samwise_gamgee.jpg')
user3.profile_photo.photo.attach(io: user3_profilepic, filename: 'samwise.jpg')
user3_backgroundpic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/fellowship.jpg')
user3.background_photo.photo.attach(io: user3_backgroundpic, filename: 'fellowship.jpg')

user4 = User.create(email: 'tookperegrin@ourspace.org', password: 'password', first_name: 'Peregrin', last_name: 'Took')
user4_profilepic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/pippin.jpg')
user4.profile_photo.photo.attach(io: user4_profilepic, filename: 'pippin.jpg')
user4_backgroundpic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/fellowship.jpg')
user4.background_photo.photo.attach(io: user4_backgroundpic, filename: 'fellowship.jpg')

user5 = User.create(email: 'brandybuckmerry@ourspace.org', password: 'password', first_name: 'Merry', last_name: 'Brandybuck')
user5_profilepic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/merry.png')
user5.profile_photo.photo.attach(io: user5_profilepic, filename: 'merry.png')
user5_backgroundpic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/fellowship.jpg')
user5.background_photo.photo.attach(io: user5_backgroundpic, filename: 'fellowship.jpg')

user6 = User.create(email: 'smeagol@ourspace.org', password: 'password', first_name: 'Smeagol', last_name: 'or Gollum')
user6_profilepic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/smeagol.jpg')
user6.profile_photo.photo.attach(io: user6_profilepic, filename: 'smeagol.jpg')
user6_backgroundpic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/gollums_cave.jpg')
user6.background_photo.photo.attach(io: user6_backgroundpic, filename: 'gollums_cave.jpg')

user7 = User.create(email: 'legolas@ourspace.org', password: 'password', first_name: 'Legolas', last_name: 'of the Woodland Realm')
user7_profilepic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/legolas.png')
user7.profile_photo.photo.attach(io: user7_profilepic, filename: 'legolas.png')
user7_backgroundpic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/fellowship.jpg')
user7.background_photo.photo.attach(io: user7_backgroundpic, filename: 'fellowship.jpg')

user8 = User.create(email: 'gimli@ourspace.org', password: 'password', first_name: 'Gimli', last_name: 'son of Gloin')
user8_profilepic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/gimili.png')
user8.profile_photo.photo.attach(io: user8_profilepic, filename: 'gimli.png')
user8_backgroundpic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/fellowship.jpg')
user8.background_photo.photo.attach(io: user8_backgroundpic, filename: 'fellowship.jpg')

user9 = User.create(email: 'saruman@ourspace.org', password: 'password', first_name: 'Saruman', last_name: 'the White')
user9_profilepic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/saruman.jpg')
user9.profile_photo.photo.attach(io: user9_profilepic, filename: 'saruman.jpg')
user9_backgroundpic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/isengard.jpg')
user9.background_photo.photo.attach(io: user9_backgroundpic, filename: 'isengard.jpg')

user10 = User.create(email: 'arwen@ourspace.org', password: 'password', first_name: 'Arwen', last_name: 'Undómiel')
user10_profilepic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/arwen.png')
user10.profile_photo.photo.attach(io: user10_profilepic, filename: 'arwen.png')
user10_backgroundpic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/rivendell.png')
user10.background_photo.photo.attach(io: user10_backgroundpic, filename: 'rivendell.png')

user11 = User.create(email: 'galadriel@ourspace.org', password: 'password', first_name: 'Galadriel', last_name: 'of Lothlorien')
user11_profilepic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/galadriel.jpg')
user11.profile_photo.photo.attach(io: user11_profilepic, filename: 'galadriel')
user11_backgroundpic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/lothlorien.jpg')
user11.background_photo.photo.attach(io: user11_backgroundpic, filename: 'lothlorien.jpg')

user12 = User.create(email: 'bagginsbilbo@ourspace.org', password: 'password', first_name: 'Bilbo', last_name: 'Baggins')
user12_profilepic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/bilbo_baggins.jpg')
user12.profile_photo.photo.attach(io: user12_profilepic, filename: 'bilbo_baggins.jpg')
user12_backgroundpic = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/lonely_mountain.jpg')
user12.background_photo.photo.attach(io: user12_backgroundpic, filename: 'lonely_mountain.jpg')

friend_request1 = FriendRequest.create(user_id: user7.id, friend_id: demo_user.id)
friend_request2 = FriendRequest.create(user_id: user8.id, friend_id: demo_user.id)
friend_request3 = FriendRequest.create(user_id: user9.id, friend_id: demo_user.id)
friend_request4 = FriendRequest.create(user_id: user10.id, friend_id: demo_user.id)
friend_request5 = FriendRequest.create(user_id: user11.id, friend_id: demo_user.id)

demopost1 = Post.create(user_id: demo_user.id, poster_id: demo_user.id, body: 'My uncle and I at his 111th birthday!')
demopost1file = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/frodo_bilbo_party.jpg')
demopost1.photo.attach(io: demopost1file , filename: 'frodo_bilbo_party.jpg')
demopost2 = Post.create(user_id: demo_user.id, poster_id: demo_user.id, body: 'I wish the ring had never come to me, I wish none of this had happened')
comment1 = Comment.create(post_id: demopost2.id, user_id: user1.id, body: 'So do all to live to see such times, but it is not for them to decide, all we have to decide is what to do with the time that is given to us')

post1 = Post.create( user_id: user1.id, poster_id: user1.id, body: 'You cannot pass... YOU SHALL NOT PASS')
post1file = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/gandalf_balrog.jpg')
post1.photo.attach(io: post1file, filename:'gandalf_balrog.jpg')

post2 = Post.create(user_id: user4.id, poster_id: user1.id, body: 'Fool of a Took! Do us a favor, throw yourelf in next time and rid us of your stupidity!')

post3 = Post.create(user_id: user1.id, poster_id: user1.id, body: 'A wizard is never late, nor is he early. He arrives precisely when he means to!')

post4 = Post.create(user_id: demo_user.id, poster_id: user2.id, body: 'You have my sword')
comment2 = Comment.create(post_id: post4.id, user_id: user7.id, body: 'And you have my bow')
comment2 = Comment.create(post_id: post4.id, user_id: user8.id, body: 'And my axe!')

post5 = Post.create(user_id: user2.id, poster_id: user2.id, body: 'I do not fear death')

post6 = Post.create(user_id: user2.id, poster_id: user2.id, body: 'I will not let the white city fall')
post6file = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/aragorn_king.jpg')
post6.photo.attach(io: post6file, filename:'aragorn_king.jpg')

post7 = Post.create(user_id: user3.id, poster_id: user3.id, body: 'good time to conquer my arachnophobia')
post7file = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/sam_sheelob.jpg')
post7.photo.attach(io: post7file, filename:'sam_sheelob.jpg')

post8 = Post.create(user_id: user3.id, poster_id: user3.id, body: 'If I take one more step itll be the farthest away from home that Ive ever been')

post9 = Post.create(user_id: user4.id, poster_id: user4.id, body: 'What did i get myself in to')
post9file = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/pippin_denethor.jpg')
post9.photo.attach(io: post9file, filename:'pippin_denethor.jpg')

post10 = Post.create(user_id: user4.id, poster_id: user4.id, body: 'Do I know a Baggins? Sure I do, Frodo Baggins. Hes sitting over there')
comment3 = Comment.create(post_id: post10.id, user_id: demo_user.id, body: 'Pippin NOOO')

post11 = Post.create(user_id: user5.id, poster_id: user5.id, body: 'Welcome, my lords, to Isengard!')
post11file = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/spoils_of_isegard.jpg')
post11.photo.attach(io: post11file, filename:'spoils_of_isengard') 

post12 = Post.create(user_id: user5.id, poster_id: user5.id, body: 'I could go for some longbottom leaf right about now')

post13 = Post.create(user_id: user6.id, poster_id: user6.id, body: 'Mustnt hurt master')
comment3 = Comment.create(post_id: post13.id, user_id: user6.id, body: 'you did it once, you can do it again..')

post14 = Post.create(user_id: user6.id, poster_id: user6.id, body: 'My friend Deagol took me fishing today for my birthday!')
post14file = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/smeagol_deagol.jpg')
post14.photo.attach(io: post14file, filename:'smeagol_deagol')

post15 = Post.create(user_id: user7.id, poster_id: user7.id, body: 'highlight from the battle the other day')
post15file = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/legolas_oliphant.jpg')
post15.photo.attach(io: post15file, filename:'legolas_oliphant.jpg')
comment4 = Comment.create(post_id: post15.id, user_id: user8.id, body: 'That still only counts as one!')

post16 = Post.create(user_id: user7.id, poster_id: user7.id, body: 'THEYRE TAKING THE HOBBITS TO ISEGARD, THEYRE TAKING THE HOBBITS TO ISEGARD,THEYRE TAKING THE HOBBITS TO ISEGARD')

post16 = Post.create(user_id: user7.id, poster_id: user8.id, body: 'Id never thought Id die fighting side by side with an elf')
comment5 = Comment.create(post_id: post16.id, user_id: user7.id, body: 'what about side by side with a friend?')

post17= Post.create(user_id: user8.id, poster_id: user8.id, body: 'Nobody tosses a Dwarf!')

post18= Post.create(user_id: user8.id, poster_id: user8.id, body: 'Certainty of death, small chance of success, what are we waiting for?')

post19= Post.create(user_id: user1.id, poster_id: user9.id, body: 'We must join him Gandalf, we must join with Sauron')
comment6 = Comment.create(post_id: post19.id, user_id: user1.id, body: "Tell me, 'friend,' when did Saruman the Wise abandon reason for madneess")

post20= Post.create(user_id: user9.id, poster_id: user9.id, body: 'A new Power is rising!')

post21= Post.create(user_id: user9.id, poster_id: user9.id, body: 'You withdraw your guard and I will tell you where your doom will be decided')

post22= Post.create(user_id: user2.id, poster_id: user10.id, body: 'Why do you fear the past? You are Isildurs heir, not Isildur himself. You are not bound to his fate.')

post23= Post.create(user_id: user10.id, poster_id: user10.id, body: 'If you want him, come and claim him!')

post24= Post.create(user_id: user10.id, poster_id: user10.id, body: 'Waters of the Misty Mountains, hear the word of power, rush, waters of Bruinen against the Ringwraiths!')
post24file = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/arwen_spell.jpg')
post24.photo.attach(io: post24file, filename:'arwen_spell.jpg')

post25= Post.create(user_id: user11.id, poster_id: user11.id, body: 'Even the smallest person can change the course of the future')

post26= Post.create(user_id: user11.id, poster_id: user11.id, body: 'The power of the three rings has ended, the time has come for the dominion of men')

post27= Post.create(user_id: user12.id, poster_id: user12.id, body: 'The party for my 111th birthday!')
post27file = URI.open('https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/party_bilbo.jpg')
post27.photo.attach(io: post27file, filename:'party_bilbo')

post27= Post.create(user_id: demo_user.id, poster_id: user12.id, body: 'Its a dangerous business, Frodo, going out your door. You step onto the road, and if you dont keep your feet, theres no knowing where you might be swept off to.')

post28= Post.create(user_id: user12.id, poster_id: user12.id, body: 'So comes snow after fire, and even dragons have their ending!')


friend1 = Friendship.create( user_id: demo_user.id, friend_id: user1.id)
friend2 = Friendship.create( user_id: demo_user.id, friend_id: user2.id)
friend3 = Friendship.create( user_id: demo_user.id, friend_id: user3.id)
friend4 = Friendship.create( user_id: demo_user.id, friend_id: user4.id)
friend5 = Friendship.create( user_id: demo_user.id, friend_id: user5.id)
friend6 = Friendship.create( user_id: demo_user.id, friend_id: user6.id)
friend7 = Friendship.create( user_id: demo_user.id, friend_id: user12.id)

friend7 = Friendship.create(user_id: user2.id, friend_id:user3.id)
friend8 = Friendship.create(user_id: user2.id, friend_id:user9.id)
friend9 = Friendship.create(user_id: user2.id, friend_id:user10.id)
friend10 = Friendship.create(user_id: user2.id, friend_id:user7.id)
friend11 = Friendship.create(user_id: user2.id, friend_id:user8.id)

friend12 = Friendship.create(user_id: user1.id, friend_id: user2.id)
friend13 = Friendship.create(user_id: user1.id, friend_id:user9.id)
friend14 = Friendship.create(user_id: user1.id, friend_id:user11.id)

friend15 = Friendship.create(user_id: user3.id, friend_id:user4.id)
friend16 = Friendship.create(user_id: user3.id, friend_id:user5.id)

friend17 = Friendship.create(user_id: user4.id, friend_id:user5.id)
friend18 = Friendship.create(user_id: user4.id, friend_id:user1.id)

friend19 = Friendship.create(user_id: user11.id, friend_id:user9.id)
friend20 = Friendship.create(user_id: user1.id, friend_id:user12.id)
friend21 = Friendship.create(user_id: user4.id, friend_id:user7.id)
friend22 = Friendship.create(user_id: user4.id, friend_id:user8.id)
friend23 = Friendship.create(user_id: user5.id, friend_id:user7.id)
friend24 = Friendship.create(user_id: user5.id, friend_id:user8.id)

















