class PhotosController < ApplicationController

  def index
    @photos = Photo.all
  end

  def create
  end

  def show
  end

  def destroy
  end

  private

  def photo_params
    params.require(:photo).permit(:title)
  end

end
