class Tag < ApplicationRecord
    validates :user_id, :name, presence: true
    validates :name, uniqueness: {scope: :user_id}

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :note_tags,
        foreign_key: :tag_id,
        class_name: :NoteTag,
        dependent: :destroy

    has_many :notes,
        through: :note_tags,
        source: :note

end
