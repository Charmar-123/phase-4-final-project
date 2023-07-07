class AdminsController < ApplicationController
    before_action :authorized_admin,


    private

        def current_admin
      admin = Admin.find_by(id: session[:admin_id])
        admin
    end  

    def authorized_admin
        render json: {errors: "Not Authorized"}, status: :unauthorized unless current_admin
    end 
end
