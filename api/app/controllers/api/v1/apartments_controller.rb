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
        @apartment = Apartment.create!(apartment_params)
        json_response(@apartment, :created)
      end

      # GET /apartments/:id
      def show
        json_response(@apartment)
      end

      # PATCH /apartment/:id
      def update
        @apartment.update(apartment_params)
        head :no_content
      end

      # DELETE /todos/:id
      def destroy
        @apartment.destroy
        head :no_content
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
        params.permit(:address, :latitude, :longitude, :best_trans_method, :total_cost, :indoor_features, :nearby_features)
      end
    end
  end
end
