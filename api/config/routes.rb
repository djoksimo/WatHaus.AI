Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :apartments
      resources :habitants
    end
  end
end
