class AddNotebookIdToNotes < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :notebook_id, :integer, null: false
  end
end
