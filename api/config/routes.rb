Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :apartments
      resources :persons
    end
  end
end
