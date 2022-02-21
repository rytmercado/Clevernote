class Notebook < ApplicationRecord
    validates :user_id, :subject, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :notes,
        foreign_key: :notebook_id,
        class_name: :Note,
        dependent: :destroy
end
