require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  def test_should_get_index
    get new_image_path
    assert_response :success
    assert_select '#title', 'Upload an image'
  end

  def test_index_descending_order
    Image.create(url: 'https://test1', tag_list: 'tag1')
    Image.create(url: 'https://test2', tag_list: 'tag2, tag3')
    get root_path
    assert_response :success
    assert_select '#display_image0[src=?]', 'https://test2'
    assert_select '#display_image1[src=?]', 'https://test1'
    assert_select '.js-image_tag' do |tags|
      assert_equal tags[0].attributes['href'].value, '/images?tag=tag2'
      assert_equal tags[1].attributes['href'].value, '/images?tag=tag3'
      assert_equal tags[2].attributes['href'].value, '/images?tag=tag1'
    end
  end

  def test_index_descending_order_with_tag_filter
    Image.create(url: 'https://test1', tag_list: 'tag1')
    Image.create(url: 'https://test2', tag_list: 'tag1')
    Image.create(url: 'https://test3', tag_list: 'tag2, tag3')
    get '/images?tag=tag1'
    assert_response :success
    assert_select '#display_image0[src=?]', 'https://test2'
    assert_select '#display_image1[src=?]', 'https://test1'
    assert_select '#display_image3[src=?]', 'https://test3', false
    assert_select '.js-image_tag' do |tags|
      assert_equal tags[0].attributes['href'].value, '/images?tag=tag1'
      assert_equal tags[1].attributes['href'].value, '/images?tag=tag1'
    end
  end

  def test_index_image_without_tags
    Image.create(url: 'https://test1')
    get root_path
    assert_response :success
    assert_select '#display_image0[src=?]', 'https://test1'
    assert_select '#tags', false
  end

  def test_create_with_missing_url_check_error
    post '/images', params: { images: {} }
    assert_response :success
    assert_select '#title', 'Upload an image'
    assert_select '#errors', 'Url can\'t be blank'
  end

  def test_create_with_valid_url_check_and_tags_success
    post '/images', params: {
      url: 'https://storage.googleapis.com/hippostcard/p/907658462b9803fc931dec9e8dadd9d4.jpg',
      tag_list: 'tag1, tag2'
    }
    assert_response :success
    assert_select '#title', 'Viewing image'
    assert_equal 'Image created successfully', flash[:notice]
    assert_select 'img[src=?]', 'https://storage.googleapis.com/hippostcard/p/907658462b9803fc931dec9e8dadd9d4.jpg'
    assert_select '#tags', 'tag1, tag2'
  end

  def test_create_with_valid_url_check_no_tags
    post '/images', params: {
      url: 'https://storage.googleapis.com/hippostcard/p/907658462b9803fc931dec9e8dadd9d4.jpg'
    }
    assert_response :success
    assert_select '#title', 'Viewing image'
    assert_equal 'Image created successfully', flash[:notice]
    assert_select 'img[src=?]', 'https://storage.googleapis.com/hippostcard/p/907658462b9803fc931dec9e8dadd9d4.jpg'
    assert_select '#tags', false
  end
end
