module PageObjects
  module Images
    class NewPage < PageObjects::Document
      path :new_image

      form_for :image do
        element :url
        element :tag_list
        element :submit
      end

      def create_image!(url: nil, tags: nil)
        image.url.set url if url.present?
        image.tag_list.set tags if tags.present?
        image.submit.node.click
        window.change_to(ShowPage, NewPage)
      end
    end
  end
end
