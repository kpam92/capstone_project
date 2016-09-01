class Api::PhotosController < ApplicationController

	def create
		@photo = Photo.new(photo_params)

		if @photo.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end

end
