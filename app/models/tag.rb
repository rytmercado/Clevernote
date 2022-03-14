class Tag < ApplicationRecord
    validates :user_id, :name, presence: true
    validates :name, uniqueness: {scope: :user_id}

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

end
