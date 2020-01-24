class ImagesController < ApplicationController
  protect_from_forgery with: :exception

  def new; end

  def index
    @images = retrieve_all_images_desc_order(filter: images_tag_param)
  end

  def create
    @image = Image.new(url: image_new_params[:url])
    @image.tag_list.add(image_new_params[:tag_list], parse: true)
    if @image.valid?
      @image.save!
      flash[:notice] = t :image_created_success_message
      render :show
    else
      render :new
    end
  end

  def destroy
    Image.find(params[:id]).destroy!
    flash[:notice] = t :image_deleted_success_message
    redirect_to root_path
  end

  private

  def image_new_params
    params.permit(:tag_list, :url)
  end

  def images_tag_param
    params.permit(:tag)[:tag]
  end

  def retrieve_all_images_desc_order(filter: nil)
    if filter
      Image.tagged_with(filter).order(created_at: :desc)
    else
      Image.all.order(created_at: :desc)
    end
  end
end
