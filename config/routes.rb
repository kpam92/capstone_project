Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :photos, only: [:index, :create, :destroy, :show]
    resources :albums, only: [:index, :create, :destroy, :show]
    resources :comments, only: [:index, :create, :destroy, :show]

  end

  root "static_pages#root"
end
