class AdminsController < ApplicationController
    skip_before_action :authorized_admin
end
