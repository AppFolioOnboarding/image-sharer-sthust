require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  def test_should_get_index
    get new_images_path
    assert_response :success
    assert_select '#title', 'Upload an image'
  end

  def test_create_with_missing_url_check_error
    post '/images', params: { images: {} }
    assert_response :success
    assert_select '#title', 'Upload an image'
    assert_select '#errors', 'Url can\'t be blank'
  end

  def test_create_with_valid_url_check_success
    post '/images', params: {
      url: 'https://storage.googleapis.com/hippostcard/p/907658462b9803fc931dec9e8dadd9d4.jpg'
    }
    assert_response :success
    assert_select '#title', 'Viewing image'
    assert_equal 'Image created successfully', flash[:notice]
    assert_select 'img[src=?]', 'https://storage.googleapis.com/hippostcard/p/907658462b9803fc931dec9e8dadd9d4.jpg'
  end
end
