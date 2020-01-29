module PageObjects
  module Images
    class IndexPage < PageObjects::Document
      path :images

      collection :images, locator: 'table', item_locator: '.js-image_cell', contains: ImageCard do
        def view!
          # TODO
        end
      end

      def add_new_image!
        node.click_on('Click here to upload an image')
        window.change_to(NewPage)
      end

      def showing_image?(url:, tags: nil)
        node.all('.js-image_cell').any? do |image_cell|
          image_src = image_cell.find('#display_image')[:src]
          if tags.present?
            image_tags = image_cell.all('.js-image_tag').map(&:text)
            image_src == url && tags.sort == image_tags.sort
          else
            image_src == url
          end
        end
      end

      def clear_tag_filter!
        # TODO
      end

      def delete(url)
        node.all('.js-image_cell').any? do |image_cell|
          if url == image_cell.find('#display_image')[:src]
            image_cell.find('a', text: 'Delete').click
            yield node.driver.browser.switch_to.alert
          end
        end
      end

      def delete_and_confirm!(url)
        delete(url, &:accept)
        window.change_to(IndexPage)
      end
    end
  end
end
