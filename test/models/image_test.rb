require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  test'missing required url field' do
    invalid_image = Image.new
    refute invalid_image.valid?
  end
end
