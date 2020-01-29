module PageObjects
  module Images
    class ShowPage < PageObjects::Document
      path :image
      element :url, locator: '#display_image'
      element :tag_list, locator: '#tags'

      def image_url
        url.node[:src]
      end

      def tags
        tag_list.node.text.split(',').collect(&:strip)
      end

      def delete
        # TODO
        yield node.driver.browser.switch_to.alert
      end

      def delete_and_confirm!
        # TODO
        window.change_to(IndexPage)
      end

      def go_back_to_index!
        node.click_on('Click here to see all images')
        window.change_to(IndexPage)
      end
    end
  end
end
