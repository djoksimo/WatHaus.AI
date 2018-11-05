module Api
  module V1
    class ApartmentsController < ApplicationController
      # before_action :set_todo, only: [:show, :update, :destroy]

      include Response

      # GET /apartments
      def index
        @apartments = Apartment.all
        json_response(@apartments)
      end

      # POST /apartments
      def create
        if correct_secret_api_key?
          @apartment = Apartment.new(apartment_params)
          if @apartment.save
            render json: {
              status: 'SUCCESS',
              message:'Saved Apartment',
              data:@apartment
            },
            status: :ok
          else
            render json: {
              status: 'ERROR',
              message:'Apartment not saved',
              data: @apartment.errors
              },
              status: :unprocessable_entity
          end
        end
      end

      # GET /apartments/:id
      def show
         @apartment = Apartment.find(params[:id])
         render json: {
           status: 'SUCCESS',
           message:'Loaded Apartment',
           data: @apartment
         },
         status: :ok
      end


      # PATCH /apartment/:id
      def update
        if correct_secret_api_key?
          @apartment = Apartment.find(params[:id])
          if @apartment.update_attributes(apartment_params)
            render json: {status: 'SUCCESS', message:'Updated apartment', data:@apartment},status: :ok
          else
            render json: {
              status: 'ERROR',
               message: 'Apartment not updated',
               data: @apartment.errors
              },
            status: :unprocessable_entity
            head :no_content
          end
        else
          head :unauthorized
        end
      end

      # DELETE /todos/:id
      def destroy
        if correct_secret_api_key?
          @apartment = Apartment.find(params[:id])
          @apartment.destroy
          render json: {
            status: 'SUCCESS',
             message:'Deleted Apartment',
             data: @apartment},
            status: :ok
        else
          head :unauthorized
        end
      end

      def correct_secret_api_key?
        if request.headers['Authorization'] == ENV['SECRET_API_KEY']
          true
        else
          head :unauthorized
          false
        end
      end

      def apartment_params
        # whitelist params
        params.permit(
          :address,
          :latitude,
          :longitude,
          :best_trans_method,
          :total_cost,
          :indoor_features => [],
          :nearby_features => []
        )
      end
    end
  end
end
