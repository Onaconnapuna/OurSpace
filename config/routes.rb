Rails.application.routes.draw do

  get 'api/Users'
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :create, :show, :destroy, :update] do 
      resources :posts, only: [:index]
      resources :friendships, only: [:index]
      resources :background_photos, only: [:create, :update]
      resources :profile_photos, only: [:create, :update]
      resources :friend_requests, only: [:index]
    end
    resources :posts, only: [:show, :create, :destroy] do 
      resources :comments, only: [:index]
    end
    resources :friendships, only: [:create, :destroy]
    resources :friend_requests, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resource :session, only: [:index, :create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
