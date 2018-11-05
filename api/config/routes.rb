Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :apartments
      resources :persons
    end
  end
end

# Prefix Verb   URI Pattern                                                                              Controller#Action
#    api_v1_apartments GET    /api/v1/apartments(.:format)                                                             api/v1/apartments#index
#                      POST   /api/v1/apartments(.:format)                                                             api/v1/apartments#create
#     api_v1_apartment GET    /api/v1/apartments/:id(.:format)                                                         api/v1/apartments#show
#                      PATCH  /api/v1/apartments/:id(.:format)                                                         api/v1/apartments#update
#                      PUT    /api/v1/apartments/:id(.:format)                                                         api/v1/apartments#update
#                      DELETE /api/v1/apartments/:id(.:format)                                                         api/v1/apartments#destroy
#   rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#   rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
# rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create


# api_v1_apartments GET    /api/v1/apartments(.:format)                                                             api/v1/apartments#index
#                        POST   /api/v1/apartments(.:format)                                                             api/v1/apartments#create
#       api_v1_apartment GET    /api/v1/apartments/:id(.:format)                                                         api/v1/apartments#show
#                        PATCH  /api/v1/apartments/:id(.:format)                                                         api/v1/apartments#update
#                        PUT    /api/v1/apartments/:id(.:format)                                                         api/v1/apartments#update
#                        DELETE /api/v1/apartments/:id(.:format)                                                         api/v1/apartments#destroy
#     rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#     rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#   rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create
