class ImagesController < ApplicationController
  protect_from_forgery with: :exception

  def new; end

  def index
    @images = retrieve_all_images_desc_order(filter: images_tag_param)
  end

  def create
    @image = construct_image_with_tag(image_new_params[:url], image_new_params[:tag_list])
    if @image.valid?
      @image.save!
      flash[:success] = t :image_created_success_message
      redirect_to image_path(id: @image.id)
    else
      render :new
    end
  end

  def show
    @image = Image.find_by(id: params[:id])
  end

  def destroy
    Image.find(params[:id]).destroy!
    flash[:success] = t :image_deleted_success_message
    redirect_to root_path
  end

  private

  def construct_image_with_tag(url, tag_list)
    image = Image.new(url: url)
    image.tag_list.add(tag_list, parse: true)
    image
  end

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
