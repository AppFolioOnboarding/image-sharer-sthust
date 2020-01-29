module PageObjects
  module Images
    class ImageCard < AePageObjects::Element
      def url
        node.find('#display_image')[:src]
      end

      def tags
        # TODO
      end

      def click_tag!(tag_name)
        node.find('a', text: tag_name).click
        window.change_to(IndexPage)
      end
    end
  end
end
