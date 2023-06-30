class DoctorsController < ApplicationController

    
    def index 
        render json: Doctor.all, status: :ok
    end


    
    def show
        render json: Doctor.find(params[:id])
    end
end
