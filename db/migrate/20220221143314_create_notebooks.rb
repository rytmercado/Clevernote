class CreateNotebooks < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
      t.string :subject, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :notes, :notebook_id
    add_index :notebooks, [:subject, :user_id], unique: true
  end
end
