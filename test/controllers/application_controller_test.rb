require 'test_helper'

class ApplicationControllerTest < ActionDispatch::IntegrationTest
  def test_should_get_index
    get root_path
    assert_response :success
    assert_select '#title', I18n.t(:hello)
  end
end
