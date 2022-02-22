class StaticPagesController < ApplicationController
  # caches_store :root

  # def index
  #   expires_in 24.hours, :public => true
  # end

  def root 
    expires_in 24.hours, :public => true
  end
end
