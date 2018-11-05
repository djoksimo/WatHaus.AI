module Api
  module V1
    class PersonsController < ApplicationController
      # before_action :set_todo, only: [:show, :update, :destroy]

      include Response

      # GET /persons
      def index
        @persons = person.all
        json_response(@persons)
      end

      # POST /persons
      def create
        if correct_secret_api_key?
          @person = person.new(person_params)
          if @person.save
            render json: {
              status: 'SUCCESS',
              message:'Saved person',
              data:@person
            },
            status: :ok
          else
            render json: {
              status: 'ERROR',
              message:'person not saved',
              data: @person.errors
              },
              status: :unprocessable_entity
          end
        end
      end

      # GET /persons/:id
      def show
         @person = person.find(params[:id])
         render json: {
           status: 'SUCCESS',
           message:'Loaded person',
           data: @person
         },
         status: :ok
      end


      # PATCH /person/:id
      def update
        if correct_secret_api_key?
          @person = person.find(params[:id])
          if @person.update_attributes(person_params)
            render json: {status: 'SUCCESS', message:'Updated person', data:@person},status: :ok
          else
            render json: {
              status: 'ERROR',
               message:'person not updated',
               data:@apartment.errors
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
          @person = person.find(params[:id])
          @person.destroy
          render json: {
            status: 'SUCCESS',
             message:'Deleted person',
             data: @person},
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

      def person_params
        # whitelist params
        params.permit(
          :address,
          :latitude,
          :longitude,
          :best_trans_method,
          :total_cost,
          :indoor_features,
          :nearby_features
        )
      end
    end
  end
end
