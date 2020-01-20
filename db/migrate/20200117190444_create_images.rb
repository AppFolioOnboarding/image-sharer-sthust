class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.timestamps
      t.column :url, :string
    end
  end
end
