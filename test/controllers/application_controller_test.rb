require 'test_helper'

class ApplicationControllerTest < ActionDispatch::IntegrationTest
  def test_should_get_index
    get root_path
    assert_response :success
    assert_select '#link_to_image_upload_form', I18n.t(:link_to_image_upload_form)
    assert_select '#link_to_image_upload_form[href=?]', new_images_path
  end
end
