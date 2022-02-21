class Note < ApplicationRecord
    validates :user_id, :title, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :notebook,
        foreign_key: :notebook_id,
        class_name: :Notebook
end
