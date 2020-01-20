class ImagesController < ActionController::Base
  protect_from_forgery with: :exception

  def new; end

  def create
    @image = Image.new(url: image_params[:url])
    if @image.valid?
      @image.save!
      flash[:notice] = t :image_created_success_message
      render :show
    else
      render :new
    end
  end

  private

  def image_params
    params.permit(:url)
  end
end
