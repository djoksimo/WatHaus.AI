module Api
  module V1
    class PersonsController < ApplicationController
      # before_action :set_todo, only: [:show, :update, :destroy]

      include Response

      # GET /apartments
      def index
        @persons = Person.all
        json_response(@persons)
      end

      # POST /apartments
      def create
        @person = Person.create!(todo_params)
        json_response(@person, :created)
      end

      # GET /apartments/:id
      def show
        json_response(@person)
      end

      # PATCH /apartment/:id
      def update
        @person.update(todo_params)
        head :no_content
      end

      # DELETE /todos/:id
      def destroy
        @person.destroy
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
        apartment.permit(:address, :latitude, :longitude, :best_trans_method, :total_cost, :indoor_features, :nearby_features)
      end

      def set_apartment
        @person = Person.find(params[:id])
      end
    end
  end
end
