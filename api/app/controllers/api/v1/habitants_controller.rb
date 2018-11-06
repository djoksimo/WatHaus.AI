module Api
  module V1
    class HabitantsController < ApplicationController
      # before_action :set_todo, only: [:show, :update, :destroy]

      include Response

      # GET /habitants
      def index
        @habitants = Habitant.all
        json_response(@habitants)
      end

      # POST /habitants
      def create
        if correct_secret_api_key?
          @habitant = Habitant.new(habitant_params)
          if @habitant.save
            render json: {
              status: 'SUCCESS',
              message:'Saved habitant',
              data:@habitant
            },
            status: :ok
          else
            render json: {
              status: 'ERROR',
              message:'habitant not saved',
              data: @habitant.errors
            },
            status: :unprocessable_entity
          end
        end
      end

      # GET /habitants/:id
      def show
         @habitant = Habitant.find(params[:id])
         render json: {
           status: 'SUCCESS',
           message:'Loaded habitant',
           data: @habitant
         },
         status: :ok
      end


      # PATCH /habitant/:id
      def update
        if correct_secret_api_key?
          @habitant = Habitant.find(params[:id])
          if @habitant.update_attributes(habitant_params)
            render json: {
              status: 'SUCCESS',
              message:'Updated habitant',
              data: @habitant
            },status: :ok
          else
            render json: {
              status: 'ERROR',
              message:'habitant not updated',
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
          @habitant = Habitant.find(params[:id])
          @habitant.destroy
          render json: {
            status: 'SUCCESS',
            message:'Deleted habitant',
            data: @habitant
          },
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

      def habitant_params
        # whitelist params
        params.permit(
          :preferred_transportation,
          :satisfaction,
          :num_roomates,
          :reasons => [],
          :bad_experiences => [],
        )
      end
    end
  end
end
