class ImagesController < ActionController::Base
  protect_from_forgery with: :exception

  def new; end

  def index
    @images = retrieve_all_images_desc_order
  end

  def create
    @image = Image.new(url: image_params[:url])
    @image.tag_list.add(image_params[:tag_list], parse: true)
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
    params.permit(:url, :tag_list)
  end

  def retrieve_all_images_desc_order
    Image.all.order(created_at: :desc)
  end
end
