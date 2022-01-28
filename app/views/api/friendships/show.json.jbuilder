# json.set! :friendship do 
#   json.set! :friendOne do 
#     json.extract! @friendship, :id, :user_id, :friend_id 
#   end
#   # json.set! :friendTwo do 
#   #   json.extract! @friendship_requited, :id, :user_id, :friend_id
#   # end
# end

json.extract! @friendship, :id, :user_id, :friend_id