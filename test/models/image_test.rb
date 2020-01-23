require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  test'missing required url field' do
    invalid_image = Image.new
    refute invalid_image.valid?
  end

  test 'tags can be added/retrieved' do
    image_with_tag = Image.new(url: 'test1', tag_list: 'tag1')
    assert_equal ['tag1'], image_with_tag.tag_list
  end

  test 'tags can be empty' do
    image_with_empty_tag = Image.new(url: 'test1')
    assert_equal [], image_with_empty_tag.tag_list
  end
end
